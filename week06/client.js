const net = require('net');
const parser = require('./parser.js')

class Request {
	constructor(options) {
		this.method = options.method || 'GET';
		this.host = options.host;
		this.port = options.port || 80;
		this.path = options.path || '/';
		this.headers = options.headers || {};
		this.body = options.body || {};

		if (!this.headers['Content-Type']) {
			this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		}

		if (this.headers['Content-Type'] === 'application/json') {
			this.bodyText = JSON.stringify(this.body);
		} else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
			this.bodyText = Object.entries(this.body)
				.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
		}
		this.headers['Content-Length'] = this.bodyText.length;
	}

	toString() {
		return [
			`${this.method} ${this.path} HTTP/1.1`,
			`${Object.entries(this.headers).map(([k, v]) => `${k}: ${v}`).join('\r\n')}`,
			'',
			`${this.bodyText}`
		].join('\r\n');
	}

	send(connection) {
		return new Promise((resolve, reject) => {
			if (connection) {
				connection.write(this.toString());
			} else {
				connection = net.createConnection({
					host: this.host,
					port: this.port
				}, () => {
					connection.write(this.toString());
				})
				connection.on('data', (data) => {
					const parser = new ResponseParser();
					parser.receive(data.toString());
					if (parser.isFinished) {
						console.log(parser.response);
					}
					connection.end();
				});
				connection.on('error', (err) => {
					reject(err);
				});
				connection.on('end', () => {
					console.log('已从服务器断开');
				});
			}
		})
	}
}

class Response {

}

class ResponseParser {
	constructor() {
		this.WAITING_STATUS_LINE = 0;
		this.WAITING_STATUS_LINE_END = 1;
		this.WAITING_HEADER_NAME = 2;
		this.WAITING_HEADER_NAME_END = 3;
		this.WAITING_HEADER_SPACE = 4;
		this.WAITING_HEADER_VALUE = 5;
		this.WAITING_HEADER_LINE_END = 6;
		this.WAITING_HEADER_BLOCK_END = 7;
		this.WAITING_BODY = 8;

		this.current = this.WAITING_STATUS_LINE;
		this.statusLine = '';
		this.headers = {};
		this.headerName = '';
		this.headerValue = '';

		this.bodyParser = null;
	}

	get isFinished() {
		return this.bodyParser && this.bodyParser.isFinished
	}

	get response() {
		this.statusLine.match(/^HTTP\/1\.1 ([1-5]\d{2}) (\w+)/);
		return {
			statusCode: RegExp.$1,
			statusTxet: RegExp.$2,
			headers: this.headers,
			body: this.bodyParser.content.join('')
		}
	}

	receive(string) {
		for (let i = 0; i < string.length; i++) {
			this.receiveChar(string.charAt(i));
		}
	}

	receiveChar(char) {
		if (this.current === this.WAITING_STATUS_LINE) {
			if (char === '\r') {
				this.current = this.WAITING_STATUS_LINE_END;
			} else {
				this.statusLine += char;
			}
		} else if (this.current === this.WAITING_STATUS_LINE_END) {
			this.current = this.WAITING_HEADER_NAME;
		} else if (this.current === this.WAITING_HEADER_NAME) {
			if (char === '\r') {
				this.current = this.WAITING_HEADER_BLOCK_END
			} else if (char === ':') {
				this.current = this.WAITING_HEADER_SPACE;
			} else {
				this.headerName += char;
			}
		} else if (this.current === this.WAITING_HEADER_SPACE) {
			this.current = this.WAITING_HEADER_VALUE
		} else if (this.current === this.WAITING_HEADER_VALUE) {
			if (char === '\r') {
				this.current = this.WAITING_HEADER_LINE_END;
				this.headers[this.headerName] = this.headerValue;
				this.headerName = '';
				this.headerValue = '';
			} else {
				this.headerValue += char;
			}
		} else if (this.current === this.WAITING_HEADER_LINE_END) {
			this.current = this.WAITING_HEADER_NAME
		} else if (this.current === this.WAITING_HEADER_BLOCK_END) {
			this.current = this.WAITING_BODY
			if (this.headers['Transfer-Encoding'] === 'chunked') {
				this.bodyParser = new ChunkedBodyParser()
			}
		} else if (this.current === this.WAITING_BODY) {
			this.bodyParser.receiveChar(char)
		}
	}
}

class ChunkedBodyParser {
	constructor() {
		this.WAITING_LENGTH = 0;
		this.WAITING_LENGTH_LINE_END = 1;
		this.READING_TRUNK = 2;
		this.WAITING_NEW_LINE = 3;
		this.WAITING_NEW_LINE_END = 4;
		this.length = 0;
		this.content = [];
		this.isFinished = false;
		this.current = this.WAITING_LENGTH;
	}
	receiveChar(char) {
		if (this.current === this.WAITING_LENGTH) {
			if (char === '\r') {
				if (this.length === 0) {
					// console.log(this.content);
					this.isFinished = true;
				}
				this.current = this.WAITING_LENGTH_LINE_END;
			} else {
				this.length *= 16;
				this.length += parseInt(char, 16);
				//this.length += char.charCodeAt(0) - '0'.charCodeAt(0); //Number(char);
			}
		} else if (this.current === this.WAITING_LENGTH_LINE_END) {
			if (char === '\n') {
				this.current = this.READING_TRUNK;
			}
		} else if (this.current === this.READING_TRUNK) {
			this.content.push(char);
			this.length--;
			if (this.length === 0) {
				this.current = this.WAITING_NEW_LINE;
			}
		} else if (this.current === this.WAITING_NEW_LINE) {
			if (char === '\r') {
				this.current = this.WAITING_NEW_LINE_END;
			}
		} else if (this.current === this.WAITING_NEW_LINE_END) {
			if (char === '\n') {
				this.current = this.WAITING_LENGTH;
			}
		}
	}
}

// 发送一个请求
void async function() {
	const request = new Request({
		method: 'POST',
		host: '127.0.0.1',
		port: 8099,
		headers: {
			'X-Foo2': 'customed'
		},
		body: {
			name: 'heye'
		}
	});

	let response = await request.send();

	let dom = parser.parseHTML(response.body)
	console.log(dom)
}();