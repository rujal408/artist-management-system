"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/token */ \"(middleware)/./src/utils/token.ts\");\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(request) {\n    const t = await (0,_utils_token__WEBPACK_IMPORTED_MODULE_1__.getToken)();\n    console.log({\n        t\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/login\",\n        \"/register-user\",\n        \"/dashboard\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUVGO0FBRXpDLDZCQUFlLDBDQUFnQkUsT0FBb0I7SUFDL0MsTUFBTUMsSUFBSSxNQUFNRixzREFBUUE7SUFDeEJHLFFBQVFDLEdBQUcsQ0FBQztRQUFDRjtJQUFDO0lBQ2QsT0FBT0gscURBQVlBLENBQUNNLElBQUk7QUFDNUI7QUFFQSwyQ0FBMkM7QUFDcEMsTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO1FBQVU7UUFBa0I7S0FBYTtBQUNyRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tIFwiLi91dGlscy90b2tlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICBjb25zdCB0ID0gYXdhaXQgZ2V0VG9rZW4oKVxyXG4gICAgY29uc29sZS5sb2coe3R9KVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcclxufVxyXG5cclxuLy8gU2VlIFwiTWF0Y2hpbmcgUGF0aHNcIiBiZWxvdyB0byBsZWFybiBtb3JlXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1wiL2xvZ2luXCIsIFwiL3JlZ2lzdGVyLXVzZXJcIiwgXCIvZGFzaGJvYXJkXCJdLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0VG9rZW4iLCJyZXF1ZXN0IiwidCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});