(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/foundry/order/costing/costing.component.html":
/*!**************************************************************!*\
  !*** ./src/app/foundry/order/costing/costing.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title>Costing Details</h1>\r\n  <div mat-dialog-content>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"product Name\" name=\"productName\" [(ngModel)]=\"order.product.productName\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Part Type\" name=\"partType\" [(ngModel)]=\"order.product.partType\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Mold Type\" name=\"moldType\" [(ngModel)]=\"order.product.moldType\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Part Weight\" name=\"partWeight\" [(ngModel)]=\"order.product.partWeight\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Part Cost\" name=\"partCost\" [(ngModel)]=\"order.product.partCost\" (ngModelChange)=\"costCal(order.product.partCost)\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Quantity\" name=\"quantity\" [(ngModel)]=\"order.product.quantity\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Total Weight\" name=\"totalWeight\" [(ngModel)]=\"order.product.totalWeight\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Total Cost\" name=\"totalCost\" [(ngModel)]=\"order.product.totalCost\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\"></div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Delivery Date\" name=\"deliveryDate\" [(ngModel)]=\"order.deliveryDate\"  data-date-format='YYYY-MM-DD'/>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker ></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n\r\n            </div>\r\n            <div class=\"col-sm-4\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"></div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-raised-button color=\"accent\" style=\"float: right\" (click)=\"orders()\">\r\n      Place Order\r\n    </button>\r\n    <button mat-raised-button color=\"accent\" style=\"float: right\" (click)=\"onNoClick()\">Close</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/order/costing/costing.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/foundry/order/costing/costing.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 800px; }\n\n.example-full-width {\n  width: 100%;\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9vcmRlci9jb3N0aW5nL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG9yZGVyXFxjb3N0aW5nXFxjb3N0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw0Q0FBNEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvb3JkZXIvY29zdGluZy9jb3N0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICB3aWR0aDogODAwcHg7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/order/costing/costing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/foundry/order/costing/costing.component.ts ***!
  \************************************************************/
/*! exports provided: CostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostingComponent", function() { return CostingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/foundry/order/order.service.ts");




var CostingComponent = /** @class */ (function () {
    function CostingComponent(dialogRef, data, orderService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.orderService = orderService;
    }
    CostingComponent.prototype.ngOnInit = function () {
        this.order = this.data.order;
    };
    CostingComponent.prototype.costCal = function (partCost) {
        this.order.product.totalCost = partCost * this.order.quantity;
    };
    CostingComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CostingComponent.prototype.orders = function () {
        var _this = this;
        this.order.orderDate = new Date();
        this.orderService.saveOrder(this.order).subscribe(function (data) {
            console.log(data.product);
            _this.dialogRef.close(data.product);
        }, function (error) {
            console.log(error);
        });
    };
    CostingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-costing',
            template: __webpack_require__(/*! ./costing.component.html */ "./src/app/foundry/order/costing/costing.component.html"),
            styles: [__webpack_require__(/*! ./costing.component.scss */ "./src/app/foundry/order/costing/costing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], CostingComponent);
    return CostingComponent;
}());



/***/ }),

/***/ "./src/app/foundry/order/new-order/new-order.component.html":
/*!******************************************************************!*\
  !*** ./src/app/foundry/order/new-order/new-order.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title>New Part Id</h1>\r\n  <div mat-dialog-content>\r\n    <form>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"part Id\" name=\"partId\" [(ngModel)]=\"partId\" />\r\n      </mat-form-field>\r\n    </form>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-raised-button color=\"accent\" style=\"float: right\" (click)=\"confirm()\">\r\n      Submit\r\n    </button>\r\n    <button mat-raised-button color=\"accent\" style=\"float: right\" (click)=\"onNoClick()\">Close</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/order/new-order/new-order.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/foundry/order/new-order/new-order.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9vcmRlci9uZXctb3JkZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcb3JkZXJcXG5ldy1vcmRlclxcbmV3LW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw0Q0FBNEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvb3JkZXIvbmV3LW9yZGVyL25ldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/order/new-order/new-order.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/foundry/order/new-order/new-order.component.ts ***!
  \****************************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NewOrderComponent = /** @class */ (function () {
    function NewOrderComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewOrderComponent.prototype.ngOnInit = function () {
    };
    NewOrderComponent.prototype.confirm = function () {
        this.dialogRef.close(this.partId);
    };
    NewOrderComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-order',
            template: __webpack_require__(/*! ./new-order.component.html */ "./src/app/foundry/order/new-order/new-order.component.html"),
            styles: [__webpack_require__(/*! ./new-order.component.scss */ "./src/app/foundry/order/new-order/new-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], NewOrderComponent);
    return NewOrderComponent;
}());



/***/ }),

/***/ "./src/app/foundry/order/order-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/foundry/order/order-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/foundry/order/order.component.ts");




