# 第十周

### Range

- Range API 也是一个DOM API
- 可以做精细操作
- Range的API
  - setStart 设置起点
  - setEnd 设置终点
  - setStartBefore
  - setEndBefore
  - setStartAfter
  - setEndAfter
  - selectNode
  - selectNodeContents
  - extractContents 将选中的部分切下来生成一个fragment
  - insertNode 可以在range中插入一个节点
- document.getSelection().getRangeAt(0) 可以获取Range

### CSSOM

- document.styleSheets 获取所有cssom

- document.styleSheets[index].cssRules 获取某个样式表下所有的css规则

- document.styleSheets[index].insertRule('p {color:pink;}',0) 插入一条css规则并指定其序列号

- document.styleSheets[index].removeRule(index) 按序列号删除某条规则

- getComputedStyle(elt, pseudoElt) 可以获取伪元素()

- RULE

  - CHARSET_RULE
  - FONT_FACE_RULE
  - IMPORT_RULE
  - KEYFRAMES_RULE
  - KEYFRAME_RULE
  - MEDIA_RULE
  - NAMESPACE_RULE
  - PAGE_RULE
  - STYLE_RULE
    - selectorText String
    - style KV对
  - SUPPORTS_RULE

  ### Other

  - inline 元素会产生多个盒