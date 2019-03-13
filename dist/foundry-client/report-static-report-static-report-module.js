(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-static-report-static-report-module"],{

/***/ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" style=\"margin-left:20px; margin-top: 30px; margin-right: 20px;\">\r\n  <mat-card-header>\r\n    <mat-card-title>Filter</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"CustomerName\" aria-label=\"CustomerName\" name=\"CustomerName\" [(ngModel)]=\"delivery.customerName\"\r\n            matInput [formControl]=\"customerControl\" [matAutocomplete]=\"auto1\">\r\n          <mat-autocomplete autoActiveFirstOption #auto1=\"matAutocomplete\" (optionSelected)=\"getCustomer()\">\r\n            <mat-option *ngFor=\"let customer of filteredCustomers | async\" [value]=\"customer.customerName\">\r\n              {{customer.customerName}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"Order Id\" aria-label=\"OrderId\" name=\"OrderId\" [(ngModel)]=\"delivery.orderId\"\r\n            matInput [formControl]=\"OrderControl\" [matAutocomplete]=\"auto2\">\r\n          <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\" (optionSelected)=\"getOrderId()\">\r\n            <mat-option *ngFor=\"let order of filteredOrderId | async\" [value]=\"order.orderId\">\r\n              {{order.orderId}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"Melt No\" aria-label=\"meltNo\" name=\"meltNo\" [(ngModel)]=\"delivery.meltNo\"\r\n            matInput [formControl]=\"meltControl\" [matAutocomplete]=\"auto3\">\r\n          <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\" (optionSelected)=\"getMeltNo()\">\r\n            <mat-option *ngFor=\"let melt of filteredMelts | async\" [value]=\"melt.meltNo\">\r\n              {{melt.meltNo}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"From date\" name=\"FromDate\" [(ngModel)]=\"delivery.fromDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"End date\" name=\"toDate\" [(ngModel)]=\"delivery.toDate\"\r\n            (ngModelChange)=\"getDeliveryReport()\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker3></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/deliveryCompleteds/deliveryXlsx\" target=\"_block\">EXCEL</a>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/deliveryCompleteds/deliveryPdf\" target=\"_block\">PDF</a>\r\n        </button>\r\n    </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div class=\"mat-elevation-z8\" style=\"margin-left:20px; margin-top: 50px; margin-right: 20px; margin-bottom: 10px;\">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- CustomerName Column -->\r\n    <ng-container matColumnDef=\"customerName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CustomerName </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\">{{dlivery.customerName}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- PartId Column -->\r\n    <ng-container matColumnDef=\"partId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> PartId </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.partId}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Order Id -->\r\n    <ng-container matColumnDef=\"orderId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Order Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.orderId}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Order Date -->\r\n    <ng-container matColumnDef=\"orderDate\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.orderDate | date:'MMM d, y'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Order Date -->\r\n    <ng-container matColumnDef=\"deliveryDate\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Delivery Date</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.deliveryDate | date:'MMM d, y'}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <!-- MeltNo Column -->\r\n    <ng-container matColumnDef=\"meltNo\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>MeltNo</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.meltNo}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- BatchId Column -->\r\n    <ng-container matColumnDef=\"batchId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>BatchId</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.batchId}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- PartWeight Column -->\r\n    <ng-container matColumnDef=\"partWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> partWeight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.partWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Quantity Column -->\r\n    <ng-container matColumnDef=\"quantity\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.quantity}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- MouldProduced Column -->\r\n    <ng-container matColumnDef=\"roughCastingWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Rough Casting Weight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.roughCastingWeight}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- MouldProduced Column -->\r\n    <ng-container matColumnDef=\"totalWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Total Weight</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.totalWeight}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- MouldProduced Column -->\r\n    <ng-container matColumnDef=\"yieldPercentage\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Yield Percentage</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.yieldPercentage}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Return Weight Column -->\r\n    <ng-container matColumnDef=\"returnWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Return Weight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.retrunWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Rejection Weight  Column -->\r\n    <ng-container matColumnDef=\"rejectionWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Rejection Weight</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.rejectionWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n     <!-- Rejection Percentage  Column -->\r\n     <ng-container matColumnDef=\"rejectionPercentage\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Rejection Percentage</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let dlivery\"> {{dlivery.rejectionPercentage}} </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let dlivery; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\nmat-cell {\n  width: 25%;\n  font-family: 'Times New Roman', Times, serif; }\n\nmat-header-cell {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 14px;\n  width: 25%;\n  color: #6200EE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9kZWxpdmVyeS1jb21wbGV0ZWQtcmVwb3J0L0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHJlcG9ydFxcc3RhdGljLXJlcG9ydFxcZGVsaXZlcnktY29tcGxldGVkLXJlcG9ydFxcZGVsaXZlcnktY29tcGxldGVkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLFdBQ0YsRUFBQTs7QUFFQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDViw0Q0FBNEMsRUFBQTs7QUFFOUM7RUFDSSw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLFVBQVU7RUFDVixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L3JlcG9ydC9zdGF0aWMtcmVwb3J0L2RlbGl2ZXJ5LWNvbXBsZXRlZC1yZXBvcnQvZGVsaXZlcnktY29tcGxldGVkLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2VsbHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGNvbG9yOiM2MjAwRUU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DeliveryCompletedReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryCompletedReportComponent", function() { return DeliveryCompletedReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var _delivery_completed_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-completed-report */ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");









var DeliveryCompletedReportComponent = /** @class */ (function () {
    function DeliveryCompletedReportComponent(staticReportService, customerService, productionService) {
        this.staticReportService = staticReportService;
        this.customerService = customerService;
        this.productionService = productionService;
        this.customerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.OrderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.meltControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.OrderDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.displayedColumns = ['customerName', 'partId', 'orderId', 'orderDate', 'deliveryDate', 'meltNo', 'batchId',
            'partWeight', 'quantity', 'roughCastingWeight', 'totalWeight', 'yieldPercentage', 'returnWeight', 'rejectionWeight', 'rejectionPercentage'];
        this.Option = [{ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' }];
    }
    DeliveryCompletedReportComponent.prototype.ngOnInit = function () {
        this.delivery = new _delivery_completed_report__WEBPACK_IMPORTED_MODULE_3__["DeliveryCompletedReport"]();
        this.getAllDeliverCompletedReport();
        this.getFilterCustomer();
        this.getFilterOrder();
        this.getFilterMelt();
    };
    DeliveryCompletedReportComponent.prototype.getAllDeliverCompletedReport = function () {
        var _this = this;
        this.staticReportService.getAllDeliveryCompletedReport().subscribe(function (data) {
            _this.deliveryReports = data;
            console.log('all', _this.deliveryReports);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.deliveryReports);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype.getFilterCustomer = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (data) {
            _this.custmer = data;
            console.log(_this.custmer);
            _this.filteredCustomers = _this.customerControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterCustomer(state) : _this.custmer.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype.getFilterOrder = function () {
        var _this = this;
        this.productionService.getUnscheduledMeltsAll().subscribe(function (data) {
            _this.scheduledMelts = data;
            _this.filteredOrderId = _this.OrderControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterOrder(state) : _this.scheduledMelts.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype.getFilterMelt = function () {
        var _this = this;
        this.productionService.getAllMelt().subscribe(function (data) {
            _this.melt = data;
            console.log('melt', _this.melt);
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melt.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype._filterCustomer = function (value) {
        var filerValue = value.toLowerCase();
        return this.custmer.filter(function (customer) { return customer.customerName.toLowerCase().indexOf(filerValue) === 0; });
    };
    DeliveryCompletedReportComponent.prototype._filterOrder = function (value) {
        var filerValue = value.toLocaleString();
        return this.scheduledMelts.filter(function (melts) { return melts.orderId.toLocaleString().indexOf(filerValue) === 0; });
    };
    DeliveryCompletedReportComponent.prototype._filterMelt = function (value) {
        var filerValue = value.toLowerCase();
        return this.melt.filter(function (melts) { return melts.meltNo.toLowerCase().indexOf(filerValue) === 0; });
    };
    DeliveryCompletedReportComponent.prototype.getDeliveryReport = function () {
        var _this = this;
        this.staticReportService.getDeliveryCompletedReport(this.delivery).subscribe(function (data) {
            _this.deliveryReports = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.deliveryReports);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype.getCustomer = function () {
        var _this = this;
        this.productionService.getUnscheduledMeltsOrderId(this.delivery.customerName).subscribe(function (data) {
            _this.scheduledMelts = data;
            _this.filteredOrderId = _this.OrderControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterOrder(state) : _this.scheduledMelts.slice(); }));
        }, function (error) {
            console.log(error);
        });
        this.productionService.getOngoingMeltNo(this.delivery).subscribe(function (data) {
            _this.ongoingMelts = data;
            var i = 0;
            _this.ongoingMelts.forEach(function (res) {
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melt = _this.Option;
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melt.slice(); }));
            _this.getDeliveryReport();
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype.getOrderId = function () {
        var _this = this;
        this.productionService.getOngoingMeltNo(this.delivery).subscribe(function (data) {
            _this.ongoingMelts = data;
            var i = 0;
            _this.ongoingMelts.forEach(function (res) {
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melt = _this.Option;
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melt.slice(); }));
            _this.getDeliveryReport();
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryCompletedReportComponent.prototype.getMeltNo = function () {
        this.getDeliveryReport();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], DeliveryCompletedReportComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], DeliveryCompletedReportComponent.prototype, "sort", void 0);
    DeliveryCompletedReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-completed-report',
            template: __webpack_require__(/*! ./delivery-completed-report.component.html */ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.html"),
            styles: [__webpack_require__(/*! ./delivery-completed-report.component.scss */ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_static_report_service__WEBPACK_IMPORTED_MODULE_2__["StaticReportService"], _customer_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
            _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_8__["ProductionMonitoringService"]])
    ], DeliveryCompletedReportComponent);
    return DeliveryCompletedReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DeliveryCompletedReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryCompletedReport", function() { return DeliveryCompletedReport; });
var DeliveryCompletedReport = /** @class */ (function () {
    function DeliveryCompletedReport() {
    }
    return DeliveryCompletedReport;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  delivery-pending-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVwb3J0L3N0YXRpYy1yZXBvcnQvZGVsaXZlcnktcGVuZGluZy1yZXBvcnQvZGVsaXZlcnktcGVuZGluZy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DeliveryPendingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPendingReportComponent", function() { return DeliveryPendingReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryPendingReportComponent = /** @class */ (function () {
    function DeliveryPendingReportComponent() {
    }
    DeliveryPendingReportComponent.prototype.ngOnInit = function () {
    };
    DeliveryPendingReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-pending-report',
            template: __webpack_require__(/*! ./delivery-pending-report.component.html */ "./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.html"),
            styles: [__webpack_require__(/*! ./delivery-pending-report.component.scss */ "./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryPendingReportComponent);
    return DeliveryPendingReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/melt-report/melt-report.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/melt-report/melt-report.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" style=\"margin-left:20px; margin-top: 30px; margin-right: 20px;\">\r\n  <mat-card-header>\r\n    <mat-card-title>Filter</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"CustomerName\" aria-label=\"CustomerName\" name=\"CustomerName\" matInput\r\n            [formControl]=\"customerControl\" [matAutocomplete]=\"auto1\" [(ngModel)]=\"meltReport.customerName\">\r\n          <mat-autocomplete autoActiveFirstOption #auto1=\"matAutocomplete\" (optionSelected)=\"getPartIdReportByCustomerName(meltReport)\">\r\n            <mat-option *ngFor=\"let customer of filteredCustomers | async\" [value]=\"customer.customerName\">\r\n              {{customer.customerName}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"partId\" aria-label=\"partId\" name=\"partId\" matInput [formControl]=\"productControl\"\r\n            [matAutocomplete]=\"auto2\" [(ngModel)]=\"meltReport.partId\">\r\n          <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\" (optionSelected)=\"getMeltNoReportByPartId(meltReport)\">\r\n            <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product.partId\">\r\n              {{product.partId}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"meltNo\" aria-label=\"meltNo\" name=\"meltNo\" matInput [formControl]=\"meltControl\"\r\n            [matAutocomplete]=\"auto3\" [(ngModel)]=\"meltReport.meltNo\">\r\n          <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\" (optionSelected)=\"getSelectedReport(meltReport)\">\r\n            <mat-option *ngFor=\"let melt of filteredMelts | async\" [value]=\"melt.meltNo\">\r\n              {{melt.meltNo}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"From date\" name=\"FromDate\" [(ngModel)]=\"meltReport.fromDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date\" name=\"toDate\" [(ngModel)]=\"meltReport.toDate\"\r\n            (ngModelChange)=\"getSelectedReport(meltReport)\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/meltReports/meltReportXlsx\" target=\"_block\">EXCEL</a>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/meltReports/meltReportPdf\" target=\"_block\">PDF</a>\r\n        </button>\r\n    </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div class=\"mat-elevation-z8\" style=\"margin-left:20px; margin-top: 50px; margin-right: 20px; margin-bottom: 10px;\">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- meltDate -->\r\n    <ng-container matColumnDef=\"meltDate\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>MeltDate</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.meltDate | date:'MMM d, y'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- MeltNo Column -->\r\n    <ng-container matColumnDef=\"meltNo\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>MeltNo</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.meltNo}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- BatchId Column -->\r\n    <ng-container matColumnDef=\"batchId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>BatchId</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.batchId}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- CustomerName Column -->\r\n    <ng-container matColumnDef=\"customerName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CustomerName </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.customerName}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- PartId Column -->\r\n    <ng-container matColumnDef=\"partId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> PartId </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.partId}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- PartWeight Column -->\r\n    <ng-container matColumnDef=\"partWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> partWeight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.partWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Quantity Column -->\r\n    <ng-container matColumnDef=\"quantity\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.quantity}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- roughCastingWeight Column -->\r\n    <ng-container matColumnDef=\"roughCastingWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> RoughCastingWeight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.roughCastingWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- yieldPercentage Column -->\r\n    <ng-container matColumnDef=\"yieldPercentage\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Yield </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.yieldPercentage}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- TotalWeight Column -->\r\n    <ng-container matColumnDef=\"totalWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> TotalWeight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let melt\"> {{melt.totalWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let melt; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/melt-report/melt-report.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/melt-report/melt-report.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n  text-align: center; }\n\nmat-header-cell {\n  font-size: 16px;\n  font: outline;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: bold;\n  color: #6200EE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9tZWx0LXJlcG9ydC9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxyZXBvcnRcXHN0YXRpYy1yZXBvcnRcXG1lbHQtcmVwb3J0XFxtZWx0LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw0Q0FBMkM7RUFDNUMsaUJBQWlCO0VBQ2pCLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVwb3J0L3N0YXRpYy1yZXBvcnQvbWVsdC1yZXBvcnQvbWVsdC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWhlYWRlci1jZWxse1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250OiBvdXRsaW5lO1xyXG4gIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxuIGNvbG9yOiM2MjAwRUU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/melt-report/melt-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/melt-report/melt-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MeltReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeltReportComponent", function() { return MeltReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _melt_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./melt-report */ "./src/app/foundry/report/static-report/melt-report/melt-report.ts");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../product/product.service */ "./src/app/foundry/product/product.service.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../order/order.service */ "./src/app/foundry/order/order.service.ts");











var MeltReportComponent = /** @class */ (function () {
    function MeltReportComponent(staticReportService, customerService, productionService, productService, orderService) {
        this.staticReportService = staticReportService;
        this.customerService = customerService;
        this.productionService = productionService;
        this.productService = productService;
        this.orderService = orderService;
        this.customerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.productControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.meltControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.batchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.displayedColumns = ['meltDate', 'meltNo', 'batchId', 'customerName', 'partId',
            'partWeight', 'quantity', 'roughCastingWeight', 'totalWeight'];
        this.Option = [{ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' }];
    }
    MeltReportComponent.prototype.ngOnInit = function () {
        this.meltReport = new _melt_report__WEBPACK_IMPORTED_MODULE_2__["MeltReport"]();
        this.getAllMeltReports();
        this.getFilterCustomer();
        this.getFilterMelt();
        this.getFilterProduct();
    };
    MeltReportComponent.prototype.getAllMeltReports = function () {
        var _this = this;
        console.log('getAllMeltReports');
        this.staticReportService.getMeltReports().subscribe(function (data) {
            console.log('data', data);
            _this.meltReports = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.meltReports);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log('error');
        });
    };
    MeltReportComponent.prototype.getFilterCustomer = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (data) {
            _this.customers = data;
            _this.filteredCustomers = _this.customerControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterCustomer(state) : _this.customers.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    MeltReportComponent.prototype.getFilterMelt = function () {
        var _this = this;
        this.productionService.getAllMelt().subscribe(function (data) {
            _this.melts = data;
            console.log(_this.melts);
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    MeltReportComponent.prototype.getFilterProduct = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.filteredProducts = _this.productControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterProduct(state) : _this.products.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    MeltReportComponent.prototype._filterCustomer = function (value) {
        var filerValue = value.toLowerCase();
        return this.customers.filter(function (melts) { return melts.customerName.toLowerCase().indexOf(filerValue) === 0; });
    };
    MeltReportComponent.prototype._filterMelt = function (value) {
        var filerValue = value.toLowerCase();
        return this.melts.filter(function (melts) { return melts.meltNo.toLowerCase().indexOf(filerValue) === 0; });
    };
    MeltReportComponent.prototype._filterProduct = function (value) {
        var filerValue = value.toLowerCase();
        return this.products.filter(function (melts) { return melts.partId.toLowerCase().indexOf(filerValue) === 0; });
    };
    MeltReportComponent.prototype.getSelectedReport = function (meltReport) {
        var _this = this;
        // this.meltReport.fromDate = fromDate;
        //this.meltReport.toDate = toDate;
        this.staticReportService.meltSelectedReport(this.meltReport).subscribe(function (data) {
            console.log('data', data);
            _this.meltReports1 = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.meltReports1);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    MeltReportComponent.prototype.getPartIdReportByCustomerName = function (meltReport) {
        //this.meltReport.chosenCustName = meltReport.chosenCustName;
        var _this = this;
        this.productionService.getPartIdByCustomerName(this.meltReport.customerName).subscribe(function (data) {
            _this.products = data;
            _this.filteredProducts = _this.productControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterProduct(state) : _this.products.slice(); }));
            console.log('this.products', _this.products);
            _this.ongoingmelts = data;
            var i = 0;
            _this.ongoingmelts.forEach(function (res) {
                //console.log(' res.meltId.meltNo', res.meltId.meltNo)
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                console.log('this.Option[i].meltNo', _this.Option[i].meltNo);
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melts = _this.Option;
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
        });
        this.getSelectedReport(meltReport);
    };
    MeltReportComponent.prototype.getMeltNoReportByPartId = function (meltReport) {
        var _this = this;
        console.log('getMeltNoReportByPartId');
        this.productionService.getMeltNoReportByPartId(meltReport).subscribe(function (data) {
            console.log('data ss', data);
            _this.ongoingmelts = data;
            var i = 0;
            _this.ongoingmelts.forEach(function (res) {
                //console.log(' res.meltId.meltNo', res.meltId.meltNo)
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                console.log('this.Option[i].meltNo', _this.Option[i].meltNo);
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melts = _this.Option;
            console.log('this.melts', _this.melts);
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
        }, function (error) {
            console.log(error);
        });
        this.getSelectedReport(meltReport);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MeltReportComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MeltReportComponent.prototype, "sort", void 0);
    MeltReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-melt-report',
            template: __webpack_require__(/*! ./melt-report.component.html */ "./src/app/foundry/report/static-report/melt-report/melt-report.component.html"),
            styles: [__webpack_require__(/*! ./melt-report.component.scss */ "./src/app/foundry/report/static-report/melt-report/melt-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_static_report_service__WEBPACK_IMPORTED_MODULE_3__["StaticReportService"], _customer_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
            _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_8__["ProductionMonitoringService"], _product_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
            _order_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]])
    ], MeltReportComponent);
    return MeltReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/melt-report/melt-report.ts":
/*!*************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/melt-report/melt-report.ts ***!
  \*************************************************************************/
/*! exports provided: MeltReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeltReport", function() { return MeltReport; });
var MeltReport = /** @class */ (function () {
    function MeltReport() {
    }
    return MeltReport;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/order-report/order-report.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/order-report/order-report.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  order-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/order-report/order-report.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/order-report/order-report.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVwb3J0L3N0YXRpYy1yZXBvcnQvb3JkZXItcmVwb3J0L29yZGVyLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/order-report/order-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/order-report/order-report.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrderReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReportComponent", function() { return OrderReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderReportComponent = /** @class */ (function () {
    function OrderReportComponent() {
    }
    OrderReportComponent.prototype.ngOnInit = function () {
    };
    OrderReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-report',
            template: __webpack_require__(/*! ./order-report.component.html */ "./src/app/foundry/report/static-report/order-report/order-report.component.html"),
            styles: [__webpack_require__(/*! ./order-report.component.scss */ "./src/app/foundry/report/static-report/order-report/order-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderReportComponent);
    return OrderReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/purchase-report/purchase-report.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/purchase-report/purchase-report.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-left: 20px;margin-right: 20px;margin-top: 30px\">\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                  <div *ngFor=\"let item of itemList;let i=index\">\r\n                  <section class=\"example-section\" *ngIf=\"item.itemType=='RawMaterial'\">\r\n                      <mat-checkbox class=\"example-margin\" (change)=\"onChange($event,item.itemName)\">{{item.itemName}}</mat-checkbox>\r\n                    </section>\r\n                    </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <div *ngFor=\"let item of itemList;let i=index\">\r\n                    <section class=\"example-section\" *ngIf=\"item.itemType=='Consumable'\">\r\n                        <mat-checkbox class=\"example-margin\" (change)=\"onChange($event,item.itemName)\">{{item.itemName}}</mat-checkbox>\r\n                      </section>\r\n                </div>\r\n                </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Type\" [(ngModel)]=\"reportName\">\r\n            <mat-option value=\"MONTHLY\">Monthly</mat-option>\r\n            <!-- <mat-option value=\"QUARTS\">Quarts</mat-option> -->\r\n            <mat-option value=\"YEARLY\">Yearly</mat-option>\r\n            <mat-option value=\"CUSTOMIZE\">Customize</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportName=='MONTHLY'\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Year\" [(ngModel)]=\"years\">\r\n            <mat-option *ngFor=\"let years of year\" [value]=\"years\">\r\n              {{years}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-1\" *ngIf=\"reportName=='CUSTOMIZE'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"fromDate\" [matDatepicker]=\"picker\" name=\"fromDate\" [(ngModel)]=\"fromDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-1\" *ngIf=\"reportName=='CUSTOMIZE'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"toDate\" [matDatepicker]=\"picker1\" name=\"toDate\" [(ngModel)]=\"toDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-mini-fab color=\"primary\" (click)=\"searchPurchaseReport()\">\r\n          <mat-icon>search</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/purchaseReports/purchaseXlsx\" target=\"_block\">EXCEL</a>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/purchaseReports/purchasePdf\" target=\"_block\">PDF</a>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\" *ngIf=\"report==undefined || report=='yearly'\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"year\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.year}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalAmount\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.totalAmount}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<!--Monthly wise-->\r\n<div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\" *ngIf=\"report=='monthly'\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"monthly\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Month </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.monthly}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"year\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.year}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalAmount\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.totalAmount}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumn1\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumn1;\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<!--Customize -->\r\n<div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\" *ngIf=\"report=='customize'\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"orderDate\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Date </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.orderDate | date:'MMM d, y'}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalAmount\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.totalAmount}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumn2\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumn2;\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/purchase-report/purchase-report.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/purchase-report/purchase-report.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 30%;\n  margin-top: 50px; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px; }\n\nbutton {\n  margin-left: 15px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd {\n  width: 25%;\n  font-family: 'Times New Roman', Times, serif; }\n\nth {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  width: 25%;\n  color: #6200EE; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9wdXJjaGFzZS1yZXBvcnQvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxccmVwb3J0XFxzdGF0aWMtcmVwb3J0XFxwdXJjaGFzZS1yZXBvcnRcXHB1cmNoYXNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWUsRUFBQTs7QUFFbkI7RUFDQSxpQkFBaUIsRUFBQTs7QUFFakI7RUFDSSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLDRDQUE0QyxFQUFBOztBQUU5QztFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWEsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9wdXJjaGFzZS1yZXBvcnQvcHVyY2hhc2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuYnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRke1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIH1cclxuICB0aHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgY29sb3I6IzYyMDBFRTtcclxuICB9XHJcbiAgLmV4YW1wbGUtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/purchase-report/purchase-report.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/purchase-report/purchase-report.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PurchaseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseReportComponent", function() { return PurchaseReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_foundry_items_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/foundry/items/items.service */ "./src/app/foundry/items/items.service.ts");
/* harmony import */ var src_app_foundry_items_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/foundry/items/items */ "./src/app/foundry/items/items.ts");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var _purchase_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-report */ "./src/app/foundry/report/static-report/purchase-report/purchase-report.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");








var PurchaseReportComponent = /** @class */ (function () {
    function PurchaseReportComponent(itemService, staticReportService, notifierService) {
        this.itemService = itemService;
        this.staticReportService = staticReportService;
        this.selectedItem = [];
        this.purchaseReport = [];
        this.year = [];
        this.displayedColumns = ['itemName', 'year', 'weight', 'totalAmount'];
        this.displayedColumn1 = ['monthly', 'itemName', 'year', 'weight', 'totalAmount'];
        this.displayedColumn2 = ['orderDate', 'itemName', 'weight', 'totalAmount'];
        this.notifier = notifierService;
    }
    PurchaseReportComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.getAllYears();
        this.getAllPurchaseList();
        this.items = new src_app_foundry_items_items__WEBPACK_IMPORTED_MODULE_3__["Items"]();
        this.purchaseReports = new _purchase_report__WEBPACK_IMPORTED_MODULE_5__["PurchaseReport"]();
    };
    PurchaseReportComponent.prototype.getAllItems = function () {
        var _this = this;
        this.itemService.getAllItems().subscribe(function (data) {
            _this.itemList = data;
        }, function (err) {
            console.log(err);
        });
    };
    PurchaseReportComponent.prototype.onChange = function (event, itemName) {
        var _this = this;
        if (event.checked) {
            this.selectedItem.push(itemName);
        }
        else {
            var i_1 = 0;
            this.selectedItem.forEach(function (res) {
                if (res == itemName) {
                    _this.selectedItem.splice(i_1, 1);
                }
                i_1++;
            });
        }
    };
    PurchaseReportComponent.prototype.searchPurchaseReport = function () {
        var _this = this;
        var option = [{ month: '', itemName: '', year: '', weight: '', totalAmount: '' }];
        var option1 = [{ itemName: '', year: '', weight: '', totalAmount: '' }];
        var option2 = [{ orderDate: '', itemName: '', weight: '', totalAmount: '' }];
        this.purchaseReports.year = this.years;
        this.purchaseReports.itemName = this.selectedItem.toString();
        this.purchaseReports.reportType = this.reportName;
        this.purchaseReports.fromDate = this.fromDate;
        this.purchaseReports.toDate = this.toDate;
        this.staticReportService.searchPurchaseReport(this.purchaseReports).subscribe(function (data) {
            _this.purchaseReport = data;
            if (_this.reportName === 'YEARLY') {
                _this.report = 'yearly';
            }
            else if (_this.reportName === 'MONTHLY') {
                _this.report = 'monthly';
            }
            else if (_this.reportName === 'CUSTOMIZE') {
                _this.report = 'customize';
            }
            if (_this.selectedItem.length >= 1) {
                var i_2 = 0;
                _this.selectedItem.forEach(function (res) {
                    _this.purchaseReport.forEach(function (response) {
                        if (response.itemName === res) {
                            if (_this.reportName === 'MONTHLY') {
                                option[i_2].month = response.month;
                                option[i_2].itemName = response.itemName;
                                option[i_2].weight = response.weight;
                                option[i_2].year = response.year;
                                option[i_2].totalAmount = response.totalAmount;
                                option.push({ month: '', itemName: '', year: '', weight: '', totalAmount: '' });
                                i_2++;
                            }
                            else if (_this.reportName === 'YEARLY') {
                                option1[i_2].itemName = response.itemName;
                                option1[i_2].weight = response.weight;
                                option1[i_2].year = response.year;
                                option1[i_2].totalAmount = response.totalAmount;
                                option1.push({ itemName: '', year: '', weight: '', totalAmount: '' });
                                i_2++;
                            }
                            else if (_this.reportName === 'CUSTOMIZE') {
                                option2[i_2].orderDate = response.orderDate;
                                option2[i_2].itemName = response.itemName;
                                option2[i_2].weight = response.weight;
                                option2[i_2].totalAmount = response.totalAmount;
                                option2.push({ orderDate: '', itemName: '', weight: '', totalAmount: '' });
                                i_2++;
                            }
                        }
                    });
                });
                if (_this.reportName === 'MONTHLY') {
                    option.pop();
                    _this.purchaseReport = option;
                }
                else if (_this.reportName === 'YEARLY') {
                    option1.pop();
                    _this.purchaseReport = option1;
                }
                else if (_this.reportName === 'CUSTOMIZE') {
                    option2.pop();
                    _this.purchaseReport = option2;
                }
            }
            if (_this.purchaseReport.length == 0) {
                _this.notifier.notify('warning', 'No data Available!');
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.purchaseReport);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    PurchaseReportComponent.prototype.getAllYears = function () {
        var _this = this;
        this.staticReportService.getAllYears().subscribe(function (data) {
            _this.year = data;
        }, function (err) {
            console.log(err);
        });
    };
    PurchaseReportComponent.prototype.getAllPurchaseList = function () {
        var _this = this;
        this.staticReportService.getAllPurchaseList().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], PurchaseReportComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], PurchaseReportComponent.prototype, "sort", void 0);
    PurchaseReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-report',
            template: __webpack_require__(/*! ./purchase-report.component.html */ "./src/app/foundry/report/static-report/purchase-report/purchase-report.component.html"),
            styles: [__webpack_require__(/*! ./purchase-report.component.scss */ "./src/app/foundry/report/static-report/purchase-report/purchase-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_foundry_items_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"], _static_report_service__WEBPACK_IMPORTED_MODULE_4__["StaticReportService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
    ], PurchaseReportComponent);
    return PurchaseReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/purchase-report/purchase-report.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/purchase-report/purchase-report.ts ***!
  \*********************************************************************************/
/*! exports provided: PurchaseReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseReport", function() { return PurchaseReport; });
var PurchaseReport = /** @class */ (function () {
    function PurchaseReport() {
    }
    return PurchaseReport;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" style=\"margin-left:20px; margin-top: 30px; margin-right: 20px;\">\r\n  <mat-card-header>\r\n    <mat-card-title>Filter</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"partId\" aria-label=\"partId\" name=\"partId\" matInput [formControl]=\"productControl\"\r\n            [matAutocomplete]=\"auto2\" [(ngModel)]=\"rawMaterial.partId\">\r\n          <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\" (optionSelected)=\"getMeltNoOrderIdBypartId(rawMaterial)\">\r\n            <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product.partId\">\r\n              {{product.partId}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"Order No\" aria-label=\"orderNo\" name=\"orderNo\" matInput [formControl]=\"orderControl\"\r\n            [matAutocomplete]=\"auto4\" [(ngModel)]=\"rawMaterial.orderId\">\r\n          <mat-autocomplete autoActiveFirstOption #auto4=\"matAutocomplete\" (optionSelected)=\"getMeltNoByOrderId(rawMaterial)\">\r\n            <mat-option *ngFor=\"let order of filteredOrders | async\" [value]=\"order.orderId\">\r\n              {{order.orderId}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"meltNo\" aria-label=\"meltNo\" name=\"meltNo\" matInput [formControl]=\"meltControl\"\r\n            [matAutocomplete]=\"auto3\" [(ngModel)]=\"rawMaterial.meltNo\">\r\n          <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\" (optionSelected)=\"getSelectedReport(rawMaterial)\">\r\n            <mat-option *ngFor=\"let melt of filteredMelts | async\" [value]=\"melt.meltNo\">\r\n              {{melt.meltNo}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"From date\" name=\"FromDate\" [(ngModel)]=\"rawMaterial.fromDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date\" name=\"toDate\" [(ngModel)]=\"rawMaterial.toDate\"\r\n            (ngModelChange)=\"getSelectedReport(rawMaterial)\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/rawMaterialConsumptionReports/rawMaterialXlsx\" target=\"_block\">EXCEL</a>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a style=\"color:white;\" href=\"http://52.26.246.107:3000/api/rawMaterialConsumptionReports/rawMaterialPdf\" target=\"_block\">PDF</a>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div class=\"mat-elevation-z8\" style=\"margin-left:20px; margin-top: 50px; margin-right: 20px; margin-bottom: 10px;\">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- PartId Column -->\r\n    <ng-container matColumnDef=\"partId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> PartId </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.partId}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- MeltNo Column -->\r\n    <ng-container matColumnDef=\"meltNo\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>MeltNo</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.meltNo}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- orderId Column -->\r\n    <ng-container matColumnDef=\"orderId\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>OrderId</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.orderId}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- meltDate Column -->\r\n    <ng-container matColumnDef=\"meltDate\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>MeltDate</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.meltDate | date:'MMM d, y'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- itemName Column -->\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ItemName </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.itemName}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- rawMaterialTotalWeight column -->\r\n    <ng-container matColumnDef=\"rawMaterialTotalWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>RawMaterialTotWt</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.rawMaterialTotalWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- consumablesTotalWeight Column -->\r\n    <ng-container matColumnDef=\"consumablesTotalWeight\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Cons.TotWeight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.consumablesTotalWeight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- perKgCost Column -->\r\n    <ng-container matColumnDef=\"perKgCost\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>PerKgCost </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let rawMaterial\"> {{rawMaterial.perKgCost}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let rawMaterial; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n  text-align: center; }\n\nmat-header-cell {\n  font-size: 16px;\n  font: outline;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: bold;\n  color: #6200EE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9yYXctbWF0ZXJpYWwtcmVwb3J0L0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHJlcG9ydFxcc3RhdGljLXJlcG9ydFxccmF3LW1hdGVyaWFsLXJlcG9ydFxccmF3LW1hdGVyaWFsLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw0Q0FBMkM7RUFDNUMsaUJBQWlCO0VBQ2pCLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVwb3J0L3N0YXRpYy1yZXBvcnQvcmF3LW1hdGVyaWFsLXJlcG9ydC9yYXctbWF0ZXJpYWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1oZWFkZXItY2VsbHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udDogb3V0bGluZTtcclxuICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBjb2xvcjojNjIwMEVFO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RawMaterialReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialReportComponent", function() { return RawMaterialReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var _raw_material_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raw-material-report */ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../order/order.service */ "./src/app/foundry/order/order.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../product/product.service */ "./src/app/foundry/product/product.service.ts");










var RawMaterialReportComponent = /** @class */ (function () {
    function RawMaterialReportComponent(staticReportService, productionService, orderService, productService) {
        this.staticReportService = staticReportService;
        this.productionService = productionService;
        this.orderService = orderService;
        this.productService = productService;
        this.displayedColumns = ['partId', 'meltNo', 'orderId', 'meltDate', 'rawMaterialTotalWeight', 'consumablesTotalWeight', 'perKgCost', 'itemName'];
        this.productControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.meltControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.orderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"];
        this.Option = [{ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' }];
    }
    RawMaterialReportComponent.prototype.ngOnInit = function () {
        this.rawMaterial = new _raw_material_report__WEBPACK_IMPORTED_MODULE_3__["RawMaterialReport"]();
        this.rawMaterialReport();
        this.getFilterMelt();
        this.getFilterOrder();
        this.getFilterProduct();
    };
    RawMaterialReportComponent.prototype.rawMaterialReport = function () {
        var _this = this;
        this.staticReportService.rawMaterialReport().subscribe(function (data) {
            _this.rawMaterialReports = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.rawMaterialReports);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log('error');
        });
    };
    RawMaterialReportComponent.prototype.getFilterMelt = function () {
        var _this = this;
        this.productionService.getAllMelt().subscribe(function (data) {
            _this.melts = data;
            console.log(_this.melts);
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialReportComponent.prototype.getFilterOrder = function () {
        var _this = this;
        this.orderService.getOrder().subscribe(function (data) {
            _this.orders = data;
            console.log('data1', _this.orders);
            _this.filteredOrders = _this.orderControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterOrder(state) : _this.orders.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialReportComponent.prototype.getFilterProduct = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.filteredProducts = _this.productControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterProduct(state) : _this.products.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialReportComponent.prototype._filterMelt = function (value) {
        var filerValue = value.toLowerCase();
        return this.melts.filter(function (melts) { return melts.meltNo.toLowerCase().indexOf(filerValue) === 0; });
    };
    RawMaterialReportComponent.prototype._filterOrder = function (value) {
        var filerValue = value.toLocaleString();
        return this.orders.filter(function (melts) { return melts.orderId.toLocaleString().indexOf(filerValue) === 0; });
    };
    RawMaterialReportComponent.prototype._filterProduct = function (value) {
        var filerValue = value.toLowerCase();
        return this.products.filter(function (melts) { return melts.partId.toLowerCase().indexOf(filerValue) === 0; });
    };
    RawMaterialReportComponent.prototype.getSelectedReport = function (rawMaterial) {
        var _this = this;
        console.log('rawMaterial', rawMaterial);
        this.staticReportService.rawMaterialSelectedReports(rawMaterial).subscribe(function (data) {
            console.log('selected data', data);
            _this.rawMaterialReports1 = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.rawMaterialReports1);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialReportComponent.prototype.getMeltNoOrderIdBypartId = function (rawMaterial) {
        var _this = this;
        console.log('rawMaterial', rawMaterial);
        this.productionService.getMeltNoOrderIdReportByPartId(rawMaterial).subscribe(function (data) {
            _this.orders = data;
            _this.ongoingmelts = data;
            var i = 0;
            _this.ongoingmelts.forEach(function (res) {
                //console.log(' res.meltId.meltNo', res.meltId.meltNo)
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                console.log('this.Option[i].meltNo', _this.Option[i].meltNo);
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melts = _this.Option;
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
            _this.filteredOrders = _this.orderControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterOrder(state) : _this.orders.slice(); }));
            _this.getSelectedReport(rawMaterial);
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialReportComponent.prototype.getMeltNoByOrderId = function (rawMaterial) {
        var _this = this;
        this.productionService.getMeltNoOrderIdReportByPartId(rawMaterial).subscribe(function (data) {
            _this.ongoingmelts = data;
            console.log(' this.ongoingmelts', _this.ongoingmelts);
            var i = 0;
            _this.ongoingmelts.forEach(function (res) {
                //console.log(' res.meltId.meltNo', res.meltId.meltNo)
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                console.log('this.Option[i].meltNo', _this.Option[i].meltNo);
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melts = _this.Option;
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
            _this.getSelectedReport(rawMaterial);
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], RawMaterialReportComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], RawMaterialReportComponent.prototype, "paginator", void 0);
    RawMaterialReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raw-material-report',
            template: __webpack_require__(/*! ./raw-material-report.component.html */ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.html"),
            styles: [__webpack_require__(/*! ./raw-material-report.component.scss */ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_static_report_service__WEBPACK_IMPORTED_MODULE_2__["StaticReportService"], _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_7__["ProductionMonitoringService"],
            _order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"], _product_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]])
    ], RawMaterialReportComponent);
    return RawMaterialReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-report/raw-material-report.ts ***!
  \*****************************************************************************************/
/*! exports provided: RawMaterialReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialReport", function() { return RawMaterialReport; });
var RawMaterialReport = /** @class */ (function () {
    function RawMaterialReport() {
    }
    return RawMaterialReport;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" style=\"margin-left:20px; margin-top: 30px; margin-right: 20px;\">\r\n  <mat-card-header>\r\n    <mat-card-title>Filter</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <section class=\"example-section\" *ngFor=\"let item of items;let i=index\">\r\n          <mat-checkbox class=\"example-margin\" (change)=\"onChange($event,item.itemName)\">{{item.itemName}}</mat-checkbox>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select placeholder=\"ReportType\" aria-label=\"select\" name=\"reportType\" [(ngModel)]=\"reportType\">\r\n            <mat-option value=\"MONTHLY\">Monthly</mat-option>\r\n            <mat-option value=\"QUARTELY\">Quarts</mat-option>\r\n            <mat-option value=\"YEARLY\">Yearly</mat-option>\r\n            <mat-option value=\"CUSTOMIZE\">Customize</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportType == 'MONTHLY'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select placeholder=\"year\" name=\"year\" [(ngModel)]=\"years\">\r\n            <mat-option *ngFor=\"let years of year\" [value]=\"years\">\r\n              {{years}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportType== 'CUSTOMIZE'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"From date\" name=\"FromDate\" [(ngModel)]=\"fromDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportType== 'CUSTOMIZE'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date\" name=\"toDate\" [(ngModel)]=\"toDate\" >\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <button mat-mini-fab color=\"primary\" (click)=\"searchRawMaterialSummaryReport()\">\r\n          <mat-icon>search</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a>EXCEL</a>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        <button mat-raised-button color=\"primary\">\r\n          <a>PDF</a>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<!-- Year wise-->\r\n<div *ngIf=\"report==false\">\r\n    <div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"itemName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"year\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Year </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.year}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"weight\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n\r\n   <!--Monthly wise-->\r\n<div *ngIf=\"report==true\">\r\n    <div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"month\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Month </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.month}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"itemName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"year\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Year </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.year}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"weight\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n          <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumn1\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumn1;\">\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 100%;\n  margin-top: 50px; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px; }\n\nbutton {\n  margin-left: 15px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd {\n  width: 25%;\n  font-family: 'Times New Roman', Times, serif; }\n\nth {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  width: 25%;\n  color: #6200EE; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9yYXctbWF0ZXJpYWwtc3VtbWFyeS1yZXBvcnQvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxccmVwb3J0XFxzdGF0aWMtcmVwb3J0XFxyYXctbWF0ZXJpYWwtc3VtbWFyeS1yZXBvcnRcXHJhdy1tYXRlcmlhbC1zdW1tYXJ5LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWUsRUFBQTs7QUFFakI7RUFDQSxpQkFBaUIsRUFBQTs7QUFFakI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLDRDQUE0QyxFQUFBOztBQUU5QztFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWEsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC9yYXctbWF0ZXJpYWwtc3VtbWFyeS1yZXBvcnQvcmF3LW1hdGVyaWFsLXN1bW1hcnktcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuYnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbnRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgY29sb3I6IzYyMDBFRTtcclxufVxyXG4uZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: RawMaterialSummaryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialSummaryReportComponent", function() { return RawMaterialSummaryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var _raw_material_summary_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-material-summary-report */ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.ts");
/* harmony import */ var _items_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../items/items */ "./src/app/foundry/items/items.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");









var RawMaterialSummaryReportComponent = /** @class */ (function () {
    function RawMaterialSummaryReportComponent(staticReportService, notifierService) {
        this.staticReportService = staticReportService;
        this.selectedItem = [];
        this.year = [];
        this.itemControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.rawMaterialReport = [];
        this.report = false;
        this.displayedColumns = ['itemName', 'weight', 'year'];
        this.displayedColumns1 = ['month', 'itemName', 'weight', 'year'];
        this.notifier = notifierService;
    }
    RawMaterialSummaryReportComponent.prototype.ngOnInit = function () {
        this.item = new _items_items__WEBPACK_IMPORTED_MODULE_5__["Items"]();
        this.rawMatSummaryReport = new _raw_material_summary_report__WEBPACK_IMPORTED_MODULE_4__["RawMaterialSummaryReport"]();
        this.rawMaterialSummaryReport();
        this.getItemName();
        this.getYears();
    };
    RawMaterialSummaryReportComponent.prototype.rawMaterialSummaryReport = function () {
        var _this = this;
        this.staticReportService.rawMaterialSummaryReport().subscribe(function (data) {
            console.log('data', data);
            _this.rawMaterialSummaryReports = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.rawMaterialSummaryReports);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialSummaryReportComponent.prototype.getItemName = function () {
        var _this = this;
        this.staticReportService.getRawMaterialItems().subscribe(function (data) {
            _this.items = data;
            console.log('test', _this.items);
            _this.filteredItems = _this.itemControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (state) { return state ? _this._filterItem(state) : _this.items.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialSummaryReportComponent.prototype._filterItem = function (value) {
        var filerValue = value.toLowerCase();
        return this.items.filter(function (items) { return items.itemName.toLowerCase().indexOf(filerValue) === 0; });
    };
    RawMaterialSummaryReportComponent.prototype.onChange = function (event, itemName) {
        var _this = this;
        if (event.checked) {
            this.selectedItem.push(itemName);
        }
        else {
            var i_1 = 0;
            this.selectedItem.forEach(function (res) {
                if (res === itemName) {
                    _this.selectedItem.splice(i_1, 1);
                }
                i_1++;
            });
        }
    };
    RawMaterialSummaryReportComponent.prototype.getYears = function () {
        var _this = this;
        console.log('getYears');
        this.staticReportService.getYears().subscribe(function (data) {
            _this.year = data;
            console.log('this.year', _this.year);
        }, function (error) {
            console.log(error);
        });
    };
    RawMaterialSummaryReportComponent.prototype.searchRawMaterialSummaryReport = function () {
        var _this = this;
        var option = [{ month: '', itemName: '', year: '', weight: '' }];
        var option1 = [{ itemName: '', year: '', weight: '' }];
        this.rawMatSummaryReport.years = this.years;
        this.rawMatSummaryReport.fromDate = this.fromDate;
        this.rawMatSummaryReport.toDate = this.toDate;
        this.rawMatSummaryReport.itemName = this.selectedItem.toString();
        this.rawMatSummaryReport.reportType = this.reportType;
        this.staticReportService.getSelectedReport(this.rawMatSummaryReport).subscribe(function (data) {
            console.log('getSelectedReport', data);
            _this.rawMaterialReport = data;
            if (_this.reportType === 'MONTHLY' || _this.reportType === 'CUSTOMIZE') {
                _this.report = true;
            }
            else {
                _this.report = false;
            }
            if (_this.selectedItem.length >= 1) {
                var i_2 = 0;
                _this.selectedItem.forEach(function (res) {
                    _this.rawMaterialReport.forEach(function (response) {
                        if (response.itemName === res) {
                            if (_this.reportType === 'MONTHLY' || _this.reportType === 'CUSTOMIZE') {
                                option[i_2].month = response.month;
                                option[i_2].itemName = response.itemName;
                                option[i_2].weight = response.weight;
                                option[i_2].year = response.year;
                                option.push({ month: '', itemName: '', year: '', weight: '' });
                                i_2++;
                            }
                            else if (_this.reportType === 'YEARLY') {
                                option1[i_2].itemName = response.itemName;
                                option1[i_2].weight = response.weight;
                                option1[i_2].year = response.year;
                                option1.push({ itemName: '', year: '', weight: '' });
                                i_2++;
                            }
                        }
                    });
                });
                if (_this.reportType === 'MONTHLY' || _this.reportType === 'CUSTOMIZE') {
                    option.pop();
                    _this.rawMaterialReport = option;
                }
                else if (_this.reportType === 'YEARLY') {
                    option1.pop();
                    _this.rawMaterialReport = option1;
                }
            }
            if (_this.rawMaterialReport.length === 0) {
                _this.notifier.notify('warning', 'No data Available!');
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.rawMaterialReport);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], RawMaterialSummaryReportComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RawMaterialSummaryReportComponent.prototype, "paginator", void 0);
    RawMaterialSummaryReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raw-material-summary-report',
            template: __webpack_require__(/*! ./raw-material-summary-report.component.html */ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.html"),
            styles: [__webpack_require__(/*! ./raw-material-summary-report.component.scss */ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_static_report_service__WEBPACK_IMPORTED_MODULE_3__["StaticReportService"], angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]])
    ], RawMaterialSummaryReportComponent);
    return RawMaterialSummaryReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RawMaterialSummaryReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialSummaryReport", function() { return RawMaterialSummaryReport; });
var RawMaterialSummaryReport = /** @class */ (function () {
    function RawMaterialSummaryReport() {
    }
    return RawMaterialSummaryReport;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/static-report-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/static-report-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: StaticReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticReportRoutingModule", function() { return StaticReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _static_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-report.component */ "./src/app/foundry/report/static-report/static-report.component.ts");




var routes = [
    {
        path: '',
        component: _static_report_component__WEBPACK_IMPORTED_MODULE_3__["StaticReportComponent"],
    }
];
var StaticReportRoutingModule = /** @class */ (function () {
    function StaticReportRoutingModule() {
    }
    StaticReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaticReportRoutingModule);
    return StaticReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/static-report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/static-report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"margin-top:50px;\">\r\n  <mat-tab label=\"Melt Report\"><app-melt-report></app-melt-report></mat-tab>\r\n  <mat-tab label=\"Purchase Report\"><app-purchase-report></app-purchase-report></mat-tab>\r\n  <mat-tab label=\"Vendor Wise Purchase\"><app-vendor-wise-purchase-report></app-vendor-wise-purchase-report></mat-tab>\r\n  <mat-tab label=\"Raw Material Report\"><app-raw-material-report></app-raw-material-report></mat-tab>\r\n  <mat-tab label=\"Raw Material Summary Report\"><app-raw-material-summary-report></app-raw-material-summary-report> </mat-tab>\r\n  <mat-tab label=\"Delivery Completed Report\"><app-delivery-completed-report></app-delivery-completed-report></mat-tab>\r\n  <!--<mat-tab label=\"Delivery Pending Report\"><app-delivery-pending-report></app-delivery-pending-report></mat-tab>-->\r\n</mat-tab-group>\r\n  <!-- <div style=\"margin-top: 50px;\">\r\n    <div *ngIf=\"reportName=='melt'\">\r\n      <app-melt-report></app-melt-report>\r\n    </div>\r\n    <div *ngIf=\"reportName=='order'\">\r\n      <app-melt-report></app-melt-report>\r\n    </div>\r\n    <div *ngIf=\"reportName=='purchase'\">\r\n      <app-purchase-report></app-purchase-report>\r\n    </div>\r\n    <div *ngIf=\"reportName=='rawmaterial'\">\r\n      <app-raw-material-report></app-raw-material-report>\r\n    </div>\r\n    <div *ngIf= \"reportName=='rawmaterialsummary'\">\r\n    <app-raw-material-summary-report></app-raw-material-summary-report>\r\n    </div>\r\n    <div *ngIf=\"reportName=='completed'\">\r\n      <app-delivery-completed-report></app-delivery-completed-report>\r\n    </div>\r\n    <div *ngIf=\"reportName=='pending'\">\r\n      <app-melt-report></app-melt-report>\r\n    </div>\r\n\r\n  </div> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/foundry/report/static-report/static-report.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/static-report.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVwb3J0L3N0YXRpYy1yZXBvcnQvc3RhdGljLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/static-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/static-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: StaticReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticReportComponent", function() { return StaticReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaticReportComponent = /** @class */ (function () {
    function StaticReportComponent() {
    }
    StaticReportComponent.prototype.ngOnInit = function () {
    };
    StaticReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-report',
            template: __webpack_require__(/*! ./static-report.component.html */ "./src/app/foundry/report/static-report/static-report.component.html"),
            styles: [__webpack_require__(/*! ./static-report.component.scss */ "./src/app/foundry/report/static-report/static-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StaticReportComponent);
    return StaticReportComponent;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/static-report.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/foundry/report/static-report/static-report.module.ts ***!
  \**********************************************************************/
/*! exports provided: StaticReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticReportModule", function() { return StaticReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _static_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-report.component */ "./src/app/foundry/report/static-report/static-report.component.ts");
/* harmony import */ var _static_report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-report-routing.module */ "./src/app/foundry/report/static-report/static-report-routing.module.ts");
/* harmony import */ var _purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-report/purchase-report.component */ "./src/app/foundry/report/static-report/purchase-report/purchase-report.component.ts");
/* harmony import */ var _order_report_order_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-report/order-report.component */ "./src/app/foundry/report/static-report/order-report/order-report.component.ts");
/* harmony import */ var _raw_material_report_raw_material_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raw-material-report/raw-material-report.component */ "./src/app/foundry/report/static-report/raw-material-report/raw-material-report.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _melt_report_melt_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./melt-report/melt-report.component */ "./src/app/foundry/report/static-report/melt-report/melt-report.component.ts");
/* harmony import */ var _delivery_completed_report_delivery_completed_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delivery-completed-report/delivery-completed-report.component */ "./src/app/foundry/report/static-report/delivery-completed-report/delivery-completed-report.component.ts");
/* harmony import */ var _delivery_pending_report_delivery_pending_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery-pending-report/delivery-pending-report.component */ "./src/app/foundry/report/static-report/delivery-pending-report/delivery-pending-report.component.ts");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../items/items.service */ "./src/app/foundry/items/items.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _raw_material_summary_report_raw_material_summary_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./raw-material-summary-report/raw-material-summary-report.component */ "./src/app/foundry/report/static-report/raw-material-summary-report/raw-material-summary-report.component.ts");
/* harmony import */ var _vendor_vendor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../vendor/vendor.service */ "./src/app/foundry/vendor/vendor.service.ts");
/* harmony import */ var _vendor_wise_purchase_report_vendor_wise_purchase_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vendor-wise-purchase-report/vendor-wise-purchase-report.component */ "./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.ts");





















var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'middle',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 50,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 1200,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 10
    }
};
var StaticReportModule = /** @class */ (function () {
    function StaticReportModule() {
    }
    StaticReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_static_report_component__WEBPACK_IMPORTED_MODULE_3__["StaticReportComponent"], _purchase_report_purchase_report_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseReportComponent"],
                _order_report_order_report_component__WEBPACK_IMPORTED_MODULE_6__["OrderReportComponent"], _raw_material_report_raw_material_report_component__WEBPACK_IMPORTED_MODULE_7__["RawMaterialReportComponent"], _melt_report_melt_report_component__WEBPACK_IMPORTED_MODULE_10__["MeltReportComponent"],
                _delivery_completed_report_delivery_completed_report_component__WEBPACK_IMPORTED_MODULE_11__["DeliveryCompletedReportComponent"], _delivery_pending_report_delivery_pending_report_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryPendingReportComponent"], _raw_material_summary_report_raw_material_summary_report_component__WEBPACK_IMPORTED_MODULE_18__["RawMaterialSummaryReportComponent"], _vendor_wise_purchase_report_vendor_wise_purchase_report_component__WEBPACK_IMPORTED_MODULE_20__["VendorWisePurchaseReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _static_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticReportRoutingModule"], _app_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_17__["NotifierModule"].withConfig(customNotifierOptions)
            ],
            providers: [_static_report_service__WEBPACK_IMPORTED_MODULE_13__["StaticReportService"], _customer_customer_service__WEBPACK_IMPORTED_MODULE_14__["CustomerService"], _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_15__["ProductionMonitoringService"], _items_items_service__WEBPACK_IMPORTED_MODULE_16__["ItemsService"], _vendor_vendor_service__WEBPACK_IMPORTED_MODULE_19__["VendorService"]]
        })
    ], StaticReportModule);
    return StaticReportModule;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/static-report.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/foundry/report/static-report/static-report.service.ts ***!
  \***********************************************************************/
/*! exports provided: StaticReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticReportService", function() { return StaticReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var StaticReportService = /** @class */ (function () {
    function StaticReportService(http) {
        this.http = http;
        this.baseUrl = 'api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    /*Get all Melt Report*/
    StaticReportService.prototype.getMeltReports = function () {
        return this.http.get(this.baseUrl + '/meltReports', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.rawMaterialReport = function () {
        return this.http.get(this.baseUrl + '/rawMaterialConsumptionReports', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.meltSelectedReport = function (meltReport) {
        return this.http.post(this.baseUrl + '/meltReports/selectedReports', JSON.stringify(meltReport), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.rawMaterialSummaryReport = function () {
        return this.http.get(this.baseUrl + '/rawMaterialSummaryReports', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getRawMaterialItems = function () {
        return this.http.get(this.baseUrl + '/items/getRawMaterialItems', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.rawMaterialSelectedReports = function (rawMaterial) {
        return this.http.post(this.baseUrl + '/rawMaterialConsumptionReports/selectedReports', JSON.stringify(rawMaterial), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getYears = function () {
        return this.http.get(this.baseUrl + '/rawMaterialSummaryReports/getYears', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getSelectedReport = function (rawMaterialSummaryReport) {
        return this.http.post(this.baseUrl + '/rawMaterialSummaryReports', JSON.stringify(rawMaterialSummaryReport), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getAllDeliveryCompletedReport = function () {
        return this.http.get(this.baseUrl + '/deliveryCompleteds', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resposne) { return resposne.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getDeliveryCompletedReport = function (deliveryReport) {
        return this.http.post(this.baseUrl + '/deliveryCompleteds', JSON.stringify(deliveryReport), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resposne) { return resposne.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getMeltNo = function () {
        return this.http.get(this.baseUrl + '/sc', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resposne) { return resposne.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*purchseReports*/
    StaticReportService.prototype.searchPurchaseReport = function (purchaseReports) {
        return this.http.post(this.baseUrl + '/purchaseReports', JSON.stringify(purchaseReports), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getAllYears = function () {
        return this.http.get(this.baseUrl + '/purchaseReports', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.getAllPurchaseList = function () {
        return this.http.get(this.baseUrl + '/purchaseReports' + '/allReport', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService.prototype.searchVendorWisePurchase = function (purchaseReports) {
        return this.http.put(this.baseUrl + '/purchaseReports', JSON.stringify(purchaseReports), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    StaticReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], StaticReportService);
    return StaticReportService;
}());



/***/ }),

/***/ "./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-left: 20px;margin-right: 20px;margin-top: 30px\">\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Vendor\" [(ngModel)]=\"vendorName\">\r\n            <mat-option *ngFor=\"let vendor of vendorList\" [value]=\"vendor.vendorName\">\r\n              {{vendor.vendorName}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Type\" [(ngModel)]=\"reportName\">\r\n            <mat-option value=\"MONTHLY\">Monthly</mat-option>\r\n            <!-- <mat-option value=\"QUARTS\">Quarts</mat-option> -->\r\n            <mat-option value=\"YEARLY\">Yearly</mat-option>\r\n            <mat-option value=\"CUSTOMIZE\">Customize</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportName=='MONTHLY'\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Year\" [(ngModel)]=\"years\">\r\n            <mat-option *ngFor=\"let years of year\" [value]=\"years\">\r\n              {{years}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportName=='CUSTOMIZE'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"fromDate\" [matDatepicker]=\"picker\" name=\"fromDate\" [(ngModel)]=\"fromDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"reportName=='CUSTOMIZE'\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"toDate\" [matDatepicker]=\"picker1\" name=\"toDate\" [(ngModel)]=\"toDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <button mat-mini-fab color=\"primary\" (click)=\"searchVendorWisePurchase()\">\r\n          <mat-icon>search</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\" *ngIf=\"report==undefined || report=='yearly'\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    \r\n    <ng-container matColumnDef=\"vendorName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Vendor </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.vendorName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"year\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.year}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalAmount\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.totalAmount}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<!--Monthly wise-->\r\n<div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\" *ngIf=\"report=='monthly'\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"monthly\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Month </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.monthly}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"vendorName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Vendor </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.vendorName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"year\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Year </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.year}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalAmount\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.totalAmount}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumn1\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumn1;\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<!--Customize -->\r\n<div class=\"mat-elevation-z8\" style=\"margin-bottom: 10px;margin-left: 20px;margin-right: 20px;margin-top: 50px\" *ngIf=\"report=='customize'\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"orderDate\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Date </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.orderDate | date:'MMM d, y'}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"vendorName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Vendor </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.vendorName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"itemName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Item </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.itemName}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.weight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalAmount\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\r\n      <td mat-cell *matCellDef=\"let report\"> {{report.totalAmount}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumn2\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumn2;\">\r\n    </tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 30%;\n  margin-top: 50px; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px; }\n\nbutton {\n  margin-left: 15px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd {\n  width: 25%;\n  font-family: 'Times New Roman', Times, serif; }\n\nth {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  width: 25%;\n  color: #6200EE; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC92ZW5kb3Itd2lzZS1wdXJjaGFzZS1yZXBvcnQvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxccmVwb3J0XFxzdGF0aWMtcmVwb3J0XFx2ZW5kb3Itd2lzZS1wdXJjaGFzZS1yZXBvcnRcXHZlbmRvci13aXNlLXB1cmNoYXNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWUsRUFBQTs7QUFFbkI7RUFDQSxpQkFBaUIsRUFBQTs7QUFFakI7RUFDSSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLDRDQUE0QyxFQUFBOztBQUU5QztFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWEsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9yZXBvcnQvc3RhdGljLXJlcG9ydC92ZW5kb3Itd2lzZS1wdXJjaGFzZS1yZXBvcnQvdmVuZG9yLXdpc2UtcHVyY2hhc2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuYnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRke1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIH1cclxuICB0aHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgY29sb3I6IzYyMDBFRTtcclxuICB9XHJcbiAgLmV4YW1wbGUtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: VendorWisePurchaseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorWisePurchaseReportComponent", function() { return VendorWisePurchaseReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_foundry_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/foundry/vendor/vendor.service */ "./src/app/foundry/vendor/vendor.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _purchase_report_purchase_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-report/purchase-report */ "./src/app/foundry/report/static-report/purchase-report/purchase-report.ts");
/* harmony import */ var _static_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-report.service */ "./src/app/foundry/report/static-report/static-report.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");







var VendorWisePurchaseReportComponent = /** @class */ (function () {
    function VendorWisePurchaseReportComponent(vendorService, staticReportService, notifierService) {
        this.vendorService = vendorService;
        this.staticReportService = staticReportService;
        this.year = [];
        this.purchaseReports = [];
        this.displayedColumns = ['vendorName', 'itemName', 'year', 'weight', 'totalAmount'];
        this.displayedColumn1 = ['monthly', 'vendorName', 'itemName', 'year', 'weight', 'totalAmount'];
        this.displayedColumn2 = ['orderDate', 'vendorName', 'itemName', 'weight', 'totalAmount'];
        this.notifier = notifierService;
    }
    VendorWisePurchaseReportComponent.prototype.ngOnInit = function () {
        this.getAllVendor();
        this.purchaseReport = new _purchase_report_purchase_report__WEBPACK_IMPORTED_MODULE_4__["PurchaseReport"]();
        this.getAllYears();
        this.getAllPurchaseList();
    };
    VendorWisePurchaseReportComponent.prototype.getAllVendor = function () {
        var _this = this;
        this.vendorService.getAllVendors().subscribe(function (data) {
            _this.vendorList = data;
        }, function (err) {
            console.log(err);
        });
    };
    VendorWisePurchaseReportComponent.prototype.searchVendorWisePurchase = function () {
        var _this = this;
        this.purchaseReport.vendorName = this.vendorName;
        this.purchaseReport.reportType = this.reportName;
        this.purchaseReport.year = this.years;
        this.purchaseReport.fromDate = this.fromDate;
        this.purchaseReport.toDate = this.toDate;
        this.staticReportService.searchVendorWisePurchase(this.purchaseReport).subscribe(function (data) {
            _this.purchaseReports = data;
            if (_this.reportName === 'YEARLY') {
                _this.report = 'yearly';
            }
            else if (_this.reportName === 'MONTHLY') {
                _this.report = 'monthly';
            }
            else if (_this.reportName === 'CUSTOMIZE') {
                _this.report = 'customize';
            }
            if (_this.purchaseReports.length == 0) {
                _this.notifier.notify('warning', 'No data Available!');
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.purchaseReports);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    VendorWisePurchaseReportComponent.prototype.getAllPurchaseList = function () {
        var _this = this;
        this.staticReportService.getAllPurchaseList().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    VendorWisePurchaseReportComponent.prototype.getAllYears = function () {
        var _this = this;
        this.staticReportService.getAllYears().subscribe(function (data) {
            _this.year = data;
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], VendorWisePurchaseReportComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], VendorWisePurchaseReportComponent.prototype, "sort", void 0);
    VendorWisePurchaseReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-wise-purchase-report',
            template: __webpack_require__(/*! ./vendor-wise-purchase-report.component.html */ "./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.html"),
            styles: [__webpack_require__(/*! ./vendor-wise-purchase-report.component.scss */ "./src/app/foundry/report/static-report/vendor-wise-purchase-report/vendor-wise-purchase-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_foundry_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_2__["VendorService"], _static_report_service__WEBPACK_IMPORTED_MODULE_5__["StaticReportService"], angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]])
    ], VendorWisePurchaseReportComponent);
    return VendorWisePurchaseReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=report-static-report-static-report-module.js.map