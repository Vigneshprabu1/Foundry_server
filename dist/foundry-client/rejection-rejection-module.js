(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rejection-rejection-module"],{

/***/ "./src/app/foundry/rejection/rejection-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/foundry/rejection/rejection-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RejectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectionRoutingModule", function() { return RejectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rejection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejection.component */ "./src/app/foundry/rejection/rejection.component.ts");




var routes = [
    {
        path: '',
        component: _rejection_component__WEBPACK_IMPORTED_MODULE_3__["RejectionComponent"],
    }
];
var RejectionRoutingModule = /** @class */ (function () {
    function RejectionRoutingModule() {
    }
    RejectionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RejectionRoutingModule);
    return RejectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/rejection/rejection.component.html":
/*!************************************************************!*\
  !*** ./src/app/foundry/rejection/rejection.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formControl=\"ngForm\">\r\n  <mat-card class=\"card\" style=\"margin-top: 100px;margin-bottom: 100px;margin-left: 150px;margin-right: 100px;\">\r\n    <mat-card-header>\r\n      <div class=\"row\">\r\n        <mat-card-title>Rejection Details</mat-card-title>\r\n        <div class=\"col-sm-4\"></div>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"CustomerName\" appStringValidation=\"words\" aria-label=\"CustomerName\" name=\"CustomerName\" matInput\r\n              [formControl]=\"customerControl\" [matAutocomplete]=\"auto1\" [(ngModel)]=\"rejection.customerName\" [maxlength]=\"20\" required>\r\n            <mat-autocomplete autoActiveFirstOption #auto1=\"matAutocomplete\"\r\n              (optionSelected)=\"getPartIdByCustomerName(rejection.customerName)\">\r\n              <mat-option *ngFor=\"let customer of filteredCustomers | async\" [value]=\"customer.customerName\">\r\n                {{customer.customerName}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"partId\" aria-label=\"partId\" name=\"partId\" matInput\r\n              [formControl]=\"productControl\" [matAutocomplete]=\"auto2\" [(ngModel)]=\"rejection.partId\" [maxlength]=\"25\" required>\r\n            <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\"\r\n              (optionSelected)=\"getMeltNoByPartId(rejection)\">\r\n              <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product.partId\">\r\n                {{product.partId}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"meltNo\" aria-label=\"meltNo\" name=\"meltNo\" matInput\r\n              [formControl]=\"meltControl\" [matAutocomplete]=\"auto3\" appStringValidation=\"integer\" [(ngModel)]=\"rejection.meltNo\" [maxlength]=\"10\" required>\r\n            <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\"\r\n              (optionSelected)=\"getBatchId(rejection.meltNo)\">\r\n              <mat-option *ngFor=\"let melt of filteredMelts | async\" [value]=\"melt.meltNo\">\r\n                {{melt.meltNo}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"batchId\" aria-label=\"batchId\" name=\"batchId\" matInput [maxlength]=\"10\"\r\n              [matAutocomplete]=\"auto4\" [(ngModel)]=\"rejection.batchId\" required>\r\n            <mat-autocomplete autoActiveFirstOption #auto4=\"matAutocomplete\"\r\n              (optionSelected)=\"getPartWeight(rejection.batchId)\">\r\n              <mat-option *ngFor=\"let batch of filteredBatchs | async\" [value]=\"batch.batchId\">\r\n                {{batch.batchId}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"quantity\" aria-label=\"quantity\" appNumberValidation name=\"quantity\" matInput [maxlength]=\"10\"\r\n              [(ngModel)]=\"rejection.quantity\" (ngModelChange)=\"calTotalWeight(rejection.quantity,rejection.partWeight)\"\r\n              required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" placeholder=\"partWeight\" aria-label=\"partWeight\" appNumberValidation name=\"partWeight\" matInput [maxlength]=\"10\"\r\n              [(ngModel)]=\"rejection.partWeight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-4\">\r\n          TotalWeight:{{rejection.totalWeight}}\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"ReasonForRejection\" name=\"reason\" [(ngModel)]=\"rejection.reasonForRej\">\r\n              <mat-option value=\"SandDrop\">Sand Drop</mat-option>\r\n              <mat-option value=\"Crack\">Crack</mat-option>\r\n              <mat-option value=\"ColdMetal\">Cold Metal</mat-option>\r\n              <mat-option value=\"MoldBroken\">Mold Broken</mat-option>\r\n              <mat-option value=\"ShortPour\">Short Pour</mat-option>\r\n              <mat-option value=\"HighHardness\">High Hardness</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-3\">\r\n          <button mat-raised-button color=\"accent\" [disabled]=\"!formControl.valid\"\r\n            (click)=\"saveRejectionDetails(formControl)\">Save</button>\r\n            <button mat-raised-button color=\"primary\"\r\n            (click)=\"cancel(formControl)\">Reset</button>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/rejection/rejection.component.scss":
/*!************************************************************!*\
  !*** ./src/app/foundry/rejection/rejection.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n\nbutton {\n  margin-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9yZWplY3Rpb24vRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxccmVqZWN0aW9uXFxyZWplY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvcmVqZWN0aW9uL3JlamVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmJ1dHRvbntcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foundry/rejection/rejection.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/foundry/rejection/rejection.component.ts ***!
  \**********************************************************/
/*! exports provided: RejectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectionComponent", function() { return RejectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rejection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rejection */ "./src/app/foundry/rejection/rejection.ts");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");








var RejectionComponent = /** @class */ (function () {
    function RejectionComponent(productionService, customerService, notifier) {
        this.productionService = productionService;
        this.customerService = customerService;
        this.batchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.meltControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.productControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.customerControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"];
        this.Option = [{ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' }];
        this.notifier = notifier;
    }
    RejectionComponent.prototype.ngOnInit = function () {
        this.rejection = new _rejection__WEBPACK_IMPORTED_MODULE_2__["Rejection"]();
        this.getCustomer();
    };
    RejectionComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (data) {
            _this.customers = data;
            _this.filteredCustomers = _this.customerControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterCustomer(state) : _this.customers.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    RejectionComponent.prototype._filterCustomer = function (value) {
        var filerValue = value.toLowerCase();
        return this.customers.filter(function (melts) { return melts.customerName.toLowerCase().indexOf(filerValue) === 0; });
    };
    RejectionComponent.prototype._filterProduct = function (value) {
        var filerValue = value.toLowerCase();
        return this.products.filter(function (melts) { return melts.partId.toLowerCase().indexOf(filerValue) === 0; });
    };
    RejectionComponent.prototype._filterMelt = function (value) {
        var filerValue = value.toLowerCase();
        return this.melts.filter(function (melts) { return melts.meltNo.toLowerCase().indexOf(filerValue) === 0; });
    };
    RejectionComponent.prototype._filterBatch = function (value) {
        var filerValue = value.toLowerCase();
        return this.meltReport.filter(function (melts) { return melts.batchId.toLowerCase().indexOf(filerValue) === 0; });
    };
    RejectionComponent.prototype.getPartIdByCustomerName = function (customerName) {
        var _this = this;
        this.productionService.getPartIdByCustomerName(customerName).subscribe(function (data) {
            _this.products = data;
            _this.filteredProducts = _this.productControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterProduct(state) : _this.products.slice(); }));
        });
    };
    RejectionComponent.prototype.getMeltNoByPartId = function (rejection) {
        var _this = this;
        this.productionService.getMeltNoByPartId(rejection).subscribe(function (data) {
            _this.ongoingmelts = data;
            var i = 0;
            _this.ongoingmelts.forEach(function (res) {
                //console.log(' res.meltId.meltNo', res.meltId.meltNo)
                _this.Option[i].meltNo = res.meltId.meltNo.toString();
                _this.Option.push({ _id: '', meltNo: '', moldingType: '', heatCode: '', meltStartDate: '', meltEndDate: '', totalMeltWeight: 0, status: '' });
                i++;
            });
            _this.Option.pop();
            _this.melts = _this.Option;
            _this.filteredMelts = _this.meltControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterMelt(state) : _this.melts.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    RejectionComponent.prototype.getBatchId = function (meltNo) {
        var _this = this;
        this.productionService.getBatchId(meltNo).subscribe(function (data) {
            _this.meltReport = data;
            _this.filteredBatchs = _this.batchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterBatch(state) : _this.meltReport.slice(); }));
        });
    };
    RejectionComponent.prototype.getPartWeight = function (batchId) {
        var _this = this;
        this.quantity = 0;
        var i = 0;
        this.meltReport.forEach(function (res) {
            _this.meltReport[i].partWeight = res.partWeight;
            _this.meltReport[i].quantity = res.quantity;
            _this.meltReport[i].batchId = res.batchId;
            if (batchId == res.batchId) {
                _this.quantity = res.quantity;
                _this.rejection.partWeight = res.partWeight;
            }
        });
    };
    RejectionComponent.prototype.calTotalWeight = function (quantity, partWeight) {
        if (quantity > this.quantity) {
            this.notifier.notify('error', 'Produced Qty is less than given Qty');
            this.rejection.quantity = 0;
        }
        this.rejection.totalWeight = Number(quantity) * Number(partWeight);
    };
    RejectionComponent.prototype.saveRejectionDetails = function (formControl) {
        var _this = this;
        this.rejection.createdBy = localStorage.getItem('user');
        this.productionService.saveRejection(this.rejection).subscribe(function (data) {
            _this.notifier.notify('success', 'Saved Successfully');
            _this.rejection.customerName = '';
            _this.rejection.meltNo = '';
            _this.rejection.partId = '';
            formControl.resetForm();
        }, function (error) {
            console.log(error);
            _this.notifier.notify('error', 'Not Save');
        });
    };
    RejectionComponent.prototype.cancel = function (formControl) {
        formControl.resetForm();
    };
    RejectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rejection',
            template: __webpack_require__(/*! ./rejection.component.html */ "./src/app/foundry/rejection/rejection.component.html"),
            styles: [__webpack_require__(/*! ./rejection.component.scss */ "./src/app/foundry/rejection/rejection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_3__["ProductionMonitoringService"], _customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
    ], RejectionComponent);
    return RejectionComponent;
}());



/***/ }),

