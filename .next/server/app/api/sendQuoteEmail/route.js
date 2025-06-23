/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sendQuoteEmail/route";
exports.ids = ["app/api/sendQuoteEmail/route"];
exports.modules = {

/***/ "(rsc)/./app/api/sendQuoteEmail/route.ts":
/*!*****************************************!*\
  !*** ./app/api/sendQuoteEmail/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/microsoft-graph-client */ \"(rsc)/./node_modules/@microsoft/microsoft-graph-client/lib/es/src/index.js\");\n/* harmony import */ var _azure_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/identity */ \"(rsc)/./node_modules/@azure/identity/dist/esm/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"(rsc)/./node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { name, email, notes, ...details } = body;\n        const credential = new _azure_identity__WEBPACK_IMPORTED_MODULE_1__.ClientSecretCredential(process.env.OUTLOOK_TENANT_ID, process.env.OUTLOOK_CLIENT_ID, process.env.OUTLOOK_CLIENT_SECRET);\n        const accessToken = await credential.getToken('https://graph.microsoft.com/.default');\n        const client = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_0__.Client.init({\n            authProvider: (done)=>done(null, accessToken?.token || '')\n        });\n        const messageBody = `\nName: ${name}\nEmail: ${email}\nMessage: ${notes}\n\nDetails:\n${JSON.stringify(details, null, 2)}\n    `;\n        const message = {\n            subject: `New Quote Request from ${name}`,\n            body: {\n                contentType: 'Text',\n                content: messageBody\n            },\n            toRecipients: [\n                {\n                    emailAddress: {\n                        address: process.env.OUTLOOK_SENDER\n                    }\n                },\n                {\n                    emailAddress: {\n                        address: email\n                    }\n                }\n            ]\n        };\n        await client.api(`/users/${process.env.OUTLOOK_SENDER}/sendMail`).post({\n            message\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true\n        });\n    } catch (err) {\n        console.error('Email send error:', err);\n        return new next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse('Failed to send email', {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmRRdW90ZUVtYWlsL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQUNGO0FBQ0Q7QUFDOUI7QUFFbkIsZUFBZUcsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsU0FBUyxHQUFHTDtRQUUzQyxNQUFNTSxhQUFhLElBQUlWLG1FQUFzQkEsQ0FDM0NXLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQzdCRixRQUFRQyxHQUFHLENBQUNFLGlCQUFpQixFQUM3QkgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7UUFHbkMsTUFBTUMsY0FBYyxNQUFNTixXQUFXTyxRQUFRLENBQUM7UUFFOUMsTUFBTUMsU0FBU25CLHFFQUFNQSxDQUFDb0IsSUFBSSxDQUFDO1lBQ3pCQyxjQUFjLENBQUNDLE9BQVNBLEtBQUssTUFBTUwsYUFBYU0sU0FBUztRQUMzRDtRQUVBLE1BQU1DLGNBQWMsQ0FBQztNQUNuQixFQUFFakIsS0FBSztPQUNOLEVBQUVDLE1BQU07U0FDTixFQUFFQyxNQUFNOzs7QUFHakIsRUFBRWdCLEtBQUtDLFNBQVMsQ0FBQ2hCLFNBQVMsTUFBTSxHQUFHO0lBQy9CLENBQUM7UUFFRCxNQUFNaUIsVUFBVTtZQUNkQyxTQUFTLENBQUMsdUJBQXVCLEVBQUVyQixNQUFNO1lBQ3pDRixNQUFNO2dCQUNKd0IsYUFBYTtnQkFDYkMsU0FBU047WUFDWDtZQUNBTyxjQUFjO2dCQUNaO29CQUFFQyxjQUFjO3dCQUFFQyxTQUFTckIsUUFBUUMsR0FBRyxDQUFDcUIsY0FBYztvQkFBRTtnQkFBRTtnQkFDekQ7b0JBQUVGLGNBQWM7d0JBQUVDLFNBQVN6QjtvQkFBTTtnQkFBRTthQUNwQztRQUNIO1FBRUEsTUFBTVcsT0FBT2dCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRXZCLFFBQVFDLEdBQUcsQ0FBQ3FCLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRUUsSUFBSSxDQUFDO1lBQUVUO1FBQVE7UUFFakYsT0FBT3pCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRStCLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9DLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkY7UUFDbkMsT0FBTyxJQUFJcEMscURBQVlBLENBQUMsd0JBQXdCO1lBQUV1QyxRQUFRO1FBQUk7SUFDaEU7QUFDRiIsInNvdXJjZXMiOlsiRDpcXERlc2t0b3BcXG5pbW9yYXdlYnNpdGUtbWFzdGVyXFxhcHBcXGFwaVxcc2VuZFF1b3RlRW1haWxcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ0BtaWNyb3NvZnQvbWljcm9zb2Z0LWdyYXBoLWNsaWVudCc7XG5pbXBvcnQgeyBDbGllbnRTZWNyZXRDcmVkZW50aWFsIH0gZnJvbSAnQGF6dXJlL2lkZW50aXR5JztcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbm90ZXMsIC4uLmRldGFpbHMgfSA9IGJvZHk7XG5cbiAgICBjb25zdCBjcmVkZW50aWFsID0gbmV3IENsaWVudFNlY3JldENyZWRlbnRpYWwoXG4gICAgICBwcm9jZXNzLmVudi5PVVRMT09LX1RFTkFOVF9JRCEsXG4gICAgICBwcm9jZXNzLmVudi5PVVRMT09LX0NMSUVOVF9JRCEsXG4gICAgICBwcm9jZXNzLmVudi5PVVRMT09LX0NMSUVOVF9TRUNSRVQhXG4gICAgKTtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgY3JlZGVudGlhbC5nZXRUb2tlbignaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tLy5kZWZhdWx0Jyk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBDbGllbnQuaW5pdCh7XG4gICAgICBhdXRoUHJvdmlkZXI6IChkb25lKSA9PiBkb25lKG51bGwsIGFjY2Vzc1Rva2VuPy50b2tlbiB8fCAnJylcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lc3NhZ2VCb2R5ID0gYFxuTmFtZTogJHtuYW1lfVxuRW1haWw6ICR7ZW1haWx9XG5NZXNzYWdlOiAke25vdGVzfVxuXG5EZXRhaWxzOlxuJHtKU09OLnN0cmluZ2lmeShkZXRhaWxzLCBudWxsLCAyKX1cbiAgICBgO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIHN1YmplY3Q6IGBOZXcgUXVvdGUgUmVxdWVzdCBmcm9tICR7bmFtZX1gLFxuICAgICAgYm9keToge1xuICAgICAgICBjb250ZW50VHlwZTogJ1RleHQnLFxuICAgICAgICBjb250ZW50OiBtZXNzYWdlQm9keSxcbiAgICAgIH0sXG4gICAgICB0b1JlY2lwaWVudHM6IFtcbiAgICAgICAgeyBlbWFpbEFkZHJlc3M6IHsgYWRkcmVzczogcHJvY2Vzcy5lbnYuT1VUTE9PS19TRU5ERVIhIH0gfSxcbiAgICAgICAgeyBlbWFpbEFkZHJlc3M6IHsgYWRkcmVzczogZW1haWwgfSB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgYXdhaXQgY2xpZW50LmFwaShgL3VzZXJzLyR7cHJvY2Vzcy5lbnYuT1VUTE9PS19TRU5ERVJ9L3NlbmRNYWlsYCkucG9zdCh7IG1lc3NhZ2UgfSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFbWFpbCBzZW5kIGVycm9yOicsIGVycik7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ0ZhaWxlZCB0byBzZW5kIGVtYWlsJywgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNsaWVudCIsIkNsaWVudFNlY3JldENyZWRlbnRpYWwiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJuYW1lIiwiZW1haWwiLCJub3RlcyIsImRldGFpbHMiLCJjcmVkZW50aWFsIiwicHJvY2VzcyIsImVudiIsIk9VVExPT0tfVEVOQU5UX0lEIiwiT1VUTE9PS19DTElFTlRfSUQiLCJPVVRMT09LX0NMSUVOVF9TRUNSRVQiLCJhY2Nlc3NUb2tlbiIsImdldFRva2VuIiwiY2xpZW50IiwiaW5pdCIsImF1dGhQcm92aWRlciIsImRvbmUiLCJ0b2tlbiIsIm1lc3NhZ2VCb2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdWJqZWN0IiwiY29udGVudFR5cGUiLCJjb250ZW50IiwidG9SZWNpcGllbnRzIiwiZW1haWxBZGRyZXNzIiwiYWRkcmVzcyIsIk9VVExPT0tfU0VOREVSIiwiYXBpIiwicG9zdCIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sendQuoteEmail/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsendQuoteEmail%2Froute&page=%2Fapi%2FsendQuoteEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendQuoteEmail%2Froute.ts&appDir=D%3A%5CDesktop%5Cnimorawebsite-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CDesktop%5Cnimorawebsite-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsendQuoteEmail%2Froute&page=%2Fapi%2FsendQuoteEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendQuoteEmail%2Froute.ts&appDir=D%3A%5CDesktop%5Cnimorawebsite-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CDesktop%5Cnimorawebsite-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Desktop_nimorawebsite_master_app_api_sendQuoteEmail_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sendQuoteEmail/route.ts */ \"(rsc)/./app/api/sendQuoteEmail/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sendQuoteEmail/route\",\n        pathname: \"/api/sendQuoteEmail\",\n        filename: \"route\",\n        bundlePath: \"app/api/sendQuoteEmail/route\"\n    },\n    resolvedPagePath: \"D:\\\\Desktop\\\\nimorawebsite-master\\\\app\\\\api\\\\sendQuoteEmail\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Desktop_nimorawebsite_master_app_api_sendQuoteEmail_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kUXVvdGVFbWFpbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2VuZFF1b3RlRW1haWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZW5kUXVvdGVFbWFpbCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDRGVza3RvcCU1Q25pbW9yYXdlYnNpdGUtbWFzdGVyJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDRGVza3RvcCU1Q25pbW9yYXdlYnNpdGUtbWFzdGVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcRGVza3RvcFxcXFxuaW1vcmF3ZWJzaXRlLW1hc3RlclxcXFxhcHBcXFxcYXBpXFxcXHNlbmRRdW90ZUVtYWlsXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kUXVvdGVFbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmRRdW90ZUVtYWlsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kUXVvdGVFbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXERlc2t0b3BcXFxcbmltb3Jhd2Vic2l0ZS1tYXN0ZXJcXFxcYXBwXFxcXGFwaVxcXFxzZW5kUXVvdGVFbWFpbFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsendQuoteEmail%2Froute&page=%2Fapi%2FsendQuoteEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendQuoteEmail%2Froute.ts&appDir=D%3A%5CDesktop%5Cnimorawebsite-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CDesktop%5Cnimorawebsite-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:child_process":
/*!*************************************!*\
  !*** external "node:child_process" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:child_process");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:fs/promises":
/*!***********************************!*\
  !*** external "node:fs/promises" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@azure","vendor-chunks/@typespec","vendor-chunks/semver","vendor-chunks/@microsoft","vendor-chunks/jsonwebtoken","vendor-chunks/whatwg-url","vendor-chunks/uuid","vendor-chunks/jws","vendor-chunks/debug","vendor-chunks/tr46","vendor-chunks/https-proxy-agent","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/agent-base","vendor-chunks/tslib","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/supports-color","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/isomorphic-fetch","vendor-chunks/http-proxy-agent","vendor-chunks/has-flag","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsendQuoteEmail%2Froute&page=%2Fapi%2FsendQuoteEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendQuoteEmail%2Froute.ts&appDir=D%3A%5CDesktop%5Cnimorawebsite-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CDesktop%5Cnimorawebsite-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();