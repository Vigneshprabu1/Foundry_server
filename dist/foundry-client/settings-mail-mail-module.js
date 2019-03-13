(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-mail-mail-module"],{

/***/ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/settings/mail/edit-mail/edit-mail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 mat-dialog-title>Update Mail</h1>\r\n  <form [formGroup]=\"userForm\">\r\n    <div mat-dialog-content>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Company Name\" formControlName=\"companyName\" name=\"companyName\"\r\n          [(ngModel)]=\"data.companyName\" id=\"companyName\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.companyName\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"EmailId\" formControlName=\"emailId\" name=\"emailId\" [(ngModel)]=\"data.emailId\"\r\n          id=\"emailId\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.emailId\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" name=\"password\"\r\n          [(ngModel)]=\"data.password\" id=\"password\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.password\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Subject\" formControlName=\"subject\" name=\"subject\" [(ngModel)]=\"data.subject\"\r\n          id=\"subject\">\r\n        <mat-error>\r\n          <control-messages [control]=\"userForm.controls.subject\"></control-messages>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!userForm.valid\" (click)=\"updateMail()\">Update</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"cancel()\">Close</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/foundry/settings/mail/edit-mail/edit-mail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-left: 10px; }\n\n.example-full-width {\n  width: 100%;\n  font-family: 'Times New Roman', Times, serif; }\n\nh1 {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zZXR0aW5ncy9tYWlsL2VkaXQtbWFpbC9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxzZXR0aW5nc1xcbWFpbFxcZWRpdC1tYWlsXFxlZGl0LW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsNENBQTRDLEVBQUE7O0FBSWhEO0VBQ0ksa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L3NldHRpbmdzL21haWwvZWRpdC1tYWlsL2VkaXQtbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuXHJcblxyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/foundry/settings/mail/edit-mail/edit-mail.component.ts ***!
  \************************************************************************/
/*! exports provided: EditMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMailComponent", function() { return EditMailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mail */ "./src/app/foundry/settings/mail/mail.ts");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mail.service */ "./src/app/foundry/settings/mail/mail.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var EditMailComponent = /** @class */ (function () {
    function EditMailComponent(matDialogRef, formBuilder, data, mailService, notifierService) {
        this.matDialogRef = matDialogRef;
        this.formBuilder = formBuilder;
        this.data = data;
        this.mailService = mailService;
        this.notifier = notifierService;
        this.userForm = this.formBuilder.group({
            'companyName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].passwordValidator]],
            'emailId': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].emailValidator]],
            'subject': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    EditMailComponent.prototype.ngOnInit = function () {
        this.mail = new _mail__WEBPACK_IMPORTED_MODULE_3__["Mail"]();
    };
    EditMailComponent.prototype.updateMail = function () {
        var _this = this;
        this.data.modifiedBy = localStorage.getItem('user');
        this.mailService.updateMail(this.data).subscribe(function (data) {
            _this.notifier.notify('success', 'Updated Successfully');
            _this.matDialogRef.close();
        }, function (err) {
            _this.notifier.notify('error', 'Not Update');
        });
    };
    EditMailComponent.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    EditMailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-mail',
            template: __webpack_require__(/*! ./edit-mail.component.html */ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.html"),
            styles: [__webpack_require__(/*! ./edit-mail.component.scss */ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _mail__WEBPACK_IMPORTED_MODULE_3__["Mail"], _mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], EditMailComponent);
    return EditMailComponent;
}());



/***/ }),

/***/ "./src/app/foundry/settings/mail/mail-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/foundry/settings/mail/mail-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailRoutingModule", function() { return MailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.component */ "./src/app/foundry/settings/mail/mail.component.ts");




var routes = [
    {
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_3__["MailComponent"],
    }
];
var MailRoutingModule = /** @class */ (function () {
    function MailRoutingModule() {
    }
    MailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MailRoutingModule);
    return MailRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/settings/mail/mail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/foundry/settings/mail/mail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Mail Settings</h1>\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <ng-container matColumnDef=\"companyName\">\r\n      <th mat-header-cell *matHeaderCellDef>Company Name</th>\r\n      <td mat-cell *matCellDef=\"let mail\">{{mail.companyName}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"emailId\">\r\n      <th mat-header-cell *matHeaderCellDef>Email Id</th>\r\n      <td mat-cell *matCellDef=\"let mail\">{{mail.emailId}}</td>\r\n    </ng-container>\r\n    <ng-container hidden matColumnDef=\"password\">\r\n      <th hidden mat-header-cell *matHeaderCellDef>Password</th>\r\n      <td hidden mat-cell *matCellDef=\"let mail\">{{mail.password}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"subject\">\r\n      <th mat-header-cell *matHeaderCellDef>Subject</th>\r\n      <td mat-cell *matCellDef=\"let mail\">{{mail.subject}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button matTooltip=\"Refresh\" color=\"accent\" (click)=\"refresh()\">\r\n          <mat-icon>refresh</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let mail;let i=index\">\r\n        <button mat-icon-button matTooltip=\"Edit Mail\" color=\"accent\" (click)=\"updateMail(i,mail._id,mail.companyName,mail.emailId,mail.password,mail.subject,mail.message)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n</div>\r\n<notifier-container></notifier-container>\r\n\r\n<!-- <div class=\"col-sm-4\">\r\n      <div class=\"container\">\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-header>Mail</mat-card-header>\r\n          <mat-card-content>\r\n            <form>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"CompanyName\" [(ngModel)]=\"mail.companyName\" name=\"companyName\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Email\" [(ngModel)]=\"mail.emailId\" name=\"emailId\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Password\" [(ngModel)]=\"mail.password\" name=\"password\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Subject\" [(ngModel)]=\"mail.subject\" name=\"subject\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Message\" [(ngModel)]=\"mail.message\" name=\"message\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-raised-button (click)=\"saveMail()\">Save</button>\r\n            <button mat-raised-button (click)=\"cancel()\">cancel</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>-->"

/***/ }),