var routes = [
    {
        path: '',
        component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
    }
];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/order/order.component.html":
/*!****************************************************!*\
  !*** ./src/app/foundry/order/order.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form #formControl=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-12 col-sm-12\" style=\"margin-top: 30px;\">\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              <mat-card class=\"example-card1\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Product Details</mat-card-title>\r\n                </mat-card-header>\r\n              </mat-card>\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input type=\"text\" placeholder=\"Customer Name\" appStringValidation=\"words\" aria-label=\"State\"\r\n                  [maxlength]=\"25\" name=\"customerName\" [(ngModel)]=\"order.customer.customerName\" matInput [formControl]=\"customerCtrl\"\r\n                  [matAutocomplete]=\"auto\" required />\r\n                <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"selectCustomer($event.option.value)\">\r\n                  <mat-option *ngFor=\"let state of customerStates | async\" [value]=\"state.customerName\">\r\n                    <span>{{ state.customerName }}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Product Name\" aria-label=\"State\" [maxlength]=\"25\" name=\"productName\"\r\n                  [(ngModel)]=\"order.product.productName\" [matAutocomplete]=\"auto1\" [formControl]=\"productCtrl\"\r\n                  required />\r\n                <mat-autocomplete autoActiveFirstOption #auto1=\"matAutocomplete\" (optionSelected)=\"selectproduct($event.option.value)\">\r\n                  <mat-option *ngFor=\"let state of productStates | async\" [value]=\"state.productName\">\r\n                    <span>{{ state.productName }}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Part Type\" aria-label=\"State\" [maxlength]=\"20\" name=\"partType\" [(ngModel)]=\"order.product.partType\"\r\n                  [matAutocomplete]=\"auto2\" [formControl]=\"partTypeCtrl\" />\r\n                <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\" (optionSelected)=\"selectPartType()\">\r\n                  <mat-option *ngFor=\"let state of partTypeStates | async\" [value]=\"state.partType\">\r\n                    <span>{{ state.partType }}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Part Sub Type\" aria-label=\"State\" [maxlength]=\"20\" name=\"partSubType\"\r\n                  [(ngModel)]=\"order.product.partSubType\" [matAutocomplete]=\"auto3\" [formControl]=\"partSubTypeCtrl\" />\r\n                <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\" (optionSelected)=\"selectPartSubType()\">\r\n                  <mat-option *ngFor=\"let state of partSubTypeStates | async\" [value]=\"state.partSubType\">\r\n                    <span>{{ state.partSubType }}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input type=\"text\" placeholder=\"Part Id\" aria-label=\"State\" [maxlength]=\"25\" name=\"partId\" [(ngModel)]=\"order.product.partId\"\r\n                  matInput [formControl]=\"partIdCtrl\" [matAutocomplete]=\"auto4\" required />\r\n                <mat-autocomplete autoActiveFirstOption #auto4=\"matAutocomplete\" (optionSelected)=\"selectpartId($event.option.value)\">\r\n                  <mat-option *ngFor=\"let state of partIdStates | async\" [value]=\"state.partId\">\r\n                    <span>{{ state.partId }}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12\" style=\"margin-top: 30px;\">\r\n        <mat-card id=\"image\">\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              <mat-card class=\"example-card1\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Image</mat-card-title>\r\n                </mat-card-header>\r\n              </mat-card>\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <div class=\"row\" *ngIf=\"!order.product._id\">\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <canvas #mycanvas width=\"80\" height=\"80\"></canvas>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <canvas #mycanvas2 width=\"80\" height=\"80\"></canvas>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"order.product._id\">\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <img src=\"http://52.26.246.107:3000/api/uploads/{{order.product.patternImage}}\" width=\"150\" height=\"100\" />\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <img src=\"http://52.26.246.107:3000/api/uploads/{{order.product.MethodImage}}\" width=\"150\" height=\"100\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-12 col-sm-12\">\r\n              <input type=\"file\" class=\"btn\" id=\"imageShow\" placeholder=\"Pattern Image\" (change)=\"preview1($event)\"\r\n                accept=\"image/*\" multiple />\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-12 col-sm-12\">\r\n              <input type=\"file\" id=\"imageShow\" placeholder=\"Pattern Image\" (change)=\"preview2($event)\" accept=\"image/*\"\r\n                multiple />\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n        <mat-card id=\"pattern\">\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              <mat-card class=\"example-card1\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Pattern Classification</mat-card-title>\r\n                </mat-card-header>\r\n              </mat-card>\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Mold Type\" name=\"moldType\" [(ngModel)]=\"order.product.moldType\" required>\r\n                  <mat-option *ngFor=\"let masters of master\" [value]=\"masters.moldType\">{{masters.moldType}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Mold Weight (kg)\" appNumberValidation [maxlength]=\"10\" name=\"moldWeight\"\r\n                  [(ngModel)]=\"order.product.moldWeight\" (ngModelChange)=\"newProduct()\" required />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Cast Weight (kg)\" appNumberValidation [maxlength]=\"10\" name=\"castWeight\"\r\n                  [(ngModel)]=\"order.product.partWeight\" (ngModelChange)=\"newProduct()\" required />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"No Of cores (nos)\" appNumberValidation [maxlength]=\"10\" name=\"noOfCores\"\r\n                  [(ngModel)]=\"order.product.noOfCores\" (ngModelChange)=\"newProduct()\" required />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Core Weight (kg)\" appNumberValidation [maxlength]=\"10\" name=\"coreWeight\"\r\n                  [(ngModel)]=\"order.product.coreWeight\" (ngModelChange)=\"newProduct()\" required />\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Min Wall Thickness (mm)\" appNumberValidation [maxlength]=\"10\" name=\"minWallThickness\"\r\n                  [(ngModel)]=\"order.product.minWallThickness\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Max Wall Thickness (mm)\" appNumberValidation [maxlength]=\"10\" name=\"maxWallThickness\"\r\n                  [(ngModel)]=\"order.product.maxWallThickness\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"No of Cavity (nos)\" appNumberValidation [maxlength]=\"10\" name=\"noOfCavity\"\r\n                  [(ngModel)]=\"order.product.noOfCavity\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"CoreHolesOfDiameter(mm)\" appNumberValidation [maxlength]=\"10\" name=\"coleHoleDiameters\"\r\n                  [(ngModel)]=\"order.product.coleHoleDiameters\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Shape Complexity\" name=\"shapecomplexity\" [(ngModel)]=\"order.product.shapecomplexity\"\r\n                  (ngModelChange)=\"newProduct()\">\r\n                  <mat-option value=\"1\">1</mat-option>\r\n                  <mat-option value=\"2\">2</mat-option>\r\n                  <mat-option value=\"3\">3</mat-option>\r\n                  <mat-option value=\"4\">4</mat-option>\r\n                  <mat-option value=\"5\">5</mat-option>\r\n                  <mat-option value=\"6\">6</mat-option>\r\n                  <mat-option value=\"7\">7</mat-option>\r\n                  <mat-option value=\"8\">8</mat-option>\r\n                  <mat-option value=\"9\">9</mat-option>\r\n                  <mat-option value=\"10\">10</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Surface Roughness (mm)\" appNumberValidation [maxlength]=\"10\" name=\"surfaceRoughness\"\r\n                  [(ngModel)]=\"order.product.surfaceRoughness\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Tolerance (wt)\" appNumberValidation [maxlength]=\"10\" name=\"talerance\"\r\n                  [(ngModel)]=\"order.product.tolerance\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Max Cast Length (mm)\" appNumberValidation [maxlength]=\"10\" name=\"maxCostLength\"\r\n                  [(ngModel)]=\"order.product.maxCostLength\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Material Grade\" [maxlength]=\"10\" name=\"materialGrade\" [(ngModel)]=\"order.product.materialGrade\"\r\n                  (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              <mat-card class=\"example-card1\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Production details</mat-card-title>\r\n                </mat-card-header>\r\n              </mat-card>\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Quantity\" name=\"quantity\" [maxlength]=\"10\" appNumberValidation [(ngModel)]=\"order.quantity\"\r\n                  required />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Delivery Date\" [min]=\"minDate\" name=\"deliveryDate\"\r\n                  [(ngModel)]=\"order.deliveryDate\" required readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Painting Type\" name=\"paintingType\" [(ngModel)]=\"order.paintingType\" required>\r\n                  <mat-option *ngFor=\"let paint of paintingMaster\" [value]=\"paint.paintingType\">{{paint.paintingType}}</mat-option>\r\n                  <mat-option value=\"NO\">No</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n        <mat-card id=\"methoding\">\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              <mat-card class=\"example-card1\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Methoding Details</mat-card-title>\r\n                </mat-card-header>\r\n              </mat-card>\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Runner Width\" appNumberValidation [maxlength]=\"10\" name=\"runnerWidth\"\r\n                  [(ngModel)]=\"order.product.runnerWidth\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Runner Diameter\" appNumberValidation [maxlength]=\"10\" name=\"runnerDiameter\"\r\n                  [(ngModel)]=\"order.product.runnerDiameter\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"No Of Gates (nos)\" appNumberValidation [maxlength]=\"10\" name=\"noOfGates\"\r\n                  [(ngModel)]=\"order.product.noOfGates\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Raiser Height\" appNumberValidation [maxlength]=\"10\" name=\"raiserHeight\"\r\n                  [(ngModel)]=\"order.product.raiserHeight\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Raiser Diameter\" appNumberValidation [maxlength]=\"10\" name=\"raiserDiameter\"\r\n                  [(ngModel)]=\"order.product.raiserDiameter\" (ngModelChange)=\"newProduct()\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n              <button mat-raised-button color=\"accent\" matTooltip=\"Cost Calculation\" style=\"margin-top: 20px;\" (click)=\"costEstimations()\"\r\n                [disabled]=\"!formControl.valid\">\r\n                Cost Calculation\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n        <div *ngIf=\"this.costEstimation == true\">\r\n          <mat-card id=\"cost\">\r\n            <mat-card-header>\r\n              <mat-card-title>\r\n                <mat-card class=\"example-card1\">\r\n                  <mat-card-header>\r\n                    <mat-card-title>Costing Details</mat-card-title>\r\n                  </mat-card-header>\r\n                </mat-card>\r\n              </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <h1>Approx Cost is Rs:</h1>\r\n                </div>\r\n                <div class=\"col-sm-6\"></div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <h6>Type Of Sand Moundling:{{order.product.moldType}} </h6>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <h6>Approx Consumables Cost:</h6>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <button mat-raised-button color=\"accent\" matTooltip=\"Place Order\" style=\"float: right\" (click)=\"orders(formControl)\">\r\n                    Place Order\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/order/order.component.scss":
/*!****************************************************!*\
  !*** ./src/app/foundry/order/order.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin-top: 30px;\n  font-size: 20px;\n  font-family: 'Lora', serif;\n  text-align: center;\n  color: #f50057; }\n\n.example-full-width {\n  width: 100%;\n  text-align: center;\n  font-family: 'Lora', serif; }\n\nh6 {\n  font-size: 18px;\n  font-family: 'Lora', serif;\n  text-align: left; }\n\nh1 {\n  font-size: 25px;\n  font-family: 'Lora', serif;\n  text-align: left; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9vcmRlci9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxvcmRlclxcb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFLNUI7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiNmNTAwNTc7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG5oNntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5oMXtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZDF7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/order/order.component.ts":
/*!**************************************************!*\
  !*** ./src/app/foundry/order/order.component.ts ***!
  \**************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _costing_costing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./costing/costing.component */ "./src/app/foundry/order/costing/costing.component.ts");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product/product.service */ "./src/app/foundry/product/product.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order.service */ "./src/app/foundry/order/order.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/foundry/order/new-order/new-order.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _master_master_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../master/master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../master/production-master/production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");