/***/ "./src/app/foundry/rejection/rejection.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/foundry/rejection/rejection.module.ts ***!
  \*******************************************************/
/*! exports provided: RejectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectionModule", function() { return RejectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rejection_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejection-routing.module */ "./src/app/foundry/rejection/rejection-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rejection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rejection.component */ "./src/app/foundry/rejection/rejection.component.ts");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _foundry_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../foundry.module */ "./src/app/foundry/foundry.module.ts");













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
        autoHide: 1000,
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
var RejectionModule = /** @class */ (function () {
    function RejectionModule() {
    }
    RejectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_rejection_component__WEBPACK_IMPORTED_MODULE_8__["RejectionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _rejection_routing_module__WEBPACK_IMPORTED_MODULE_3__["RejectionRoutingModule"], _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"].withConfig(customNotifierOptions),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _foundry_module__WEBPACK_IMPORTED_MODULE_11__["FoundryModule"]
            ],
            providers: [_customer_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RejectionModule);
    return RejectionModule;
}());



/***/ }),

/***/ "./src/app/foundry/rejection/rejection.ts":
/*!************************************************!*\
  !*** ./src/app/foundry/rejection/rejection.ts ***!
  \************************************************/
/*! exports provided: Rejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return Rejection; });
var Rejection = /** @class */ (function () {
    function Rejection() {
    }
    return Rejection;
}());



/***/ })

}]);
//# sourceMappingURL=rejection-rejection-module.js.map