"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bundle-name";
exports.ids = ["vendor-chunks/bundle-name"];
exports.modules = {

/***/ "(rsc)/./node_modules/bundle-name/index.js":
/*!*******************************************!*\
  !*** ./node_modules/bundle-name/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bundleName)\n/* harmony export */ });\n/* harmony import */ var run_applescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! run-applescript */ \"(rsc)/./node_modules/run-applescript/index.js\");\n\n\nasync function bundleName(bundleId) {\n\treturn (0,run_applescript__WEBPACK_IMPORTED_MODULE_0__.runAppleScript)(`tell application \"Finder\" to set app_path to application file id \"${bundleId}\" as string\\ntell application \"System Events\" to get value of property list item \"CFBundleName\" of property list file (app_path & \":Contents:Info.plist\")`);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnVuZGxlLW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7O0FBRWhDO0FBQ2YsUUFBUSwrREFBYyxzRUFBc0UsU0FBUztBQUNyRyIsInNvdXJjZXMiOlsiL1VzZXJzL2tpcmFuc2VlaHJhL0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL05pbW9yYUxURC9uaW1vcmEtZGlnaXRhbC9ub2RlX21vZHVsZXMvYnVuZGxlLW5hbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtydW5BcHBsZVNjcmlwdH0gZnJvbSAncnVuLWFwcGxlc2NyaXB0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYnVuZGxlTmFtZShidW5kbGVJZCkge1xuXHRyZXR1cm4gcnVuQXBwbGVTY3JpcHQoYHRlbGwgYXBwbGljYXRpb24gXCJGaW5kZXJcIiB0byBzZXQgYXBwX3BhdGggdG8gYXBwbGljYXRpb24gZmlsZSBpZCBcIiR7YnVuZGxlSWR9XCIgYXMgc3RyaW5nXFxudGVsbCBhcHBsaWNhdGlvbiBcIlN5c3RlbSBFdmVudHNcIiB0byBnZXQgdmFsdWUgb2YgcHJvcGVydHkgbGlzdCBpdGVtIFwiQ0ZCdW5kbGVOYW1lXCIgb2YgcHJvcGVydHkgbGlzdCBmaWxlIChhcHBfcGF0aCAmIFwiOkNvbnRlbnRzOkluZm8ucGxpc3RcIilgKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/bundle-name/index.js\n");

/***/ })

};
;