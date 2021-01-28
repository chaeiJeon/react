webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'halo'
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDJfMTQ3%2FMDAxNjA5NTI1NTQyMTM4.7KZAtCG05g_xAqB-O5Aly51dg3t-yeD3XDkOV56W5E4g.kFQxL-ab0KWEAolEYkeBlv4os-cwTfVpKGTonhR5XGIg.JPEG.1993suji%2FA1B6FB71-11E4-4C9A-B743-E7543DE2F83A.jpg&type=a340"
    }, {
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAyMDhfMjAz%2FMDAxNTgxMTY0MDUyNTEx.2IU1wTla8ax8l3tR6J-VW3D_42FH4PLvNci97mrtFl8g.zckwx6NxjVA4w9EcSbcD4cvv7dyJk9dO2H9tak6Udjog.JPEG%2FexternalFile.jpg&type=a340"
    }, {
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAyMDhfMjAz%2FMDAxNTgxMTY0MDUyNTEx.2IU1wTla8ax8l3tR6J-VW3D_42FH4PLvNci97mrtFl8g.zckwx6NxjVA4w9EcSbcD4cvv7dyJk9dO2H9tak6Udjog.JPEG%2FexternalFile.jpg&type=a340"
    }],
    Comments: [{
      User: {
        nickname: 'nek'
      },
      content: '개정판'
    }, {
      User: {
        nickname: 'hh'
      },
      content: '언제 나와용'
    }]
  }],
  imagePaths: [],
  postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // ACTION이름을 상수로 빼준 이유 : 중간에 오타를 막기 위해(변수로 지정하면 오타나면 오류가 난다)

