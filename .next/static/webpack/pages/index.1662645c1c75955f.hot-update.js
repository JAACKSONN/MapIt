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

/***/ "./components/distance.tsx":
/*!*********************************!*\
  !*** ./components/distance.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Distance; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar commutesPerYear = 260 * 2;\nvar litresPerKM = 10 / 100;\nvar gasLitreCost = 1.5;\nvar litreCostKM = litresPerKM * gasLitreCost;\nvar secondsToMinutes = 1 / 60;\nvar kilometersToMiles = 0.621371;\nvar SURGE_CHARGE_RATE = 1.5;\nfunction Distance(param) {\n    var leg = param.leg;\n    if (!leg.distance || !leg.duration) return null;\n    var time = Math.floor(leg.duration.value * secondsToMinutes);\n    var taxiCost = Math.round(100 * (leg.distance.value / 1000 * 1.35 + 2.6)) / 100;\n    var uberCost = 1;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"This home is \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.distance.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 22\n                    }, this),\n                    \" away. That would take\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.duration.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    \" each direction.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"That's \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            time,\n                            \" minutes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 16\n                    }, this),\n                    \" to arrive at your desination\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(taxiCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n_c = Distance;\nvar _c;\n$RefreshReg$(_c, \"Distance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc3RhbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEdBQUssQ0FBQ0EsZUFBZSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHO0FBQzVCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEdBQUc7QUFDeEIsR0FBSyxDQUFDQyxXQUFXLEdBQUdGLFdBQVcsR0FBR0MsWUFBWTtBQUM5QyxHQUFLLENBQUNFLGdCQUFnQixHQUFHLENBQUMsR0FBQyxFQUFFO0FBQzdCLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUTtBQUNsQyxHQUFLLENBQUNDLGlCQUFpQixHQUFHLEdBQUc7QUFNZCxRQUFRLENBQUNDLFFBQVEsQ0FBQyxLQUFzQixFQUFFLENBQUM7UUFBdkJDLEdBQUcsR0FBTCxLQUFzQixDQUFwQkEsR0FBRztJQUNwQyxFQUFFLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLRCxHQUFHLENBQUNFLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSTtJQUUvQyxHQUFLLENBQUNDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQ3BCTCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0ksS0FBSyxHQUFJVixnQkFBZ0I7SUFFekMsR0FBSyxDQUFDVyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsSUFBTVIsR0FBRyxDQUFDQyxRQUFRLENBQUNLLEtBQUssR0FBRyxJQUFJLEdBQUksSUFBSSxHQUFJLEdBQUksS0FBRyxHQUFHO0lBRXBGLEdBQUssQ0FBQ0csUUFBUSxHQUFHLENBQUM7SUFFbEIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUM7O29CQUFDLENBQ1k7Z0dBQUNDLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFXO2tDQUFFYixHQUFHLENBQUNDLFFBQVEsQ0FBQ2EsSUFBSTs7Ozs7O29CQUFRLENBQXNCO29CQUFDLENBQUc7Z0dBQzVGRixDQUFJO3dCQUFDQyxTQUFTLEVBQUMsQ0FBVztrQ0FBRWIsR0FBRyxDQUFDRSxRQUFRLENBQUNZLElBQUk7Ozs7OztvQkFBUSxDQUN4RDs7Ozs7Ozt3RkFFQ0gsQ0FBQzs7b0JBQUMsQ0FDTTtnR0FBQ0MsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7OzRCQUFFVixJQUFJOzRCQUFDLENBQVE7Ozs7Ozs7b0JBQU8sQ0FDeEQ7Z0dBQUNTLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs0QkFBQyxDQUN6Qjs0QkFBQyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxNQUFNLENBQUNWLFFBQVE7Ozs7Ozs7b0JBQ3BDLENBRVQ7Ozs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0tBMUJ1QlIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rpc3RhbmNlLnRzeD85MmY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbW11dGVzUGVyWWVhciA9IDI2MCAqIDI7XG5jb25zdCBsaXRyZXNQZXJLTSA9IDEwIC8gMTAwO1xuY29uc3QgZ2FzTGl0cmVDb3N0ID0gMS41O1xuY29uc3QgbGl0cmVDb3N0S00gPSBsaXRyZXNQZXJLTSAqIGdhc0xpdHJlQ29zdDtcbmNvbnN0IHNlY29uZHNUb01pbnV0ZXMgPSAxLzYwXG5jb25zdCBraWxvbWV0ZXJzVG9NaWxlcyA9IDAuNjIxMzcxXG5jb25zdCBTVVJHRV9DSEFSR0VfUkFURSA9IDEuNVxuIFxudHlwZSBEaXN0YW5jZVByb3BzID0ge1xuICBsZWc6IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNMZWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXN0YW5jZSh7IGxlZyB9OiBEaXN0YW5jZVByb3BzKSB7XG4gIGlmICghbGVnLmRpc3RhbmNlIHx8ICFsZWcuZHVyYXRpb24pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHRpbWUgPSBNYXRoLmZsb29yKFxuICAgIChsZWcuZHVyYXRpb24udmFsdWUpICogc2Vjb25kc1RvTWludXRlc1xuICApO1xuICBjb25zdCB0YXhpQ29zdCA9IE1hdGgucm91bmQoMTAwICogKCgobGVnLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkgKiAxLjM1KSArIDIuNjApKS8xMDA7XG4gXG4gIGNvbnN0IHViZXJDb3N0ID0gMTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBob21lIGlzIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPntsZWcuZGlzdGFuY2UudGV4dH08L3NwYW4+IGF3YXkuIFRoYXQgd291bGQgdGFrZXtcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+e2xlZy5kdXJhdGlvbi50ZXh0fTwvc3Bhbj4gZWFjaCBkaXJlY3Rpb24uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGF0J3MgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+e3RpbWV9IG1pbnV0ZXM8L3NwYW4+IHRvIGFycml2ZSBhdCB5b3VyIGRlc2luYXRpb25cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgJHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQodGF4aUNvc3QpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIC5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjb21tdXRlc1BlclllYXIiLCJsaXRyZXNQZXJLTSIsImdhc0xpdHJlQ29zdCIsImxpdHJlQ29zdEtNIiwic2Vjb25kc1RvTWludXRlcyIsImtpbG9tZXRlcnNUb01pbGVzIiwiU1VSR0VfQ0hBUkdFX1JBVEUiLCJEaXN0YW5jZSIsImxlZyIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwidmFsdWUiLCJ0YXhpQ29zdCIsInJvdW5kIiwidWJlckNvc3QiLCJkaXYiLCJwIiwic3BhbiIsImNsYXNzTmFtZSIsInRleHQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/distance.tsx\n");

/***/ })

});