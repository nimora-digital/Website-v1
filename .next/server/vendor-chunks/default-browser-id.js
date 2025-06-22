"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/default-browser-id";
exports.ids = ["vendor-chunks/default-browser-id"];
exports.modules = {

/***/ "(rsc)/./node_modules/default-browser-id/index.js":
/*!**************************************************!*\
  !*** ./node_modules/default-browser-id/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultBrowserId)\n/* harmony export */ });\n/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:util */ \"node:util\");\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:process */ \"node:process\");\n/* harmony import */ var node_child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:child_process */ \"node:child_process\");\n\n\n\n\nconst execFileAsync = (0,node_util__WEBPACK_IMPORTED_MODULE_0__.promisify)(node_child_process__WEBPACK_IMPORTED_MODULE_2__.execFile);\n\nasync function defaultBrowserId() {\n\tif (node_process__WEBPACK_IMPORTED_MODULE_1__.platform !== 'darwin') {\n\t\tthrow new Error('macOS only');\n\t}\n\n\tconst {stdout} = await execFileAsync('defaults', ['read', 'com.apple.LaunchServices/com.apple.launchservices.secure', 'LSHandlers']);\n\n\t// `(?!-)` is to prevent matching `LSHandlerRoleAll = \"-\";`.\n\tconst match = /LSHandlerRoleAll = \"(?!-)(?<id>[^\"]+?)\";\\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout);\n\n\treturn match?.groups.id ?? 'com.apple.Safari';\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVmYXVsdC1icm93c2VyLWlkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDRDtBQUNTOztBQUU1QyxzQkFBc0Isb0RBQVMsQ0FBQyx3REFBUTs7QUFFekI7QUFDZixLQUFLLGtEQUFnQjtBQUNyQjtBQUNBOztBQUVBLFFBQVEsUUFBUTs7QUFFaEIsMkRBQTJEO0FBQzNELHdEQUF3RCx3Q0FBd0M7O0FBRWhHO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhbnNlZWhyYS9EZXNrdG9wL0NvZGluZyBQcm9qZWN0cy9OaW1vcmFMVEQvbmltb3JhLWRpZ2l0YWwvbm9kZV9tb2R1bGVzL2RlZmF1bHQtYnJvd3Nlci1pZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb21pc2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge2V4ZWNGaWxlfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuXG5jb25zdCBleGVjRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGV4ZWNGaWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVmYXVsdEJyb3dzZXJJZCgpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtYWNPUyBvbmx5Jyk7XG5cdH1cblxuXHRjb25zdCB7c3Rkb3V0fSA9IGF3YWl0IGV4ZWNGaWxlQXN5bmMoJ2RlZmF1bHRzJywgWydyZWFkJywgJ2NvbS5hcHBsZS5MYXVuY2hTZXJ2aWNlcy9jb20uYXBwbGUubGF1bmNoc2VydmljZXMuc2VjdXJlJywgJ0xTSGFuZGxlcnMnXSk7XG5cblx0Ly8gYCg/IS0pYCBpcyB0byBwcmV2ZW50IG1hdGNoaW5nIGBMU0hhbmRsZXJSb2xlQWxsID0gXCItXCI7YC5cblx0Y29uc3QgbWF0Y2ggPSAvTFNIYW5kbGVyUm9sZUFsbCA9IFwiKD8hLSkoPzxpZD5bXlwiXSs/KVwiO1xccys/TFNIYW5kbGVyVVJMU2NoZW1lID0gKD86aHR0cHxodHRwcyk7Ly5leGVjKHN0ZG91dCk7XG5cblx0cmV0dXJuIG1hdGNoPy5ncm91cHMuaWQgPz8gJ2NvbS5hcHBsZS5TYWZhcmknO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/default-browser-id/index.js\n");

/***/ })

};
;