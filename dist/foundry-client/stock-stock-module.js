(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./src/app/foundry/stock/delivered/delivered.component.html":
/*!******************************************************************!*\
  !*** ./src/app/foundry/stock/delivered/delivered.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title> Confirmation</h1>\r\n  <div mat-dialog-content>\r\n    <form class=\"example-form\" #exampleForm=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Delivered Date\" [max]=\"maxDate\" [matDatepicker]=\"picker1\" name=\"lastOrder\"\r\n              [(ngModel)]=\"lastOrder\" required readonly>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1 ></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n          <label>Delivered Time:</label>\r\n          <kendo-timepicker placeholder=\"Delivered Time\" name=\"deliveryTime\" [(ngModel)]=\"value\" #dateModel=\"ngModel\"required></kendo-timepicker>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" (click)=\"confirmation()\">Confirm</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"cancel()\">Close</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/foundry/stock/delivered/delivered.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/foundry/stock/delivered/delivered.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvc3RvY2svZGVsaXZlcmVkL2RlbGl2ZXJlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foundry/stock/delivered/delivered.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/foundry/stock/delivered/delivered.component.ts ***!
  \****************************************************************/
/*! exports provided: DeliveredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveredComponent", function() { return DeliveredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeliveredComponent = /** @class */ (function () {
    function DeliveredComponent(matDialogRef, data) {
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.stock = [];
        this.value = new Date();
        this.maxDate = new Date();
    }
    DeliveredComponent.prototype.ngOnInit = function () {
    };
    DeliveredComponent.prototype.confirmation = function () {
        this.stock.push(this.lastOrder);
        this.stock.push(this.value);
        this.matDialogRef.close(this.stock);
    };
    DeliveredComponent.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    DeliveredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivered',
            template: __webpack_require__(/*! ./delivered.component.html */ "./src/app/foundry/stock/delivered/delivered.component.html"),
            styles: [__webpack_require__(/*! ./delivered.component.scss */ "./src/app/foundry/stock/delivered/delivered.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeliveredComponent);
    return DeliveredComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Machinary Consumable Available Stock</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"example-table-container mat-elevation-z8\">\r\n          <table mat-table #sortCol2=\"matSort\" [dataSource]=\"dataSource2\" matSort>\r\n  \r\n            <ng-container matColumnDef=\"itemName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.itemName}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"itemType\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemType </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.itemType}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"weight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.weight}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"unit\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.unit}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"minWeightReq\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> MinWeightReq </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.minWeightReq}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"minOrderWeight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> MinOrderWeight </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.minOrderWeight}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"maxOrderWeight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> MaxOrderWeight </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.maxOrderWeight}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"lastOrder\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> LastOrder </th>\r\n              <td mat-cell *matCellDef=\"let stock;let i=index\">{{stock.lastOrder | date:'d MMM'}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"actions\">\r\n              <th mat-header-cell *matHeaderCellDef> Reorder </th>\r\n              <mat-cell *matCellDef=\"let stock;let i=index\">\r\n                <button mat-icon-button color=\"accent\" matTooltip=\"Reorder\" (click)=\"reOrder(i,stock.purchaseId)\">\r\n                  <mat-icon>reorder</mat-icon>\r\n                </button>\r\n              </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    </div>"

/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n.example-card {\n  width: 100%;\n  height: 100%;\n  margin-top: 50px; }\n\n.example-card2 {\n  width: 100%;\n  height: 100%; }\n\nth {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9tYy1jb25zdW1hYmxlLXN0b2NrL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHN0b2NrXFxtYy1jb25zdW1hYmxlLXN0b2NrXFxtYy1jb25zdW1hYmxlLXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSxXQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvc3RvY2svbWMtY29uc3VtYWJsZS1zdG9jay9tYy1jb25zdW1hYmxlLXN0b2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZDF7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzMzNzg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJkMntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.ts ***!
  \************************************************************************************/
/*! exports provided: McConsumableStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McConsumableStockComponent", function() { return McConsumableStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var _mc_consumable_stock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mc-consumable-stock */ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.ts");






var McConsumableStockComponent = /** @class */ (function () {
    function McConsumableStockComponent(stockService, router, matDialog) {
        this.stockService = stockService;
        this.router = router;
        this.matDialog = matDialog;
        this.displayedColumns2 = ['itemName', 'itemType', 'weight', 'unit',
            'minWeightReq', 'minOrderWeight', 'maxOrderWeight', 'lastOrder', 'actions'];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    McConsumableStockComponent.prototype.ngOnInit = function () {
        this.getMcConsumableStockList();
        this.mcConsumableStock = new _mc_consumable_stock__WEBPACK_IMPORTED_MODULE_5__["McConsumableStock"]();
    };
    McConsumableStockComponent.prototype.getMcConsumableStockList = function () {
        var _this = this;
        this.stockService.getMcConsumableStockList().subscribe(function (data) {
            _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource2.paginator = _this.paginator2;
            _this.dataSource2.sort = _this.sort2;
        }, function (err) {
            console.log(err);
        });
    };
    McConsumableStockComponent.prototype.reOrder = function (i, purchaseId) {
        this.type = 'reOrder';
        this.router.navigate(['/foundry/purchase/' + purchaseId + '/' + this.type], { skipLocationChange: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], McConsumableStockComponent.prototype, "paginator2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], McConsumableStockComponent.prototype, "sort2", void 0);
    McConsumableStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mc-consumable-stock',
            template: __webpack_require__(/*! ./mc-consumable-stock.component.html */ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.html"),
            styles: [__webpack_require__(/*! ./mc-consumable-stock.component.scss */ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], McConsumableStockComponent);
    return McConsumableStockComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.ts":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.ts ***!
  \**************************************************************************/
/*! exports provided: McConsumableStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McConsumableStock", function() { return McConsumableStock; });
var McConsumableStock = /** @class */ (function () {
    function McConsumableStock() {
    }
    return McConsumableStock;
}());



/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Pending Stock List -->\r\n<div class=\"container\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Machinary Consumable Pending Stock</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"example-table-container mat-elevation-z8\">\r\n          <table mat-table #sortCol1=\"matSort\" [dataSource]=\"dataSource1\" matSort>\r\n  \r\n            <ng-container matColumnDef=\"itemName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.itemName}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"weight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.weight}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"unit\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.unit}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"vendorName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> VendorName </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.vendorName}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"invoiceNo\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> InvoiceNo </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.invoiceNo}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"deliveryTime\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> DeliveryTime </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.deliveryTime | date:'h:mm a'}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"orderDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> OrderDate </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.orderDate| date:'d MMM'}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"deliveryDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> DeliveryDate </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.deliveryDate | date:'d MMM'}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"actions\">\r\n              <th mat-header-cell *matHeaderCellDef> Delivered </th>\r\n              <mat-cell *matCellDef=\"let tempStock;let i=index\">\r\n                <button mat-icon-button color=\"accent\" matTooltip=\"Delivered\"\r\n                  (click)=\"updateStock(i,tempStock._id,tempStock.itemName,tempStock.itemType,tempStock.weight,tempStock.purchaseId,tempStock.unit,tempStock.totalAmount,tempStock.minWeightReq)\">\r\n                  <mat-icon>done_all</mat-icon>\r\n                </button>\r\n              </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <mat-paginator [pageSizeOptions]=\"[5,10, 25, 100]\"></mat-paginator>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>"

/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  font-family: 'Lora', serif; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card {\n  margin-top: 50px;\n  width: 100%;\n  height: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9tYy1jb25zdW1hYmxlLXRlbXAtc3RvY2svRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcc3RvY2tcXG1jLWNvbnN1bWFibGUtdGVtcC1zdG9ja1xcbWMtY29uc3VtYWJsZS10ZW1wLXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L3N0b2NrL21jLWNvbnN1bWFibGUtdGVtcC1zdG9jay9tYy1jb25zdW1hYmxlLXRlbXAtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIH1cclxuICAuZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4uZXhhbXBsZS1jYXJkMXtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzMzNzg7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: McConsumableTempStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McConsumableTempStockComponent", function() { return McConsumableTempStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mc_consumable_stock_mc_consumable_stock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mc-consumable-stock/mc-consumable-stock */ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.ts");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _delivered_delivered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delivered/delivered.component */ "./src/app/foundry/stock/delivered/delivered.component.ts");








var McConsumableTempStockComponent = /** @class */ (function () {
    function McConsumableTempStockComponent(stockService, matDialog, datepipe, http) {
        this.stockService = stockService;
        this.matDialog = matDialog;
        this.datepipe = datepipe;
        this.http = http;
        this.displayedColumns1 = ['itemName', 'weight', 'unit',
            'vendorName', 'invoiceNo', 'orderDate', 'deliveryDate', 'deliveryTime', 'actions'];
    }
    McConsumableTempStockComponent.prototype.ngOnInit = function () {
        this.getMcConsumableTempStockList();
        this.mcConsumableStock = new _mc_consumable_stock_mc_consumable_stock__WEBPACK_IMPORTED_MODULE_2__["McConsumableStock"]();
    };
    McConsumableTempStockComponent.prototype.getMcConsumableTempStockList = function () {
        var _this = this;
        this.stockService.getMcConsumableTempStockList().subscribe(function (data) {
            _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource1.paginator = _this.paginator1;
            _this.dataSource1.sort = _this.sort1;
        }, function (err) {
            console.log(err);
        });
    };
    McConsumableTempStockComponent.prototype.updateStock = function (i, _id, itemName, itemType, weight, purchaseId, unit, totalAmount, minWeightReq) {
        var _this = this;
        this.mcConsumableStock.itemName = itemName;
        this.mcConsumableStock.itemType = itemType;
        this.mcConsumableStock.weight = weight;
        this.mcConsumableStock.purchaseId = purchaseId;
        this.mcConsumableStock._id = _id;
        this.mcConsumableStock.unit = unit;
        this.mcConsumableStock.totalAmount = totalAmount;
        this.mcConsumableStock.minWeightReq = minWeightReq;
        var matDialogRef = this.matDialog.open(_delivered_delivered_component__WEBPACK_IMPORTED_MODULE_7__["DeliveredComponent"], {});
        matDialogRef.afterClosed().subscribe(function (result) {
            for (var i_1 = 0; i_1 < result.length; i_1++) {
                _this.mcConsumableStock.lastOrder = result[0];
                _this.mcConsumableStock.deliveredTime = result[1];
            }
            _this.stockService.updateMCConsumableStock(_this.mcConsumableStock).subscribe(function (data) {
                _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.getMcConsumableTempStockList();
                //this.mcConsumableStockComponent.getMcConsumableStockList();
            }, function (err) {
                console.log(err);
            });
            _this.getMcConsumableTempStockList();
            //this.mcConsumableStockComponent.getMcConsumableStockList();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], McConsumableTempStockComponent.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], McConsumableTempStockComponent.prototype, "sort1", void 0);
    McConsumableTempStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mc-consumable-temp-stock',
            template: __webpack_require__(/*! ./mc-consumable-temp-stock.component.html */ "./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./mc-consumable-temp-stock.component.scss */ "./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"]])
    ], McConsumableTempStockComponent);
    return McConsumableTempStockComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Machinary Parts Available Stock</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"example-table-container mat-elevation-z8\">\r\n          <table mat-table #sortCol2=\"matSort\" [dataSource]=\"dataSource2\" matSort>\r\n  \r\n            <ng-container matColumnDef=\"itemName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.itemName}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"itemType\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemType </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.itemType}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"weight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.weight}} </td>\r\n            </ng-container>\r\n            \r\n            <ng-container matColumnDef=\"unit\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.unit}} </td>\r\n            </ng-container>\r\n               \r\n            <ng-container matColumnDef=\"minWeightReq\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> MinWeightReq </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.minWeightReq}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"minOrderWeight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> MinOrderWeight </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.minOrderWeight}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"maxOrderWeight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> MaxOrderWeight </th>\r\n              <td mat-cell *matCellDef=\"let stock\"> {{stock.maxOrderWeight}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"lastOrder\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> LastOrder </th>\r\n              <td mat-cell *matCellDef=\"let stock;let i=index\">{{stock.lastOrder | date:'d MMM'}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"actions\">\r\n              <th mat-header-cell *matHeaderCellDef> Reorder </th>\r\n              <mat-cell *matCellDef=\"let stock;let i=index\">\r\n                <button mat-icon-button color=\"accent\" matTooltip=\"Reorder\" (click)=\"reOrder(i,stock.purchaseId)\">\r\n                  <mat-icon>reorder</mat-icon>\r\n                </button>\r\n              </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n.example-card {\n  width: 100%;\n  height: 100%;\n  margin-top: 50px; }\n\n.example-card2 {\n  width: 100%;\n  height: 100%; }\n\nth {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9tYy1wYXJ0cy1zdG9jay9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxzdG9ja1xcbWMtcGFydHMtc3RvY2tcXG1jLXBhcnRzLXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSxXQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvc3RvY2svbWMtcGFydHMtc3RvY2svbWMtcGFydHMtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmV4YW1wbGUtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJkMXtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgdGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.ts ***!
  \**************************************************************************/
/*! exports provided: McPartsStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPartsStockComponent", function() { return McPartsStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var _mc_parts_stock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mc-parts-stock */ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.ts");






var McPartsStockComponent = /** @class */ (function () {
    function McPartsStockComponent(stockService, router, matDialog) {
        this.stockService = stockService;
        this.router = router;
        this.matDialog = matDialog;
        this.displayedColumns2 = ['itemName', 'itemType', 'weight', 'unit',
            'minWeightReq', 'minOrderWeight', 'maxOrderWeight', 'lastOrder', 'actions'];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    McPartsStockComponent.prototype.ngOnInit = function () {
        this.getMcPartsStockList();
        this.mcPartsStock = new _mc_parts_stock__WEBPACK_IMPORTED_MODULE_5__["McPartsStock"]();
    };
    McPartsStockComponent.prototype.getMcPartsStockList = function () {
        var _this = this;
        this.stockService.getMcPartsStockList().subscribe(function (data) {
            console.log('iiii', data);
            _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource2.paginator = _this.paginator2;
            _this.dataSource2.sort = _this.sort2;
        }, function (err) {
            console.log(err);
        });
    };
    McPartsStockComponent.prototype.reOrder = function (i, purchaseId) {
        this.type = 'reOrder';
        this.router.navigate(['/foundry/purchase/' + purchaseId + '/' + this.type], { skipLocationChange: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], McPartsStockComponent.prototype, "paginator2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], McPartsStockComponent.prototype, "sort2", void 0);
    McPartsStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mc-parts-stock',
            template: __webpack_require__(/*! ./mc-parts-stock.component.html */ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.html"),
            styles: [__webpack_require__(/*! ./mc-parts-stock.component.scss */ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], McPartsStockComponent);
    return McPartsStockComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.ts":
/*!****************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.ts ***!
  \****************************************************************/
/*! exports provided: McPartsStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPartsStock", function() { return McPartsStock; });
var McPartsStock = /** @class */ (function () {
    function McPartsStock() {
    }
    return McPartsStock;
}());



/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Pending Stock List -->\r\n<div class=\"container\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Machinary Parts Pending Stock</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"example-table-container mat-elevation-z8\">\r\n          <table mat-table #sortCol1=\"matSort\" [dataSource]=\"dataSource1\" matSort>\r\n  \r\n            <ng-container matColumnDef=\"itemName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.itemName}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"weight\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.weight}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"unit\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.unit}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"vendorName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> VendorName </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.vendorName}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"invoiceNo\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> InvoiceNo </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.invoiceNo}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"deliveryTime\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> DeliveryTime </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.deliveryTime | date:'h:mm a'}}</td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"orderDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> OrderDate </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.orderDate| date:'d MMM'}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"deliveryDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> DeliveryDate </th>\r\n              <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.deliveryDate | date:'d MMM'}} </td>\r\n            </ng-container>\r\n  \r\n            <ng-container matColumnDef=\"actions\">\r\n              <th mat-header-cell *matHeaderCellDef> Delivered </th>\r\n              <mat-cell *matCellDef=\"let tempStock;let i=index\">\r\n                <button mat-icon-button color=\"accent\" matTooltip=\"Delivered\"\r\n                  (click)=\"updateStock(i,tempStock._id,tempStock.itemName,tempStock.itemType,tempStock.weight,tempStock.purchaseId,tempStock.unit,tempStock.totalAmount,tempStock.minWeightReq)\">\r\n                  <mat-icon>done_all</mat-icon>\r\n                </button>\r\n              </mat-cell>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <mat-paginator [pageSizeOptions]=\"[5,10, 25, 100]\"></mat-paginator>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>"

/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  font-family: 'Lora', serif; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card {\n  margin-top: 50px;\n  width: 100%;\n  height: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9tYy1wYXJ0cy10ZW1wLXN0b2NrL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHN0b2NrXFxtYy1wYXJ0cy10ZW1wLXN0b2NrXFxtYy1wYXJ0cy10ZW1wLXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L3N0b2NrL21jLXBhcnRzLXRlbXAtc3RvY2svbWMtcGFydHMtdGVtcC1zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbi5leGFtcGxlLWNhcmQxe1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.ts ***!
  \************************************************************************************/
/*! exports provided: McPartsTempStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPartsTempStockComponent", function() { return McPartsTempStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _mc_parts_stock_mc_parts_stock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mc-parts-stock/mc-parts-stock */ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.ts");
/* harmony import */ var _delivered_delivered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delivered/delivered.component */ "./src/app/foundry/stock/delivered/delivered.component.ts");








var McPartsTempStockComponent = /** @class */ (function () {
    function McPartsTempStockComponent(stockService, matDialog, datepipe, http) {
        this.stockService = stockService;
        this.matDialog = matDialog;
        this.datepipe = datepipe;
        this.http = http;
        this.displayedColumns1 = ['itemName', 'weight', 'unit',
            'vendorName', 'invoiceNo', 'orderDate', 'deliveryDate', 'deliveryTime', 'actions'];
    }
    McPartsTempStockComponent.prototype.ngOnInit = function () {
        this.getMcPartsTempStockList();
        this.mcPartsStock = new _mc_parts_stock_mc_parts_stock__WEBPACK_IMPORTED_MODULE_6__["McPartsStock"]();
    };
    McPartsTempStockComponent.prototype.getMcPartsTempStockList = function () {
        var _this = this;
        this.stockService.getMcPartsTempStockList().subscribe(function (data) {
            _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource1.paginator = _this.paginator1;
            _this.dataSource1.sort = _this.sort1;
        }, function (err) {
            console.log(err);
        });
    };
    McPartsTempStockComponent.prototype.updateStock = function (i, _id, itemName, itemType, weight, purchaseId, unit, totalAmount, minWeightReq) {
        var _this = this;
        this.mcPartsStock.itemName = itemName;
        this.mcPartsStock.itemType = itemType;
        this.mcPartsStock.weight = weight;
        this.mcPartsStock.purchaseId = purchaseId;
        this.mcPartsStock._id = _id;
        this.mcPartsStock.unit = unit;
        this.mcPartsStock.totalAmount = totalAmount;
        this.mcPartsStock.minWeightReq = minWeightReq;
        var matDialogRef = this.matDialog.open(_delivered_delivered_component__WEBPACK_IMPORTED_MODULE_7__["DeliveredComponent"], {});
        matDialogRef.afterClosed().subscribe(function (result) {
            for (var i_1 = 0; i_1 < result.length; i_1++) {
                _this.mcPartsStock.lastOrder = result[0];
                _this.mcPartsStock.deliveredTime = result[1];
            }
            _this.stockService.updateMcPartsStock(_this.mcPartsStock).subscribe(function (data) {
                _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.getMcPartsTempStockList();
                //this.mcPartsStockComponent.getMcPartsStockList();
            }, function (err) {
                console.log(err);
            });
            _this.getMcPartsTempStockList();
            // this.mcPartsStockComponent.getMcPartsStockList();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], McPartsTempStockComponent.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], McPartsTempStockComponent.prototype, "sort1", void 0);
    McPartsTempStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mc-parts-temp-stock',
            template: __webpack_require__(/*! ./mc-parts-temp-stock.component.html */ "./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./mc-parts-temp-stock.component.scss */ "./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], McPartsTempStockComponent);
    return McPartsTempStockComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" #exampleForm=\"ngForm\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"edit == false\" class=\"col-sm-3\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"text\" placeholder=\"DisposalNo\" name=\"disposalNo\" [(ngModel)]=\"dispatching.disposalInvoiceNo\"\r\n          readonly>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngIf=\"edit == true\" class=\"col-sm-2\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-select placeholder=\"disposalNo\" name=\"disposalNo\" [(ngModel)]=\"disposalNo\">\r\n          <mat-option *ngFor=\"let disposal of disposals\" [value]=\"disposal\">\r\n            {{disposal}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngIf=\"edit == true\" class=\"col-sm-1\">\r\n      <button mat-mini-fab color=\"primary\" (click)=\"getSandDispatchingByDisposalNo()\">\r\n        <mat-icon>search</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-select placeholder=\"VenName\" name=\"vendorName\" [(ngModel)]=\"dispatching.vendorName\">\r\n          <mat-option *ngFor=\"let vendor of vendors\" [value]=\"vendor.vendorName\">\r\n            {{vendor.vendorName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"text\" placeholder=\"InvoiceNo\" name=\"invoiceNo\" [(ngModel)]=\"dispatching.invoiceNo\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput #input [matDatepicker]=\"picker1\" placeholder=\"InvoiceDate\" [(ngModel)]=\"dispatching.invoiceDate\"\r\n          name=\"invoiceDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      <h5>WSDate</h5>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <h5>WSNo</h5>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <h5>ItemName</h5>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <h5>TotWt</h5>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <h5>Dis.Wt</h5>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <h5>Unit</h5>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <h5>IndCost</h5>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngFor=\"let options of Option; let in=index;\" class=\"row\">\r\n    <div class=\"col-sm-2\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput #input [matDatepicker]=\"picker2\" placeholder=\"WSDate\" [(ngModel)]=\"Option[in].waySlipDate\" name=\"waySlipDate\"\r\n          required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker2></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"WaySlipNo\" aria-label=\"waySlipNo\" [(ngModel)]=\"Option[in].waySlipNumber\" name=\"waySlipNo\"\r\n          required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-select placeholder=\"ItemName\" name=\"itemName\" [(ngModel)]=\"Option[in].itemName\" (ngModelChange)=\"getTotalWeight(in,Option[in].itemName)\"\r\n          required>\r\n          <mat-option *ngFor=\"let sandDisposal of sandDisposals\" [value]=\"sandDisposal.itemName\">\r\n            {{sandDisposal.itemName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px\">\r\n      <h6>{{Option[in].itemWeight}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Dis.Wt\" aria-label=\"disposalWeight\" [(ngModel)]=\"Option[in].disposalWeight\" name=\"disposedWeight\"\r\n          required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-select placeholder=\"Unit\" name=\"unit\" [(ngModel)]=\"Option[in].unit\" name=\"option[in].unit\" required>\r\n          <mat-option *ngFor=\"let unit of units\" [value]=\"unit.unitType\">\r\n            {{unit.unitType}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]!==itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Cost\" aria-label=\"cost\" [(ngModel)]=\"Option[in].cost\" (ngModelChange)=\"addCost()\"\r\n          name=\"cost\" required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].waySlipDate |date:'M/d/yy'}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].waySlipNumber}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].itemName}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].itemWeight}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].disposalWeight}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].unit}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"itemNamelength[in]===itemNamelength1[in]\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].cost}}</h6>\r\n    </div>\r\n    <div class=\"col-sm-2\" style=\"margin-top: 10px;\">\r\n      <button mat-icon-button (click)=\"add(in)\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"remove(in)\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\r\n      </button>\r\n    </div>\r\n    <!-- <div class=\"col-sm-2\" style=\"margin-top: 20px;\">\r\n      <h6>{{Option[in].itemName}}</h6>\r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n      <mat-form-field class=\"example-full-width\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"TotalCost\" aria-label=\"totalCost\" [(ngModel)]=\"Option[in].totalCost\"\r\n          name=\"totalCost\" required>\r\n      </mat-form-field>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\"></div>\r\n    <div class=\"col-sm-3\"></div>\r\n    <div class=\"col-sm-1\"></div>\r\n    <div class=\"col-sm-2\" style=\"text-align:right\">\r\n      <h5>TotalCost:</h5>\r\n    </div>\r\n    <div class=\"col-sm-1\" style=\"text-align:left\">{{dispatching.totalCost}}</div>\r\n    <div class=\"col-sm-2\"></div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-2\">\r\n      <button style=\"margin-right: 10px\" mat-raised-button color=\"accent\" (click)=\"createInvoice()\">Create Invoice</button>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <button style=\"margin-right: 10px\" mat-raised-button color=\"accent\" (click)=\"editInvoice()\">Edit Invoice</button>\r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n      <button style=\"margin-right: 10px\" mat-raised-button color=\"accent\" [disabled]=\"!exampleForm.valid\" (click)=\"saveSandDispatching()\">Confirm</button>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n  text-align: center; }\n\ntd {\n  width: 25%;\n  text-align: center; }\n\nh5 {\n  text-align: center;\n  font-size: 20px;\n  width: 25%;\n  color: #6200EE; }\n\n.example-card {\n  margin-top: 50px;\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9zYW5kLWRpc3Bvc2FsL3NhbmQtZGlzcGF0Y2hpbmcvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcc3RvY2tcXHNhbmQtZGlzcG9zYWxcXHNhbmQtZGlzcGF0Y2hpbmdcXHNhbmQtZGlzcGF0Y2hpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixjQUFhLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvc3RvY2svc2FuZC1kaXNwb3NhbC9zYW5kLWRpc3BhdGNoaW5nL3NhbmQtZGlzcGF0Y2hpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGR7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGNvbG9yOiM2MjAwRUU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SandDispatchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandDispatchingComponent", function() { return SandDispatchingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sand_dispatching_sand_dispatching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sand-dispatching/sand-dispatching */ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.ts");
/* harmony import */ var _vendor_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../vendor/vendor.service */ "./src/app/foundry/vendor/vendor.service.ts");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _master_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../master/master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var src_app_foundry_production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/foundry/production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");









var SandDispatchingComponent = /** @class */ (function () {
    function SandDispatchingComponent(dialogRef, masterService, data, vendorService, notifier, stockService, productionMonitoringService) {
        this.dialogRef = dialogRef;
        this.masterService = masterService;
        this.data = data;
        this.vendorService = vendorService;
        this.stockService = stockService;
        this.productionMonitoringService = productionMonitoringService;
        this.itemNamelength = [];
        this.itemNamelength1 = [];
        this.disposals = [];
        this.Option = [
            {
                _id: '',
                waySlipDate: '',
                waySlipNumber: '',
                itemName: '',
                itemWeight: 0,
                disposalWeight: 0,
                unit: '',
                cost: 0
            }
        ];
        this.notifier = notifier;
    }
    SandDispatchingComponent.prototype.ngOnInit = function () {
        this.edit = false;
        this.getLastSandDispatchDetails();
        this.itemNamelength[0] = 0;
        this.itemNamelength1[0] = 10;
        this.dispatching = new _sand_dispatching_sand_dispatching__WEBPACK_IMPORTED_MODULE_3__["SandDispatching"]();
        this.getSandDisposalStock();
        this.getVendor();
        this.getUnits();
    };
    SandDispatchingComponent.prototype.getLastSandDispatchDetails = function () {
        var _this = this;
        console.log('test in');
        this.productionMonitoringService.getLastSandDispatchDetails().subscribe(function (data1) {
            console.log('test', data1);
            if (data1.length === 0) {
                console.log('test if', data1);
                _this.getInvoiceNo();
            }
            else {
                console.log('test else', data1);
                _this.itemNamelength[0] = 10;
                _this.itemNamelength1[0] = 10;
                _this.dispatching = data1;
                var i_1 = 0;
                data1.forEach(function (element) {
                    _this.dispatching = element;
                    _this.Option[i_1] = element.waySlipEntry;
                    i_1++;
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SandDispatchingComponent.prototype.getSandDisposalStock = function () {
        var _this = this;
        this.productionMonitoringService.getSandDisposalStock().subscribe(function (data1) {
            _this.sandDisposals = data1;
        }, function (err) {
            console.log(err);
        });
    };
    SandDispatchingComponent.prototype.getTotalWeight = function (i, itemName) {
        var _this = this;
        this.sandDisposals.forEach(function (element) {
            _this.Option[i].itemWeight = Number(element.quantity);
        });
    };
    SandDispatchingComponent.prototype.getVendor = function () {
        var _this = this;
        this.vendorService.getSandDisposalVendor().subscribe(function (data) {
            _this.vendors = data;
            console.log('this.vendors', _this.vendors);
        }, function (error) {
            console.log(error);
        });
    };
    SandDispatchingComponent.prototype.getUnits = function () {
        var _this = this;
        this.masterService.getAllUnitMaster().subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            console.log(error);
        });
    };
    SandDispatchingComponent.prototype.getInvoiceNo = function () {
        var _this = this;
        this.stockService.getInvoiceNo().subscribe(function (data) {
            console.log(' this.dispatching.disposalInvoiceNo', _this.dispatching.invoiceNo);
            _this.dispatching.disposalInvoiceNo = data;
        }, function (error) {
            console.log(error);
        });
    };
    SandDispatchingComponent.prototype.getSandDispatchingByDisposalNo = function () {
        var _this = this;
        console.log('disposalNo', this.disposalNo);
        this.stockService.getSandDispatchingByDisposalNo(this.disposalNo).subscribe(function (data) {
            console.log('getInvoiceNo', data);
            var i = 0;
            data.forEach(function (element) {
                _this.dispatching = element;
                _this.Option[i] = element.waySlipEntry;
                i++;
            });
        }, function (error) {
            console.log(error);
        });
    };
    SandDispatchingComponent.prototype.createInvoice = function () {
        this.dispatching = new _sand_dispatching_sand_dispatching__WEBPACK_IMPORTED_MODULE_3__["SandDispatching"]();
        this.Option = [
            {
                _id: '',
                waySlipDate: '',
                waySlipNumber: '',
                itemName: '',
                itemWeight: 0,
                disposalWeight: 0,
                unit: '',
                cost: 0
            }
        ];
        this.itemNamelength[0] = 0;
        this.itemNamelength1[0] = 10;
        this.getInvoiceNo();
    };
    SandDispatchingComponent.prototype.editInvoice = function () {
        var _this = this;
        this.edit = true;
        this.stockService.getAllDisposalNo().subscribe(function (data) {
            console.log('getInvoiceNo edit', data);
            _this.disposals = data;
            _this.dispatching = new _sand_dispatching_sand_dispatching__WEBPACK_IMPORTED_MODULE_3__["SandDispatching"]();
            _this.Option = [
                {
                    _id: '',
                    waySlipDate: '',
                    waySlipNumber: '',
                    itemName: '',
                    itemWeight: 0,
                    disposalWeight: 0,
                    unit: '',
                    cost: 0
                }
            ];
            _this.itemNamelength[0] = 0;
            _this.itemNamelength1[0] = 10;
        }, function (error) {
            console.log(error);
        });
    };
    SandDispatchingComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SandDispatchingComponent.prototype.saveSandDispatching = function () {
        var _this = this;
        this.dispatching.waySlipEntry = this.Option;
        this.dispatching.createdBy = localStorage.getItem('user');
        console.log('this.dispatching', this.dispatching);
        if (this.dispatching._id === '' || this.dispatching._id === undefined) {
            this.stockService.saveSandDispatching(this.dispatching).subscribe(function (data1) {
                _this.dialogRef.close();
                _this.notifier.notify('success', 'sand dispatch saved Successfully');
            }, function (error) {
                _this.notifier.notify('error', 'Not Dispatched Successfully');
            });
        }
        else if (this.dispatching._id !== undefined) {
            this.dispatching.modifiedBy = localStorage.getItem('user');
            this.stockService.updateSandDispatching(this.dispatching).subscribe(function (data1) {
                _this.dialogRef.close();
                _this.notifier.notify('success', 'sand dispatch details updated Successfully');
            }, function (error) {
                _this.notifier.notify('error', 'Not Dispatched Successfully');
            });
        }
    };
    SandDispatchingComponent.prototype.add = function (i) {
        this.itemNamelength[i] = 10;
        this.itemNamelength1[i] = 10;
        i = i + 1;
        this.Option.push({
            _id: '',
            waySlipDate: '',
            waySlipNumber: '',
            itemName: '',
            itemWeight: 0,
            disposalWeight: 0,
            unit: '',
            cost: 0
        });
        this.itemNamelength[i] = 0;
        this.itemNamelength1[i] = 10;
        this.addCost();
    };
    SandDispatchingComponent.prototype.remove = function (i) {
        var _this = this;
        this.waySlipEntry = this.Option[i];
        this.stockService.deleteWaySlip(this.waySlipEntry).subscribe(function (data) {
            _this.Option.splice(i, 1);
            _this.itemNamelength[i] = 0;
            _this.itemNamelength1[i] = 10;
            _this.addCost();
        });
    };
    SandDispatchingComponent.prototype.addCost = function () {
        var _this = this;
        this.cost = 0;
        this.Option.forEach(function (res) {
            _this.cost = Number(_this.cost) + Number(res.cost);
        });
        this.dispatching.totalCost = this.cost;
    };
    SandDispatchingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sand-dispatching',
            template: __webpack_require__(/*! ./sand-dispatching.component.html */ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.html"),
            styles: [__webpack_require__(/*! ./sand-dispatching.component.scss */ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _master_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], Object, _vendor_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"],
            _stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"],
            src_app_foundry_production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_8__["ProductionMonitoringService"]])
    ], SandDispatchingComponent);
    return SandDispatchingComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.ts ***!
  \**********************************************************************************/
/*! exports provided: SandDispatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandDispatching", function() { return SandDispatching; });
var SandDispatching = /** @class */ (function () {
    function SandDispatching() {
    }
    return SandDispatching;
}());



/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-disposal-stock.ts":
/*!********************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-disposal-stock.ts ***!
  \********************************************************************/
/*! exports provided: SandDisposalStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandDisposalStock", function() { return SandDisposalStock; });
var SandDisposalStock = /** @class */ (function () {
    function SandDisposalStock() {
    }
    return SandDisposalStock;
}());



/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-disposal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-disposal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- <button mat-raised-button color=\"accent\" (click)=\"getSandDisposal()\">Sand Disposal</button>\r\n<div *ngIf=\"button=='true'\"> -->\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Sand Disposal Details</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"example-table-container mat-elevation-z8\">\r\n        <table mat-table  [dataSource]=\"dataSource\" matSort>\r\n\r\n         <ng-container matColumnDef=\"position\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Num. </th>\r\n          <td mat-cell *matCellDef=\"let stock; let i = index\">{{i+1}}</td>\r\n        </ng-container>\r\n\r\n          <ng-container matColumnDef=\"itemName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n            <td mat-cell *matCellDef=\"let stock\">{{stock.itemName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"quantity\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Quantity </th>\r\n              <td mat-cell *matCellDef=\"let stock\">{{stock.quantity}} </td>\r\n         </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              <button mat-icon-button color=\"accent\" matTooltip=\"Dispose\" (click)=\"openInvoiceWindow()\">\r\n                <mat-icon>send</mat-icon>\r\n              </button>\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let stock\"></td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n                  <tr mat-row *matRowDef=\"let stock; columns: displayedColumns2;\">\r\n                </tr>\r\n        </table>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-disposal.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-disposal.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Sofia', cursive; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9zYW5kLWRpc3Bvc2FsL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHN0b2NrXFxzYW5kLWRpc3Bvc2FsXFxzYW5kLWRpc3Bvc2FsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQTBCZjtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QixFQUFBOztBQUU3QjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVztFQUNYLFlBQ0gsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvc3RvY2svc2FuZC1kaXNwb3NhbC9zYW5kLWRpc3Bvc2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLy8gICAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0ZHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRoe1xyXG4vLyAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgICAgIGNvbG9yOiM2MjAwRUU7XHJcbi8vICAgfVxyXG5cclxuLy8gLmV4YW1wbGUtY2FyZHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbi8vICAgICB3aWR0aDogNTAwcHg7XHJcbi8vIH1cclxuLmV4YW1wbGUtY2FyZDF7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb2ZpYScsIGN1cnNpdmU7XHJcbn1cclxuICAuZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJSBcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/foundry/stock/sand-disposal/sand-disposal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/foundry/stock/sand-disposal/sand-disposal.component.ts ***!
  \************************************************************************/
/*! exports provided: SandDisposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandDisposalComponent", function() { return SandDisposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sand_disposal_sand_disposal_stock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sand-disposal/sand-disposal-stock */ "./src/app/foundry/stock/sand-disposal/sand-disposal-stock.ts");
/* harmony import */ var _sand_dispatching_sand_dispatching_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sand-dispatching/sand-dispatching.component */ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.ts");







var SandDisposalComponent = /** @class */ (function () {
    function SandDisposalComponent(productionMonitoringService, dialog) {
        this.productionMonitoringService = productionMonitoringService;
        this.dialog = dialog;
        this.button = 'false';
        this.Option = [{ _id: '', itemName: '', quantity: 0 }];
        this.displayedColumns2 = ['position', 'itemName', 'quantity', 'action'];
    }
    SandDisposalComponent.prototype.ngOnInit = function () {
        this.sandDisposal = new _sand_disposal_sand_disposal_stock__WEBPACK_IMPORTED_MODULE_4__["SandDisposalStock"]();
        this.getSandDisposalStock();
    };
    SandDisposalComponent.prototype.getSandDisposalStock = function () {
        var _this = this;
        this.productionMonitoringService.getSandDisposalStock().subscribe(function (data1) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data1);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    SandDisposalComponent.prototype.addtoOption = function (j, id, itemName, quantity) {
        var i;
        i = 0;
        this.Option[i]._id = id;
        this.Option[i].itemName = itemName;
        this.Option[i].quantity = quantity;
        this.Option.push({ _id: '', itemName: '', quantity: 0 });
        this.Option.pop();
    };
    SandDisposalComponent.prototype.openInvoiceWindow = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_sand_dispatching_sand_dispatching_component__WEBPACK_IMPORTED_MODULE_5__["SandDispatchingComponent"], {
            data: { option: this.Option }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getSandDisposalStock();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SandDisposalComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SandDisposalComponent.prototype, "sort", void 0);
    SandDisposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sand-disposal',
            template: __webpack_require__(/*! ./sand-disposal.component.html */ "./src/app/foundry/stock/sand-disposal/sand-disposal.component.html"),
            styles: [__webpack_require__(/*! ./sand-disposal.component.scss */ "./src/app/foundry/stock/sand-disposal/sand-disposal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMonitoringService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SandDisposalComponent);
    return SandDisposalComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/stock-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/foundry/stock/stock-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockRoutingModule", function() { return StockRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.component */ "./src/app/foundry/stock/stock.component.ts");




var routes = [
    {
        path: '',
        component: _stock_component__WEBPACK_IMPORTED_MODULE_3__["StockComponent"],
    }
];
var StockRoutingModule = /** @class */ (function () {
    function StockRoutingModule() {
    }
    StockRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StockRoutingModule);
    return StockRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/stock/stock.component.html":
/*!****************************************************!*\
  !*** ./src/app/foundry/stock/stock.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Available Stock</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"example-table-container mat-elevation-z8\">\r\n        <table mat-table #sortCol2=\"matSort\" [dataSource]=\"dataSource2\" matSort>\r\n\r\n          <ng-container matColumnDef=\"itemName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.itemName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"itemType\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemType </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.itemType}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"weight\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.weight}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"unit\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.unit}} </td>\r\n          </ng-container>\r\n<!-- \r\n          <ng-container matColumnDef=\"averageWeight\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> AvgWeight </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.averageWeight}} </td>\r\n          </ng-container> -->\r\n\r\n          <ng-container matColumnDef=\"minWeightReq\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> MinWeightReq </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.minWeightReq}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"minOrderWeight\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> MinOrderWeight </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.minOrderWeight}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"maxOrderWeight\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> MaxOrderWeight </th>\r\n            <td mat-cell *matCellDef=\"let stock\"> {{stock.maxOrderWeight}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"lastOrder\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> LastOrder </th>\r\n            <td mat-cell *matCellDef=\"let stock;let i=index\">{{stock.lastOrder | date:'d MMM'}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Reorder </th>\r\n            <mat-cell *matCellDef=\"let stock;let i=index\">\r\n              <button mat-icon-button color=\"accent\" matTooltip=\"Reorder\" (click)=\"reOrder(i,stock.purchaseId)\">\r\n                <mat-icon>reorder</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <!-- temp-stock -->\r\n  <app-temp-stock></app-temp-stock>\r\n  <!-- Return And Rejection -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12\" style=\"margin-top: 50px;\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <mat-card class=\"example-card1\">\r\n              <mat-card-header>\r\n                <mat-card-title>Return And Rejection</mat-card-title>\r\n              </mat-card-header>\r\n            </mat-card>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"example-table-container mat-elevation-z8\">\r\n            <table mat-table #sortCol2=\"matSort\" [dataSource]=\"dataSource3\" matSort>\r\n\r\n              <ng-container matColumnDef=\"itemName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n                <td mat-cell *matCellDef=\"let stock\"> {{stock.itemName}}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"weight\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th>\r\n                <td mat-cell *matCellDef=\"let stock\"> {{stock.weight}}</td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\">\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <!-- sand-disposal -->\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12\" style=\"margin-top: 50px;\">\r\n      <app-sand-disposal></app-sand-disposal>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-6 col-sm-12\">\r\n      <app-mc-consumable-stock></app-mc-consumable-stock>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-6 col-sm-12\">\r\n      <app-mc-consumable-temp-stock></app-mc-consumable-temp-stock>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-6 col-sm-12\">\r\n      <app-mc-parts-stock></app-mc-parts-stock>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-6 col-sm-12\">\r\n      <app-mc-parts-temp-stock></app-mc-parts-temp-stock>\r\n    </div>\r\n  </div>\r\n</div>\r\n<notifier-container></notifier-container>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/foundry/stock/stock.component.scss":
/*!****************************************************!*\
  !*** ./src/app/foundry/stock/stock.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n.example-card {\n  width: 100%;\n  height: 100%;\n  margin-top: 50px; }\n\n.example-card2 {\n  width: 100%;\n  height: 100%; }\n\nth {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxzdG9ja1xcc3RvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLFdBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVTtFQUNWLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQxe1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZDJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICB0aHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/stock/stock.component.ts":
/*!**************************************************!*\
  !*** ./src/app/foundry/stock/stock.component.ts ***!
  \**************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock */ "./src/app/foundry/stock/stock.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");







var StockComponent = /** @class */ (function () {
    function StockComponent(stockService, router, matDialog, productionMonitoringService) {
        this.stockService = stockService;
        this.router = router;
        this.matDialog = matDialog;
        this.productionMonitoringService = productionMonitoringService;
        this.displayedColumns1 = ['itemName', 'weight', 'unit', 'vendorName',
            'invoiceNo', 'orderDate', 'deliveryDate', 'deliveryTime', 'actions'];
        this.displayedColumns2 = ['itemName', 'itemType', 'weight', 'unit',
            'minWeightReq', 'minOrderWeight', 'maxOrderWeight', 'lastOrder', 'actions'];
        this.displayedColumns3 = ['itemName', 'weight'];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    StockComponent.prototype.ngOnInit = function () {
        this.getTempStockList();
        this.getStockList();
        this.getReturns();
        this.stock = new _stock__WEBPACK_IMPORTED_MODULE_4__["Stock"]();
        this.return = new _stock__WEBPACK_IMPORTED_MODULE_4__["ReturnAndRejection"]();
    };
    StockComponent.prototype.getStockList = function () {
        var _this = this;
        this.stockService.getStockList().subscribe(function (data) {
            _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource2.paginator = _this.paginator2;
            _this.dataSource2.sort = _this.sort2;
        }, function (err) {
            console.log(err);
        });
    };
    StockComponent.prototype.getTempStockList = function () {
        var _this = this;
        this.stockService.getPendingList().subscribe(function (data) {
            _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource1.paginator = _this.paginator1;
            _this.dataSource1.sort = _this.sort1;
        }, function (err) {
            console.log(err);
        });
    };
    StockComponent.prototype.getReturns = function () {
        var _this = this;
        this.stockService.getReturns().subscribe(function (data) {
            _this.dataSource3 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
        }, function (err) {
            console.log(err);
        });
    };
    StockComponent.prototype.reOrder = function (i, purchaseId) {
        this.type = 'reOrder';
        this.router.navigate(['/foundry/purchase/' + purchaseId + '/' + this.type], { skipLocationChange: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StockComponent.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], StockComponent.prototype, "sort1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StockComponent.prototype, "paginator2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], StockComponent.prototype, "sort2", void 0);
    StockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! ./stock.component.html */ "./src/app/foundry/stock/stock.component.html"),
            styles: [__webpack_require__(/*! ./stock.component.scss */ "./src/app/foundry/stock/stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_6__["ProductionMonitoringService"]])
    ], StockComponent);
    return StockComponent;
}());



/***/ }),

/***/ "./src/app/foundry/stock/stock.module.ts":
/*!***********************************************!*\
  !*** ./src/app/foundry/stock/stock.module.ts ***!
  \***********************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.component */ "./src/app/foundry/stock/stock.component.ts");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/foundry/stock/stock-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _delivered_delivered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivered/delivered.component */ "./src/app/foundry/stock/delivered/delivered.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var _temp_stock_temp_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./temp-stock/temp-stock.component */ "./src/app/foundry/stock/temp-stock/temp-stock.component.ts");
/* harmony import */ var _production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../production-monitoring/production-monitoring.service */ "./src/app/foundry/production-monitoring/production-monitoring.service.ts");
/* harmony import */ var _sand_disposal_sand_disposal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sand-disposal/sand-disposal.component */ "./src/app/foundry/stock/sand-disposal/sand-disposal.component.ts");
/* harmony import */ var _sand_disposal_sand_dispatching_sand_dispatching_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sand-disposal/sand-dispatching/sand-dispatching.component */ "./src/app/foundry/stock/sand-disposal/sand-dispatching/sand-dispatching.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _mc_consumable_stock_mc_consumable_stock_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mc-consumable-stock/mc-consumable-stock.component */ "./src/app/foundry/stock/mc-consumable-stock/mc-consumable-stock.component.ts");
/* harmony import */ var _mc_parts_stock_mc_parts_stock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mc-parts-stock/mc-parts-stock.component */ "./src/app/foundry/stock/mc-parts-stock/mc-parts-stock.component.ts");
/* harmony import */ var _mc_parts_temp_stock_mc_parts_temp_stock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mc-parts-temp-stock/mc-parts-temp-stock.component */ "./src/app/foundry/stock/mc-parts-temp-stock/mc-parts-temp-stock.component.ts");
/* harmony import */ var _mc_consumable_temp_stock_mc_consumable_temp_stock_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mc-consumable-temp-stock/mc-consumable-temp-stock.component */ "./src/app/foundry/stock/mc-consumable-temp-stock/mc-consumable-temp-stock.component.ts");


















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
var StockModule = /** @class */ (function () {
    function StockModule() {
    }
    StockModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_stock_component__WEBPACK_IMPORTED_MODULE_3__["StockComponent"], _delivered_delivered_component__WEBPACK_IMPORTED_MODULE_6__["DeliveredComponent"], _temp_stock_temp_stock_component__WEBPACK_IMPORTED_MODULE_9__["TempStockComponent"], _sand_disposal_sand_disposal_component__WEBPACK_IMPORTED_MODULE_11__["SandDisposalComponent"], _sand_disposal_sand_dispatching_sand_dispatching_component__WEBPACK_IMPORTED_MODULE_12__["SandDispatchingComponent"], _mc_consumable_stock_mc_consumable_stock_component__WEBPACK_IMPORTED_MODULE_14__["McConsumableStockComponent"], _mc_parts_stock_mc_parts_stock_component__WEBPACK_IMPORTED_MODULE_15__["McPartsStockComponent"], _mc_parts_temp_stock_mc_parts_temp_stock_component__WEBPACK_IMPORTED_MODULE_16__["McPartsTempStockComponent"], _mc_consumable_temp_stock_mc_consumable_temp_stock_component__WEBPACK_IMPORTED_MODULE_17__["McConsumableTempStockComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _stock_routing_module__WEBPACK_IMPORTED_MODULE_4__["StockRoutingModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__["DateInputsModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"].withConfig(customNotifierOptions)
            ],
            entryComponents: [_delivered_delivered_component__WEBPACK_IMPORTED_MODULE_6__["DeliveredComponent"], _sand_disposal_sand_dispatching_sand_dispatching_component__WEBPACK_IMPORTED_MODULE_12__["SandDispatchingComponent"]],
            providers: [_production_monitoring_production_monitoring_service__WEBPACK_IMPORTED_MODULE_10__["ProductionMonitoringService"]]
        })
    ], StockModule);
    return StockModule;
}());



/***/ }),

/***/ "./src/app/foundry/stock/stock.ts":
/*!****************************************!*\
  !*** ./src/app/foundry/stock/stock.ts ***!
  \****************************************/
/*! exports provided: Stock, ReturnAndRejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnAndRejection", function() { return ReturnAndRejection; });
var Stock = /** @class */ (function () {
    function Stock() {
    }
    return Stock;
}());

var ReturnAndRejection = /** @class */ (function () {
    function ReturnAndRejection() {
    }
    return ReturnAndRejection;
}());



/***/ }),

