(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./src/app/foundry/employee/add-employee/add-employee.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/employee/add-employee/add-employee.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 400px;\">\r\n  <h1 mat-dialog-title>Add Employee</h1>\r\n  <form #formControl=\"ngForm\">\r\n    <div mat-dialog-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Employee Name\" name=\"empName\" [(ngModel)]=\"employee.empName\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Employee Nature\" name=\"empNature\" [(ngModel)]=\"employee.empNature\">\r\n              <mat-option value=\"Permament\">Permament</mat-option>\r\n              <mat-option value=\"Temporary\">Temporary</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Activity\" name=\"activity\" [(ngModel)]=\"employee.activity\" (ngModelChange)=\"getDepartment(employee.activity)\">\r\n              <mat-option value=\"Production\">Production</mat-option>\r\n              <mat-option value=\"NonProduction\">Non   Production</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Department\" name=\"empDepartment\" [(ngModel)]=\"employee.empDepartment\" >\r\n                <mat-option *ngFor=\"let departments of department\" [value]=\"departments.department\">\r\n                    {{departments.department}}\r\n                  </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Shift\" name=\"shift\" [(ngModel)]=\"employee.shift\" (ngModelChange)=\"getshiftId(employee.shift)\">\r\n                <mat-option *ngFor=\"let shifts of shift\" [value]=\"shifts.shift\">\r\n                    {{shifts.shift}}\r\n                  </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Salary Type\" name=\"salaryType\" [(ngModel)]=\"employee.salaryType\" (ngModelChange)=\"getSalaryId(employee.salaryType)\">\r\n              <mat-option *ngFor=\"let salarys of salary\" [value]=\"salarys.salaryType\">\r\n                {{salarys.salaryType}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Salary\" name=\"salary\" [(ngModel)]=\"employee.salary\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Status\"  appStringValidation=\"words\"  name=\"status\" [(ngModel)]=\"employee.status\"\r\n            required>\r\n            <mat-option value=\"Active\">Active</mat-option>\r\n            <mat-option value=\"Inactive\">InActive</mat-option>\r\n          </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button (click)=\"saveEmployee()\" color=\"primary\" [disabled]=\"!formControl.valid\">Save</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Close</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/employee/add-employee/add-employee.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/employee/add-employee/add-employee.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n  text-align: center; }\n\nh1 {\n  font-size: 20px;\n  text-align: center; }\n\np {\n  font-family: Lato; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9lbXBsb3llZS9hZGQtZW1wbG95ZWUvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcZW1wbG95ZWVcXGFkZC1lbXBsb3llZVxcYWRkLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvZW1wbG95ZWUvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDF7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5wIHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/employee/add-employee/add-employee.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/foundry/employee/add-employee/add-employee.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee */ "./src/app/foundry/employee/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/foundry/employee/employee.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../master/production-master/production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");







var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(employeeService, productionMasterService, dialogRef, data, notifier) {
        this.employeeService = employeeService;
        this.productionMasterService = productionMasterService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.notifier = notifier;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('user');
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        this.getSalary();
        this.getShift();
    };
    AddEmployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        this.employee.createdBy = this.currentUser;
        this.employeeService.saveEmployee(this.employee).subscribe(function (data) {
            _this.notifier.notify('success', 'Save Successfully');
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
        });
    };
    AddEmployeeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEmployeeComponent.prototype.getshiftId = function (shiftType) {
        var _this = this;
        this.shift.forEach(function (element) {
            if (element.shift === shiftType) {
                _this.employee.shiftId = element._id;
            }
        });
    };
    AddEmployeeComponent.prototype.getSalaryId = function (salaryType) {
        var _this = this;
        this.salary.forEach(function (element) {
            if (element.salaryType === salaryType) {
                _this.employee.salaryId = element._id;
            }
        });
    };
    AddEmployeeComponent.prototype.getShift = function () {
        var _this = this;
        this.productionMasterService.getShift().subscribe(function (data) {
            _this.shift = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddEmployeeComponent.prototype.getSalary = function () {
        var _this = this;
        this.productionMasterService.getSalary().subscribe(function (data) {
            _this.salary = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddEmployeeComponent.prototype.getDepartment = function (activity) {
        var _this = this;
        this.productionMasterService.getDepartMent(activity).subscribe(function (data) {
            _this.department = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/foundry/employee/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.scss */ "./src/app/foundry/employee/add-employee/add-employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_6__["ProductionMasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/foundry/employee/delete-employee/delete-employee.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/employee/delete-employee/delete-employee.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 mat-dialog-title>Delete Employee</h1>\r\n      <div mat-dialog-content>\r\n        <p>Employee Name: {{data.empName}}</p>\r\n      </div>\r\n      <div mat-dialog-actions align=\"end\">\r\n        <button mat-raised-button style=\"float: inherit;\" (click)=\"deleteEmployee()\" color=\"primary\">Delete</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Close</button>\r\n      </div>\r\n  </div>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/employee/delete-employee/delete-employee.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/employee/delete-employee/delete-employee.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvZW1wbG95ZWUvZGVsZXRlLWVtcGxveWVlL2RlbGV0ZS1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foundry/employee/delete-employee/delete-employee.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/employee/delete-employee/delete-employee.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEmployeeComponent", function() { return DeleteEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee */ "./src/app/foundry/employee/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/foundry/employee/employee.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");






var DeleteEmployeeComponent = /** @class */ (function () {
    function DeleteEmployeeComponent(dialogRef, data, cemployeeService, notifier) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.cemployeeService = cemployeeService;
        this.notifier = notifier;
    }
    DeleteEmployeeComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('user');
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"]();
    };
    DeleteEmployeeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteEmployeeComponent.prototype.deleteEmployee = function () {
        var _this = this;
        this.cemployeeService.deleteEmployee(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Save Successfully');
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
            _this.notifier.notify('error', 'Dont Save');
        });
    };
    DeleteEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-employee',
            template: __webpack_require__(/*! ./delete-employee.component.html */ "./src/app/foundry/employee/delete-employee/delete-employee.component.html"),
            styles: [__webpack_require__(/*! ./delete-employee.component.scss */ "./src/app/foundry/employee/delete-employee/delete-employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], DeleteEmployeeComponent);
    return DeleteEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/foundry/employee/edit-employee/edit-employee.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/employee/edit-employee/edit-employee.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 400px;\">\r\n    <h1 mat-dialog-title>Edit Employee</h1>\r\n    <form #formControl=\"ngForm\">\r\n      <div mat-dialog-content>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Employee Name\" name=\"empName\" [(ngModel)]=\"data.empName\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Employee Nature\" name=\"empNature\" [(ngModel)]=\"data.empNature\">\r\n                  <mat-option value=\"Permament\">Permament</mat-option>\r\n                  <mat-option value=\"Temporary\">Temporary</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Activity\" name=\"activity\" [(ngModel)]=\"data.activity\" (ngModelChange)=\"getDepartment(data.activity)\">\r\n                  <mat-option value=\"Production\">Production</mat-option>\r\n                  <mat-option value=\"NonProduction\">Non   Production</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Department\" name=\"empDepartment\" [(ngModel)]=\"data.empDepartment\">\r\n                  <mat-option *ngFor=\"let departments of department\" [value]=\"departments.department\">\r\n                      {{departments.department}}\r\n                    </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Shift\" name=\"shift\" [(ngModel)]=\"data.shift\" (ngModelChange)=\"getshiftId(employee.shift)\">\r\n                  <mat-option *ngFor=\"let shifts of shift\" [value]=\"shifts.shift\">\r\n                      {{shifts.shift}}\r\n                    </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Salary Type\" name=\"salaryType\" [(ngModel)]=\"data.salaryType\" (ngModelChange)=\"getSalaryId(employee.salaryType)\">\r\n                <mat-option *ngFor=\"let salarys of salary\" [value]=\"salarys.salaryType\">\r\n                  {{salarys.salaryType}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Salary\" name=\"salary\" [(ngModel)]=\"data.salary\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Status\"  appStringValidation=\"words\"  name=\"status\" [(ngModel)]=\"data.status\"\r\n              required>\r\n              <mat-option value=\"Active\">Active</mat-option>\r\n              <mat-option value=\"Inactive\">InActive</mat-option>\r\n            </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions align=\"end\">\r\n        <button mat-raised-button (click)=\"updateEmployee()\" color=\"primary\" [disabled]=\"!formControl.valid\">Save</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">Close</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/employee/edit-employee/edit-employee.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/employee/edit-employee/edit-employee.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n  text-align: center; }\n\nh1 {\n  font-size: 20px;\n  text-align: center; }\n\np {\n  font-family: Lato; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9lbXBsb3llZS9lZGl0LWVtcGxveWVlL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXGVtcGxveWVlXFxlZGl0LWVtcGxveWVlXFxlZGl0LWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvZW1wbG95ZWUvZWRpdC1lbXBsb3llZS9lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/employee/edit-employee/edit-employee.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/employee/edit-employee/edit-employee.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee */ "./src/app/foundry/employee/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/foundry/employee/employee.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../master/production-master/production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");







var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(employeeService, productionMasterService, dialogRef, data, notifier) {
        this.employeeService = employeeService;
        this.productionMasterService = productionMasterService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.notifier = notifier;
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        this.getSalary();
        this.getShift();
        this.getDepartment(this.data.activity);
    };
    EditEmployeeComponent.prototype.updateEmployee = function () {
        var _this = this;
        console.log('thes', this.data);
        this.employeeService.updateEmployee(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Save Successfully');
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
        });
    };
    EditEmployeeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditEmployeeComponent.prototype.getshiftId = function (shiftType) {
        var _this = this;
        this.shift.forEach(function (element) {
            if (element.shift === shiftType) {
                _this.employee.shiftId = element._id;
            }
        });
    };
    EditEmployeeComponent.prototype.getSalaryId = function (salaryType) {
        var _this = this;
        this.salary.forEach(function (element) {
            if (element.salaryType === salaryType) {
                _this.employee.salaryId = element._id;
            }
        });
    };
    EditEmployeeComponent.prototype.getShift = function () {
        var _this = this;
        this.productionMasterService.getShift().subscribe(function (data) {
            _this.shift = data;
        }, function (error) {
            console.log(error);
        });
    };
    EditEmployeeComponent.prototype.getSalary = function () {
        var _this = this;
        this.productionMasterService.getSalary().subscribe(function (data) {
            _this.salary = data;
        }, function (error) {
            console.log(error);
        });
    };
    EditEmployeeComponent.prototype.getDepartment = function (activity) {
        var _this = this;
        this.productionMasterService.getDepartMent(activity).subscribe(function (data) {
            _this.department = data;
        }, function (error) {
            console.log(error);
        });
    };
    EditEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-employee',
            template: __webpack_require__(/*! ./edit-employee.component.html */ "./src/app/foundry/employee/edit-employee/edit-employee.component.html"),
            styles: [__webpack_require__(/*! ./edit-employee.component.scss */ "./src/app/foundry/employee/edit-employee/edit-employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_6__["ProductionMasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/foundry/employee/employee-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/foundry/employee/employee-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/foundry/employee/employee.component.ts");




var routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
    }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/employee/employee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/foundry/employee/employee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <div  class=\"example-table-container mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort >\r\n\r\n      <ng-container matColumnDef=\"empName\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Employee Name</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.empName}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"empNature\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Employee Nature</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.empNature}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"activity\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Activity</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.activity}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"empDepartment\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Department</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.empDepartment}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"shift\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Shift</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.shift}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"salaryType\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Salary Type</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.salaryType}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"salary\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Salary</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.salary}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n        <td mat-cell *matCellDef=\"let employee\">{{employee.status}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <button mat-icon-button matTooltip=\"Add Employee\" color=\"accent\" (click)=\"addEmployee()\">\r\n            <mat-icon aria-label=\"Add\">add</mat-icon>\r\n          </button>\r\n          <!-- <button mat-icon-button matTooltip=\"Refresh Employee\" color=\"accent\" (click)=\"getEmployee()\">\r\n            <mat-icon aria-label=\"Refresh\">refresh</mat-icon>\r\n          </button> -->\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let employee; let i=index;\">\r\n          <button mat-icon-button matTooltip=\"Edit Employye\" color=\"accent\" (click)=\"editEmployee(employee._id,employee.empName,\r\n            employee.empNature,employee.activity,employee.empDepartment,employee.shiftId,employee.shift,employee.salaryId,employee.salaryType,employee.salary,employee.status)\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n          </button>\r\n          <!-- <button mat-icon-button matTooltip=\"Delete Employee\" color=\"accent\" (click)=\"deleteEmployee(employee._id,employee.empName)\">\r\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n          </button> -->\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row mat-row *matRowDef=\"let employee; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/employee/employee.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/foundry/employee/employee.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n  text-align: center; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 20px;\n  color: #f73378; }\n\n.example-table-container {\n  position: relative;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9lbXBsb3llZS9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxlbXBsb3llZVxcZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXLEVBQUE7O0FBR1g7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQU1wQjtFQUNJLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBZSxFQUFBOztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRke1xyXG5cclxuICB9XHJcbiAgdGh7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAgI2Y3MzM3ODs7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/employee/employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/foundry/employee/employee.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/foundry/employee/add-employee/add-employee.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/foundry/employee/edit-employee/edit-employee.component.ts");
/* harmony import */ var _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-employee/delete-employee.component */ "./src/app/foundry/employee/delete-employee/delete-employee.component.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee.service */ "./src/app/foundry/employee/employee.service.ts");








var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, dialog) {
        this.employeeService = employeeService;
        this.dialog = dialog;
        this.displayedColumns = ['empName', 'empNature', 'activity', 'empDepartment', 'shift',
            'salaryType', 'salary', 'status', 'actions'];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    EmployeeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EmployeeComponent.prototype.getEmployee = function () {
        var _this = this;
        this.employeeService.getEmployee().subscribe(function (data) {
            console.log(data);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_3__["AddEmployeeComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getEmployee();
        });
    };
    EmployeeComponent.prototype.editEmployee = function (_id, name, nature, activity, department, shiftId, shift, salaryId, salaryType, salary, status) {
        var _this = this;
        console.log(salary);
        var dialogRef = this.dialog.open(_edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__["EditEmployeeComponent"], {
            data: { _id: _id, empName: name, empNature: nature, activity: activity, empDepartment: department, shiftId: shiftId, shift: shift,
                salaryType: salaryType, salaryId: salaryId, salary: salary, status: status }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getEmployee();
        });
    };
    EmployeeComponent.prototype.deleteEmployee = function (_id, name) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_5__["DeleteEmployeeComponent"], {
            data: { _id: _id, empName: name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getEmployee();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EmployeeComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EmployeeComponent.prototype, "sort", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/foundry/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/foundry/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/foundry/employee/employee.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/foundry/employee/employee.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/foundry/employee/employee.component.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/foundry/employee/add-employee/add-employee.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/foundry/employee/edit-employee/edit-employee.component.ts");
/* harmony import */ var _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-employee/delete-employee.component */ "./src/app/foundry/employee/delete-employee/delete-employee.component.ts");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/foundry/employee/employee-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../master/production-master/production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee.service */ "./src/app/foundry/employee/employee.service.ts");













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
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployeeComponent"], _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_6__["DeleteEmployeeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _employee_routing_module__WEBPACK_IMPORTED_MODULE_7__["EmployeeRoutingModule"], _app_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions)
            ],
            entryComponents: [
                _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployeeComponent"], _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_6__["DeleteEmployeeComponent"]
            ],
            providers: [
                _master_production_master_production_master_service__WEBPACK_IMPORTED_MODULE_11__["ProductionMasterService"], _employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeService"]
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/foundry/employee/employee.ts":
/*!**********************************************!*\
  !*** ./src/app/foundry/employee/employee.ts ***!
  \**********************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map