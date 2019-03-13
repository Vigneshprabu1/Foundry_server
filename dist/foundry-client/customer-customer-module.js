(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/foundry/customer/add-customer/add-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/customer/add-customer/add-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title>Add Customer</h1>\r\n  <form [formGroup]=\"userForm\">\r\n    <div mat-dialog-content>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Customer Name\" formControlName=\"customerName\" id=\"customerName\" name=\"customerName\"\r\n          [(ngModel)]=\"customer.customerName\" >\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.customerName\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Mobile No\" formControlName=\"mobileNo\" id=\"mobileNo\" [maxlength]=\"10\" name=\"mobileNo\"\r\n          [(ngModel)]=\"customer.mobileNo\" (ngModelChange)=\"selectedMobile(customer.mobileNo)\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.mobileNo\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Email Id\" formControlName=\"emailId\" id=\"emailId\"  name=\"emailId\"\r\n          [(ngModel)]=\"customer.emailId\" (ngModelChange)=\"selectedEmail(customer.emailId)\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.emailId\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Address\" formControlName=\"address\" id=\"address\" name=\"address\"\r\n          [(ngModel)]=\"customer.address\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.address\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button (click)=\"addCustomer()\" color=\"primary\"\r\n        [disabled]=\"!userForm.valid\">Save</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Close</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/foundry/customer/add-customer/add-customer.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/customer/add-customer/add-customer.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n  text-align: center; }\n\nh1 {\n  font-size: 20px;\n  text-align: center; }\n\np {\n  font-family: Lato; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jdXN0b21lci9hZGQtY3VzdG9tZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcY3VzdG9tZXJcXGFkZC1jdXN0b21lclxcYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvY3VzdG9tZXIvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDF7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5wIHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/customer/add-customer/add-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/foundry/customer/add-customer/add-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer */ "./src/app/foundry/customer/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(dialogRef, data, customerService, notifier, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.customerService = customerService;
        this.formBuilder = formBuilder;
        this.notifier = notifier;
        this.userForm = this.formBuilder.group({
            'customerName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'emailId': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].emailValidator]],
            'mobileNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].mobileValidator]],
            'address': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('user');
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.getAllCustomer();
    };
    AddCustomerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddCustomerComponent.prototype.getAllCustomer = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (data) {
            _this.customerList = data;
        }, function (err) {
            console.log(err);
        });
    };
    AddCustomerComponent.prototype.selectedEmail = function (email) {
        var _this = this;
        this.customerList.forEach(function (res) {
            if (email === res.emailId) {
                _this.notifier.notify('error', 'Email id already exists!');
                _this.customer.emailId = '';
            }
        });
    };
    AddCustomerComponent.prototype.selectedMobile = function (mobile) {
        var _this = this;
        this.customerList.forEach(function (res) {
            if (mobile === res.mobileNo) {
                _this.notifier.notify('error', 'Mobile No already exists!');
                _this.customer.mobileNo = '';
            }
        });
    };
    AddCustomerComponent.prototype.addCustomer = function () {
        var _this = this;
        this.customer.modifiedBy = this.currentUser;
        this.customerService.saveCustomers(this.customer).subscribe(function (data) {
            _this.notifier.notify('success', 'Save Successfully');
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
            _this.notifier.notify('error', 'Not Save');
        });
    };
    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/foundry/customer/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.scss */ "./src/app/foundry/customer/add-customer/add-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/foundry/customer/customer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/foundry/customer/customer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/foundry/customer/customer.component.ts");




