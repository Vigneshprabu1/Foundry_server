(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-dynamic-report-dynamic-report-module"],{

/***/ "./src/app/foundry/report/dynamic-report/dynamic-report-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/dynamic-report-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DynamicReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportRoutingModule", function() { return DynamicReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dynamic_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-report.component */ "./src/app/foundry/report/dynamic-report/dynamic-report.component.ts");




var routes = [
    {
        path: '',
        component: _dynamic_report_component__WEBPACK_IMPORTED_MODULE_3__["DynamicReportComponent"],
    }
];
var DynamicReportRoutingModule = /** @class */ (function () {
    function DynamicReportRoutingModule() {
    }
    DynamicReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DynamicReportRoutingModule);
    return DynamicReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/report/dynamic-report/dynamic-report.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/dynamic-report.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wbr-pivot #pivot1 [toolbar]=\"true\"\r\n          [width]=\"'100%'\"\r\n          [height]=\"500\"\r\n         (reportcomplete)=\"onReportComplete()\">\r\n    WebDataRocks will appear here\r\n</wbr-pivot>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/dynamic-report/dynamic-report.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/dynamic-report.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVwb3J0L2R5bmFtaWMtcmVwb3J0L2R5bmFtaWMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/foundry/report/dynamic-report/dynamic-report.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/dynamic-report.component.ts ***!
  \***************************************************************************/
/*! exports provided: DynamicReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportComponent", function() { return DynamicReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _webdatarocks_webdatarocks_angular4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webdatarocks/webdatarocks.angular4 */ "./src/app/foundry/report/dynamic-report/webdatarocks/webdatarocks.angular4.ts");
/* harmony import */ var _dynamic_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-report.service */ "./src/app/foundry/report/dynamic-report/dynamic-report.service.ts");




var DynamicReportComponent = /** @class */ (function () {
    function DynamicReportComponent(reportService) {
        this.reportService = reportService;
    }
    DynamicReportComponent.prototype.onPivotReady = function (pivot) {
        console.log('[ready] WebDataRocksPivot', this.child);
    };
    DynamicReportComponent.prototype.ngOnInit = function () {
        this.getOngoingMelt();
    };
    DynamicReportComponent.prototype.onReportComplete = function () {
        this.child.webDataRocks.off('reportcomplete');
        this.child.webDataRocks.setReport({
            dataSource: {
                filename: 'http://52.26.246.107:3000/api/uploads/customer.json'
            }, slice: {
                rows: [
                    {
                        uniqueName: 'Date',
                        filter: {
                            members: ['Date.[Invalid date]'],
                            negation: true
                        }
                    },
                    {
                        uniqueName: 'customerName'
                    }
                ],
                columns: [
                    {
                        uniqueName: 'partId'
                    }, {
                        uniqueName: 'batchId'
                    }
                ],
                measures: [
                    {
                        uniqueName: 'meltWeight'
                    }, {
                        uniqueName: 'quantity'
                    }
                ],
            },
        });
    };
    DynamicReportComponent.prototype.getOngoingMelt = function () {
        this.reportService.getOngoing().subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pivot1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _webdatarocks_webdatarocks_angular4__WEBPACK_IMPORTED_MODULE_2__["WebDataRocksPivot"])
    ], DynamicReportComponent.prototype, "child", void 0);
    DynamicReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-report',
            template: __webpack_require__(/*! ./dynamic-report.component.html */ "./src/app/foundry/report/dynamic-report/dynamic-report.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-report.component.scss */ "./src/app/foundry/report/dynamic-report/dynamic-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dynamic_report_service__WEBPACK_IMPORTED_MODULE_3__["DynamicReportService"]])
    ], DynamicReportComponent);
    return DynamicReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/dynamic-report/dynamic-report.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/dynamic-report.module.ts ***!
  \************************************************************************/
/*! exports provided: DynamicReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportModule", function() { return DynamicReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _webdatarocks_webdatarocks_angular4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webdatarocks/webdatarocks.angular4 */ "./src/app/foundry/report/dynamic-report/webdatarocks/webdatarocks.angular4.ts");
/* harmony import */ var _dynamic_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-report.component */ "./src/app/foundry/report/dynamic-report/dynamic-report.component.ts");
/* harmony import */ var _dynamic_report_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-report-routing.module */ "./src/app/foundry/report/dynamic-report/dynamic-report-routing.module.ts");
/* harmony import */ var _dynamic_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-report.service */ "./src/app/foundry/report/dynamic-report/dynamic-report.service.ts");










var DynamicReportModule = /** @class */ (function () {
    function DynamicReportModule() {
    }
    DynamicReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dynamic_report_component__WEBPACK_IMPORTED_MODULE_6__["DynamicReportComponent"], _webdatarocks_webdatarocks_angular4__WEBPACK_IMPORTED_MODULE_5__["WebDataRocksPivot"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _dynamic_report_routing_module__WEBPACK_IMPORTED_MODULE_7__["DynamicReportRoutingModule"]
            ],
            providers: [
                _dynamic_report_service__WEBPACK_IMPORTED_MODULE_8__["DynamicReportService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], DynamicReportModule);
    return DynamicReportModule;
}());



/***/ }),

