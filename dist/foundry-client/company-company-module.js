(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/foundry/company/add-company/add-company.component.html":
/*!************************************************************************!*\
  !*** ./src/app/foundry/company/add-company/add-company.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h1 mat-dialog-title>Add Company Details</h1>\r\n  <form>\r\n    <div mat-dialog-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"companyName\" name=\"companyName\" [(ngModel)]=\"company.companyName\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"emailId\" name=\"emailId\" [(ngModel)]=\"company.emailId\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"phoneNo\" name=\"phoneNo\" [(ngModel)]=\"company.phoneNo\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"address\" name=\"address\" [(ngModel)]=\"company.address\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"startDate\" name=\"startDate\"\r\n              [(ngModel)]=\"company.startDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"endDate\" name=\"endDate\"\r\n              [(ngModel)]=\"company.endDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker2></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"companyCode\" name=\"companyCode\" [(ngModel)]=\"company.companyCode\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"idProof\" name=\"idProof\" [(ngModel)]=\"company.idProof\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"saveCompanyMaster()\">Save</button>\r\n      <button mat-raised-button color=\"accent\" (click)=\"cancel()\">Cancel</button>\r\n    </mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/foundry/company/add-company/add-company.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/foundry/company/add-company/add-company.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n\nh1 {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  text-align: center; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px; }\n\nmat-option {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jb21wYW55L2FkZC1jb21wYW55L0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXGNvbXBhbnlcXGFkZC1jb21wYW55XFxhZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L2NvbXBhbnkvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5tYXQtb3B0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foundry/company/add-company/add-company.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/foundry/company/add-company/add-company.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company */ "./src/app/foundry/company/company.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company.service */ "./src/app/foundry/company/company.service.ts");






var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(companyService, notifierService, matDialogRef, data) {
        this.companyService = companyService;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.notifier = notifierService;
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        this.company = new _company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
    };
    /** save&update the company master  */
    AddCompanyComponent.prototype.saveCompanyMaster = function () {
        var _this = this;
        this.company.modifiedBy = localStorage.getItem('user');
        this.company.createdBy = localStorage.getItem('user');
        this.companyService.saveCompanyMaster(this.company).subscribe(function (data) {
            _this.notifier.notify('success', 'Saved Successfully');
            _this.matDialogRef.close();
        }, function (err) {
            _this.notifier.notify('error', 'Not Save');
        });
    };
    AddCompanyComponent.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__(/*! ./add-company.component.html */ "./src/app/foundry/company/add-company/add-company.component.html"),
            styles: [__webpack_require__(/*! ./add-company.component.scss */ "./src/app/foundry/company/add-company/add-company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _company__WEBPACK_IMPORTED_MODULE_3__["Company"]])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "./src/app/foundry/company/company-routing-module.ts":
/*!***********************************************************!*\
  !*** ./src/app/foundry/company/company-routing-module.ts ***!
  \***********************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "./src/app/foundry/company/company.component.ts");




var routes = [
    {
        path: '',
        component: _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"],
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/company/company.component.html":
/*!********************************************************!*\
  !*** ./src/app/foundry/company/company.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n      <div class=\"example-table-container mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"companyName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>companyName </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.companyName}}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"emailId\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>emailId </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.emailId}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"phoneNo\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> phoneNo </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.phoneNo}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"address\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>address </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.address}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"startDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> startDate </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.startDate | date:'MMM d,y'}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"endDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> endDate </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.endDate | date:'MMM d,y' }} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"companyCode\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> companyCode </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.companyCode}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"idProof\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> idProof </th>\r\n            <td mat-cell *matCellDef=\"let company\"> {{company.idProof}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef>\r\n              <button mat-icon-button matTooltip=\"Refresh\" color=\"accent\" (click)=\"refresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </button>\r\n              <button mat-icon-button matTooltip=\"Add Item\" color=\"accent\"(click)=\"addCompanyMaster()\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let company;let i=index\">\r\n              <button mat-icon-button matTooltip=\"Edit companyMaster\" color=\"accent\" (click)=\"updateCompanyMaster(i,company._id,company.companyName,company.emailId,company.phoneNo,company.address,\r\n                company.startDate,company.endDate,company.companyCode,company.idProof)\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n              <button mat-icon-button matTooltip=\"Delete companyMaster\" color=\"accent\" (click)=\"deleteCompanyMaster(i,company._id,company.companyName,company.emailId,company.phoneNo,company.address,\r\n              company.startDate,company.endDate,company.companyCode,company.idProof)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n          </tr>\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      </div>\r\n     \r\n</div>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/company/company.component.scss":
/*!********************************************************!*\
  !*** ./src/app/foundry/company/company.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 30%;\n  margin-top: 50px; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px; }\n\nbutton {\n  margin-left: 15px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd {\n  width: 25%;\n  font-family: 'Times New Roman', Times, serif; }\n\nth {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  width: 25%;\n  color: #2979FF; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jb21wYW55L0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXGNvbXBhbnlcXGNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlLEVBQUE7O0FBRW5CO0VBQ0EsaUJBQWlCLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDViw0Q0FBNEMsRUFBQTs7QUFFOUM7RUFDSSw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuYnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRke1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIH1cclxuICB0aHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgY29sb3I6ICMyOTc5RkY7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/company/company.component.ts":
/*!******************************************************!*\
  !*** ./src/app/foundry/company/company.component.ts ***!
  \******************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.service */ "./src/app/foundry/company/company.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company */ "./src/app/foundry/company/company.ts");
/* harmony import */ var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-company/edit-company.component */ "./src/app/foundry/company/edit-company/edit-company.component.ts");
/* harmony import */ var _delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-company/delete-company.component */ "./src/app/foundry/company/delete-company/delete-company.component.ts");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/foundry/company/add-company/add-company.component.ts");









var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService, notifierService, matDialog) {
        this.companyService = companyService;
        this.matDialog = matDialog;
        this.displayedColumns = ['companyName', 'emailId', 'phoneNo', 'address', 'startDate',
            'endDate', 'companyCode', 'idProof', 'actions'];
        this.notifier = notifierService;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.company = new _company__WEBPACK_IMPORTED_MODULE_5__["Company"]();
        this.getAllCompanyMaster();
    };
    CompanyComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /** get all company details */
    CompanyComponent.prototype.getAllCompanyMaster = function () {
        var _this = this;
        this.companyService.getAllCompanyMaster().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    /**add company details */
    CompanyComponent.prototype.addCompanyMaster = function () {
        var _this = this;
        var matDialogRef = this.matDialog.open(_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_8__["AddCompanyComponent"], {});
        matDialogRef.afterClosed().subscribe(function (result) {
            _this.getAllCompanyMaster();
        });
    };
    /**update company details */
    CompanyComponent.prototype.updateCompanyMaster = function (i, _id, companyName, emailId, phoneNo, address, startDate, endDate, companyCode, idProof) {
        var _this = this;
        var matDialogRef = this.matDialog.open(_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__["EditCompanyComponent"], {
            data: {
                _id: _id, companyName: companyName, emailId: emailId, phoneNo: phoneNo, address: address, startDate: startDate,
                endDate: endDate, companyCode: companyCode, idProof: idProof
            }
        });
        matDialogRef.afterClosed().subscribe(function (result) {
            _this.getAllCompanyMaster();
        });
    };
    /** delete company details */
    CompanyComponent.prototype.deleteCompanyMaster = function (i, _id, companyName, emailId, phoneNo, address, startDate, endDate, companyCode, idProof) {
        var _this = this;
        var matDialogRef = this.matDialog.open(_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCompanyComponent"], {
            data: {
                _id: _id, companyName: companyName, emailId: emailId, phoneNo: phoneNo, address: address, startDate: startDate,
                endDate: endDate, companyCode: companyCode, idProof: idProof
            }
        });
        matDialogRef.afterClosed().subscribe(function (result) {
            _this.getAllCompanyMaster();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CompanyComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], CompanyComponent.prototype, "sort", void 0);
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/foundry/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/foundry/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/foundry/company/company.module.ts":
/*!***************************************************!*\
  !*** ./src/app/foundry/company/company.module.ts ***!
  \***************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "./src/app/foundry/company/company.component.ts");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-routing-module */ "./src/app/foundry/company/company-routing-module.ts");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/foundry/company/add-company/add-company.component.ts");
