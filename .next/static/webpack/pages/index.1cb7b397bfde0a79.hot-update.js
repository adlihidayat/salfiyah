"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/landingPage/FeatureItem.tsx":
/*!************************************************!*\
  !*** ./components/landingPage/FeatureItem.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FeatureItem(param) {\n    let { beautyInTheSun  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-screen h-screen bg-LP-FeatureItem bg-cover flex items-end justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" text-white flex flex-col items-center space-y-5 mb-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-4xl w-80 font-extrabold md:w-[700px] text-center md:text-7xl\",\n                    children: \"BEAUTY IN THE SUN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adlih\\\\OneDrive\\\\Dokumen\\\\belajar-react\\\\salfiyah\\\\components\\\\landingPage\\\\FeatureItem.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: beautyInTheSun,\n                    className: \"border border-white py-1 px-6 font-light rounded-3xl md:text-2xl hover:bg-white hover:text-black duration-300\",\n                    children: \"See more\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adlih\\\\OneDrive\\\\Dokumen\\\\belajar-react\\\\salfiyah\\\\components\\\\landingPage\\\\FeatureItem.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adlih\\\\OneDrive\\\\Dokumen\\\\belajar-react\\\\salfiyah\\\\components\\\\landingPage\\\\FeatureItem.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adlih\\\\OneDrive\\\\Dokumen\\\\belajar-react\\\\salfiyah\\\\components\\\\landingPage\\\\FeatureItem.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = FeatureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeatureItem);\nvar _c;\n$RefreshReg$(_c, \"FeatureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmdQYWdlL0ZlYXR1cmVJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsWUFBWSxLQUFrQixFQUFFO1FBQXBCLEVBQUVDLGVBQWMsRUFBRSxHQUFsQjtJQUNuQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFxRTs7Ozs7OzhCQUdsRiw4REFBQ0U7b0JBQ0NDLFNBQVNMO29CQUNURSxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0tBaEJTSDtBQWtCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmRpbmdQYWdlL0ZlYXR1cmVJdGVtLnRzeD9lNjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEZlYXR1cmVJdGVtKHsgYmVhdXR5SW5UaGVTdW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LXNjcmVlbiBoLXNjcmVlbiBiZy1MUC1GZWF0dXJlSXRlbSBiZy1jb3ZlciBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktNSBtYi0yMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LTR4bCB3LTgwIGZvbnQtZXh0cmFib2xkIG1kOnctWzcwMHB4XSB0ZXh0LWNlbnRlciBtZDp0ZXh0LTd4bFwiPlxyXG4gICAgICAgICAgQkVBVVRZIElOIFRIRSBTVU5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17YmVhdXR5SW5UaGVTdW59XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlIHB5LTEgcHgtNiAgZm9udC1saWdodCByb3VuZGVkLTN4bCBtZDp0ZXh0LTJ4bCBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2VlIG1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlSXRlbTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmVhdHVyZUl0ZW0iLCJiZWF1dHlJblRoZVN1biIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/landingPage/FeatureItem.tsx\n"));

/***/ })

});