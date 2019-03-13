(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-labour-labour-module"],{

/***/ "./src/app/foundry/settings/labour/labour-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LabourRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourRoutingModule", function() { return LabourRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _labour_labour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../labour/labour.component */ "./src/app/foundry/settings/labour/labour.component.ts");




var routes = [
    {
        path: '',
        component: _labour_labour_component__WEBPACK_IMPORTED_MODULE_3__["LabourComponent"],
    }
];
var LabourRoutingModule = /** @class */ (function () {
    function LabourRoutingModule() {
    }
    LabourRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LabourRoutingModule);
    return LabourRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/settings/labour/labour.component.html":
/*!***************************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\" style=\"margin-top: 20px;margin-left: 150px;margin-right: 100px;\">\r\n  <mat-card-header>\r\n    <div class=\"row\">\r\n      <mat-card-title>Labour Master</mat-card-title>\r\n      <div class=\"col-sm-4\"></div>\r\n    </div>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <h5>Activity Name</h5>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <h5>LabourEmploymentType</h5>\r\n      </div>\r\n      <div *ngIf=\"labour.labourEmpType == 'CONTRACT'\" class=\"col-sm-3\">\r\n        <h5>WorkingType</h5>\r\n      </div>\r\n      <div *ngIf=\"labour.workingType == 'KG'\" class=\"col-sm-3\">\r\n        <h5>Rate/Kg</h5>\r\n      </div>\r\n      <div *ngIf=\"labour.workingType == 'HOUR'\" class=\"col-sm-2\">\r\n        <h5>Rate/Hour</h5>\r\n      </div>\r\n      <div *ngIf=\"labour.workingType == 'HOUR'\" class=\"col-sm-1\">\r\n          <h5>OtHour</h5>\r\n        </div>\r\n      <div *ngIf=\"labour.labourEmpType == 'PERMENANT'\" class=\"col-sm-3\">\r\n        <h5>EmployeeName</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select placeholder=\"Activity Name\" name=\"activityname\" [(ngModel)]=\"labour.activityName\">\r\n            <mat-option value=\"MOULDING-HM\">Moulding-HM</mat-option>\r\n            <mat-option value=\"MOULDING-MM\">Moulding-MM</mat-option>\r\n            <mat-option value=\"MELTING\">Melting</mat-option>\r\n            <mat-option value=\"KNOCKOUT\">Knockout</mat-option>\r\n            <mat-option value=\"SHOTBLASTING\">ShotBlasting</mat-option>\r\n            <mat-option value=\"FETTLING\">Fettling</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select placeholder=\"EmploymentType\" name=\"employmentType\" [(ngModel)]=\"labour.labourEmpType\">\r\n            <mat-option value=\"CONTRACT\">Contract</mat-option>\r\n            <mat-option value=\"PERMENANT\">Permanant</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"labour.labourEmpType == 'CONTRACT'\" class=\"col-sm-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select placeholder=\"workingType\" name=\"workingType\" [(ngModel)]=\"labour.workingType\">\r\n            <mat-option value=\"KG\">kg</mat-option>\r\n            <mat-option value=\"HOUR\">hour</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"labour.workingType == 'KG'\" class=\"col-sm-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"text\" placeholder=\"Rate/Kg\" name=\"contract/kg\" [(ngModel)]=\"labour.ratePerKg\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"labour.workingType == 'HOUR'\" class=\"col-sm-2\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"text\" placeholder=\"Rate/Hour\" name=\"contract/hour\" [(ngModel)]=\"labour.ratePerHour\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"labour.workingType == 'HOUR'\" class=\"col-sm-1\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" placeholder=\"OtHour\" name=\"contract/hour\" [(ngModel)]=\"labour.otHour\">\r\n          </mat-form-field>\r\n        </div>\r\n      <div *ngIf=\"labour.labourEmpType == 'PERMENANT'\" class=\"col-sm-3\">\r\n        <div *ngFor=\"let options of Option; let in=index;\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" placeholder=\"EmployeeName\" name=\"employeeName\" [(ngModel)]=\"Option[in].employeeName\">\r\n          </mat-form-field>\r\n        </div>\r\n        </div>\r\n        <div *ngIf=\"labour.labourEmpType == 'PERMENANT'\" class=\"col-sm-3\">\r\n          <button mat-icon-button (click)=\"add(in)\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n          </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\"></div>\r\n      <div class=\"col-sm-4\"></div>\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-2\">\r\n        <button mat-raised-button color=\"accent\" (click)=\"saveLabour()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"card\" style=\"margin-top: 20px;margin-left: 150px;margin-right: 100px;\">\r\n  <mat-card-header>\r\n    <div class=\"row\">\r\n      <mat-card-title>LPG Master</mat-card-title>\r\n      <div class=\"col-sm-4\"></div>\r\n    </div>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <h5>Activity Name</h5>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h5>Hours</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select placeholder=\"Activity Name\" name=\"activityname\" [(ngModel)]=\"lpg.activityName\">\r\n            <mat-option value=\"MELTING\">Melting</mat-option>\r\n            <mat-option value=\"SHOTBLASTING\">ShotBlasting</mat-option>\r\n            <mat-option value=\"FETTLING\">Fettling</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"text\" placeholder=\"hour\" name=\"hour\" [(ngModel)]=\"lpg.hour\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"saveLpg()\">Save</button>\r\n       </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/settings/labour/labour.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zZXR0aW5ncy9sYWJvdXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcc2V0dGluZ3NcXGxhYm91clxcbGFib3VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9zZXR0aW5ncy9sYWJvdXIvbGFib3VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/settings/labour/labour.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour.component.ts ***!
  \*************************************************************/
/*! exports provided: LabourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourComponent", function() { return LabourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _labour_labour_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../labour/labour.service */ "./src/app/foundry/settings/labour/labour.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _labour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labour */ "./src/app/foundry/settings/labour/labour.ts");
/* harmony import */ var _lpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lpg */ "./src/app/foundry/settings/labour/lpg.ts");






var LabourComponent = /** @class */ (function () {
    function LabourComponent(labourService, notifierService) {
        this.labourService = labourService;
        // displayedColumns: string[] = ['activityName', '', 'weight', 'symbol'];
        this.Option = [{ employeeName: '' }];
        this.notifier = notifierService;
    }
    LabourComponent.prototype.ngOnInit = function () {
        this.labour = new _labour__WEBPACK_IMPORTED_MODULE_4__["Labour"]();
        this.lpg = new _lpg__WEBPACK_IMPORTED_MODULE_5__["Lpg"]();
        this.getLabours();
    };
    LabourComponent.prototype.getLabours = function () {
        var _this = this;
        this.labourService.getLabours().subscribe(function (data) {
            console.log('labour', data);
            _this.labours = data;
        }, function (error) {
            console.log(error);
        });
    };
    LabourComponent.prototype.saveLabour = function () {
        var _this = this;
        console.log('this.Option.length', this.Option.length);
        if (this.Option.length != 1) {
            this.Option.forEach(function (res) {
                _this.labour.employeeName.push({
                    employeeName: res.employeeName
                });
            });
        }
        console.log('this.labour', this.labour);
        this.labour.createdBy = localStorage.getItem('user');
        this.labourService.saveLabour(this.labour).subscribe(function (data) {
            _this.notifier.notify('success', 'Saved Successfully');
        }, function (error) {
            console.log(error);
        });
    };
    LabourComponent.prototype.add = function (i) {
        i = i + 1;
        this.Option.push({ employeeName: '' });
    };
    LabourComponent.prototype.saveLpg = function () {
        this.lpg.createdBy = localStorage.getItem('user');
        this.labourService.saveLpg(this.lpg).subscribe(function (data) {
            console.log('lpg', data);
        }, function (error) {
            console.log(error);
        });
    };
    LabourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labour',
            template: __webpack_require__(/*! ./labour.component.html */ "./src/app/foundry/settings/labour/labour.component.html"),
            styles: [__webpack_require__(/*! ./labour.component.scss */ "./src/app/foundry/settings/labour/labour.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_labour_labour_service__WEBPACK_IMPORTED_MODULE_2__["LabourService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], LabourComponent);
    return LabourComponent;
}());



/***/ }),