/* harmony import */ var _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-company/edit-company.component */ "./src/app/foundry/company/edit-company/edit-company.component.ts");
/* harmony import */ var _delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-company/delete-company.component */ "./src/app/foundry/company/delete-company/delete-company.component.ts");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _master_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../master/master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












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
var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"], _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"], _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__["EditCompanyComponent"], _delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCompanyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions), src_app_app_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ],
            providers: [_master_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"]],
            entryComponents: [_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"], _edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__["EditCompanyComponent"], _delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCompanyComponent"]]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/foundry/company/company.service.ts":
/*!****************************************************!*\
  !*** ./src/app/foundry/company/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.baseURL = '/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    /**get All activity Master */
    CompanyService.prototype.getAllCompanyMaster = function () {
        return this.http.get(this.baseURL + '/companyMaster', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Save company Master */
    CompanyService.prototype.saveCompanyMaster = function (company) {
        return this.http.post(this.baseURL + '/companyMaster', JSON.stringify(company), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Update company Master */
    CompanyService.prototype.updateCompanyMaster = function (company) {
        return this.http.put(this.baseURL + '/companyMaster', JSON.stringify(company), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**delete company Master */
    CompanyService.prototype.deleteCompanyMaster = function (company) {
        return this.http.patch(this.baseURL + '/companyMaster', JSON.stringify(company), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/foundry/company/company.ts":
/*!********************************************!*\
  !*** ./src/app/foundry/company/company.ts ***!
  \********************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/foundry/company/delete-company/delete-company.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/foundry/company/delete-company/delete-company.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 mat-dialog-title>Are You Sure?</h1>\r\n    <div mat-dialog-content>\r\n      <p>ID: {{data._id}}</p>\r\n      <p>Company Name: {{data.companyName}}</p>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"deleteCompanyMaster()\">Delete</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/foundry/company/delete-company/delete-company.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/foundry/company/delete-company/delete-company.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 12px;\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px; }\n\nh1 {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jb21wYW55L2RlbGV0ZS1jb21wYW55L0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXGNvbXBhbnlcXGRlbGV0ZS1jb21wYW55XFxkZWxldGUtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWUsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9jb21wYW55L2RlbGV0ZS1jb21wYW55L2RlbGV0ZS1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIFxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/company/delete-company/delete-company.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/foundry/company/delete-company/delete-company.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeleteCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function() { return DeleteCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company */ "./src/app/foundry/company/company.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company.service */ "./src/app/foundry/company/company.service.ts");






var DeleteCompanyComponent = /** @class */ (function () {
    function DeleteCompanyComponent(companyService, notifierService, matDialogRef, data) {
        this.companyService = companyService;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.notifier = notifierService;
    }
    DeleteCompanyComponent.prototype.ngOnInit = function () {
    };
    /**delete Company Master */
    DeleteCompanyComponent.prototype.deleteCompanyMaster = function () {
        var _this = this;
        this.data.modifiedBy = localStorage.getItem('user');
        this.companyService.deleteCompanyMaster(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.matDialogRef.close();
        }, function (err) {
            _this.notifier.notify('error', 'Nor delate');
        });
    };
    DeleteCompanyComponent.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-company',
            template: __webpack_require__(/*! ./delete-company.component.html */ "./src/app/foundry/company/delete-company/delete-company.component.html"),
            styles: [__webpack_require__(/*! ./delete-company.component.scss */ "./src/app/foundry/company/delete-company/delete-company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _company__WEBPACK_IMPORTED_MODULE_2__["Company"]])
    ], DeleteCompanyComponent);
    return DeleteCompanyComponent;
}());



/***/ }),

/***/ "./src/app/foundry/company/edit-company/edit-company.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/company/edit-company/edit-company.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title>update Company Details</h1>\r\n  <form>\r\n    <div mat-dialog-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"companyName\" name=\"companyName\" [(ngModel)]=\"data.companyName\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"emailId\" name=\"emailId\" [(ngModel)]=\"data.emailId\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"phoneNo\" name=\"phoneNo\" [(ngModel)]=\"data.phoneNo\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"address\" name=\"address\" [(ngModel)]=\"data.address\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"startDate\" name=\"startDate\"\r\n              [(ngModel)]=\"data.startDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"endDate\" name=\"endDate\" [(ngModel)]=\"data.endDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker2></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"companyCode\" name=\"companyCode\" [(ngModel)]=\"data.companyCode\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"idProof\" name=\"idProof\" [(ngModel)]=\"data.idProof\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"updateCompanyMaster()\">Update</button>\r\n      <button mat-raised-button color=\"accent\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/foundry/company/edit-company/edit-company.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/company/edit-company/edit-company.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-left: 10px; }\n\n.example-full-width {\n  width: 100%; }\n\nh1 {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9jb21wYW55L2VkaXQtY29tcGFueS9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxjb21wYW55XFxlZGl0LWNvbXBhbnlcXGVkaXQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9jb21wYW55L2VkaXQtY29tcGFueS9lZGl0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foundry/company/edit-company/edit-company.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/foundry/company/edit-company/edit-company.component.ts ***!
  \************************************************************************/
/*! exports provided: EditCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function() { return EditCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company */ "./src/app/foundry/company/company.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company.service */ "./src/app/foundry/company/company.service.ts");






var EditCompanyComponent = /** @class */ (function () {
    function EditCompanyComponent(companyService, notifierService, matDialogRef, data) {
        this.companyService = companyService;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.notifier = notifierService;
    }
    EditCompanyComponent.prototype.ngOnInit = function () {
    };
    /**update Company Master */
    EditCompanyComponent.prototype.updateCompanyMaster = function () {
        var _this = this;
        this.data.modifiedBy = localStorage.getItem('user');
        this.companyService.updateCompanyMaster(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Updated Successfully');
            _this.matDialogRef.close();
        }, function (err) {
            _this.notifier.notify('error', 'Nor update');
        });
    };
    EditCompanyComponent.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    EditCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-company',
            template: __webpack_require__(/*! ./edit-company.component.html */ "./src/app/foundry/company/edit-company/edit-company.component.html"),
            styles: [__webpack_require__(/*! ./edit-company.component.scss */ "./src/app/foundry/company/edit-company/edit-company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _company__WEBPACK_IMPORTED_MODULE_2__["Company"]])
    ], EditCompanyComponent);
    return EditCompanyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map