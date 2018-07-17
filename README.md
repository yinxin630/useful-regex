# useful-regex

常用正则表达式大全

## 安装

`npm install --save useful-regex`

## 使用

```js
const UsefulRegex = require('useful-regex');
const isChinese = UsefulRegex.Chinese.test('中文');
```

## 正则列表

|值|描述|
|---|---
|Chinese|中文字符|
|DoubleCharacter|双字节字符|
|Phone|中国大陆手机号 (移动/联通/电信)|
|PhoneYidong|中国移动|
|PhoneLiantong|中国联通|
|PhoneDianxin|中国电信|
|Telephone|固定电话|
|Email|邮箱|
|URI|统一资源标识符|
|URL|统一资源定位符|
|QQ|QQ号码|
|PostalCode|邮政编码|
|IDCard|身份证|
|Integer|整数|
|PositiveInteger|正整数|
|NegtiveInteger|负整数|
|NonPositiveInteger|非正整数|
|NonNegtiveInteger|非负整数|