/***/ "./src/app/foundry/stock/temp-stock/temp-stock.component.html":
/*!********************************************************************!*\
  !*** ./src/app/foundry/stock/temp-stock/temp-stock.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Pending Stock List -->\r\n<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Pending Stock</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"example-table-container mat-elevation-z8\">\r\n        <table mat-table #sortCol1=\"matSort\" [dataSource]=\"dataSource1\" matSort>\r\n\r\n          <ng-container matColumnDef=\"itemName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>ItemName </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.itemName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"weight\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.weight}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"unit\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.unit}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"vendorName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> VendorName </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.vendorName}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"invoiceNo\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> InvoiceNo </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.invoiceNo}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"deliveryTime\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> DeliveryTime </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.deliveryTime | date:'h:mm a'}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"orderDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> OrderDate </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.orderDate| date:'d MMM'}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"deliveryDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> DeliveryDate </th>\r\n            <td mat-cell *matCellDef=\"let tempStock\"> {{tempStock.deliveryDate | date:'d MMM'}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Delivered </th>\r\n            <mat-cell *matCellDef=\"let tempStock;let i=index\">\r\n              <button mat-icon-button color=\"accent\" matTooltip=\"Delivered\"\r\n                (click)=\"updateStock(i,tempStock._id,tempStock.itemName,tempStock.itemType,tempStock.weight,tempStock.purchaseId,tempStock.unit,tempStock.totalAmount,tempStock.minWeightReq)\">\r\n                <mat-icon>done_all</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <mat-paginator [pageSizeOptions]=\"[5,10, 25, 100]\"></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/foundry/stock/temp-stock/temp-stock.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/foundry/stock/temp-stock/temp-stock.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  font-family: 'Lora', serif; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n.example-card {\n  margin-top: 50px;\n  width: 100%;\n  height: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -20px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zdG9jay90ZW1wLXN0b2NrL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHN0b2NrXFx0ZW1wLXN0b2NrXFx0ZW1wLXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQTRCNUI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQU1oQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9zdG9jay90ZW1wLXN0b2NrL3RlbXAtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLy8gLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdGR7XHJcbiAgLy8gICB3aWR0aDogMjUlO1xyXG4gIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgLy8gfVxyXG4gIC8vIHRoe1xyXG4gIC8vICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gICAgIHdpZHRoOiAyNSU7XHJcbiAgLy8gICAgIGNvbG9yOiM2MjAwRUU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAjc3RvY2t7XHJcbiAgLy8gICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC8vIH1cclxuICAvLyBtYXQtY2FyZC10aXRsZXtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIC8vICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIC8vIH1cclxuICAuZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAvLyAjcGVuZGluZ1N0b2Nre1xyXG4gIC8vICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAvLyB9XHJcbiAgLmV4YW1wbGUtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbi5leGFtcGxlLWNhcmQxe1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/stock/temp-stock/temp-stock.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/foundry/stock/temp-stock/temp-stock.component.ts ***!
  \******************************************************************/
