webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'CHAECHAE',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      id: 'h'
    }],
    Followers: [{
      id: 'k'
    }, {
      id: 'h'
    }]
  });
};

var initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpDate: {},
  loginData: []
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var logoutSuccessAction = function logoutSuccessAction(data) {
  return {
    type: LOG_OUT_SUCCESS,
    data: data
  };
};
var logoutFailureAction = function logoutFailureAction(data) {
  return {
    type: LOG_OUT_FAILURE,
    data: data
  };
};
var dummyFollower = {
  id: 'halomalo'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.me.Followings.push({
          id: action.data
        });
        draft.followLoading = false;
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signupLoading = true;
        draft.signupError = null;
        draft.signupDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        draft.me = null;
        break;

      case SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me = null;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImluaXRpYWxTdGF0ZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnbnVwTG9hZGluZyIsInNpZ251cERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGUiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0RmFpbHVyZUFjdGlvbiIsImR1bW15Rm9sbG93ZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwicHVzaCIsImVycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImZpbHRlciIsInYiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQ7QUFBQSx5Q0FDWEEsSUFEVztBQUVkQyxZQUFRLEVBQUcsVUFGRztBQUdkQyxNQUFFLEVBQUcsQ0FIUztBQUlkQyxTQUFLLEVBQUcsQ0FBQztBQUFDRCxRQUFFLEVBQUM7QUFBSixLQUFELENBSk07QUFLZEUsY0FBVSxFQUFHLENBQUM7QUFBQ0YsUUFBRSxFQUFDO0FBQUosS0FBRCxDQUxDO0FBTWRHLGFBQVMsRUFBRyxDQUFDO0FBQUNILFFBQUUsRUFBQztBQUFKLEtBQUQsRUFBVTtBQUFDQSxRQUFFLEVBQUM7QUFBSixLQUFWO0FBTkU7QUFBQSxDQUFsQjs7QUFRTyxJQUFNSSxZQUFZLEdBQUc7QUFDeEJDLGNBQVksRUFBRyxLQURTO0FBRXhCQyxXQUFTLEVBQUcsS0FGWTtBQUd4QkMsWUFBVSxFQUFHLElBSFc7QUFJeEJDLGVBQWEsRUFBRyxLQUpRO0FBS3hCQyxZQUFVLEVBQUcsS0FMVztBQU14QkMsYUFBVyxFQUFHLElBTlU7QUFPeEJDLGVBQWEsRUFBRyxLQVBRO0FBUXhCQyxZQUFVLEVBQUcsS0FSVztBQVN4QkMsYUFBVyxFQUFHLElBVFU7QUFVeEJDLHVCQUFxQixFQUFHLEtBVkE7QUFXeEJDLG9CQUFrQixFQUFHLEtBWEc7QUFZeEJDLHFCQUFtQixFQUFHLElBWkU7QUFheEJDLElBQUUsRUFBRyxJQWJtQjtBQWN4QkMsWUFBVSxFQUFHLEVBZFc7QUFleEJDLFdBQVMsRUFBRztBQWZZLENBQXJCO0FBa0JBLElBQU1DLGNBQWMsR0FBRSxnQkFBdEI7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QW9DLGFBQUssQ0FBQ2xDLG1CQUFOLEdBQTRCZ0MsTUFBTSxDQUFDTyxLQUFuQztBQUNBOztBQUNSLFdBQUtqQixjQUFMO0FBQ1FZLGFBQUssQ0FBQ2pDLEVBQU4sQ0FBU2hCLEtBQVQsQ0FBZTRELE9BQWYsQ0FBdUI7QUFBQzdELFlBQUUsRUFBQ2dELE1BQU0sQ0FBQ2xEO0FBQVgsU0FBdkI7QUFDQTs7QUFDUixXQUFLeUMsaUJBQUw7QUFDUVcsYUFBSyxDQUFDakMsRUFBTixDQUFTaEIsS0FBVCxHQUFpQmlELEtBQUssQ0FBQ2pDLEVBQU4sQ0FBU2hCLEtBQVQsQ0FBZTBELE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFLQSxDQUFDLENBQUM1RCxFQUFGLEtBQU9nRCxNQUFNLENBQUNsRCxJQUFuQjtBQUFBLFNBQXRCLENBQWpCO0FBQ0E7O0FBQ1I7QUFDSTtBQTVGUjtBQThGSCxHQS9GVSxDQURLO0FBQUEsQ0FBaEI7O0FBa0dlZ0Qsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NDZiNmU2NzVhMTU4NjU5MGQ2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZSA6ICdDSEFFQ0hBRScsXHJcbiAgICBpZCA6IDEsXHJcbiAgICBQb3N0cyA6IFt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5ncyA6IFt7aWQ6J2gnfV0sXHJcbiAgICBGb2xsb3dlcnMgOiBbe2lkOidrJ30se2lkOidoJ31dLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yIDogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvZ091dERvbmUgOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yIDogbnVsbCxcclxuICAgIHNpZ251cExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHNpZ251cERvbmUgOiBmYWxzZSxcclxuICAgIHNpZ251cEVycm9yIDogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yIDogbnVsbCxcclxuICAgIG1lIDogbnVsbCxcclxuICAgIHNpZ25VcERhdGUgOiB7fSxcclxuICAgIGxvZ2luRGF0YSA6IFtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1Q9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUz0nTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkU9J0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTPSdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPSdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVD0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1M9J1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkU9J1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1Q9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUz0nRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkU9J0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTPSdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkU9J1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M9J0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFPSdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGR1bW15Rm9sbG93ZXIgPSB7XHJcbiAgICBpZCA6ICdoYWxvbWFsbycsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pPT5cclxuICAgIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KT0+di5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICBcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ251cERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdCA6IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=