/***/ "./src/app/foundry/settings/mail/mail.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/foundry/settings/mail/mail.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n  margin-top: 35px;\n  align-self: auto;\n  margin-left: 15px; }\n\nh1 {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  text-align: center; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px; }\n\n.container {\n  margin-top: 75px; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px; }\n\nbutton {\n  margin-left: 15px; }\n\ntable {\n  width: 100%; }\n\ntd {\n  width: 25%;\n  font-family: 'Times New Roman', Times, serif; }\n\nth {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  width: 25%;\n  color: #2979FF; }\n\nh1 {\n  color: #c76254;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  font-weight: bolder;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zZXR0aW5ncy9tYWlsL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXHNldHRpbmdzXFxtYWlsXFxtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksNENBQTRDO0VBQzVDLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWUsRUFBQTs7QUFFbkI7RUFDQSxpQkFBaUIsRUFBQTs7QUFFakI7RUFDSSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsNENBQTRDLEVBQUE7O0FBRTlDO0VBQ0ksNENBQTRDO0VBQzVDLGVBQWU7RUFDZixVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUVsQjtFQUNFLGNBQXVCO0VBQ3ZCLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9zZXR0aW5ncy9tYWlsL21haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuYnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiBcclxuICB0ZHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcbiAgdGh7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIGNvbG9yOiAjMjk3OUZGO1xyXG4gIH1cclxuICBoMXtcclxuICAgIGNvbG9yOiByZ2IoMTk5LCA5OCwgODQpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/settings/mail/mail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/foundry/settings/mail/mail.component.ts ***!
  \*********************************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail */ "./src/app/foundry/settings/mail/mail.ts");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.service */ "./src/app/foundry/settings/mail/mail.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_mail_edit_mail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-mail/edit-mail.component */ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.ts");






var MailComponent = /** @class */ (function () {
    function MailComponent(mailService, matDialog) {
        this.mailService = mailService;
        this.matDialog = matDialog;
        this.displayedColumns = ['companyName', 'emailId', 'password', 'subject', 'actions'];
    }
    MailComponent.prototype.ngOnInit = function () {
        this.mail = new _mail__WEBPACK_IMPORTED_MODULE_2__["Mail"]();
        this.getAllMail();
    };
    MailComponent.prototype.saveMail = function () {
        this.mailService.saveMail(this.mail).subscribe(function (data) { return []; });
    };
    MailComponent.prototype.getAllMail = function () {
        var _this = this;
        this.mailService.getAllMail().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        }, function (err) {
            console.log(err);
        });
    };
    MailComponent.prototype.updateMail = function (i, _id, companyName, emailId, password, subject, message) {
        var _this = this;
        var matDialogRef = this.matDialog.open(_edit_mail_edit_mail_component__WEBPACK_IMPORTED_MODULE_5__["EditMailComponent"], {
            data: { _id: _id, companyName: companyName, emailId: emailId, password: password, subject: subject, message: message }
        });
        matDialogRef.afterClosed().subscribe(function (result) {
            _this.getAllMail();
        });
    };
    MailComponent.prototype.refresh = function () {
        this.getAllMail();
    };
    MailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/foundry/settings/mail/mail.component.html"),
            styles: [__webpack_require__(/*! ./mail.component.scss */ "./src/app/foundry/settings/mail/mail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/foundry/settings/mail/mail.module.ts":
/*!******************************************************!*\
  !*** ./src/app/foundry/settings/mail/mail.module.ts ***!
  \******************************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.component */ "./src/app/foundry/settings/mail/mail.component.ts");
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail-routing.module */ "./src/app/foundry/settings/mail/mail-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _edit_mail_edit_mail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-mail/edit-mail.component */ "./src/app/foundry/settings/mail/edit-mail/edit-mail.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _foundry_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../foundry.module */ "./src/app/foundry/foundry.module.ts");











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
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_3__["MailComponent"], _edit_mail_edit_mail_component__WEBPACK_IMPORTED_MODULE_8__["EditMailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mail_routing_module__WEBPACK_IMPORTED_MODULE_4__["MailRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _foundry_module__WEBPACK_IMPORTED_MODULE_10__["FoundryModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions)
            ], entryComponents: [_edit_mail_edit_mail_component__WEBPACK_IMPORTED_MODULE_8__["EditMailComponent"]]
        })
    ], MailModule);
    return MailModule;
}());



/***/ }),

/***/ "./src/app/foundry/settings/mail/mail.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/foundry/settings/mail/mail.service.ts ***!
  \*******************************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var MailService = /** @class */ (function () {
    function MailService(http) {
        this.http = http;
        this.baseURL = '/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    MailService.prototype.saveMail = function (mail) {
        return this.http.post(this.baseURL + '/mails', JSON.stringify(mail), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MailService.prototype.getAllMail = function () {
        return this.http.get(this.baseURL + '/mails', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MailService.prototype.updateMail = function (mail) {
        return this.http.put(this.baseURL + '/mails', JSON.stringify(mail), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/foundry/settings/mail/mail.ts":
/*!***********************************************!*\
  !*** ./src/app/foundry/settings/mail/mail.ts ***!
  \***********************************************/
/*! exports provided: Mail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
var Mail = /** @class */ (function () {
    function Mail() {
    }
    return Mail;
}());



/***/ })

}]);
//# sourceMappingURL=settings-mail-mail-module.js.map