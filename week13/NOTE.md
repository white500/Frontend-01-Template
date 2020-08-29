# 十三周总结

## 二、组件化理论基础

### 对象

- Properties 属性 
- Methods 方法
- Inherit 继承关系

### 组件

- Properties 属性 
- Methods 方法
- Inherit 继承关系
- Attribute
- Config & State
- Event 
- Lifecycle
- Children

Attribute vs Property

Attribute 强调描述性 

Property 强调从属关系

Attribute 可以在 html 和 js进行设置  <my-component attribute="mmm"> myComponent.attribute = 'mmmm'

Property 只能在js中进行设置  Property.a = 'value'

**a.href 'http://m.taobao.com'  这个 URL 是被resolve过的结果**

**a.getAttribute('href')  '//m.taobao.com' 跟html完全一致**

### 如何设计组件状态

| Markup set | JS set | JS Change | User Input Change |           |
| ---------- | ------ | --------- | ----------------- | --------- |
| ×          | √      | √         | ？                | property  |
| √          | √      | √         | ？                | attribute |
| ×          | ×      | ×         | √                 | state     |
| ×          | √      | ×         | ×                 | config    |



react 是不分 Attribute 和 Property 的