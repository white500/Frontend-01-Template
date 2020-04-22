# 题目：用正则匹配 String 直接量

### 参考： ecma262 ------- **11.8.4 String Literals**

**以下为抄袭。。 确实不会写 就抄了别人的看看 但是还是不能完全理解抱歉了 老师，我确实菜**

```
/^['"\\bfnrtv/dxu]$|^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/
```

### StringLiteral ::

- " DoubleStringCharactersopt " '
- SingleStringCharactersopt '

### DoubleStringCharacters ::

DoubleStringCharacter DoubleStringCharactersopt

### SingleStringCharacters ::

SingleStringCharacter SingleStringCharactersopt

### DoubleStringCharacter ::

- SourceCharacter but not one of " or \ or LineTerminator
- <LS>
- <PS>
- \ EscapeSequence
- LineContinuation

### SingleStringCharacter ::

- SourceCharacter but not one of ' or \ or LineTerminator
- <LS>
- <PS>
- \ EscapeSequence
- LineContinuation

### LineContinuation ::

\ LineTerminatorSequence

### EscapeSequence ::

- CharacterEscapeSequence
- 0 [lookahead ∉ DecimalDigit]
- HexEscapeSequence
- UnicodeEscapeSequence

### CharacterEscapeSequence ::

- SingleEscapeCharacter
- NonEscapeCharacter

### SingleEscapeCharacter :: one of

' " \ b f n r t v

```
/^['"\\bfnrtv]$/
```

### NonEscapeCharacter ::

SourceCharacter but not one of EscapeCharacter or LineTerminator

### EscapeCharacter ::

- SingleEscapeCharacter
- DecimalDigit
- x
- u

```
/^['"\\bfnrtv/dxu]$/
```

### HexEscapeSequence ::

x HexDigit HexDigit

```
/^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/
```

### UnicodeEscapeSequence ::

- u Hex4Digits

```
/[0-9a-fA-F]{4}$/
```

- u{ CodePoint }

```
/^\u{0}-\u{10FFFF}$/
```

### Hex4Digits ::

HexDigit HexDigit

### HexDigit :: one of

0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

```
/[0-9a-fA-F]+$/
```