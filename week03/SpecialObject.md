**Special Object**

> 下标运算（就是使用中括号或者点来做属性访问）或者设置原型跟普通对象不同

- Bound Function

  > bind 后的 function 跟原来的函数相关联

- Array

  > Array 的 length 属性根据最大的下标自动发生变化

- String

  > 为了支持下标运算，String 的正整数属性访问会去字符串里查找

- Arguments

  > arguments 的非负整数型下标属性跟对应的变量联动

- Module Namespace

- Object.prototype

  > 作为所有正常对象的默认原型，不能再给它设置原型