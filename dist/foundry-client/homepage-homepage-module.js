(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"],{

/***/ "./node_modules/ng-marquee/fesm5/ng-marquee.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng-marquee/fesm5/ng-marquee.js ***!
  \*****************************************************/
/*! exports provided: NgMarqueeComponent, NgMarqueeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMarqueeComponent", function() { return NgMarqueeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMarqueeModule", function() { return NgMarqueeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgMarqueeComponent = /** @class */ (function () {
    function NgMarqueeComponent() {
    }
    /**
     * @return {?}
     */
    NgMarqueeComponent.prototype.updateDuration = /**
     * @return {?}
     */
    function () {
        if (!this.duration) {
            return;
        }
        this.animationElem.style.animationDuration = this.duration + "s";
    };
    /**
     * @return {?}
     */
    NgMarqueeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.animationElem = /** @type {?} */ (document.querySelectorAll('.ng-marquee-wrapper > div')[0]);
        this.updateDuration();
    };
    NgMarqueeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-marquee',
                    template: "<div class=\"ng-marquee-wrapper\">\n  <div>\n      <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [".ng-marquee-wrapper{overflow:hidden;position:relative}.ng-marquee-wrapper>div{height:100%;display:inline-block;margin:0;padding-left:100%;-webkit-animation:20s linear infinite marqueeAnimation;animation:20s linear infinite marqueeAnimation;white-space:nowrap}.ng-marquee-wrapper:hover>div{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes marqueeAnimation{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes marqueeAnimation{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@media (max-width:500px){.ng-marquee-wrapper>div{width:100%;height:100%;margin:0;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation:9s linear 1s infinite marqueeAnimation;animation:9s linear 1s infinite marqueeAnimation;white-space:nowrap}}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    NgMarqueeComponent.ctorParameters = function () { return []; };
    NgMarqueeComponent.propDecorators = {
        duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgMarqueeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgMarqueeModule = /** @class */ (function () {
    function NgMarqueeModule() {
    }
    NgMarqueeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [NgMarqueeComponent],
                    exports: [NgMarqueeComponent]
                },] },
    ];
    return NgMarqueeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWFycXVlZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctbWFycXVlZS9saWIvbmctbWFycXVlZS9uZy1tYXJxdWVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmctbWFycXVlZS9saWIvbmctbWFycXVlZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1tYXJxdWVlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmctbWFycXVlZS13cmFwcGVyXCI+XG4gIDxkaXY+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5uZy1tYXJxdWVlLXdyYXBwZXJ7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5uZy1tYXJxdWVlLXdyYXBwZXI+ZGl2e2hlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowO3BhZGRpbmctbGVmdDoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjIwcyBsaW5lYXIgaW5maW5pdGUgbWFycXVlZUFuaW1hdGlvbjthbmltYXRpb246MjBzIGxpbmVhciBpbmZpbml0ZSBtYXJxdWVlQW5pbWF0aW9uO3doaXRlLXNwYWNlOm5vd3JhcH0ubmctbWFycXVlZS13cmFwcGVyOmhvdmVyPmRpdnstd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZDthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9QC13ZWJraXQta2V5ZnJhbWVzIG1hcnF1ZWVBbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKX19QGtleWZyYW1lcyBtYXJxdWVlQW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSl9fUBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXsubmctbWFycXVlZS13cmFwcGVyPmRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7LXdlYmtpdC1hbmltYXRpb246OXMgbGluZWFyIDFzIGluZmluaXRlIG1hcnF1ZWVBbmltYXRpb247YW5pbWF0aW9uOjlzIGxpbmVhciAxcyBpbmZpbml0ZSBtYXJxdWVlQW5pbWF0aW9uO3doaXRlLXNwYWNlOm5vd3JhcH19YF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ01hcnF1ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIGFuaW1hdGlvbkVsZW06IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICApIHsgfVxuXG4gIHVwZGF0ZUR1cmF0aW9uKCkge1xuICAgIGlmICghdGhpcy5kdXJhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbkVsZW0uc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBgJHt0aGlzLmR1cmF0aW9ufXNgO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbmltYXRpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5nLW1hcnF1ZWUtd3JhcHBlciA+IGRpdicpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIHRoaXMudXBkYXRlRHVyYXRpb24oKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNYXJxdWVlQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1tYXJxdWVlL25nLW1hcnF1ZWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ01hcnF1ZWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmdNYXJxdWVlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ01hcnF1ZWVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFpQkU7S0FDSzs7OztJQUVMLDJDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztLQUNsRTs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLHFCQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBbUIsQ0FBQSxDQUFDO1FBQ2pHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGdHQUlMO29CQUNMLE1BQU0sRUFBRSxDQUFDLGs3QkFBazdCLENBQUM7b0JBQzU3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7OzJCQUdFLEtBQUs7OzZCQWRSOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDOUI7OzBCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/homepage/about/about.component.html":
/*!*****************************************************!*\
  !*** ./src/app/homepage/about/about.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n      <div class=\"abt\">\r\n          <h1><b>About</b> us</h1>\r\n        </div>\r\n    <div class=\"abt_content\">\r\n      <p>{{text}}</p>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<h1>About</h1>\r\n<p>{{text}}</p>\r\n"

/***/ }),

/***/ "./src/app/homepage/about/about.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/homepage/about/about.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #0091ea; }\n\np {\n  padding: 4em;\n  margin-top: 3%;\n  background: linear-gradient(-45deg, #E8E8E8 5px, transparent 5px) 0 5px, linear-gradient(-45deg, #EEEEEE 5px, transparent 5px) 10px 0px, linear-gradient(-45deg, #E8E8E8 5px, transparent 5px) 0px 10px, linear-gradient(-45deg, #EEEEEE 5px, transparent 5px) 10px 5px, linear-gradient(-45deg, #EEEEEE 10px, transparent 10px), linear-gradient(#EEEEEE 25%, #E8E8E8 25%, #E8E8E8 50%, transparent 50%, transparent 75%, #EEEEEE 75%, #EEEEEE);\n  background-color: #cacaca;\n  background-size: 10px 10px;\n  margin-bottom: 0em;\n  margin-top: 0em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvYWJvdXQvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcaG9tZXBhZ2VcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q0E7RUFDRSxrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxZQUFXO0VBQ0gsY0FBYztFQUNsQixnYkFBZ2I7RUFDaGIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYWJ0X2NvbnRlbnQgaDR7XHJcbi8vICAgICBmb250LXNpemU6IDI3cHg7XHJcblxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICB9XHJcbi8vICAgLmFidF9jb250ZW50IHB7XHJcbi8vICAgICBmb250LXNpemU6IDE5cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbi8vICAgfVxyXG4vLyAgIC5oZWFkZHtcclxuLy8gICAgIGNvbG9yOnJnYmEoMzAsNTAsMTAwLDgwKTtcclxuLy8gICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMS44ZW07XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuLy8gICB9XHJcbi8vICAgLmhlYWRkZHtcclxuLy8gICAgIGNvbG9yOmRhcmt0dXJxdW9pc2U7XHJcblxyXG5cclxuLy8gICB9XHJcbi8vICAgLmFidF9jb250ZW50e1xyXG5cclxuLy8gICAgICAgICBwYWRkaW5nOjRlbTtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNFOEU4RTggNXB4LCB0cmFuc3BhcmVudCA1cHgpIDAgNXB4LCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRUVFRUVFIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMHB4IDBweCwgbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0U4RThFOCA1cHgsIHRyYW5zcGFyZW50IDVweCkgMHB4IDEwcHgsIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNFRUVFRUUgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggNXB4LCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRUVFRUVFIDEwcHgsIHRyYW5zcGFyZW50IDEwcHgpLCBsaW5lYXItZ3JhZGllbnQoI0VFRUVFRSAyNSUsICNFOEU4RTggMjUlLCAjRThFOEU4IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCA3NSUsICNFRUVFRUUgNzUlLCAjRUVFRUVFKTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDBlbTtcclxuLy8gICB9XHJcbi8vICAgLmFidCBoMXtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgY29sb3I6IzAwOTFlYSA7XHJcblxyXG4vLyAgICAgfVxyXG4vLyAgLmFidHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICBtYXJnaW46IDJlbTtcclxuLy8gICB9XHJcblxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiMwMDkxZWEgO1xyXG59XHJcbnB7XHJcbiAgcGFkZGluZzo0ZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0U4RThFOCA1cHgsIHRyYW5zcGFyZW50IDVweCkgMCA1cHgsIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNFRUVFRUUgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggMHB4LCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRThFOEU4IDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwcHggMTBweCwgbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0VFRUVFRSA1cHgsIHRyYW5zcGFyZW50IDVweCkgMTBweCA1cHgsIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNFRUVFRUUgMTBweCwgdHJhbnNwYXJlbnQgMTBweCksIGxpbmVhci1ncmFkaWVudCgjRUVFRUVFIDI1JSwgI0U4RThFOCAyNSUsICNFOEU4RTggNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50IDc1JSwgI0VFRUVFRSA3NSUsICNFRUVFRUUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/homepage/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/homepage/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_filee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-filee.service */ "./src/app/homepage/upload-filee.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(uploadservice) {
        this.uploadservice = uploadservice;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.about();
    };
    AboutComponent.prototype.about = function () {
        var _this = this;
        this.uploadservice.about().subscribe(function (data) {
            console.log(_this.text);
            _this.text = data.about;
        }, function (error) {
            console.log(error);
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/homepage/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/homepage/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_filee_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileeService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/homepage/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Container (Contact Section) -->\r\n<div id=\"contact\" class=\"container-fluid bg-grey\">\r\n  <h2 class=\"text-center\"><b>CONTACT</b></h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <p>Contact us and we'll get back to you within 24 hours.</p>\r\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> SHINELOGICS IN INDIA </p>\r\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +91-9445033734 +91-4422431428</p>\r\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> info@shinelogics.com</p>\r\n    </div>\r\n<div class=\"col-sm-4\">\r\n      <p>Contact us and we'll get back to you within 24 hours.</p>\r\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span>SHINELOGICS IN USA </p>\r\n      <p><span class=\"glyphicon glyphicon-phone\"></span>+1-813-607-0664 </p>\r\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> info@shinelogics.com</p>\r\n    </div><div class=\"col-sm-4\">\r\n      <p>Contact us and we'll get back to you within 24 hours.</p>\r\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span>SHINELOGICS IN AUSTRALIA </p>\r\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +61 449937478</p>\r\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> info@shinelogics.com</p>\r\n    </div>\r\n     \r\n      </div>\r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-dark, .bg-gray-dark, .bg-primary {\n  color: rgba(255, 255, 255, 0.8); }\n\n.footer-classic a, .footer-classic a:focus, .footer-classic a:active {\n  color: #ffffff; }\n\n.nav-list li {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.nav-list li a:hover:before {\n  margin-left: 0;\n  opacity: 1;\n  visibility: visible; }\n\nul, ol {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.social-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 23px;\n  font: 900 13px/1 \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5); }\n\n.social-container .col {\n  border: 1px solid rgba(255, 255, 255, 0.1); }\n\n.nav-list li a:before {\n  content: \"\\f14f\";\n  font: 400 21px/1 \"Material Design Icons\";\n  color: #4d6de6;\n  display: inline-block;\n  vertical-align: baseline;\n  margin-left: -28px;\n  margin-right: 7px;\n  opacity: 0;\n  visibility: hidden;\n  transition: .22s ease; }\n\n#contact {\n  margin-bottom: 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZm9vdGVyL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGhvbWVwYWdlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQixFQUFBOztBQUduQztFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUhBQW1IO0VBQ25ILHlCQUF5QjtFQUN6QiwrQkFBK0IsRUFBQTs7QUFFbkM7RUFDSSwwQ0FBMEMsRUFBQTs7QUFFOUM7RUFDSSxnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxrQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGV4dC1kYXJrLCAuYmctZ3JheS1kYXJrLCAuYmctcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4uZm9vdGVyLWNsYXNzaWMgYSwgLmZvb3Rlci1jbGFzc2ljIGE6Zm9jdXMsIC5mb290ZXItY2xhc3NpYyBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2LWxpc3QgbGkge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSBhOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG51bCwgb2wge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyM3B4O1xyXG4gICAgZm9udDogOTAwIDEzcHgvMSBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbi5zb2NpYWwtY29udGFpbmVyIC5jb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcbi5uYXYtbGlzdCBsaSBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjE0ZlwiO1xyXG4gICAgZm9udDogNDAwIDIxcHgvMSBcIk1hdGVyaWFsIERlc2lnbiBJY29uc1wiO1xyXG4gICAgY29sb3I6ICM0ZDZkZTY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAuMjJzIGVhc2U7XHJcbn1cclxuI2NvbnRhY3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOjNlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/homepage/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/homepage/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/gallery/gallery.component.html":
/*!*********************************************************!*\
  !*** ./src/app/homepage/gallery/gallery.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marginn\">\r\n\r\n<section>\r\n  <div class=\"container gal-container\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"hh\">\r\n                <h1><b>Gallery</b></h1>\r\n              </div>\r\n    <div class=\"col-md-8 col-sm-12 co-xs-12 gal-item\">\r\n      <div class=\"box\">\r\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#1\">\r\n          <img src=\"http://52.26.246.107:3000/api/uploads/slide1.jpg\">\r\n        </a>\r\n        <div class=\"modal fade\" id=\"1\" tabindex=\"-1\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n              <div class=\"modal-body\">\r\n                <img src=\"http://52.26.246.107:3000/api/uploads/slide1.jpg\">\r\n              </div>\r\n              <div class=\"col-md-12 description\">\r\n                <h4>This is the first one on my Gallery</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 co-xs-12 gal-item\">\r\n      <div class=\"box\">\r\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#2\">\r\n          <img src=\"http://52.26.246.107:3000/api/uploads/slide2.jpg\">\r\n        </a>\r\n        <div class=\"modal fade\" id=\"2\" tabindex=\"-1\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n              <div class=\"modal-body\">\r\n                <img src=\"http://52.26.246.107:3000/api/uploads/slide2.jpg\">\r\n              </div>\r\n              <div class=\"col-md-12 description\">\r\n                <h4>This is the second one on my Gallery</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 co-xs-12 gal-item\">\r\n      <div class=\"box\">\r\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#3\">\r\n          <img src=\"http://52.26.246.107:3000/api/uploads/slide3.jpg\">\r\n        </a>\r\n        <div class=\"modal fade\" id=\"3\" tabindex=\"-1\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n              <div class=\"modal-body\">\r\n                <img src=\"http://52.26.246.107:3000/api/uploads/slide3.jpg\">\r\n              </div>\r\n              <div class=\"col-md-12 description\">\r\n                <h4>This is the third one on my Gallery</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 co-xs-12 gal-item\">\r\n      <div class=\"box\">\r\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#4\">\r\n          <img src=\"http://52.26.246.107:3000/api/uploads/slide4.jpg\">\r\n        </a>\r\n        <div class=\"modal fade\" id=\"4\" tabindex=\"-1\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n              <div class=\"modal-body\">\r\n                <img src=\"http://52.26.246.107:3000/api/uploads/slide4.jpg\">\r\n              </div>\r\n              <div class=\"col-md-12 description\">\r\n                <h4>This is the fourth one on my Gallery</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 co-xs-12 gal-item\">\r\n      <div class=\"box\">\r\n        <a href=\"#\" data-toggle=\"modal\" data-target=\"#5\">\r\n          <img src=\"http://52.26.246.107:3000/api/uploads/slide5.jpg\">\r\n        </a>\r\n        <div class=\"modal fade\" id=\"5\" tabindex=\"-1\" role=\"dialog\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n              <div class=\"modal-body\">\r\n                <img src=\"http://52.26.246.107:3000/api/uploads/slide5.jpg\">\r\n              </div>\r\n              <div class=\"col-md-12 description\">\r\n                <h4>This is the fifth one on my Gallery</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/homepage/gallery/gallery.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/homepage/gallery/gallery.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,300);\nbody {\n  font-family: 'Quicksand', sans-serif; }\n.gal-container {\n  padding: 12px; }\n.gal-item {\n  overflow: hidden;\n  padding: 3px; }\n.gal-item .box {\n  height: 350px;\n  overflow: hidden; }\n.box img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  -o-object-fit: cover; }\n.gal-item a:focus {\n  outline: none; }\n.gal-item a:after {\n  content: \"\\e003\";\n  font-family: 'Glyphicons Halflings';\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  position: absolute;\n  right: 3px;\n  left: 3px;\n  top: 3px;\n  bottom: 3px;\n  text-align: center;\n  line-height: 350px;\n  font-size: 30px;\n  color: #fff;\n  transition: all 0.5s ease-in-out 0s; }\n.gal-item a:hover:after {\n  opacity: 1; }\n.modal-open .gal-container .modal {\n  background-color: rgba(0, 0, 0, 0.4); }\n.modal-open .gal-item .modal-body {\n  padding: 0px; }\n.modal-open .gal-item button.close {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background-color: #000;\n  opacity: 1;\n  color: #fff;\n  z-index: 999;\n  right: -12px;\n  top: -12px;\n  border-radius: 50%;\n  font-size: 15px;\n  border: 2px solid #fff;\n  line-height: 25px;\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35); }\n.modal-open .gal-item button.close:focus {\n  outline: none; }\n.modal-open .gal-item button.close span {\n  position: relative;\n  top: -3px;\n  font-weight: lighter;\n  text-shadow: none; }\n.gal-container .modal-dialogue {\n  width: 80%; }\n.gal-container .description {\n  position: relative;\n  height: 40px;\n  top: -40px;\n  padding: 10px 25px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  text-align: left; }\n.gal-container .description h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 20px; }\n.gal-container .modal.fade .modal-dialog {\n  -webkit-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 100px;\n  opacity: 0;\n  transition: all 0.3s; }\n.gal-container .modal.fade.in .modal-dialog {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -100px, 0);\n  transform: translate3d(0, -100px, 0);\n  opacity: 1; }\n@media (min-width: 768px) {\n  .gal-container .modal-dialog {\n    width: 55%;\n    margin: 50 auto; } }\n@media (max-width: 768px) {\n  .gal-container .modal-content {\n    height: 250px; } }\n/* Footer Style */\ni.red {\n  color: #BC0213; }\n.gal-container {\n  padding-top: 0px;\n  padding-bottom: 35px; }\nfooter {\n  font-family: 'Quicksand', sans-serif; }\nfooter a, footer a:hover {\n  color: #88C425; }\n.hh h1 {\n  text-align: center;\n  color: #3f51b5; }\n.hh {\n  width: 100%;\n  float: left;\n  margin: 4em 0em 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZ2FsbGVyeS9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxob21lcGFnZVxcZ2FsbGVyeVxcZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRSxzRUFBWTtBQUNkO0VBQ0ksb0NBQW9DLEVBQUE7QUFFeEM7RUFDQyxhQUFhLEVBQUE7QUFFZDtFQUNDLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFFYjtFQUNDLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTtBQUVqQjtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUFBO0FBRXBCO0VBQ0MsYUFBYSxFQUFBO0FBRWQ7RUFDQyxnQkFBZTtFQUNmLG1DQUFtQztFQUNuQyxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBR1gsbUNBQW1DLEVBQUE7QUFFdkM7RUFDQyxVQUFVLEVBQUE7QUFFWDtFQUNDLG9DQUFpQyxFQUFBO0FBRWxDO0VBQ0MsWUFBWSxFQUFBO0FBRWI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFcEIsMkNBQXdDLEVBQUE7QUFFekM7RUFDQyxhQUFhLEVBQUE7QUFFZDtFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGlCQUFnQixFQUFBO0FBRWpCO0VBQ0MsVUFBVSxFQUFBO0FBRVg7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsb0NBQWlDO0VBQ2pDLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtBQUVqQjtFQUNDLFdBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0FBRWxCO0VBQ0ksNkJBQTZCO0VBRzdCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsVUFBVTtFQUdWLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksMkJBQTJCO0VBRzNCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsb0NBQW9DO0VBQ3BDLFVBQVUsRUFBQTtBQUVkO0VBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZSxFQUFBLEVBQ2xCO0FBRUQ7RUFDSTtJQUNJLGFBQVksRUFBQSxFQUNmO0FBRUwsaUJBQUE7QUFDQTtFQUNJLGNBQWEsRUFBQTtBQUVqQjtFQUNJLGdCQUFnQjtFQUNoQixvQkFBbUIsRUFBQTtBQUV2QjtFQUNJLG9DQUFvQyxFQUFBO0FBRXhDO0VBQ0ksY0FBYyxFQUFBO0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWEsRUFBQTtBQUdqQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDo0MDAsMzAwKTtcclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZ2FsLWNvbnRhaW5lcntcclxuXHRwYWRkaW5nOiAxMnB4O1xyXG59XHJcbi5nYWwtaXRlbXtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDNweDtcclxufVxyXG4uZ2FsLWl0ZW0gLmJveHtcclxuXHRoZWlnaHQ6IDM1MHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJveCBpbWd7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG9iamVjdC1maXQ6Y292ZXI7XHJcblx0LW8tb2JqZWN0LWZpdDpjb3ZlcjtcclxufVxyXG4uZ2FsLWl0ZW0gYTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5nYWwtaXRlbSBhOmFmdGVye1xyXG5cdGNvbnRlbnQ6XCJcXGUwMDNcIjtcclxuXHRmb250LWZhbWlseTogJ0dseXBoaWNvbnMgSGFsZmxpbmdzJztcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAzcHg7XHJcblx0bGVmdDogM3B4O1xyXG5cdHRvcDogM3B4O1xyXG5cdGJvdHRvbTogM3B4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAwcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uZ2FsLWl0ZW0gYTpob3ZlcjphZnRlcntcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5tb2RhbC1vcGVuIC5nYWwtY29udGFpbmVyIC5tb2RhbHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuLm1vZGFsLW9wZW4gLmdhbC1pdGVtIC5tb2RhbC1ib2R5e1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG4ubW9kYWwtb3BlbiAuZ2FsLWl0ZW0gYnV0dG9uLmNsb3Nle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcmlnaHQ6IC0xMnB4O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjM1KTtcclxuXHRib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG59XHJcbi5tb2RhbC1vcGVuIC5nYWwtaXRlbSBidXR0b24uY2xvc2U6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4ubW9kYWwtb3BlbiAuZ2FsLWl0ZW0gYnV0dG9uLmNsb3NlIHNwYW57XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogLTNweDtcclxuXHRmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHR0ZXh0LXNoYWRvdzpub25lO1xyXG59XHJcbi5nYWwtY29udGFpbmVyIC5tb2RhbC1kaWFsb2d1ZXtcclxuXHR3aWR0aDogODAlO1xyXG59XHJcbi5nYWwtY29udGFpbmVyIC5kZXNjcmlwdGlvbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHRvcDogLTQwcHg7XHJcblx0cGFkZGluZzogMTBweCAyNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5nYWwtY29udGFpbmVyIC5kZXNjcmlwdGlvbiBoNHtcclxuXHRtYXJnaW46MHB4O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5nYWwtY29udGFpbmVyIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4xKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5nYWwtY29udGFpbmVyIC5tb2RhbC5mYWRlLmluIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDBweCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDBweCwgMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4uZ2FsLWNvbnRhaW5lciAubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW46IDUwIGF1dG87XHJcbn1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5nYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIGhlaWdodDoyNTBweDtcclxuICAgIH1cclxufVxyXG4vKiBGb290ZXIgU3R5bGUgKi9cclxuaS5yZWR7XHJcbiAgICBjb2xvcjojQkMwMjEzO1xyXG59XHJcbi5nYWwtY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3AgOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjM1cHg7XHJcbn1cclxuZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmZvb3RlciBhLGZvb3RlciBhOmhvdmVye1xyXG4gICAgY29sb3I6ICM4OEM0MjU7XHJcbn1cclxuLmhoIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IzNmNTFiNTtcclxufVxyXG5cclxuLmhoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogNGVtIDBlbSAyZW07XHJcbiAgfSAgIl19 */"

/***/ }),

/***/ "./src/app/homepage/gallery/gallery.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/homepage/gallery/gallery.component.ts ***!
  \*******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/homepage/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/homepage/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HompageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HompageRoutingModule", function() { return HompageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");




var routes = [
    { path: '', component: _homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] }
];
var HompageRoutingModule = /** @class */ (function () {
    function HompageRoutingModule() {
    }
    HompageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HompageRoutingModule);
    return HompageRoutingModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <mat-toolbar color=\"primary\" class=\"nav\">\r\n      <mat-toolbar-row >\r\n        <P>FOUNDRY</P>\r\n        <span class=\"example-spacer\"></span>\r\n        <a href=\"#about\" class=\"button\">About</a>\r\n       <a href=\"#gallery\" class=\"button\">Gallery</a>\r\n       <a href=\"#footer\" class=\"button\">News</a>\r\n       <a routerLink=\"login\" class=\"button\">Login</a>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <img  src=\"http://52.26.246.107:3000/api/uploads/Home.jpg\" width=\"100%\" >\r\n  </div>\r\n  <app-mark></app-mark>\r\n<div id=\"about\">\r\n<app-about></app-about>\r\n</div>\r\n<div id=\"gallery\">\r\n<app-gallery></app-gallery>\r\n</div>\r\n<div id=\"news\">\r\n<app-news></app-news>\r\n</div>\r\n<div id=\"footer\">\r\n<app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0; }\n\nexample-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.nav {\n  background-color: #2d2d30;\n  color: fff; }\n\nhead {\n  background-color: #2d2d30;\n  font-size: 100%; }\n\ntable {\n  width: 100%; }\n\n.button {\n  margin-left: 30px;\n  color: white; }\n\nexample-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 50%; }\n\n.nav {\n  color: fff;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  font-family: Montserrat, sans-serif;\n  margin-bottom: 0;\n  background-color: #2d2d30;\n  border: 0;\n  font-size: 14px !important;\n  letter-spacing: 4px;\n  opacity: 0.9; }\n\nimg {\n  max-height: 880px; }\n\np {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcaG9tZXBhZ2VcXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULFNBQVEsRUFBQTs7QUFFVjtFQUNJLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVMsRUFBQTs7QUFFWDtFQUNFLHlCQUF5QjtFQUN6QixlQUNGLEVBQUE7O0FBQ0E7RUFDRSxXQUNGLEVBQUE7O0FBQ0E7RUFDRSxpQkFBZ0I7RUFDaEIsWUFBVyxFQUFBOztBQUliO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxVQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQUksbUNBQW1DO0VBQ2pELGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdsQjtFQUNFLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLDRDQUE0QztFQUM1QyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICB9XHJcbiAgZXhhbXBsZS1pY29uIHtcclxuICAgICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm5hdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQzMDtcclxuICAgICAgY29sb3I6ZmZmO1xyXG4gICAgfVxyXG4gICAgaGVhZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQzMDtcclxuICAgICAgZm9udC1zaXplOiAxMDAlXHJcbiAgICB9XHJcbiAgICB0YWJsZXtcclxuICAgICAgd2lkdGg6MTAwJVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbntcclxuICAgICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGV4YW1wbGUtZm9ybSB7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLm5hdiB7XHJcbiAgICAgIGNvbG9yOmZmZjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgei1pbmRleDogMTsgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQzMDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG5cclxuaW1ne1xyXG4gIG1heC1oZWlnaHQ6IDg4MHB4O1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage-routing.module */ "./src/app/homepage/homepage-routing.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/homepage/navbar/navbar.component.ts");
/* harmony import */ var _mark_mark_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mark/mark.component */ "./src/app/homepage/mark/mark.component.ts");
/* harmony import */ var ng_marquee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-marquee */ "./node_modules/ng-marquee/fesm5/ng-marquee.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/homepage/gallery/gallery.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/homepage/footer/footer.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news.component */ "./src/app/homepage/news/news.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/homepage/about/about.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");













var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _mark_mark_component__WEBPACK_IMPORTED_MODULE_6__["MarkComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _homepage_routing_module__WEBPACK_IMPORTED_MODULE_4__["HompageRoutingModule"], _app_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], ng_marquee__WEBPACK_IMPORTED_MODULE_7__["NgMarqueeModule"],
            ]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/mark/mark.component.html":
/*!***************************************************!*\
  !*** ./src/app/homepage/mark/mark.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mark\">\r\n  <ng-marquee duration=\"30\">\r\n    <mark>{{text2}}</mark>\r\n  </ng-marquee>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/mark/mark.component.scss":
/*!***************************************************!*\
  !*** ./src/app/homepage/mark/mark.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mark {\n  margin-top: 25px; }\n\n.mark {\n  width: 100%;\n  float: left;\n  margin: 2em 0em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvbWFyay9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxob21lcGFnZVxcbWFya1xcbWFyay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvbWFyay9tYXJrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLm1hcmt7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuICAubWFya3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDJlbSAwZW07XHJcbiAgfSAgIl19 */"

/***/ }),

