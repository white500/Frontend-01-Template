# 题目：使用正则匹配 Number 直接量

### 参考资料： Ecma262  ------   **11.8.3 Numeric Literals**

**以下为抄袭。。 确实不会写 就抄了别人的看看 但是还是不能完全理解！！！ 抱歉了 老师，我确实菜**

### NumericLiteral ::

```
/^[-\+]?(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
```

- DecimalLiteral
- BinaryIntegerLiteral
- OctalIntegerLiteral
- HexIntegerLiteral

```
/^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?d+)?$/
```

### DecimalLiteral ::

- DecimalIntegerLiteral . DecimalDigitsopt ExponentPartopt
- .DecimalDigits ExponentPartopt DecimalIntegerLiteral
- ExponentPartopt

```
/^0|[1-9]\d*$/
```

### DecimalIntegerLiteral ::

- 0
- NonZeroDigit DecimalDigitsopt

### DecimalDigits ::

- DecimalDigit
- DecimalDigits DecimalDigit

### DecimalDigit :: one of

0 1 2 3 4 5 6 7 8 9

```
/[0-9]$/
```

### NonZeroDigit :: one of

1 2 3 4 5 6 7 8 9

```
/[1-9]$
```

### ExponentPart ::

ExponentIndicator SignedInteger

### ExponentIndicator :: one of

e E

### SignedInteger ::

DecimalDigits

- - DecimalDigits
- - DecimalDigits

### BinaryIntegerLiteral ::

- 0b BinaryDigits
- 0B BinaryDigits

```
/^0[bB][01]+$
```

### BinaryDigits ::

- BinaryDigit
- BinaryDigits BinaryDigit

### BinaryDigit :: one of

0 1

### OctalIntegerLiteral ::

- 0o OctalDigits
- 0O OctalDigits

```
/^0[oO][0-7]+$/
```

### OctalDigits ::

- OctalDigit
- OctalDigits OctalDigit

### OctalDigit :: one of

0 1 2 3 4 5 6 7

### HexIntegerLiteral ::

0x HexDigits 0X HexDigits

```
/^0[xX][0-9a-fa-f]+$/
```

### HexDigits ::

HexDigit HexDigits HexDigit

### HexDigit :: one of

0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

```
/[0-9a-fA-F]+$/
```