/***/ "./src/app/foundry/report/dynamic-report/dynamic-report.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/dynamic-report.service.ts ***!
  \*************************************************************************/
/*! exports provided: DynamicReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportService", function() { return DynamicReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DynamicReportService = /** @class */ (function () {
    function DynamicReportService(http) {
        this.http = http;
        this.baseUrl = 'api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    DynamicReportService.prototype.getOngoingMelts = function () {
        return this.http.get(this.baseUrl + '/onGoingMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    DynamicReportService.prototype.getOngoing = function () {
        return this.http.get(this.baseUrl + '/onGoingMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    DynamicReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DynamicReportService);
    return DynamicReportService;
}());



/***/ }),

/***/ "./src/app/foundry/report/dynamic-report/webdatarocks/webdatarocks.angular4.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/report/dynamic-report/webdatarocks/webdatarocks.angular4.ts ***!
  \*************************************************************************************/
/*! exports provided: WebDataRocksPivot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDataRocksPivot", function() { return WebDataRocksPivot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebDataRocksPivot = /** @class */ (function () {
    function WebDataRocksPivot(el) {
        // events
        this.cellclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.celldoubleclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataerror = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.datafilecancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.datachanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fieldslistclose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fieldslistopen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filteropen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingdata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadinglocalization = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingreportfile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.localizationerror = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.localizationloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openingreportfile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.querycomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.queryerror = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportchange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportcomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportfilecancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportfileerror = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportfileloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.runningquery = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforetoolbarcreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.aftergriddraw = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforegriddraw = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.root = el.nativeElement;
    }
    WebDataRocksPivot.prototype.ngOnInit = function () {
        var _this = this;
        this.webDataRocks = window['WebDataRocks']({
            container: this.root.getElementsByClassName('wbr-ng-wrapper')[0],
            width: this.width,
            height: this.height,
            toolbar: this.toolbar,
            report: this.report,
            global: this.global,
            customizeCell: this.customizeCell,
            cellclick: function (cell) { return _this.cellclick.next(cell); },
            celldoubleclick: function (cell) { return _this.celldoubleclick.next(cell); },
            dataerror: function (event) { return _this.dataerror.next(event); },
            datafilecancelled: function (event) { return _this.datafilecancelled.next(event); },
            dataloaded: function (event) { return _this.dataloaded.next(event); },
            datachanged: function (event) { return _this.datachanged.next(event); },
            fieldslistclose: function (event) { return _this.fieldslistclose.next(event); },
            fieldslistopen: function (event) { return _this.fieldslistopen.next(event); },
            filteropen: function (event) { return _this.filteropen.next(event); },
            fullscreen: function (event) { return _this.fullscreen.next(event); },
            loadingdata: function (event) { return _this.loadingdata.next(event); },
            loadinglocalization: function (event) { return _this.loadinglocalization.next(event); },
            loadingreportfile: function (event) { return _this.loadingreportfile.next(event); },
            localizationerror: function (event) { return _this.localizationerror.next(event); },
            localizationloaded: function (event) { return _this.localizationloaded.next(event); },
            openingreportfile: function (event) { return _this.openingreportfile.next(event); },
            querycomplete: function (event) { return _this.querycomplete.next(event); },
            queryerror: function (event) { return _this.queryerror.next(event); },
            ready: function () { return _this.ready.next(_this.webDataRocks); },
            reportchange: function (event) { return _this.reportchange.next(event); },
            reportcomplete: function (event) { return _this.reportcomplete.next(event); },
            reportfilecancelled: function (event) { return _this.reportfilecancelled.next(event); },
            reportfileerror: function (event) { return _this.reportfileerror.next(event); },
            reportfileloaded: function (event) { return _this.reportfileloaded.next(event); },
            runningquery: function (event) { return _this.runningquery.next(event); },
            update: function (event) { return _this.update.next(event); },
            beforetoolbarcreated: function (toolbar) { return _this.beforetoolbarcreated.next(toolbar); },
            aftergriddraw: function (event) { return _this.aftergriddraw.next(event); },
            beforegriddraw: function (event) { return _this.beforegriddraw.next(event); }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WebDataRocksPivot.prototype, "toolbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WebDataRocksPivot.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WebDataRocksPivot.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WebDataRocksPivot.prototype, "report", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WebDataRocksPivot.prototype, "global", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], WebDataRocksPivot.prototype, "customizeCell", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "cellclick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "celldoubleclick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "dataerror", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "datafilecancelled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "dataloaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "datachanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "fieldslistclose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "fieldslistopen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "filteropen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "fullscreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "loadingdata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "loadinglocalization", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "loadingreportfile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "localizationerror", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "localizationloaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "openingreportfile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "querycomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "queryerror", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "ready", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "reportchange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "reportcomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "reportfilecancelled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "reportfileerror", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "reportfileloaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "runningquery", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "beforetoolbarcreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "aftergriddraw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebDataRocksPivot.prototype, "beforegriddraw", void 0);
    WebDataRocksPivot = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wbr-pivot',
            template: "<div><div class='wbr-ng-wrapper'></div></div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], WebDataRocksPivot);
    return WebDataRocksPivot;
}());



/***/ })

}]);
//# sourceMappingURL=report-dynamic-report-dynamic-report-module.js.map