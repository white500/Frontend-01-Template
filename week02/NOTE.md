# 第二周总结

### 第一课、 编程语言通识

#### 	语言按语法分类：

- 非形式语言
  - 中文 、英文

- 形式语言（[乔姆斯基谱系](https://zh.wikipedia.org/wiki/乔姆斯基谱系)）：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。
- 它包括四个层次：
  - 0- 型文法（无限制文法或短语结构文法）包括所有的文法。
  - 1- 型文法（上下文相关文法）生成上下文相关语言。
  - 2- 型文法（上下文无关文法）生成上下文无关语言。
  - 3- 型文法（正规文法）生成正则语言。

#### 产生式 ( Backus Normal Form ) :

- 用尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合机构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- `*`表示重复多次
- `|`表示或
- `+`表示至少一次

````
加法：
<Number> = "0" | "1" | "2" | ..... | "9"
<DecimalNumber> = "0" | ("1" | "2" | .... | "9")

<Expression> = <DecimalNumber> | <Expression> "+" <DecimalNumber>

四则运算：
<PrimaryExpression> = <DecimalNumber> |
	"(" <LogicalExpression> ")"

<MultiplicativeExpression> = <DecimalNumber> | 
	<MultiplicativeExpression> "*" <DecimalNumber> |
	<MultiplicativeExpression> "/" <DecimalNumber>

<AdditiveExpression> = <MultiplicativeExpression> | 
	<AdditiveExpression> "+" <MultiplicativeExpression> |
	<AdditiveExpression> "-" <MultiplicativeExpression>


<LogicalExpression> = <AdditiveExpression> | 
	<LogicalExpression> "||" <AdditiveExpression> |
	<LogicalExpression> "&&" <AdditiveExpression> 

````

#### 通过产生式理解乔姆斯基谱系

​	0- 型文法（无限制文法或短语结构文法）包括所有的文法。

​		?::=?

​	1- 型文法（上下文相关文法）生成上下文相关语言。

​		?<A>?::=?<B>?

​	2- 型文法（上下文无关文法）生成上下文无关语言。

​		<A>::=?

​	3- 型文法（正规文法）生成正则语言。

​		<A>::=<A>?

​		<A>::=?<A> 这个是不对的

#### 其他产生式 js

``EBNF ABNF Customized ``

````
AdditiveExpression
	MultiplicativeExpression
	AdditiveExpression + MultiplicativeExpression
	AdditiveExpression - MultiplicativeExpression 
	通过符号加粗来表示终结符
	词法定义用 ::
	语法定义用 ：
````

最顶层结构 script module 从pdf上  

#### 图灵完备性

​	命令式 ----- 图灵机

​		goto

​		if 和 while

​	声明式 ----- lambda

​		递归

#### 动态与静态

- 动态：
  - 在用户的设备/在线服务上
  - 产品实际运行时
  - Runtime
- 静态：
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

#### 类型系统

​	动态类型系统与静态类型系统

​	强类型：非隐式转化

​	弱类型：隐式转化

​	c++是弱类型

​	复合类型

​		结构体

​		函数签名

​	子类型

​		逆变/协变

#### 语法-》语义-》运行时

### 第二课、词法、类型

#### 	Unicode :中文：万国码、国际码、统一码、单一码。是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。

- https://home.unicode.org/
- https://www.fileformat.info/info/unicode/

前128个是基础

#### 	Js 语法结构

````
InputElement
	WhiteSpace
	LineTerminator
	Comment
	Token
		Punctuator
		IdentifierName
			keywords
			Identifier
			Future reserved Keywords (预留的关键字enum)
		Literal
````

#### Types

Number

- IEEE 754 Double Float
  - Sign (1)
  - Exponent (11)
  - Fraction (52)

String

- Character
- Code Point
- Encoding



​	