var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/customer/customer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/foundry/customer/customer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n      <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n    <div class=\"example-table-container mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort >\r\n\r\n      <ng-container matColumnDef=\"customerName\">\r\n        <th mat-header-cell  *matHeaderCellDef mat-sort-header> Customer Name</th>\r\n        <td mat-cell  *matCellDef=\"let customer\">{{customer.customerName}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"mobileNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Mobile No</th>\r\n        <td mat-cell *matCellDef=\"let customer\">{{customer.mobileNo}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"emailId\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\r\n        <td mat-cell *matCellDef=\"let customer\">{{customer.emailId}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"address\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Address</th>\r\n        <td mat-cell *matCellDef=\"let customer\">{{customer.address}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <button mat-icon-button matTooltip=\"Add Customer\" color=\"accent\" (click)=\"addCustomer()\">\r\n            <mat-icon aria-label=\"Add\">add</mat-icon>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Refresh Customer\" color=\"accent\" (click)=\"getCustomer()\">\r\n            <mat-icon aria-label=\"Refresh\">refresh</mat-icon>\r\n          </button>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n          <button mat-icon-button matTooltip=\"Edit Customer\" color=\"accent\" (click)=\"editCustomer(row._id,row.customerName,row.mobileNo,row.emailId,row.address)\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Delete Customer\" color=\"accent\" (click)=\"deleteCustomer(row._id,row.customerName)\">\r\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/customer/customer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/foundry/customer/customer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n  text-align: center; }\n\nth {\n  font-size: 20px;\n  font-family: 'Lora', serif;\n  color: #f73378; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jdXN0b21lci9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxjdXN0b21lclxcY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXLEVBQUE7O0FBR1g7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsY0FBYyxFQUFBOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRoe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICBjb2xvcjogI2Y3MzM3ODtcclxufVxyXG4uZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/customer/customer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/foundry/customer/customer.component.ts ***!
  \********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "./src/app/foundry/customer/add-customer/add-customer.component.ts");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "./src/app/foundry/customer/edit-customer/edit-customer.component.ts");
/* harmony import */ var _delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-customer/delete-customer.component */ "./src/app/foundry/customer/delete-customer/delete-customer.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");









var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customerService, dialog, notifier) {
        this.customerService = customerService;
        this.dialog = dialog;
        this.resultsLength = 0;
        this.displayedColumns = ['customerName', 'mobileNo', 'emailId', 'address', 'actions'];
        this.notifier = notifier;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.getCustomer();
    };
    CustomerComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CustomerComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customer) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](customer);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    CustomerComponent.prototype.addCustomer = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getCustomer();
        });
    };
    CustomerComponent.prototype.editCustomer = function (_id, customerName, mobileNo, emailId, address) {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_4__["EditCustomerComponent"], {
            data: { _id: _id, customerName: customerName, mobileNo: mobileNo, emailId: emailId, address: address }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getCustomer();
        });
    };
    CustomerComponent.prototype.deleteCustomer = function (_id, customerName) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCustomerComponent"], {
            data: { _id: _id, customerName: customerName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getCustomer();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CustomerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CustomerComponent.prototype, "sort", void 0);
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/foundry/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/foundry/customer/customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/foundry/customer/customer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/foundry/customer/customer.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/foundry/customer/customer.component.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/foundry/customer/customer-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "./src/app/foundry/customer/add-customer/add-customer.component.ts");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "./src/app/foundry/customer/edit-customer/edit-customer.component.ts");
/* harmony import */ var _delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-customer/delete-customer.component */ "./src/app/foundry/customer/delete-customer/delete-customer.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _foundry_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../foundry.module */ "./src/app/foundry/foundry.module.ts");














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
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__["AddCustomerComponent"], _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_8__["EditCustomerComponent"], _delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_9__["DeleteCustomerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _foundry_module__WEBPACK_IMPORTED_MODULE_12__["FoundryModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_11__["NotifierModule"].withConfig(customNotifierOptions)
            ],
            entryComponents: [
                _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__["AddCustomerComponent"], _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_8__["EditCustomerComponent"], _delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_9__["DeleteCustomerComponent"]
            ],
            providers: [
                _customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/foundry/customer/customer.ts":
/*!**********************************************!*\
  !*** ./src/app/foundry/customer/customer.ts ***!
  \**********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/foundry/customer/delete-customer/delete-customer.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/customer/delete-customer/delete-customer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 mat-dialog-title>Are You Sure?</h1>\r\n      <div mat-dialog-content>\r\n        <p>Customer Name: {{data.customerName}}</p>\r\n      </div>\r\n      <div mat-dialog-actions align=\"end\">\r\n        <button mat-raised-button (click)=\"deleteCustomer()\" color=\"primary\">Delete</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Close</button>\r\n      </div>\r\n  </div>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/customer/delete-customer/delete-customer.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/customer/delete-customer/delete-customer.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvY3VzdG9tZXIvZGVsZXRlLWN1c3RvbWVyL2RlbGV0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foundry/customer/delete-customer/delete-customer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/customer/delete-customer/delete-customer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function() { return DeleteCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer */ "./src/app/foundry/customer/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");






