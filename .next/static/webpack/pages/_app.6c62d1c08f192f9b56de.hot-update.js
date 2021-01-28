webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]) //saga는 combinereducer 필요없음
          ]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FLeUJBLFE7O0FBTHpCO0FBRUE7QUFDQTtBQUVlLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1osaUJBQU1DLDhEQUFHLENBQ0wsQ0FDQUMsK0RBQUksQ0FBQ0MsNkNBQUQsQ0FESixFQUVBRCwrREFBSSxDQUFDRSw2Q0FBRCxDQUZKLENBR0E7QUFIQSxXQURLLENBQVQ7O0FBUFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YzYyZDFjMDhmMTkyZjliNTZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICAvKiAqPWdlbmVyYXRvciDrrLjrspUg7J6Q7LK06rCAIOydtOugh+qyjCDsg53quYAoc2FnYeyXkOyEnCkgXHJcbiAgICBnZW5lcmF0b3LripQg7ZWo7IiY7J2066aELm5leHQoKSDrkqTsl5Ag64Sl7Iqk7Yq466W8IOyNqOyjvOyWtOyVvCDtlZzri6QgXHJcbiAgICBnZW5lcmF0b3LtlajsiJjripQg7JWI7JeQIHlpZWxk66W8IOuEo+yWtOyjvOuptCDqsbDquLDshJwg66mI7LakLCDqt7jrpqzqs6Ag65iQIO2YuOy2nO2VmOuptCDrqYjstpjqs7Psl5DshJzrtoDthLBcclxuICAgIOuLpOyLnCDsi5zsnpHtlZjqs6Ag65iQIHlpZWxk6rCAIOyeiOycvOuptCDrqYjstqQsIOuYkCDtmLjstpztlZjrqbQg66mI7LaY6rOz7JeQ7ISc67aA7YSwIOyLnOyekSBcclxuICAgICovXHJcbiAgIC8vIOq1s+ydtCB5aWVsZOulvCDsoIHripQg7J207Jyg64qUIO2VnOykhCDtlZzspIQg7Iuk7ZaJ7ZW0IOuzvCDsiJgg7J6I6riwIOuVjOusuOyXkFxyXG4gICB5aWVsZCBhbGwoXHJcbiAgICAgICBbXHJcbiAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgLy9zYWdh64qUIGNvbWJpbmVyZWR1Y2VyIO2VhOyalOyXhuydjFxyXG4gICBdKVxyXG4gICAvLyBhbGzsnYAg67Cw7Je07J2EIOuwm+yVhOyEnCDrsLDsl7Qg7JWI7JeQIOyeiOuKlCDqsoPsnYQg7ZWc67KI7JeQIOyLpO2Wie2VtOykgOuLpFxyXG4gICAvLyBmb3Jr64qUIO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7XHJcbiAgIC8vIGZvcmsg64yA7IugIGNhbGzrj4Qg7JOw7KeA66eMIOuRmOydmCDssKjsnbTsoJDsnbQg7J6I7J2MXHJcbiAgIC8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImO2YuOy2nCwgY2FsbOydgCDrj5nquLAg7ZWo7IiY7Zi47LacXHJcbiAgIC8qIGNhbGzsnYAgMTDrsojsp7gg7KSE7JeQ7IScIGxvZ2luQVBJ6rCAIOumrO2EtO2VoCDrlYwg6rmM7KeAIOq4sOuLpOumvFxyXG4gICAg67mE64+Z6riw64qUIOyalOyyreydhCDquLDri6Trpqzsp4Ag7JWK6rOgIOuwlOuhnCDri6TsnYzqurwg7Iuk7ZaJICovXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9