var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: 2,
    content: data,
    User: {
      id: 1,
      nickname: 'codl'
    },
    Images: [],
    Comments: []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      console.log('add-post-request');
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [mainPosts]),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [mainPosts]),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [mainPosts]),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainComments: [dummyComment].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [mainComments]),
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1haW5Db21tZW50cyIsImR1bW15Q29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRyxDQUFDO0FBQ1RDLE1BQUUsRUFBRyxDQURJO0FBRVRDLFFBQUksRUFBRztBQUNIRCxRQUFFLEVBQUMsQ0FEQTtBQUVIRSxjQUFRLEVBQUU7QUFGUCxLQUZFO0FBTVRDLFdBQU8sRUFBRyxzQkFORDtBQU9UQyxVQUFNLEVBQUcsQ0FBQztBQUNOQyxTQUFHLEVBQUU7QUFEQyxLQUFELEVBRVA7QUFDRUEsU0FBRyxFQUFHO0FBRFIsS0FGTyxFQUlQO0FBQ0VBLFNBQUcsRUFBRztBQURSLEtBSk8sQ0FQQTtBQWNUQyxZQUFRLEVBQUcsQ0FDUDtBQUNBTCxVQUFJLEVBQUc7QUFDSEMsZ0JBQVEsRUFBRztBQURSLE9BRFA7QUFJQUMs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LFNBQUtmLGdCQUFMO0FBQ0ksNkNBQ09XLEtBRFA7QUFFSWpCLHNCQUFjLEVBQUcsSUFGckI7QUFHSUMsbUJBQVcsRUFBRyxLQUhsQjtBQUlJQyxvQkFBWSxFQUFHO0FBSm5COztBQU1KLFNBQUtLLGdCQUFMO0FBQ0ksNkNBQ09VLEtBRFA7QUFFSTNCLGlCQUFTLEdBQUkwQixTQUFKLHNHQUFrQkMsS0FBbEIsSUFBd0IzQixTQUF4QixFQUZiO0FBR0lVLHNCQUFjLEVBQUcsS0FIckI7QUFJSUMsbUJBQVcsRUFBRztBQUpsQjs7QUFNSixTQUFLTyxnQkFBTDtBQUNJLDZDQUNPUyxLQURQO0FBRUlqQixzQkFBYyxFQUFHLEtBRnJCO0FBR0lFLG9CQUFZLEVBQUdnQixNQUFNLENBQUNHO0FBSDFCOztBQUtKLFNBQUtaLG1CQUFMO0FBQ0ksNkNBQ09RLEtBRFA7QUFFSWQseUJBQWlCLEVBQUcsSUFGeEI7QUFHSUMsc0JBQWMsRUFBRyxLQUhyQjtBQUlJQyx1QkFBZSxFQUFHO0FBSnRCOztBQU1KLFNBQUtLLG1CQUFMO0FBQ0ksNkNBQ09PLEtBRFA7QUFFSUssb0JBQVksR0FBSUMsWUFBSixzR0FBcUJOLEtBQXJCLElBQTJCSyxZQUEzQixFQUZoQjtBQUdJbkIseUJBQWlCLEVBQUcsS0FIeEI7QUFJSUMsc0JBQWMsRUFBRztBQUpyQjs7QUFNSixTQUFLTyxtQkFBTDtBQUNJLDZDQUNPTSxLQURQO0FBRUlkLHlCQUFpQixFQUFHLEtBRnhCO0FBR0lFLHVCQUFlLEVBQUdhLE1BQU0sQ0FBQ0c7QUFIN0I7O0FBS0o7QUFBVTtBQUNOLGlDQUNPSixLQURQO0FBR0g7QUF0Rkw7QUF3RkgsQ0F6RkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGRiYjNjMWNkYzI1YWQ4MDY2ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWUgOidoYWxvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQgOiAn7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgICAgIHNyYzogXCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEF4TURKZk1UUTMlMkZNREF4TmpBNU5USTFOVFF5TVRNNC43S1pBdENHMDVnX3hBcUItTzVBbHk1MWRnM3QteWVEM1hEa09WNTZXNUU0Zy5rRlF4TC1hYjBLV0VBb2xFWWtlQmx2NG9zLWN3VGZWcEtHVG9uaFI1WEdJZy5KUEVHLjE5OTNzdWppJTJGQTFCNkZCNzEtMTFFNC00QzlBLUI3NDMtRTc1NDNERTJGODNBLmpwZyZ0eXBlPWEzNDBcIixcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGY2FmZWZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNREF5TURoZk1qQXolMkZNREF4TlRneE1UWTBNRFV5TlRFeC4ySVUxd1RsYThheDhsM3RSNkotVlczRF80MkZINFBMdk5jaTk3bXJ0Rmw4Zy56Y2t3eDZOeGpWQTR3OUVjU2JjRDRjdnY3ZHlKazlkTzJIOXRhazZVZGpvZy5KUEVHJTJGZXh0ZXJuYWxGaWxlLmpwZyZ0eXBlPWEzNDBcIixcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGY2FmZWZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNREF5TURoZk1qQXolMkZNREF4TlRneE1UWTBNRFV5TlRFeC4ySVUxd1RsYThheDhsM3RSNkotVlczRF80MkZINFBMdk5jaTk3bXJ0Rmw4Zy56Y2t3eDZOeGpWQTR3OUVjU2JjRDRjdnY3ZHlKazlkTzJIOXRhazZVZGpvZy5KUEVHJTJGZXh0ZXJuYWxGaWxlLmpwZyZ0eXBlPWEzNDBcIixcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6IFtcclxuICAgICAgICAgICAgeyAgXHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6ICduZWsnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiAn6rCc7KCV7YyQJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiAnaGgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogJ+yWuOygnCDrgpjsmYDsmqknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogbnVsbCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuLy8gQUNUSU9O7J2066aE7J2EIOyDgeyImOuhnCDrubzspIAg7J207JygIDog7KSR6rCE7JeQIOyYpO2DgOulvCDrp4nquLAg7JyE7ZW0KOuzgOyImOuhnCDsp4DsoJXtlZjrqbQg7Jik7YOA64KY66m0IOyYpOulmOqwgCDrgpzri6QpXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0PSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGUgOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50PSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGUgOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6MixcclxuICAgIGNvbnRlbnQgOiBkYXRhLFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lIDogJ2NvZGwnLFxyXG4gICAgfSxcclxuICAgIEltYWdlcyA6IFtdLFxyXG4gICAgQ29tbWVudHMgOiBbXSxcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQtcG9zdC1yZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMgOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUsbWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdCwgLi4uc3RhdGUsbWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdCwgLi4uc3RhdGUsbWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yIDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbW1lbnRzIDogW2R1bW15Q29tbWVudCwgLi4uc3RhdGUsbWFpbkNvbW1lbnRzXSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0IDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9