/*! exports provided: TempStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempStockComponent", function() { return TempStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock.service */ "./src/app/foundry/stock/stock.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock */ "./src/app/foundry/stock/stock.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _delivered_delivered_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delivered/delivered.component */ "./src/app/foundry/stock/delivered/delivered.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stock.component */ "./src/app/foundry/stock/stock.component.ts");









var TempStockComponent = /** @class */ (function () {
    function TempStockComponent(stockService, matDialog, datepipe, http, stockComponent) {
        this.stockService = stockService;
        this.matDialog = matDialog;
        this.datepipe = datepipe;
        this.http = http;
        this.stockComponent = stockComponent;
        this.displayedColumns1 = ['itemName', 'weight', 'unit',
            'vendorName', 'invoiceNo', 'orderDate', 'deliveryDate', 'deliveryTime', 'actions'];
    }
    TempStockComponent.prototype.ngOnInit = function () {
        this.getTempStockList();
        this.stock = new _stock__WEBPACK_IMPORTED_MODULE_4__["Stock"]();
    };
    TempStockComponent.prototype.getTempStockList = function () {
        var _this = this;
        this.stockService.getPendingList().subscribe(function (data) {
            _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource1.paginator = _this.paginator1;
            _this.dataSource1.sort = _this.sort1;
        }, function (err) {
            console.log(err);
        });
    };
    TempStockComponent.prototype.updateStock = function (i, _id, itemName, itemType, weight, purchaseId, unit, totalAmount, minWeightReq) {
        var _this = this;
        this.stock.itemName = itemName;
        this.stock.itemType = itemType;
        this.stock.weight = weight;
        this.stock.purchaseId = purchaseId;
        this.stock._id = _id;
        this.stock.unit = unit;
        this.stock.totalAmount = totalAmount;
        this.stock.minWeightReq = minWeightReq;
        var matDialogRef = this.matDialog.open(_delivered_delivered_component__WEBPACK_IMPORTED_MODULE_6__["DeliveredComponent"], {});
        matDialogRef.afterClosed().subscribe(function (result) {
            for (var i_1 = 0; i_1 < result.length; i_1++) {
                _this.stock.lastOrder = result[0];
                _this.stock.deliveredTime = result[1];
            }
            _this.stockService.updateStock(_this.stock).subscribe(function (data) {
                _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.getTempStockList();
                _this.stockComponent.getStockList();
            }, function (err) {
                console.log(err);
            });
            _this.getTempStockList();
            _this.stockComponent.getStockList();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TempStockComponent.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TempStockComponent.prototype, "sort1", void 0);
    TempStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-temp-stock',
            template: __webpack_require__(/*! ./temp-stock.component.html */ "./src/app/foundry/stock/temp-stock/temp-stock.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./temp-stock.component.scss */ "./src/app/foundry/stock/temp-stock/temp-stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _stock_component__WEBPACK_IMPORTED_MODULE_8__["StockComponent"]])
    ], TempStockComponent);
    return TempStockComponent;
}());



/***/ })

}]);
//# sourceMappingURL=stock-stock-module.js.map