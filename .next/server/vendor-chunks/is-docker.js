"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-docker";
exports.ids = ["vendor-chunks/is-docker"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-docker/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-docker/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isDocker)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n\n\nlet isDockerCached;\n\nfunction hasDockerEnv() {\n\ttry {\n\t\tnode_fs__WEBPACK_IMPORTED_MODULE_0__.statSync('/.dockerenv');\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nfunction hasDockerCGroup() {\n\ttry {\n\t\treturn node_fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nfunction isDocker() {\n\t// TODO: Use `??=` when targeting Node.js 16.\n\tif (isDockerCached === undefined) {\n\t\tisDockerCached = hasDockerEnv() || hasDockerCGroup();\n\t}\n\n\treturn isDockerCached;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtZG9ja2VyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBVztBQUNiO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxpREFBZTtBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2tpcmFuc2VlaHJhL0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL05pbW9yYUxURC9uaW1vcmEtZGlnaXRhbC9ub2RlX21vZHVsZXMvaXMtZG9ja2VyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcblxubGV0IGlzRG9ja2VyQ2FjaGVkO1xuXG5mdW5jdGlvbiBoYXNEb2NrZXJFbnYoKSB7XG5cdHRyeSB7XG5cdFx0ZnMuc3RhdFN5bmMoJy8uZG9ja2VyZW52Jyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNEb2NrZXJDR3JvdXAoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYygnL3Byb2Mvc2VsZi9jZ3JvdXAnLCAndXRmOCcpLmluY2x1ZGVzKCdkb2NrZXInKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRG9ja2VyKCkge1xuXHQvLyBUT0RPOiBVc2UgYD8/PWAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxNi5cblx0aWYgKGlzRG9ja2VyQ2FjaGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRpc0RvY2tlckNhY2hlZCA9IGhhc0RvY2tlckVudigpIHx8IGhhc0RvY2tlckNHcm91cCgpO1xuXHR9XG5cblx0cmV0dXJuIGlzRG9ja2VyQ2FjaGVkO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-docker/index.js\n");

/***/ })

};
;