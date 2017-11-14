(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['useful-regex'] = factory());
}(this, (function () { 'use strict';

var index = {
    // 中文字符
    Chinese: /[\u4e00-\u9fa5]/,
};

return index;

})));
