# 第八周
选择器语法
简单选择器
div svg|a (命名空间下的选择器)
.cls
#id
[attr=value]
:hover
::before
复合选择器
由简单选择器无缝（空格）连接的
*或div必须写在前面
复杂选择器
复合选择器由 空格、>、 ~、+、|| 连接组成复杂选择器 （复合选择器之间有父子/子孙关系）
CSS优先级
优先级四元组
[内联选择器个数，id选择器个数，class选择器/属性选择器个数，标签选择器个数]，左边权重更高；
:not()不参与优先级计算
伪类
链接/行为
:any-link
:link :visited
:hover
:active
:focus
:target
数结构
:empty
:nth-child()
:nth-last-child()
:first-child :last-child :only-child
逻辑类
:not伪类
:where :has
Tips
a不加href属性就不是超链接
:nth-last-child()、:last-child、 :only-child会导致回溯，不推荐用
伪元素
<::before/>、<:after/>

<::first-letter><:first-letter/>

<::first-line><:first-line/>

first-line可用属性

font系列
color系列
background
word-spacing
Letter-spacing
Text-decoration
text-transform
Line-height
First-letter可用属性

ont系列
color系列
background
word-spacing
Letter-spacing
Text-decoration
text-transform
Line-height
float
vertical-align
盒模型属性：margin、padding、border







## BFC（块级格式上下文）

- 什么情况会产生BFC
  - 能容纳正常流的元素都会产生BFC，除overflow：visible外；
- Block-level boxes：flex、table、grid、block
  - 表示可以被放入bfc
- block containers: block、inline-block
  - 表示可以容纳bfc
- block boxes：block
  - block-level && block-container
  - block box 如果 overflow 是 visible， 那么就跟父bfc合并

## margin折叠

- 边距折叠只会发生在一个BFC内的上下方向;
- BFC与BFC之间不会产生边距折叠。