# 第四周总结

## 第一课	 结构化程序设计

​		浏览器有事件循环，node有事件循环

​		通过object-c中来讲**事件循环**

````objective-c
#import <>#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // var context = new JSContext
        JSContext* context = [[JSContext alloc] init];
        JSValue* result;
        while (true) {
            
            char sourcecode[1024];
            
            scanf("%s", sourcecode);
            NSString* code = [NSString stringWithUTF8String:sourcecode];
            
            // context.evaluateScript('')
            result = [context evaluateScript:code];
        
            // console.log(result.toString());
            NSLog(@"%@", [result toString]);
        }
    }
    return 0;
}
````





````objective-c
#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // var context = new JSContext
        JSContext* context = [[JSContext alloc] init];
        JSValue* result;
        NSString* code = @"new Promise(resolve => resolve()).then(()=>this.a = 3), function(){return this.a};";
        
        result = [context evaluateScript:code];
       
        NSLog(@"%@", [reslut toString]);
        
        result = [result callWithArguments:@[]];
        
        NSLog(@"%@", [reslut toString]);
    }
    return 0;
}
````



````javascript
Task
	new Promise(resolve => resolve()).then(()=>this.a = 3),function(){return this.a};
	this.a=3
````

```objective-c
上面这段对应 	 [const evaluateScript:code];
```



```javascript
Task
	return this.a
```

````objective-c
上面这段对应 [result callWithArguments:@[]];
````



#### 		宏任务 :  一个Task就是一个宏任务 就是一个事件循环 出了JavaScript就是宏任务

#### 		微任务 : 一个微任务就是一个Promise , 他是在js内部的

​	一个script标签内的就是一个宏任务

​	

#### 逗号表达式

逗号永远返回后面的值

```
var x = (1 , 2, 3);
console.log(x);
// 3
```



#### Promise

```javascript
new Promise(resolve => resolve()).then(()=>console.log('1'));
setTimeout(function(){
    console.log('2');
},0);
console.log('3');

运行结果
3
1
undefined 这个地方就是用来区分两个宏任务的地方 
2

new Promise(resolve => resolve()).then(()=>console.log('1'));
setTimeout(function(){
    console.log('2');
},0);
console.log('3'), function(){console.log('aaa')};

运行结果
3
1
ƒ (){console.log('aaa')}
2
```