/***/ "./src/app/foundry/settings/labour/labour.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour.module.ts ***!
  \**********************************************************/
/*! exports provided: LabourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourModule", function() { return LabourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _labour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labour.component */ "./src/app/foundry/settings/labour/labour.component.ts");
/* harmony import */ var _labour_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labour-routing.module */ "./src/app/foundry/settings/labour/labour-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");











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
var LabourModule = /** @class */ (function () {
    function LabourModule() {
    }
    LabourModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_labour_component__WEBPACK_IMPORTED_MODULE_3__["LabourComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _labour_routing_module__WEBPACK_IMPORTED_MODULE_4__["LabourRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"], _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], LabourModule);
    return LabourModule;
}());



/***/ }),

/***/ "./src/app/foundry/settings/labour/labour.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour.service.ts ***!
  \***********************************************************/
/*! exports provided: LabourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourService", function() { return LabourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LabourService = /** @class */ (function () {
    function LabourService(http) {
        this.http = http;
        this.baseUrl = 'api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    LabourService.prototype.getLabours = function () {
        return this.http.get(this.baseUrl + '/labours', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    LabourService.prototype.saveLabour = function (labour) {
        return this.http.post(this.baseUrl + '/labours', JSON.stringify(labour), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    LabourService.prototype.updateLabour = function (labour) {
        return this.http.patch(this.baseUrl + '/labours', JSON.stringify(labour), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    LabourService.prototype.saveLpg = function (lpg) {
        return this.http.post(this.baseUrl + '/labours/lpg', JSON.stringify(lpg), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    LabourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LabourService);
    return LabourService;
}());



/***/ }),

/***/ "./src/app/foundry/settings/labour/labour.ts":
/*!***************************************************!*\
  !*** ./src/app/foundry/settings/labour/labour.ts ***!
  \***************************************************/
/*! exports provided: Labour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labour", function() { return Labour; });
var Labour = /** @class */ (function () {
    function Labour() {
        this.employeeName = [];
    }
    return Labour;
}());



/***/ }),

/***/ "./src/app/foundry/settings/labour/lpg.ts":
/*!************************************************!*\
  !*** ./src/app/foundry/settings/labour/lpg.ts ***!
  \************************************************/
/*! exports provided: Lpg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lpg", function() { return Lpg; });
var Lpg = /** @class */ (function () {
    function Lpg() {
    }
    return Lpg;
}());



/***/ })

}]);
//# sourceMappingURL=settings-labour-labour-module.js.map