var DeleteCustomerComponent = /** @class */ (function () {
    function DeleteCustomerComponent(dialogRef, data, customerService, notifier) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.customerService = customerService;
        this.notifier = notifier;
    }
    DeleteCustomerComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('user');
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
    };
    DeleteCustomerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteCustomerComponent.prototype.deleteCustomer = function () {
        var _this = this;
        this.customerService.deleteCustomer(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
            _this.notifier.notify('error', 'Not deleted');
        });
    };
    DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-customer',
            template: __webpack_require__(/*! ./delete-customer.component.html */ "./src/app/foundry/customer/delete-customer/delete-customer.component.html"),
            styles: [__webpack_require__(/*! ./delete-customer.component.scss */ "./src/app/foundry/customer/delete-customer/delete-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], DeleteCustomerComponent);
    return DeleteCustomerComponent;
}());



/***/ }),

/***/ "./src/app/foundry/customer/edit-customer/edit-customer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/customer/edit-customer/edit-customer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title>Edit Customer</h1>\r\n  <form [formGroup]=\"userForm\">\r\n    <div mat-dialog-content>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Customer Name\" formControlName=\"customerName\" id=\"customerName\" name=\"customerName\"\r\n          [(ngModel)]=\"data.customerName\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.customerName\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Mobile No\" formControlName=\"mobileNo\" id=\"mobileNo\" [maxlength]=\"10\"\r\n          name=\"mobileNo\" [(ngModel)]=\"data.mobileNo\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.mobileNo\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Email Id\" formControlName=\"emailId\" id=\"emailId\" name=\"emailId\"\r\n          [(ngModel)]=\"data.emailId\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.emailId\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Address\" formControlName=\"address\" id=\"address\" name=\"address\"\r\n          [(ngModel)]=\"data.address\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.address\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button (click)=\"updateCustomer()\" [disabled]=\"!userForm.valid\"\r\n        color=\"primary\">Edit</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Close</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/foundry/customer/edit-customer/edit-customer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/customer/edit-customer/edit-customer.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n  text-align: center; }\n\nh1 {\n  font-size: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jdXN0b21lci9lZGl0LWN1c3RvbWVyL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXGN1c3RvbWVyXFxlZGl0LWN1c3RvbWVyXFxlZGl0LWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvY3VzdG9tZXIvZWRpdC1jdXN0b21lci9lZGl0LWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/customer/edit-customer/edit-customer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/customer/edit-customer/edit-customer.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer */ "./src/app/foundry/customer/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "./src/app/foundry/customer/customer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var EditCustomerComponent = /** @class */ (function () {
    function EditCustomerComponent(dialogRef, data, customerService, notifier, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.customerService = customerService;
        this.formBuilder = formBuilder;
        this.notifier = notifier;
        this.userForm = this.formBuilder.group({
            'customerName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'emailId': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].emailValidator]],
            'mobileNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].mobileValidator]],
            'address': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('user');
        console.log(this.data);
    };
    EditCustomerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditCustomerComponent.prototype.updateCustomer = function () {
        var _this = this;
        console.log(this.data);
        this.data.modifiedBy = this.currentUser;
        this.customerService.updateCustomer(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Updated Successfully');
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
            _this.notifier.notify('error', 'Not Update');
        });
    };
    EditCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-customer',
            template: __webpack_require__(/*! ./edit-customer.component.html */ "./src/app/foundry/customer/edit-customer/edit-customer.component.html"),
            styles: [__webpack_require__(/*! ./edit-customer.component.scss */ "./src/app/foundry/customer/edit-customer/edit-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"],
            _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map