var OrderComponent = /** @class */ (function () {
    function OrderComponent(productService, dialog, productionMasterService, customerService, orderService, formBuilder, notifier, router, masterService) {
        var _this = this;
        this.productService = productService;
        this.dialog = dialog;
        this.productionMasterService = productionMasterService;
        this.customerService = customerService;
        this.orderService = orderService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.masterService = masterService;
        this.filesToUpload = [];
        this.changePartId = false;
        this.date = new Date();
        this.costEstimation = false;
        this.customerCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.productCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.partIdCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.partTypeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.partSubTypeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.minDate = new Date();
        this.order = {
            _id: '',
            customer: { _id: '', customerName: '', mobileNo: '', emailId: '', address: '', createdBy: '', modifiedBy: '' },
            product: {
                _id: '', productName: '', partType: '', partSubType: '', partId: '', partWeight: undefined, patternImage: '', MethodImage: '',
                moldType: '', moldWeight: undefined, coreWeight: undefined, castWeight: undefined, maxWallThickness: '', minWallThickness: '',
                noOfCavity: undefined, noOfCores: undefined, coleHoleDiameters: '', shapecomplexity: undefined, surfaceRoughness: '',
                tolerance: undefined, maxCostLength: '', materialGrade: '', runnerWidth: '', runnerDiameter: '', noOfGates: undefined,
                raiserHeight: '', raiserDiameter: '', partCost: undefined, quantity: undefined, totalWeight: undefined, totalCost: undefined,
                createdBy: '', modifiedBy: ''
            }, quantity: undefined, paintingType: '', deliveryDate: undefined, orderDate: undefined, orderId: 0, createdBy: '', modifiedBy: ''
        };
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
        this.notifier = notifier;
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('user');
        this.getCustomer();
        this.getOrderproduct();
        this.getMoldType();
        this.getPaintingType();
    };
    OrderComponent.prototype.initialiseInvites = function () {
        // Set default values and re-fetch any data you need.
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    OrderComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customer) {
            _this.customer = customer;
            _this.customerStates = _this.customerCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterCustomer(state) : _this.customer.slice(); }));
        });
    };
    OrderComponent.prototype.getMoldType = function () {
        var _this = this;
        this.masterService.getMoldingMaster().subscribe(function (data) {
            _this.master = data;
        }, function (error) {
            console.log(error);
        });
    };
    OrderComponent.prototype.getPaintingType = function () {
        var _this = this;
        this.type = 'Painting';
        this.productionMasterService.getMachineDetailsByType(this.type).subscribe(function (data) {
            _this.paintingMaster = data;
        }, function (error) {
            console.log(error);
        });
    };
    OrderComponent.prototype._filterCustomer = function (value) {
        var filterValue = value.toLowerCase();
        return this.customer.filter(function (state) { return state.customerName.toLowerCase().indexOf(filterValue) === 0; });
    };
    OrderComponent.prototype.getOrderproduct = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (product) {
            _this.products = product;
            _this.productStates = _this.productCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterproduct(state) : _this.products.slice(); }));
            _this.partIdStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartId(state) : _this.products.slice(); }));
        });
    };
    OrderComponent.prototype._filterproduct = function (value) {
        var filterValue = value.toLowerCase();
        return this.products.filter(function (state) { return state.productName.toLowerCase().indexOf(filterValue) === 0; });
    };
    OrderComponent.prototype._filterpartId = function (value) {
        var filterValue = value.toLowerCase();
        return this.products.filter(function (state) { return state.partId.toLowerCase().indexOf(filterValue) === 0; });
    };
    OrderComponent.prototype._filterpartType = function (value) {
        var filterValue = value.toLowerCase();
        return this.products.filter(function (state) { return state.productName.toLowerCase().indexOf(filterValue) === 0; });
    };
    OrderComponent.prototype._filterpartSubType = function (value) {
        var filterValue = value.toLowerCase();
        return this.products.filter(function (state) { return state.partId.toLowerCase().indexOf(filterValue) === 0; });
    };
    OrderComponent.prototype.preview1 = function (e) {
        this.filesToUpload = e.target.files;
        var canvas = this.mycanvas.nativeElement;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 80, 80);
        var render = new FileReader();
        render.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                canvas.width = img.width * 0.2;
                canvas.height = img.height * 0.2;
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = event.target.result;
        };
        render.readAsDataURL(e.target.files[0]);
    };
    OrderComponent.prototype.preview2 = function (e) {
        this.filesToUpload = e.target.files;
        var canvas = this.mycanvas2.nativeElement;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 80, 80);
        var render = new FileReader();
        render.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                canvas.width = img.width * 0.2;
                canvas.height = img.height * 0.2;
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = event.target.result;
        };
        render.readAsDataURL(e.target.files[0]);
    };
    OrderComponent.prototype.selectproduct = function (productName) {
        var _this = this;
        this.productService.getProductName(productName).subscribe(function (data) {
            _this.products = data;
            _this.partIdStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartId(state) : _this.products.slice(); }));
            _this.partTypeStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartType(state) : _this.products.slice(); }));
            _this.partSubTypeStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartSubType(state) : _this.products.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    OrderComponent.prototype.selectPartType = function () {
        var _this = this;
        this.productService.getPartType(this.order.product).subscribe(function (data) {
            _this.products = data;
            console.log('part type', _this.products);
            _this.partIdStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartId(state) : _this.products.slice(); }));
            _this.partSubTypeStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartSubType(state) : _this.products.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    OrderComponent.prototype.selectPartSubType = function () {
        var _this = this;
        this.productService.getPartSubType(this.order.product).subscribe(function (data) {
            _this.products = data;
            console.log('part sub type', _this.products);
            _this.partIdStates = _this.partIdCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterpartId(state) : _this.products.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    OrderComponent.prototype.selectpartId = function (partId) {
        var _this = this;
        this.products.forEach(function (res) {
            if (partId === res.partId) {
                _this.order.product = res;
                _this.partId = res.partId;
            }
        });
    };
    OrderComponent.prototype.selectCustomer = function (customerName) {
        var _this = this;
        this.customer.forEach(function (res) {
            if (customerName === res.customerName) {
                _this.order.customer = res;
            }
        });
    };
    OrderComponent.prototype.newProduct = function () {
        this.changePartId = true;
    };
    OrderComponent.prototype.orders = function (f) {
        console.log(this.order);
        this.costcalculation();
        this.checkPartId(f);
    };
    OrderComponent.prototype.costcalculation = function () {
        var totalWeight = this.order.product.partWeight * this.order.quantity;
        this.order.product.totalWeight = totalWeight;
        this.order.product.quantity = this.order.quantity;
        this.order.product.totalCost = this.order.product.partCost * this.order.quantity;
    };
    OrderComponent.prototype.checkPartId = function (f) {
        var _this = this;
        if (this.changePartId === true && this.order.product._id && this.partId === this.order.product.partId) {
            var dialogRef = this.dialog.open(_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_10__["NewOrderComponent"], {
                data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (_this.partId !== result) {
                    _this.order.product._id = '';
                }
                _this.confirmOrder(f);
            });
        }
        else if (this.partId !== this.order.product.partId && this.order.product._id) {
            this.order.product._id = '';
            this.confirmOrder(f);
        }
        else {
            console.log('No Change');
            this.confirmOrder(f);
        }
    };
    OrderComponent.prototype.confirmOrder = function (f) {
        var _this = this;
        this.order.product.createdBy = this.currentUser;
        this.order.customer.createdBy = this.currentUser;
        this.order.createdBy = this.currentUser;
        var formData = new FormData();
        var files = this.filesToUpload;
        for (var i = 0; i < files.length; i++) {
            formData.append('uploads[]', files[i], files[i]['name']);
        }
        var productId = this.order.product._id;
        var dialogRef = this.dialog.open(_costing_costing_component__WEBPACK_IMPORTED_MODULE_5__["CostingComponent"], {
            data: { order: this.order }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.notifier.notify('success', 'Order Successfully');
            if (result) {
                _this.costEstimation = false;
            }
            if (productId === result) {
            }
            else {
                _this.orderService.uploadImage(formData, result).subscribe(function (res) {
                    console.log(res);
                }, function (error) {
                    console.log(error);
                });
            }
            _this.getCustomer();
            _this.getOrderproduct();
            _this.order.customer.customerName = '';
            _this.order.product.partId = '';
            _this.order.product.productName = '';
            _this.order.product.partType = '';
            _this.order.product.partSubType = '';
            _this.order.product.partCost = 0;
            _this.order.product.totalCost = 0;
            f.resetForm();
        });
    };
    OrderComponent.prototype.costEstimations = function () {
        this.costEstimation = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mycanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderComponent.prototype, "mycanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mycanvas2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderComponent.prototype, "mycanvas2", void 0);
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/foundry/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/foundry/order/order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_13__["ProductionMasterService"],
            _customer_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"], _order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _master_master_service__WEBPACK_IMPORTED_MODULE_12__["MasterService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/foundry/order/order.module.ts":
/*!***********************************************!*\
  !*** ./src/app/foundry/order/order.module.ts ***!
  \***********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/foundry/order/order.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/foundry/order/order-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _costing_costing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./costing/costing.component */ "./src/app/foundry/order/costing/costing.component.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order.service */ "./src/app/foundry/order/order.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer/customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product/product.service */ "./src/app/foundry/product/product.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/foundry/order/new-order/new-order.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _master_master_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../master/master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var _foundry_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../foundry.module */ "./src/app/foundry/foundry.module.ts");
/* harmony import */ var _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../master/production-master/production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");



















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
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _costing_costing_component__WEBPACK_IMPORTED_MODULE_8__["CostingComponent"], _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__["NewOrderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTimepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _foundry_module__WEBPACK_IMPORTED_MODULE_17__["FoundryModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"].withConfig(customNotifierOptions)
            ],
            entryComponents: [
                _costing_costing_component__WEBPACK_IMPORTED_MODULE_8__["CostingComponent"], _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__["NewOrderComponent"]
            ],
            providers: [_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"], _customer_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"], _product_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"], _master_master_service__WEBPACK_IMPORTED_MODULE_16__["MasterService"], _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_18__["ProductionMasterService"]]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map