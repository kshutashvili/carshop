webpackJsonp([2],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(13);

var _catalogMenu = __webpack_require__(1);

var _catalogMenu2 = _interopRequireDefault(_catalogMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var switchProductVIew = function switchProductVIew() {
    var $blockBtn = $("#block-btn");
    var $listBtn = $("#list-btn");
    var $tovarList = $("#tovar-list");

    $listBtn.off("click");
    $listBtn.on("click", function () {
        $blockBtn.removeClass("active");
        $(this).addClass("active");
        $tovarList.addClass("list-view");
    });

    $blockBtn.off("click");
    $blockBtn.on("click", function () {
        $listBtn.removeClass("active");
        $tovarList.removeClass("list-view");
        $(this).addClass("active");
    });
};

$(window).on("load", function () {
    (0, _catalogMenu2.default)();
    switchProductVIew();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[12]);
//# sourceMappingURL=catalog.js.map