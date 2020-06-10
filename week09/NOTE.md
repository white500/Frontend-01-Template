# 第九周

# 重学CSS - 动画与绘制

## Animation

- `@keyframes` : 定义关键帧

  ```
  @keyframes myframe {
    0% { top: 0; transition: top ease }
    50% { top: 30px; transition: top ease-in }
    75% { top: 10px; transition: top ease-out }
    100% { top: 0; transition: top linear }
  }
  ```

- `animation` : 使用动画

  ```
  @keyframes myframe {
    from { background: red; }
    to { background: yellow; }
  }
  
  div { animation: myframe 5s infinite; }
  ```

  - animation-name 时间曲线
  - animation-duration 时长
  - animation-timing-function 时间曲线
  - animation-delay 开始前的延迟
  - animation-iteration-count 播放次数
  - animation-direction 方向

## Transition

- 相比于Animation，Transition可以精细地控制每个属性
- transsition-property 要变换的属性
- transsition-duration 时长
- transsition-timing-function 时间曲线
- transsition-delay 延迟

## timing-function

- 以时间为x轴，以变换属性的百分比为y轴

- 只允许用

  ```
  cubic-bezier
  ```

   

  来定义，包括一个起始点、一个终止点、两个控制点。

  - `cubic-bezier.com`
  - 一般过渡动画使用 `ease` 的曲线，比较平滑，可以在以上网站看效果与属性值

### cubic-bezier

- 一次：两个点的直线路径
- 二次：起始点 -> 控制点 -> 终止点
- 三次/cubic：起始点 -> 控制点1 -> 控制点2 -> 终止点

# 渲染与颜色

## 颜色

- 一束光，400nm-760nm

### RGB

- RGB三原色
  - MCYK：颜料三原色（青、品红、黄）+ 黑

### HSL与HSV

- Hue + Saturation + Lightness/Value

  - 色相+纯度+明度/色值
  - 标准是HSV，Value最大100%为本色，最小0%为黑色

- 语义化颜色

- 用处：渐变变化：

  ```
  background: linear-gradient(to bottom, hsl(${h},95%,54.1%), hsl(${h},95%,84.1%))
  ```

  - 多用于感官上的色彩变化，更为平滑

## 形状

- border
- box-shadow
- border-radius

### SVG

- data uri + svg
  - `data:image/svg+xml,`
  - 可以直接放在image标签的src里，类似于base64.
- 让CSS去做样式，图形交给SVG。
- 兼容性好、开发友好：大多数设计软件可以直接转SVG

# HTML的定义：XML与SGML

- SGML

  - 使用DTD定义：`http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd`

- XML

  - 使用namespace：`http://www.w3.org/1999/xhtml`

- 几个重要实体：HTML不允许出现，必须用转义

  - ```
    &nbsp
    ```

    : no-break space = non-breaking space

    - 会产生排版的问题，并不是空格替代品

  - `&quot`

  - `&amp`

  - `&lt &gt`

# HTML标签 - 语义

- aside：所有非内容主体的部分
- main：内容主体部分
  - article、header、footer
    - hgroup标题
      - h1-h5
    - 无语义：div、span
    - 段落：p
    - 缩写：abbr
    - 导航/菜单：nav
    - 列表：ul/ol li
    - 章节：section
      - h1
    - 预先排版好的文字：pre
    - 示例：samp
    - 独立的引用或说明单元：figure
      - img、code、table
      - figcaption
    - 定义：dfn
    - 定义列表：dl、dd、dt
    - 引用的文章标题：cite
    - 引用的内容：quot
    - 时间：time
    - 作者的联系地址：address

> hr: 故事走向或话题的转变

# HTML语法

## 合法元素

- Element: `..`
- Text
- Comment
- DocumentType: ``
- ProcessingInstruction: ``
- CDATA: ``

## 字符引用

- `¡`
- `&`
- `<`
- `"`

# DOM

## Node

- Element
  - HTMLElement
  - SVGElement
- Document
- CharacterData
  - Text
  - Comment
  - ProcessingInstruction
- DocumentFragment
- DocumentType

## 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

## 修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild

> 操作dom时不会进行复制，如：将一个元素从原位置移到其他位置，只需插入即可，无需删除原位置。 dom的操作是实时变化的。

## 高级操作

- compareDocumentPosition：比较两个节点的关系
- contains
- isEqualNode
- isSameNode
- cloneNode：传入true时连同子元素做深拷贝

# DOM Events

- ```
  target.addEventListener(eventType, listener, useCapture);
  ```

  - eventType: 时间类型的字符串
  - listener：函数 or 实现EventListener接口的对象
  - useCapture：
    - `true`: 捕获型事件，当触发了多个元素的事件时，从外向内挨个执行
    - `false`: 先从外向内捕获，再从内向外冒泡