/***/ "./src/app/homepage/mark/mark.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/mark/mark.component.ts ***!
  \*************************************************/
/*! exports provided: MarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkComponent", function() { return MarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_filee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-filee.service */ "./src/app/homepage/upload-filee.service.ts");



var MarkComponent = /** @class */ (function () {
    function MarkComponent(uploadservice) {
        this.uploadservice = uploadservice;
    }
    MarkComponent.prototype.ngOnInit = function () {
        this.mark();
    };
    MarkComponent.prototype.mark = function () {
        var _this = this;
        this.uploadservice.about().subscribe(function (data) {
            console.log(data.markque);
            _this.text2 = data.markque;
        }, function (error) {
            console.log(error);
        });
    };
    MarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mark',
            template: __webpack_require__(/*! ./mark.component.html */ "./src/app/homepage/mark/mark.component.html"),
            styles: [__webpack_require__(/*! ./mark.component.scss */ "./src/app/homepage/mark/mark.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_filee_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileeService"]])
    ], MarkComponent);
    return MarkComponent;
}());



/***/ }),

/***/ "./src/app/homepage/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <mat-toolbar color=\"primary\" class=\"nav\">\r\n    <mat-toolbar-row >\r\n      <!-- <img src=\"assets/image/img.png\"> -->\r\n      <span class=\"example-spacer\"></span>\r\n      <a routerLink=\"login\" class=\"button\">Login</a>\r\n     <a routerLink=\"gallery\" class=\"button\">Gallery</a>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <img  src=\"http://52.26.246.107:8080/api/file/Home.jpg\" width=\"100%\" >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/navbar/navbar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/homepage/navbar/navbar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/homepage/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/homepage/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/homepage/news/news.component.html":
/*!***************************************************!*\
  !*** ./src/app/homepage/news/news.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"new\">\r\n            <h1><b>News</b></h1>\r\n          </div>\r\n      <div class=\"abt_content\">\r\n  \r\n        <p> {{text}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/homepage/news/news.component.scss":
/*!***************************************************!*\
  !*** ./src/app/homepage/news/news.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginn {\n  margin-top: 5em; }\n\n.abt_content h4 {\n  font-size: 27px;\n  font-weight: 600; }\n\n.abt_content p {\n  font-size: 19px;\n  line-height: 1.5em; }\n\n.headd {\n  color: #1e3264;\n  font-size: 3em;\n  margin-bottom: 1.8em;\n  margin-top: 1.5em; }\n\n.headdd {\n  color: darkturquoise; }\n\n.abt_content {\n  padding: 4em;\n  margin-top: 3%;\n  background: linear-gradient(-45deg, #E8E8E8 5px, transparent 5px) 0 5px, linear-gradient(-45deg, #EEEEEE 5px, transparent 5px) 10px 0px, linear-gradient(-45deg, #E8E8E8 5px, transparent 5px) 0px 10px, linear-gradient(-45deg, #EEEEEE 5px, transparent 5px) 10px 5px, linear-gradient(-45deg, #EEEEEE 10px, transparent 10px), linear-gradient(#EEEEEE 25%, #E8E8E8 25%, #E8E8E8 50%, transparent 50%, transparent 75%, #EEEEEE 75%, #EEEEEE);\n  background-color: #cacaca;\n  background-size: 10px 10px;\n  margin-bottom: 3%;\n  margin-top: 0em; }\n\n.new h1 {\n  text-align: center;\n  color: #283593; }\n\n.hh h1 {\n  text-align: center;\n  color: #3f51b5; }\n\nangular-image-slider {\n  z-index: 1; }\n\n.new {\n  width: 100%;\n  float: left;\n  margin: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvbmV3cy9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxob21lcGFnZVxcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBRWYsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGNBQXdCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usb0JBQW1CLEVBQUE7O0FBR3JCO0VBRU0sWUFBVztFQUNYLGNBQWM7RUFDbEIsZ2JBQWdiO0VBQ2hiLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2lubntcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxufVxyXG4uYWJ0X2NvbnRlbnQgaDR7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5hYnRfY29udGVudCBwe1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxuICAuaGVhZGR7XHJcbiAgICBjb2xvcjpyZ2JhKDMwLDUwLDEwMCw4MCk7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuOGVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgfVxyXG4gIC5oZWFkZGR7XHJcbiAgICBjb2xvcjpkYXJrdHVycXVvaXNlO1xyXG4gIFxyXG4gIH1cclxuICAuYWJ0X2NvbnRlbnR7XHJcbiAgICBcclxuICAgICAgICBwYWRkaW5nOjRlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNFOEU4RTggNXB4LCB0cmFuc3BhcmVudCA1cHgpIDAgNXB4LCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRUVFRUVFIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMHB4IDBweCwgbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0U4RThFOCA1cHgsIHRyYW5zcGFyZW50IDVweCkgMHB4IDEwcHgsIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNFRUVFRUUgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggNXB4LCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjRUVFRUVFIDEwcHgsIHRyYW5zcGFyZW50IDEwcHgpLCBsaW5lYXItZ3JhZGllbnQoI0VFRUVFRSAyNSUsICNFOEU4RTggMjUlLCAjRThFOEU4IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCA3NSUsICNFRUVFRUUgNzUlLCAjRUVFRUVFKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gIH1cclxuICAubmV3IGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IzI4MzU5MyA7XHJcbiAgfVxyXG4gIC5oaCBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiMzZjUxYjUgO1xyXG4gIH1cclxuICBhbmd1bGFyLWltYWdlLXNsaWRlcntcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5uZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgfSAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/news/news.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/news/news.component.ts ***!
  \*************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_filee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-filee.service */ "./src/app/homepage/upload-filee.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(uploadservice) {
        this.uploadservice = uploadservice;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.news();
    };
    NewsComponent.prototype.news = function () {
        var _this = this;
        this.uploadservice.about().subscribe(function (data) {
            _this.text = data.news;
        }, function (error) {
            console.log(error);
        });
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/homepage/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/homepage/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_filee_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileeService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/homepage/upload-filee.service.ts":
/*!**************************************************!*\
  !*** ./src/app/homepage/upload-filee.service.ts ***!
  \**************************************************/
/*! exports provided: UploadFileeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileeService", function() { return UploadFileeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var UploadFileeService = /** @class */ (function () {
    function UploadFileeService(http1) {
        this.http1 = http1;
        this.baseUrl = '/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Content-type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: this.headers });
    }
    UploadFileeService.prototype.about = function () {
        return this.http1.get(this.baseUrl + '/homePages')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    UploadFileeService.prototype.news = function () {
        return this.http1.get(this.baseUrl + '/homePages/news.txt')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    UploadFileeService.prototype.mark = function () {
        return this.http1.get(this.baseUrl + '/homePages/markque.txt')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    UploadFileeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], UploadFileeService);
    return UploadFileeService;
}());



/***/ })

}]);
//# sourceMappingURL=homepage-homepage-module.js.map