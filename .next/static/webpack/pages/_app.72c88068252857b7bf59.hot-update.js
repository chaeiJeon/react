webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.follow('/api/follow');
}

function follow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.unfollow('/api/unfollow');
}

function unfollow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            error: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', data);
}

function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log('saga logIn');
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: action.data
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            //put=dispatch 라고 생각하기, 액션 객체 dispatch
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.signup('/api/signup');
}

function signUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context5.t0.response.data
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJmb2xsb3ciLCJ1bmZvbGxvdyIsImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSIsImZvbGxvd0FQSSIsImF4aW9zIiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiRk9MTE9XX1NVQ0NFU1MiLCJkYXRhIiwiRk9MTE9XX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwidW5mb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImxvZ0luQVBJIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwic2lnbnVwIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBV1VBLE07bUdBaUJBQyxRO21HQWlCQUMsSzttR0FxQkFDLE07bUdBbUJBQyxNO21HQWFBQyxXO21HQUdDQyxhO21HQUlEQyxVO21HQVdBQyxXO29HQUlBQyxXO29HQUllQyxROztBQTVIekI7QUFDQTtBQUNBOztBQU1BLFNBQVNDLFNBQVQsR0FBb0I7QUFDaEIsU0FBT0MsNENBQUssQ0FBQ1osTUFBTixDQUFhLGFBQWIsQ0FBUDtBQUNIOztBQUNELFNBQVVBLE1BQVYsQ0FBaUJhLE1BQWpC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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVTSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNa0MsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDeEMsV0FBRCxDQURFLEVBRU53QywrREFBSSxDQUFDdkMsYUFBRCxDQUZFLEVBR051QywrREFBSSxDQUFDdEMsVUFBRCxDQUhFLEVBSU5zQywrREFBSSxDQUFDckMsV0FBRCxDQUpFLEVBS05xQywrREFBSSxDQUFDcEMsV0FBRCxDQUxFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjcyYzg4MDY4MjUyODU3YjdiZjU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgZGVsYXksIHB1dCwgZm9yaywgdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgXHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBcclxuICAgIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmZvbGxvdygnL2FwaS9mb2xsb3cnKVxyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy51bmZvbGxvdygnL2FwaS91bmZvbGxvdycpXHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dJbicpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApOyAvKiByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSkg7JWE7KeB7J2AIOyEnOuyhOqwgCDsl4bsnLzri4gqL1xyXG4gICAgICAgIC8vIGNhbGzsnZgg7LKr67KI7Ke4IOyduOyekOuKlCDtlajsiJjrqoUsIOq3uOuLpOydjOu2gO2EsOuKlCDrp6TqsJzrs4DsiJjrk6RcclxuICAgICAgICAvLyDrp4zslb0g7ISc67KE66GcIOuhnOq3uOyduO2VmOuKlCDsmpTssq3snYQg67O064OI7Jy866m0IOq3uCDqsrDqs7zrpbwg67Cb64qUIOqyg1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7IC8v7ISc67KEIOyalOyyrSDsi6TtjKjsi5xcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dD1kaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY6riwLCDslaHshZgg6rCd7LK0IGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxufVxyXG5mdW5jdGlvbiogbG9nT3V0KCl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy9yZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSlcclxuICAgICAgICAvLyDrp4zslb0g7ISc67KE66GcIOuhnOq3uOyduO2VmOuKlCDsmpTssq3snYQg67O064OI7Jy866m0IOq3uCDqsrDqs7zrpbwg67Cb64qUIOqyg1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKXsgLy/shJzrsoQg7JqU7LKtIOyLpO2MqOyLnFxyXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV0PWRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjquLAsIOyVoeyFmCDqsJ3ssrQgZGlzcGF0Y2hcclxuICAgICAgICAgICAgdHlwZSA6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3Muc2lnbnVwKCcvYXBpL3NpZ251cCcpXHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcCgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbiAgICBcclxufWZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULGxvZ0luKTsgXHJcbiAgICAvKiB3aGlsZSh0cnVlKXsgLy93aGlsZeuhnCDqsJDsi7jspJjslbwg66Gc6re47J247ZWY6rOgIOuhnOq3uOyVhOybg+2VmOqzoCDrmJAg66Gc6re47J24IOqwgOuKpSwgd2hpbGXroZwg7JWI6rCQ7Iu47KO866m0IOuhnOq3uOyduCDrlLEg7ZWc67KI66eMIOqwgOuKpVxyXG4gICAgICAgIHlpZWxkIHRha2UoJ0xPR19JTl9SRVFVRVNUJywgbG9nSW4pO1xyXG5cclxuICAgIH0gKi9cclxuICAgIC8vIHRha2VFdmVyeeuKlCB3aGlsZeqzvCDqsJnsnYAg7Jet7ZWgLCB3aGlsZeydtCDsp4HqtIDsoIHsnbTsp4Ag7JWK7JWE7IScIOyCrOyaqVxyXG4gICAgLy8gdGFrZUxhdGVzdOuKlCDsmIjrpbzrk6TslrQg7Iuk7IiY66GcIOq4gOyYrOumrOq4sCDrsoTtirzsnYQg65GQ67KIIOuIjOuggOydhCDrlYwg65GY64ukIOuhnOuUqeykkeydtOudvOuptCDrp4jsp4Drp4nsnLzroZwg64iE66W46rKD7JeQ66eMIOuwmOydkSwgdGFrZUV2ZXJ57JeQ7ISc64qUIOuRkOuyiCDsmKzrprDqsowg65CoKOymieqwgeuwmOydkSlcclxuICAgIC8vdGFrZeuKlCBMT0dfSU7snbTrnbzripQg7JWh7IWY7J20IOyLpO2WieuQoCDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG4gICAgLy9MT0dfSU4g7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJ7ZW06528XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==