"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./components/chat/send-message.js":
/*!*****************************************!*\
  !*** ./components/chat/send-message.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./components/chat/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SendMessage = function(param) {\n    var socket = param.socket, username = param.username, room = param.room;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), message = _useState[0], setMessage = _useState[1];\n    console.log(\"send Message   \", username, room, socket);\n    var sendMessage = function() {\n        if (message !== \"\") {\n            var __createdtime__ = Date.now();\n            // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room\n            socket.emit(\"send_message\", {\n                username: username,\n                room: room,\n                message: message,\n                __createdtime__: __createdtime__\n            });\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendMessageContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageInput),\n                placeholder: \"Message...\",\n                onChange: function(e) {\n                    return setMessage(e.target.value);\n                },\n                value: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Year3\\\\Semester2\\\\Network\\\\NetworkProject\\\\client\\\\components\\\\chat\\\\send-message.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                onClick: sendMessage,\n                children: \"Send Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Year3\\\\Semester2\\\\Network\\\\NetworkProject\\\\client\\\\components\\\\chat\\\\send-message.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Year3\\\\Semester2\\\\Network\\\\NetworkProject\\\\client\\\\components\\\\chat\\\\send-message.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(SendMessage, \"l8KXAebGu4sZHsyCIQX7P8si41w=\");\n_c = SendMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendMessage);\nvar _c;\n$RefreshReg$(_c, \"SendMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQvc2VuZC1tZXNzYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNGO0FBR3ZDLElBQU1HLGNBQWMsZ0JBQWdDO1FBQTdCQyxlQUFBQSxRQUFRQyxpQkFBQUEsVUFBVUMsYUFBQUE7O0lBQ3ZDLElBQThCSixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBaENLLFVBQXVCTCxjQUFkTSxhQUFjTjtJQUM5Qk8sUUFBUUMsR0FBRyxDQUFDLG1CQUFrQkwsVUFBU0MsTUFBS0Y7SUFDNUMsSUFBTU8sY0FBYyxXQUFNO1FBQ3hCLElBQUlKLFlBQVksSUFBSTtZQUNsQixJQUFNSyxrQkFBa0JDLEtBQUtDLEdBQUc7WUFDaEMsMktBQTJLO1lBQzNLVixPQUFPVyxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFVixVQUFBQTtnQkFBVUMsTUFBQUE7Z0JBQU1DLFNBQUFBO2dCQUFTSyxpQkFBQUE7WUFBZ0I7WUFDdkVKLFdBQVc7UUFDYixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV2pCLGdGQUEyQjs7MEJBQ3pDLDhEQUFDbUI7Z0JBQ0NGLFdBQVdqQix3RUFBbUI7Z0JBQzlCcUIsYUFBWTtnQkFDWkMsVUFBVSxTQUFDQzsyQkFBTWYsV0FBV2UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOztnQkFDMUNBLE9BQU9sQjs7Ozs7OzBCQUVULDhEQUFDbUI7Z0JBQU9ULFdBQVU7Z0JBQWtCVSxTQUFTaEI7MEJBQWE7Ozs7Ozs7Ozs7OztBQUtoRTtHQXpCTVI7S0FBQUE7QUEyQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0L3NlbmQtbWVzc2FnZS5qcz85MmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IFNlbmRNZXNzYWdlID0gKHsgc29ja2V0LCB1c2VybmFtZSwgcm9vbSB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnNvbGUubG9nKFwic2VuZCBNZXNzYWdlICAgXCIsdXNlcm5hbWUscm9vbSxzb2NrZXQpO1xyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKG1lc3NhZ2UgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IF9fY3JlYXRlZHRpbWVfXyA9IERhdGUubm93KCk7XHJcbiAgICAgIC8vIFNlbmQgbWVzc2FnZSB0byBzZXJ2ZXIuIFdlIGNhbid0IHNwZWNpZnkgd2hvIHdlIHNlbmQgdGhlIG1lc3NhZ2UgdG8gZnJvbSB0aGUgZnJvbnRlbmQuIFdlIGNhbiBvbmx5IHNlbmQgdG8gc2VydmVyLiBTZXJ2ZXIgY2FuIHRoZW4gc2VuZCBtZXNzYWdlIHRvIHJlc3Qgb2YgdXNlcnMgaW4gcm9vbVxyXG4gICAgICBzb2NrZXQuZW1pdCgnc2VuZF9tZXNzYWdlJywgeyB1c2VybmFtZSwgcm9vbSwgbWVzc2FnZSwgX19jcmVhdGVkdGltZV9fIH0pO1xyXG4gICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZW5kTWVzc2FnZUNvbnRhaW5lcn0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VJbnB1dH1cclxuICAgICAgICBwbGFjZWhvbGRlcj0nTWVzc2FnZS4uLidcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgU2VuZCBNZXNzYWdlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRNZXNzYWdlOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiU2VuZE1lc3NhZ2UiLCJzb2NrZXQiLCJ1c2VybmFtZSIsInJvb20iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWVzc2FnZSIsIl9fY3JlYXRlZHRpbWVfXyIsIkRhdGUiLCJub3ciLCJlbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2VuZE1lc3NhZ2VDb250YWluZXIiLCJpbnB1dCIsIm1lc3NhZ2VJbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chat/send-message.js\n"));

/***/ })

});