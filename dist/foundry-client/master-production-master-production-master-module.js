(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-production-master-production-master-module"],{

/***/ "./src/app/foundry/master/production-master/core-master/core-master.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/core-master/core-master.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Core Master</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'340'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Core Type\" scope=\"col\">Core Type</th>\r\n                  <th matTooltip=\"Mold Type\" scope=\"col\">Mold Type</th>\r\n                  <th matTooltip=\"Core Status\" scope=\"col\">Status</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let core of coreMasters;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{core.coreType}}</td>\r\n                  <td>{{core.moldType}}</td>\r\n                  <td>{{core.status}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit Core Master\" color=\"accent\" (click)=\"editCoreMaster(i,core._id,core.coreType,core.moldType,core.status)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"Delete Core Master\" color=\"accent\" (click)=\"deleteCoreMaster(i,core._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <h6>Core Master</h6>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"coreForm\">\r\n              <mat-form-field class=\"example-full-width\" *ngIf=\"coreMaster._id === undefined\">\r\n                  <mat-select placeholder=\"Core Type\" name=\"coreType\" formControlName=\"coreType\" [(ngModel)]=\"coreMaster.coreType\" required>\r\n                    <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                      {{item.itemName}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error>\r\n                      <control-messages [control]=\"coreForm.controls.coreType\"></control-messages>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"coreMaster._id !== undefined\">\r\n              <input matInput placeholder=\"CoreType\" name=\"coreType\" formControlName=\"coreType\" [(ngModel)]=\"coreMaster.coreType\" readonly>\r\n              <mat-error>\r\n                <control-messages [control]=\"coreForm.controls.coreType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"coreMaster._id === undefined\">\r\n              <mat-select placeholder=\"Mold Type\" formControlName=\"moldType\" name=\"moldType\" [(ngModel)]=\"coreMaster.moldType\"  (ngModelChange)=\"coreValidation()\">\r\n                <mat-option *ngFor=\"let masters of masterList\" [value]=\"masters.moldType\">\r\n                  {{masters.moldType}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error>\r\n                <control-messages [control]=\"coreForm.controls.moldType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"coreMaster._id !== undefined\">\r\n                <input matInput placeholder=\"Mold Type\" name=\"moldType\" formControlName=\"moldType\" [(ngModel)]=\"coreMaster.moldType\" readonly>\r\n                <mat-error>\r\n                  <control-messages [control]=\"coreForm.controls.coreType\"></control-messages>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Status\" formControlName=\"status\" appStringValidation=\"words\"  name=\"status\" [(ngModel)]=\"coreMaster.status\"\r\n              required>\r\n              <mat-option value=\"Active\">Active</mat-option>\r\n              <mat-option value=\"Inactive\">InActive</mat-option>\r\n            </mat-select>\r\n              <mat-error>\r\n                <control-messages [control]=\"coreForm.controls.status\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" style=\"float: right;\" [disabled]=\"!coreForm.valid\" (click)=\"saveCoreMaster(exampleForm)\">Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/core-master/core-master.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/core-master/core-master.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 320px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvY29yZS1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxwcm9kdWN0aW9uLW1hc3RlclxcY29yZS1tYXN0ZXJcXGNvcmUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUVqQjtFQUNBLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFMUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNBLHVCQUF1QjtFQUN2QixrQ0FBa0MsRUFBQTs7QUFFbEM7RUFDRSwwQkFBMEI7RUFDeEIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL2NvcmUtbWFzdGVyL2NvcmUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZDJ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJke1xyXG5tYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZDF7XHJcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxucGFkZGluZy1sZWZ0OiAwcHg7XHJcbnBhZGRpbmctdG9wOiAxcHg7XHJcbm1hcmdpbi10b3A6IC00MHB4O1xyXG5tYXJnaW4tbGVmdDogLTQwcHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuaGVpZ2h0OiAzNXB4O1xyXG5mb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxufVxyXG50cntcclxucGFkZGluZy10b3A6IDFweDtcclxufVxyXG5tYXQtaWNvbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxudGFibGUgdGJvZHkgdHIgdGR7XHJcbnBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG52ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbnRoe1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmNzMzNzg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/core-master/core-master.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/core-master/core-master.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CoreMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMasterComponent", function() { return CoreMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _core_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-master */ "./src/app/foundry/master/production-master/core-master/core-master.ts");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../items/items.service */ "./src/app/foundry/items/items.service.ts");









var CoreMasterComponent = /** @class */ (function () {
    function CoreMasterComponent(productionMasterService, notifierService, masterService, formBuilder, itemService) {
        this.productionMasterService = productionMasterService;
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.notifier = notifierService;
        this.coreForm = this.formBuilder.group({
            'coreType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'moldType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
        });
    }
    CoreMasterComponent.prototype.ngOnInit = function () {
        this.coreMaster = new _core_master__WEBPACK_IMPORTED_MODULE_4__["CoreMaster"]();
        this.getCoreMaster();
        this.getMouldingMaster();
        this.getItemNames();
    };
    /**get all core details */
    CoreMasterComponent.prototype.getCoreMaster = function () {
        var _this = this;
        this.productionMasterService.getCoreMaster().subscribe(function (data) {
            _this.coreMasters = data;
        }, function (err) {
            console.log(err);
        });
    };
    CoreMasterComponent.prototype.getItemNames = function () {
        var _this = this;
        var itemType;
        var itemCategory;
        itemType = 'Consumable';
        itemCategory = 'Core';
        this.itemService.getItemsByItemType(itemType, itemCategory).subscribe(function (data) {
            _this.items = data;
        }, function (err) {
            console.log(err);
        });
    };
    CoreMasterComponent.prototype.getMouldingMaster = function () {
        var _this = this;
        this.masterService.getMoldingMaster().subscribe(function (data) {
            _this.masterList = data;
        }, function (error) {
            console.log(error);
        });
    };
    CoreMasterComponent.prototype.coreValidation = function () {
        var _this = this;
        if (this.coreMaster._id === undefined) {
            this.coreMasters.forEach(function (res) {
                if (res.coreType === _this.coreMaster.coreType && res.moldType === _this.coreMaster.moldType) {
                    _this.coreMaster.coreType = '';
                    _this.coreMaster.moldType = '';
                    _this.notifier.notify('error', 'Core Tye and Mold Type already Exists');
                }
            });
        }
    };
    /**save the sand disposal details */
    CoreMasterComponent.prototype.saveCoreMaster = function (exampleForm) {
        var _this = this;
        if (this.coreMaster._id === undefined || this.coreMaster._id === '') {
            this.coreMaster.createdBy = localStorage.getItem('user');
            this.productionMasterService.saveCoreMaster(this.coreMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getCoreMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.coreMaster.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updateCoreMaster(this.coreMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getCoreMaster();
                _this.coreMaster._id = undefined;
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /** edit Core details*/
    CoreMasterComponent.prototype.editCoreMaster = function (i, _id, coreType, moldType, status) {
        this.coreMaster._id = _id;
        this.coreMaster.coreType = coreType;
        this.coreMaster.moldType = moldType;
        this.coreMaster.status = status;
    };
    /* delete Core details */
    CoreMasterComponent.prototype.deleteCoreMaster = function (i, _id) {
        var _this = this;
        this.coreMaster._id = _id;
        this.coreMaster.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deleteCoreMaster(this.coreMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getCoreMaster();
            _this.coreMaster._id = '';
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    CoreMasterComponent.prototype.refresh = function () {
        this.getCoreMaster();
    };
    CoreMasterComponent.prototype.cancel = function (exampleForm) {
        this.coreMaster._id = undefined;
        exampleForm.resetForm();
    };
    CoreMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-core-master',
            template: __webpack_require__(/*! ./core-master.component.html */ "./src/app/foundry/master/production-master/core-master/core-master.component.html"),
            styles: [__webpack_require__(/*! ./core-master.component.scss */ "./src/app/foundry/master/production-master/core-master/core-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _items_items_service__WEBPACK_IMPORTED_MODULE_8__["ItemsService"]])
    ], CoreMasterComponent);
    return CoreMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/core-master/core-master.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/core-master/core-master.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMaster", function() { return CoreMaster; });
var CoreMaster = /** @class */ (function () {
    function CoreMaster() {
    }
    return CoreMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/department/department.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/department/department.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Department</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'440'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Activity\" scope=\"col\">Activity</th>\r\n                  <th matTooltip=\"Department\" scope=\"col\">Department</th>\r\n                  <th matTooltip=\"Status\" scope=\"col\">Status</th>\r\n                  <th matTooltip=\"Action\" scope=\"col\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let department of departments;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{department.activity}}</td>\r\n                  <td>{{department.department}}</td>\r\n                  <td>{{department.status}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit Department Master\" color=\"accent\" (click)=\"editDepartment(i,department._id,department.activity,department.department,department.status)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"Delte Department Master\" color=\"accent\" (click)=\"deleteDepartment(department._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n            <mat-card class=\"example-card1\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Department</mat-card-title>\r\n                </mat-card-header>\r\n              </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\">\r\n            <div *ngIf='edit === false'>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Activity\" name=\"activity\" [(ngModel)]=\"department.activity\" required>\r\n                <mat-option value=\"Production\">Production</mat-option>\r\n                <mat-option value=\"Non-Production\">Non-Production</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf='edit === true'>\r\n              <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Activity\" [maxlength]=\"15\" name=\"activity\" [(ngModel)]=\"department.activity\" readonly\r\n              required>\r\n            </mat-form-field>\r\n          </div>\r\n            <div *ngIf='department.activity ==\"Non-Production\"'>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Department\" [maxlength]=\"10\" name=\"department\" [(ngModel)]=\"department.department\"\r\n                  required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div *ngIf='department.activity ==\"Production\"'>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Department\" name=\"department\" [(ngModel)]=\"department.department\" (ngModelChange)=\"checkDepartment()\" required>\r\n                  <mat-option *ngFor=\"let activityMaster of activityMasters\" [value]=\"activityMaster.activityType\">\r\n                    {{activityMaster.activityType}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Status\" appStringValidation=\"words\" name=\"status\" [(ngModel)]=\"department.status\"\r\n                  required>\r\n                  <mat-option value=\"Active\">Active</mat-option>\r\n                  <mat-option value=\"Inactive\">InActive</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button type=\"reset\" mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" style=\"float: right;\" (click)=\"saveDepartment(exampleForm)\">Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/department/department.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/department/department.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 350px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvZGVwYXJ0bWVudC9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxtYXN0ZXJcXHByb2R1Y3Rpb24tbWFzdGVyXFxkZXBhcnRtZW50XFxkZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUVqQjtFQUNBLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFMUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNBLHVCQUF1QjtFQUN2QixrQ0FBa0MsRUFBQTs7QUFFbEM7RUFDRSwwQkFBMEI7RUFDeEIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQye1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZHtcclxubWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5leGFtcGxlLWNhcmQxe1xyXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmNzMzNzg7XHJcbnBhZGRpbmctbGVmdDogMHB4O1xyXG5wYWRkaW5nLXRvcDogMXB4O1xyXG5tYXJnaW4tdG9wOiAtNDBweDtcclxubWFyZ2luLWxlZnQ6IC00MHB4O1xyXG5jb2xvcjogd2hpdGU7XHJcbmhlaWdodDogMzVweDtcclxuZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbn1cclxudHJ7XHJcbnBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxubWF0LWljb257XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICB9XHJcbnRhYmxlIHRib2R5IHRyIHRke1xyXG5wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxudmVydGljYWwtYWxpZ246IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG50aHtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZjczMzc4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/department/department.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/department/department.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department */ "./src/app/foundry/master/production-master/department/department.ts");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../master.service */ "./src/app/foundry/master/master.service.ts");






var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(productionMasterService, masterService, notifierService) {
        this.productionMasterService = productionMasterService;
        this.masterService = masterService;
        this.notifier = notifierService;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.department = new _department__WEBPACK_IMPORTED_MODULE_2__["Department"]();
        this.getAllDepartment();
        this.getAllActivity();
    };
    DepartmentComponent.prototype.getAllDepartment = function () {
        var _this = this;
        this.edit = false;
        this.productionMasterService.getAllDepartMent().subscribe(function (data) {
            _this.departments = data;
        }, function (error) {
            console.log(error);
        });
    };
    DepartmentComponent.prototype.checkDepartment = function () {
        var _this = this;
        this.departments.forEach(function (element) {
            if (_this.department.activity === element.activity && _this.department.department === element.department) {
                _this.notifier.notify('error', 'Already department exists!');
                _this.department.department = '';
            }
        });
    };
    DepartmentComponent.prototype.saveDepartment = function (exampleForm) {
        var _this = this;
        if (this.department._id === undefined) {
            this.productionMasterService.saveDepartMent(this.department).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllDepartment();
                exampleForm.reset();
            }, function (error) {
                _this.notifier.notify('error', 'Not Save');
                console.log(error);
            });
        }
        else {
            this.productionMasterService.updateDepartMent(this.department).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllDepartment();
                exampleForm.reset();
                _this.department._id = undefined;
            }, function (error) {
                _this.notifier.notify('error', 'Not Updated');
                console.log(error);
            });
        }
    };
    DepartmentComponent.prototype.cancel = function (exampleForm) {
        this.department._id = undefined;
        exampleForm.reset();
    };
    DepartmentComponent.prototype.editDepartment = function (i, _id, activity, department, status) {
        this.edit = true;
        this.department._id = _id;
        this.department.activity = activity;
        this.department.department = department;
        this.department.status = status;
    };
    DepartmentComponent.prototype.deleteDepartment = function (id) {
        var _this = this;
        this.productionMasterService.deleteDepartment(id).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllDepartment();
        }, function (error) {
            _this.notifier.notify('error', 'Not Deleted');
            console.log(error);
        });
    };
    DepartmentComponent.prototype.refresh = function () {
        this.getAllDepartment();
    };
    DepartmentComponent.prototype.getAllActivity = function () {
        var _this = this;
        this.masterService.getAllActivityMaster().subscribe(function (data) {
            _this.activityMasters = data;
        }, function (error) {
            console.log(error);
        });
    };
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/foundry/master/production-master/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.scss */ "./src/app/foundry/master/production-master/department/department.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterService"], _master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/department/department.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/department/department.ts ***!
  \***************************************************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/fettling-master/fettling-master.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/fettling-master/fettling-master.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Shot blasting form-->\r\n<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card class=\"example-card1\">\r\n        <mat-card-header>\r\n          <mat-card-title>Fettling Master</mat-card-title>\r\n        </mat-card-header>\r\n      </mat-card>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form #exampleForm=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id === undefined\">\r\n              <mat-select placeholder=\"Machine Id\" name=\"machineId\" [(ngModel)]=\"fettling.machineId\" (ngModelChange)=\"getMachineName(fettling.machineId)\"\r\n                required>\r\n                <mat-option *ngFor=\"let machineDetail of machineDetails\" [value]=\"machineDetail.machineId\">\r\n                  {{machineDetail.machineId}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id !== undefined\">\r\n              <input matInput placeholder=\"Machine Id\" name=\"machineId\" [(ngModel)]=\"fettling.machineId\" readonly required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Machine Name\" name=\"machineName\" [(ngModel)]=\"fettling.machineName\" readonly required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id === undefined\">\r\n              <mat-select placeholder=\"ItemType\" name=\"itemType\" appStringValidation=\"words\" [(ngModel)]=\"fettling.itemType\"\r\n                (ngModelChange)=\"getItemNames(fettling.itemType)\" required>\r\n                <mat-option value=\"Consumable\">Consumable</mat-option>\r\n                <mat-option value=\"Parts\">Part</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id !== undefined\">\r\n              <input matInput placeholder=\"Item Type\" name=\"itemType\" [(ngModel)]=\"fettling.itemType\" readonly required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"fettling.itemType == 'Consumable'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id === undefined\">\r\n              <mat-select placeholder=\"Consumable Name\" name=\"consumableName\" [(ngModel)]=\"fettling.consumableName\"\r\n                (ngModelChange)=\"getPerKgCost(fettling.consumableName)\" required>\r\n                <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                  {{item.itemName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id !== undefined\">\r\n              <input matInput placeholder=\"Consumable Name\" name=\"consumableName\" [(ngModel)]=\"fettling.consumableName\" readonly required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"fettling.itemType =='Parts'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id === undefined\">\r\n              <mat-select placeholder=\"Part Name\" name=\"partName\" [(ngModel)]=\"fettling.partName\" (ngModelChange)=\"getPerKgCost(fettling.partName)\"\r\n                required>\r\n                <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                  {{item.itemName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"fettling._id !== undefined\">\r\n              <input matInput placeholder=\"Part Name\" name=\"partName\" [(ngModel)]=\"fettling.partName\" readonly required>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- <div *ngIf=\"fettling.itemType == 'Consumable'\" class=\"col-sm-3\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"TotalCapacity\" appNumberValidation name=\"totalCapacity\" [(ngModel)]=\"fettling.totalCapacity\" required>\r\n              </mat-form-field>\r\n            </div> -->\r\n          <div *ngIf=\"fettling.itemType == 'Consumable'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"PerKgCost\" appNumberValidation name=\"perKgCost\" [(ngModel)]=\"fettling.perKgCost\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"fettling.itemType == 'Consumable' ||fettling.itemType =='Parts' \" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"ReplacementRate\" appStringValidation=\"words\" name=\"replacementRate\" [(ngModel)]=\"fettling.replacementRate\"\r\n                required>\r\n                <mat-option value=\"MeltWise\">MeltWise</mat-option>\r\n                <mat-option value=\"Monthly\">Monthly</mat-option>\r\n                <mat-option value=\"Weekly\">Weekly</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"fettling.itemType == 'Consumable' || fettling.itemType =='Parts'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"replacementQuantity\" appNumberValidation name=\"replacementQuantity\"\r\n                [(ngModel)]=\"fettling.replacementQuantity\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf='fettling.itemType == \"Parts\"' class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"PartCost\" appNumberValidation name=\"partCost\" [(ngModel)]=\"fettling.partCost\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Status\" appStringValidation=\"words\" name=\"status\" [(ngModel)]=\"fettling.status\"\r\n                required>\r\n                <mat-option value=\"Active\">Active</mat-option>\r\n                <mat-option value=\"Inactive\">InActive</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button style=\"float: right;margin-top:-30px;\" color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n      <button mat-raised-button style=\"float: right;margin-top:-30px;\" [disabled]=!exampleForm.valid color=\"primary\"\r\n        (click)=\"saveFettling(exampleForm)\">Save</button>\r\n\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<!-- Shot blasting Table view-->\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Consumable List</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-header>\r\n      <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\" striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th matTooltip=\"Machine ID\" scope=\"col\">M ID</th>\r\n                <th matTooltip=\"Machine Name\" scope=\"col\">M Name</th>\r\n                <th matTooltip=\"Part Id\" scope=\"col\">C Name</th>\r\n                <th matTooltip=\"Consumable Cost\" scope=\"col\" style=\"text-align: right\">Cos/Cost</th>\r\n                <th matTooltip=\"Status\" scope=\"col\" style=\"text-align: center\">Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let fettling of Fettlings1;let i=index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{fettling.machineId}}</td>\r\n                <td>{{fettling.machineName}}</td>\r\n                <td>{{fettling.consumableName}}</td>\r\n                <td style=\"text-align: right\">{{fettling.perKgCost}}</td>\r\n                <td style=\"text-align: center\">{{fettling.status}}</td>\r\n                <td>\r\n                  <button mat-icon-button matTooltip=\"Edit fettling\" color=\"accent\" (click)=\"editFettlingMaster(i,fettling._id,fettling.machineId,fettling.machineName,fettling.itemType,fettling.consumableName,\r\n                    fettling.perKgCost,fettling.replacementRate,fettling.replacementQuantity,fettling.partName,fettling.partCost,fettling.status)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <!-- <button mat-icon-button matTooltip=\"delete fettling\" color=\"accent\" (click)=\"deleteFettlingMaster(i,fettling._id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button> -->\r\n\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Parts List</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-header>\r\n      <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\" striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th matTooltip=\"Machine Id\" scope=\"col\">M ID</th>\r\n                <th matTooltip=\"Machine Name\" scope=\"col\">M Name</th>\r\n                <th matTooltip=\"Part Name\" scope=\"col\">Part Name</th>\r\n                <th matTooltip=\"Part Cost\" scope=\"col\" style=\"text-align: right\">Part Cost</th>\r\n                <th matTooltip=\"Status\" scope=\"col\" style=\"text-align: center\">Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let fettling of Fettlings2;let i=index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{fettling.machineId}}</td>\r\n                <td>{{fettling.machineName}}</td>\r\n                <td>{{fettling.partName}}</td>\r\n                <td style=\"text-align: right\">{{fettling.partCost}}</td>\r\n                <td style=\"text-align: center\">{{fettling.status}}</td>\r\n                <td>\r\n                  <button mat-icon-button matTooltip=\"Edit fettling\" color=\"accent\" (click)=\"editFettlingMaster(i,fettling._id,fettling.machineId,fettling.machineName,fettling.itemType,fettling.consumableName,\r\n                    fettling.perKgCost,fettling.replacementRate,fettling.replacementQuantity,fettling.partName,fettling.partCost,fettling.status)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <!-- <button mat-icon-button matTooltip=\"delete fettling\" color=\"accent\" (click)=\"deleteFettlingMaster(i,fettling._id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/fettling-master/fettling-master.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/fettling-master/fettling-master.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  margin-top: 50px; }\n\nmat-card {\n  max-width: 100%; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvZmV0dGxpbmctbWFzdGVyL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxccHJvZHVjdGlvbi1tYXN0ZXJcXGZldHRsaW5nLW1hc3RlclxcZmV0dGxpbmctbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBRTFCO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDQSx1QkFBdUI7RUFDdkIsa0NBQWtDLEVBQUE7O0FBRWxDO0VBQ0UsMEJBQTBCO0VBQ3hCLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L21hc3Rlci9wcm9kdWN0aW9uLW1hc3Rlci9mZXR0bGluZy1tYXN0ZXIvZmV0dGxpbmctbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gLy8gbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWNhcmQxe1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIH1cclxuICB0cntcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIH1cclxuICBtYXQtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIH1cclxuICB0YWJsZSB0Ym9keSB0ciB0ZHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjZjczMzc4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/fettling-master/fettling-master.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/fettling-master/fettling-master.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FettlingMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FettlingMasterComponent", function() { return FettlingMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _fettling_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fettling-master */ "./src/app/foundry/master/production-master/fettling-master/fettling-master.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../items/items.service */ "./src/app/foundry/items/items.service.ts");
/* harmony import */ var _stock_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stock/stock.service */ "./src/app/foundry/stock/stock.service.ts");







var FettlingMasterComponent = /** @class */ (function () {
    function FettlingMasterComponent(productionMasterService, notifierService, itemService, stockService) {
        this.productionMasterService = productionMasterService;
        this.itemService = itemService;
        this.stockService = stockService;
        this.notifier = notifierService;
    }
    FettlingMasterComponent.prototype.ngOnInit = function () {
        this.type = 'Fettling';
        this.fettling = new _fettling_master__WEBPACK_IMPORTED_MODULE_4__["FettlingMaster"]();
        this.getAllFettlingConsumable();
        this.getAllFettlingPart();
        this.getAllFettlingMachine(this.type);
    };
    /** get all fettling Consumable details */
    FettlingMasterComponent.prototype.getAllFettlingConsumable = function () {
        var _this = this;
        this.productionMasterService.getAllFettlingConsumable().subscribe(function (data) {
            _this.Fettlings1 = data;
        }, function (err) {
            console.log(err);
        });
    };
    /** get all fettling Consumable details */
    FettlingMasterComponent.prototype.getAllFettlingPart = function () {
        var _this = this;
        this.productionMasterService.getAllFettlingPart().subscribe(function (data1) {
            _this.Fettlings2 = data1;
            console.log('test', data1);
        }, function (err) {
            console.log(err);
        });
    };
    FettlingMasterComponent.prototype.getAllFettlingMachine = function (type) {
        var _this = this;
        this.productionMasterService.getMachineDetailsByType(type).subscribe(function (data) {
            _this.machineDetails = data;
        }, function (err) {
            console.log(err);
        });
    };
    FettlingMasterComponent.prototype.getMachineName = function (machineId) {
        var _this = this;
        this.machineDetails.forEach(function (element) {
            if (element.machineId === machineId) {
                _this.fettling.machineName = element.machineName;
            }
        });
    };
    FettlingMasterComponent.prototype.getItemNames = function (itemType) {
        var _this = this;
        itemType = 'Mc' + itemType;
        var itemCategory;
        itemCategory = 'Fettling';
        this.itemService.getItemsByItemType(itemType, itemCategory).subscribe(function (data) {
            _this.items = data;
        }, function (err) {
            console.log(err);
        });
    };
    FettlingMasterComponent.prototype.getPerKgCost = function (itemName) {
        var _this = this;
        if (this.fettling.itemType === 'Consumable') {
            this.stockService.getMcConsumableStockByItemName(itemName).subscribe(function (data) {
                _this.fettling.perKgCost = data.perKG;
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.fettling.itemType === 'Parts') {
            this.stockService.getMcPartStockByItemName(itemName).subscribe(function (data) {
                _this.fettling.partCost = data.perKG;
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**save the fettling Parts details */
    FettlingMasterComponent.prototype.saveFettling = function (exampleForm) {
        var _this = this;
        if (this.fettling._id === undefined || this.fettling._id === '') {
            this.fettling.createdBy = localStorage.getItem('user');
            this.productionMasterService.saveFettling(this.fettling).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllFettlingConsumable();
                _this.getAllFettlingPart();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.fettling.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updateFettling(this.fettling).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllFettlingConsumable();
                _this.getAllFettlingPart();
                exampleForm.resetForm();
                _this.fettling._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the fettling master details */
    FettlingMasterComponent.prototype.editFettlingMaster = function (i, _id, machineId, machineName, itemType, consumableName, perKgCost, replacementRate, replacementQuantity, partName, partCost, status) {
        this.fettling._id = _id;
        this.fettling.machineId = machineId;
        this.fettling.machineName = machineName;
        this.fettling.itemType = itemType;
        this.fettling.consumableName = consumableName;
        this.fettling.perKgCost = perKgCost;
        this.fettling.replacementRate = replacementRate;
        this.fettling.replacementQuantity = replacementQuantity;
        this.fettling.partName = partName;
        this.fettling.partCost = partCost;
        this.fettling.status = status;
        console.log(this.fettling);
        this.getItemNames(itemType);
        if (consumableName !== undefined) {
            this.getPerKgCost(consumableName);
        }
        else {
            this.getPerKgCost(partName);
        }
    };
    /**delete shotBlasting details */
    FettlingMasterComponent.prototype.deleteFettlingMaster = function (i, _id) {
        var _this = this;
        this.fettling._id = _id;
        this.fettling.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deleteFettlingMaster(this.fettling).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllFettlingConsumable();
            _this.getAllFettlingPart();
            _this.fettling._id = undefined;
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    FettlingMasterComponent.prototype.refresh = function () {
        this.getAllFettlingConsumable();
        this.getAllFettlingPart();
    };
    FettlingMasterComponent.prototype.cancel = function (exampleForm) {
        this.fettling._id = undefined;
        exampleForm.resetForm();
    };
    FettlingMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fettling-master',
            template: __webpack_require__(/*! ./fettling-master.component.html */ "./src/app/foundry/master/production-master/fettling-master/fettling-master.component.html"),
            styles: [__webpack_require__(/*! ./fettling-master.component.scss */ "./src/app/foundry/master/production-master/fettling-master/fettling-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _items_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"], _stock_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"]])
    ], FettlingMasterComponent);
    return FettlingMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/fettling-master/fettling-master.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/fettling-master/fettling-master.ts ***!
  \*************************************************************************************/
/*! exports provided: FettlingMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FettlingMaster", function() { return FettlingMaster; });
var FettlingMaster = /** @class */ (function () {
    function FettlingMaster() {
    }
    return FettlingMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/labour-master/labour-master.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/labour-master/labour-master.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card class=\"example-card1\">\r\n        <mat-card-header>\r\n          <mat-card-title>Labour Master</mat-card-title>\r\n        </mat-card-header>\r\n      </mat-card>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form #exampleForm=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\" *ngIf=\"labourMaster._id == undefined\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Activity Name\" name=\"activityname\" [(ngModel)]=\"labourMaster.activityName\"\r\n                required>\r\n                <mat-option *ngFor=\"let activityMaster of activityMasters\" [value]=\"activityMaster.activityType\">\r\n                  {{activityMaster.activityType}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster._id != undefined\" class=\"col-sm-3\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"text\" placeholder=\"Activity Name\" appNumberValidation name=\"activityname\" [(ngModel)]=\"labourMaster.activityName\" readonly\r\n                  required>\r\n              </mat-form-field>\r\n            </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"EmploymentType\" name=\"labourEmpType\" [(ngModel)]=\"labourMaster.labourEmpType\"\r\n                (ngModelChange)=\"choosePermanentEmployeesAndMachines(labourMaster.labourEmpType,labourMaster.activityName)\"\r\n                required>\r\n                <mat-option value=\"Contract\">Contract</mat-option>\r\n                <mat-option value=\"Permanent\">Permanent</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.labourEmpType == 'Contract'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"workingType\" name=\"workingType\" [(ngModel)]=\"labourMaster.workingType\" required>\r\n                <mat-option value=\"KG\">kg</mat-option>\r\n                <mat-option value=\"HOUR\">hour</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.workingType == 'KG' && labourMaster.labourEmpType == 'Contract'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"text\" placeholder=\"Rate/Kg\" appNumberValidation name=\"contract/kg\" [(ngModel)]=\"labourMaster.ratePerKg\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.workingType == 'HOUR' && labourMaster.labourEmpType == 'Contract'\" class=\"col-sm-2\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"text\" placeholder=\"Rate/Hour\" appNumberValidation [maxlength]=\"10\" name=\"contract/hour\"\r\n                [(ngModel)]=\"labourMaster.ratePerHour\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.workingType == 'HOUR' && labourMaster.labourEmpType == 'Contract'\" class=\"col-sm-1\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"text\" placeholder=\"OT Hour\" appNumberValidation name=\"ot/hour\" [(ngModel)]=\"labourMaster.otHours\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.labourEmpType == 'Permanent'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"EmployeeName\" name=\"employeeName\" [(ngModel)]=\"labourMaster.employeeName\"\r\n                (ngModelChange)=\"getEmployeeId(labourMaster.employeeName)\" required>\r\n                <mat-option *ngFor=\"let employee of employees\" [value]=\"employee.empName\">\r\n                  {{employee.empName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.labourEmpType == 'Permanent' && (labourMaster.activityName == 'ShotBlasting' ||  labourMaster.activityName == 'Fettling')\"\r\n            class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"MachineId\" name=\"machineId\" [(ngModel)]=\"labourMaster.machineId\" required  (ngModelChange)=\"checkMachineId(labourMaster.machineId)\">\r\n                <mat-option *ngFor=\"let id of machineId\" [value]=\"id.machineId\">\r\n                  {{id.machineId}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"labourMaster.activityName == 'Painting' && labourMaster.labourEmpType == 'Permanent'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"PaintingType\" name=\"paintingType\"\r\n                [(ngModel)]=\"labourMaster.paintingType\" (ngModelChange)=\"checkPantingType(labourMaster.paintingType)\" required>\r\n                <mat-option *ngFor=\"let painting of machineId\" [value]=\"painting.paintingType\">\r\n                  {{painting.paintingType}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"accent\" style=\"float: right;margin-top:-30px;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n      <button mat-raised-button color=\"primary\" style=\"float: right;margin-top:-30px;\" [disabled]=\"!exampleForm.valid\"\r\n        (click)=\"saveLabourMaster(exampleForm)\">Save</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-7 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Contract Employee</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-header>\r\n      <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'340'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\" striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th matTooltip=\"Activity Name\" scope=\"col\">Activity Name</th>\r\n                <th matTooltip=\"Labour EmpType\" scope=\"col\">Labour EmpType</th>\r\n                <th matTooltip=\"Working Type\" scope=\"col\">Working Type</th>\r\n                <th matTooltip=\"Rate/Kg\" scope=\"col\">Rate/Kg</th>\r\n                <th matTooltip=\"Rate/Hour\" scope=\"col\">Rate/Hour</th>\r\n                <th matTooltip=\"OTRate/Hour\" scope=\"col\">OTRate/Hour</th>\r\n                <th> <button mat-icon-button matTooltip=\"Refresh\" color=\"accent\" (click)=\"refresh()\">\r\n                    <mat-icon>refresh</mat-icon>\r\n                  </button></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let labour of labourMasters;let i=index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{labour.activityName}}</td>\r\n                <td>{{labour.labourEmpType}}</td>\r\n                <td>{{labour.workingType}}</td>\r\n                <td style=\"text-align: right\">{{labour.ratePerKg}}</td>\r\n                <td style=\"text-align: right\">{{labour.ratePerHour}}</td>\r\n                <td style=\"text-align: right\">{{labour.otHours}}</td>\r\n                <td>\r\n                  <button mat-icon-button matTooltip=\"EditLabourMaster\" color=\"accent\" (click)=\"editLabourMaster(i,labour._id,labour.activityName,labour.labourEmpType,labour.workingType,labour.ratePerKg,labour.ratePerHour,labour.otHours,labour.employeeId,labour.employeeName,labour.machineId,labour.paintingType)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"DeleteLabourMaster\" color=\"accent\" (click)=\"deleteLabourMaster(i,labour._id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"col-lg-5 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card class=\"example-card1\">\r\n          <mat-card-header>\r\n            <mat-card-title>Permanent Employee</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </mat-card-header>\r\n      <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'340'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\" striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th matTooltip=\"Activity Name\" scope=\"col\">A Name</th>\r\n                <th matTooltip=\"Labour EmpType\" scope=\"col\">LabourType</th>\r\n                <th matTooltip=\"Employee Name\" scope=\"col\">E Name</th>\r\n                <th matTooltip=\"Macine Id\" scope=\"col\">Macine Id</th>\r\n                <th>\r\n                  <button mat-icon-button matTooltip=\"Refresh\" color=\"accent\" (click)=\"refresh()\">\r\n                    <mat-icon>refresh</mat-icon>\r\n                  </button>\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let labour of labourMasters1;let i=index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{labour.activityName}}</td>\r\n                <td>{{labour.labourEmpType }}</td>\r\n                <td>{{labour.employeeName}}</td>\r\n                <td>{{labour.machineId}}</td>\r\n                <td>\r\n                  <button mat-icon-button matTooltip=\"EditLabourMaster\" color=\"accent\" (click)=\"editLabourMaster(i,labour._id,labour.activityName,labour.labourEmpType,labour.workingType,labour.ratePerKg,labour.ratePerHour,labour.otHours,labour.employeeId,labour.employeeName,labour.machineId,labour.paintingType)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"DeleteLabourMaster\" color=\"accent\" (click)=\"deleteLabourMaster(i,labour._id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/labour-master/labour-master.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/labour-master/labour-master.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 100%;\n  margin-top: 50px; }\n\nmat-card {\n  max-width: 100%; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvbGFib3VyLW1hc3Rlci9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxtYXN0ZXJcXHByb2R1Y3Rpb24tbWFzdGVyXFxsYWJvdXItbWFzdGVyXFxsYWJvdXItbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVTtFQUNWLGdCQUFnQixFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUUxQjtFQUNBLGdCQUFnQixFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRWpCO0VBQ0EsdUJBQXVCO0VBQ3ZCLGtDQUFrQyxFQUFBOztBQUVsQztFQUNFLDBCQUEwQjtFQUN4QixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvbGFib3VyLW1hc3Rlci9sYWJvdXItbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZHtcclxuIHdpZHRoOjEwMCU7XHJcbiBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtY2FyZDF7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgfVxyXG4gIHRye1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgfVxyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgfVxyXG4gIHRhYmxlIHRib2R5IHRyIHRke1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNmNzMzNzg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/labour-master/labour-master.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/labour-master/labour-master.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LabourMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourMasterComponent", function() { return LabourMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _labour_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labour-master */ "./src/app/foundry/master/production-master/labour-master/labour-master.ts");
/* harmony import */ var _employee_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../employee/employee.service */ "./src/app/foundry/employee/employee.service.ts");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../master.service */ "./src/app/foundry/master/master.service.ts");







var LabourMasterComponent = /** @class */ (function () {
    function LabourMasterComponent(productionMasterService, employeeService, masterService, notifierService) {
        this.productionMasterService = productionMasterService;
        this.employeeService = employeeService;
        this.masterService = masterService;
        this.Option = [{ employeeName: '', machineId: '' }];
        this.notifier = notifierService;
    }
    LabourMasterComponent.prototype.ngOnInit = function () {
        this.labourMaster = new _labour_master__WEBPACK_IMPORTED_MODULE_4__["LabourMaster"]();
        console.log('test', this.labourMaster._id);
        this.getAllActivity();
        this.getContractLabourMasters();
        this.getPermanentLabourMasters();
        this.getAllPainting();
    };
    LabourMasterComponent.prototype.getAllActivity = function () {
        var _this = this;
        this.masterService.getAllActivityMaster().subscribe(function (data) {
            _this.activityMasters = data;
        }, function (err) {
            console.log(err);
        });
    };
    LabourMasterComponent.prototype.getContractLabourMasters = function () {
        var _this = this;
        this.productionMasterService.getContractLabourMasters().subscribe(function (data) {
            _this.labourMasters = data;
        }, function (error) {
            console.log(error);
        });
    };
    LabourMasterComponent.prototype.getPermanentLabourMasters = function () {
        var _this = this;
        this.productionMasterService.getPermanentLabourMasters().subscribe(function (data) {
            _this.labourMasters1 = data;
        }, function (error) {
            console.log(error);
        });
    };
    LabourMasterComponent.prototype.saveLabourMaster = function (exampleForm) {
        var _this = this;
        if (this.labourMaster._id === undefined || this.labourMaster._id === '') {
            this.labourMaster.createdBy = localStorage.getItem('user');
            console.log('this.labourMaster', this.labourMaster);
            this.productionMasterService.saveLabourMaster(this.labourMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getContractLabourMasters();
                _this.getPermanentLabourMasters();
                exampleForm.resetForm();
            }, function (error) {
                _this.notifier.notify('error', 'Labour Master may already exists');
            });
        }
        else {
            console.log(this.labourMaster);
            this.labourMaster.modifiedBy = localStorage.getItem('user');
            if (this.labourMaster.labourEmpType === 'Contract' && this.labourMaster.workingType === 'KG') {
                this.labourMaster.ratePerHour = 0;
                this.labourMaster.otHours = 0;
            }
            else if (this.labourMaster.labourEmpType === 'Contract' && this.labourMaster.workingType === 'HOUR') {
                this.labourMaster.ratePerKg = 0;
            }
            this.productionMasterService.updateLabourMaster(this.labourMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getContractLabourMasters();
                _this.getPermanentLabourMasters();
                exampleForm.resetForm();
                _this.labourMaster._id = undefined;
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /*Edit Labour Master */
    LabourMasterComponent.prototype.editLabourMaster = function (i, _id, activityName, labourEmpType, workingType, ratePerKg, ratePerHour, otHours, employeeId, employeeName, machineId, paintingType) {
        this.labourMaster._id = _id;
        this.labourMaster.activityName = activityName;
        this.labourMaster.labourEmpType = labourEmpType;
        this.labourMaster.workingType = workingType;
        this.labourMaster.ratePerKg = ratePerKg;
        this.labourMaster.ratePerHour = ratePerHour;
        this.labourMaster.otHours = otHours;
        this.labourMaster.employeeId = employeeId;
        this.labourMaster.employeeName = employeeName;
        this.labourMaster.machineId = machineId;
        this.labourMaster.paintingType = paintingType;
        console.log(this.labourMaster);
        this.choosePermanentEmployeesAndMachines(this.labourMaster.labourEmpType, this.labourMaster.activityName);
    };
    /**delete Labour details */
    LabourMasterComponent.prototype.deleteLabourMaster = function (i, _id) {
        var _this = this;
        this.labourMaster._id = _id;
        this.labourMaster.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deleteLabourMaster(this.labourMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getContractLabourMasters();
            _this.getPermanentLabourMasters();
            _this.labourMaster._id = undefined;
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    LabourMasterComponent.prototype.refresh = function () {
        this.getContractLabourMasters();
        this.getPermanentLabourMasters();
    };
    LabourMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
        this.labourMaster._id = '';
    };
    LabourMasterComponent.prototype.getEmployeeId = function (empName) {
        var _this = this;
        this.employees.forEach(function (element) {
            if (element.empName === empName) {
                _this.labourMaster.employeeId = element._id;
            }
        });
    };
    LabourMasterComponent.prototype.getAllPainting = function () {
        var _this = this;
        this.productionMasterService.getAllPainting().subscribe(function (data) {
            _this.paintingMasters = data;
        }, function (error) {
            console.log(error);
        });
    };
    LabourMasterComponent.prototype.checkMachineId = function (machineId) {
        var _this = this;
        this.labourMasters1.forEach(function (res) {
            if (res.employeeName === _this.labourMaster.employeeName && res.machineId === machineId) {
                _this.labourMaster.machineId = '';
                console.log(_this.labourMaster);
                _this.notifier.notify('error', 'Already the employee assign to the same machine');
            }
        });
    };
    LabourMasterComponent.prototype.checkPantingType = function (paintingType) {
        var _this = this;
        this.labourMasters1.forEach(function (res) {
            if (res.employeeName === _this.labourMaster.employeeName && res.paintingType === paintingType) {
                _this.labourMaster.paintingType = '';
                _this.notifier.notify('error', 'Already the employee assign to the same paint type');
            }
        });
    };
    LabourMasterComponent.prototype.choosePermanentEmployeesAndMachines = function (labourEmpType, activityName) {
        var _this = this;
        if (this.labourMaster._id === undefined) {
            if (labourEmpType === 'Permanent') {
                this.labourMasters.forEach(function (res) {
                    if (res.activityName === activityName) {
                        if (res.labourEmpType !== labourEmpType) {
                            _this.labourMaster.labourEmpType = '';
                            _this.notifier.notify('error', 'Activity Working type already exists');
                        }
                    }
                });
            }
            else {
                this.labourMasters.forEach(function (res) {
                    if (res.activityName === activityName) {
                        if (res.labourEmpType === labourEmpType) {
                            _this.labourMaster.labourEmpType = '';
                            _this.notifier.notify('error', 'Activity Working type already exists');
                        }
                    }
                });
                this.labourMasters1.forEach(function (res1) {
                    if (res1.activityName === activityName) {
                        if (res1.labourEmpType !== labourEmpType) {
                            _this.labourMaster.labourEmpType = '';
                            _this.notifier.notify('error', 'Activity Working type already exists');
                        }
                    }
                });
            }
        }
        if (labourEmpType === 'Permanent') {
            this.employeeService.getParticularTypeEmployees(activityName).subscribe(function (data1) {
                _this.employees = data1;
                _this.productionMasterService.getMachineDetailsByType(activityName).subscribe(function (data) {
                    _this.machineId = data;
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    LabourMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labour-master',
            template: __webpack_require__(/*! ./labour-master.component.html */ "./src/app/foundry/master/production-master/labour-master/labour-master.component.html"),
            styles: [__webpack_require__(/*! ./labour-master.component.scss */ "./src/app/foundry/master/production-master/labour-master/labour-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"], _employee_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            _master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], LabourMasterComponent);
    return LabourMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/labour-master/labour-master.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/labour-master/labour-master.ts ***!
  \*********************************************************************************/
/*! exports provided: LabourMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourMaster", function() { return LabourMaster; });
var LabourMaster = /** @class */ (function () {
    function LabourMaster() {
    }
    return LabourMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/lpg-master/lpg-master.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/lpg-master/lpg-master.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-7 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Permanent Employee</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'340'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Bought Date\" scope=\"col\">Bought Date</th>\r\n                  <th matTooltip=\"Replacement Date\" scope=\"col\">Replacement Date</th>\r\n                  <th matTooltip=\"Total Cost\" scope=\"col\">Total Cost </th>\r\n                  <th matTooltip=\"No Of Hours\" scope=\"col\">No Of Hours</th>\r\n                  <th matTooltip=\"Per Hour Cost\" scope=\"col\">PerHourCost</th>\r\n                  <th>\r\n                    <button mat-icon-button matTooltip=\"Refresh\" color=\"accent\" (click)=\"refresh()\">\r\n                      <mat-icon>refresh</mat-icon>\r\n                    </button>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let lpg of lpgMasters;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{lpg.boughtDate| date:'MMM d, y'}}</td>\r\n                  <td>{{lpg.replaceDate | date:'MMM d, y' }}</td>\r\n                  <td style=\"text-align: right\">{{lpg.totalCost}}</td>\r\n                  <td style=\"text-align: right\">{{lpg.noOfHours}}</td>\r\n                  <td style=\"text-align: right\">{{lpg.perHourCost}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit LpgMaster\" color=\"accent\"\r\n                      (click)=\"editLpgMaster(i,lpg._id,lpg.boughtDate,lpg.replaceDate,lpg.totalCost,lpg.noOfHours)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete LpgMaster\" color=\"accent\"\r\n                      (click)=\"deleteLpgMaster(i,lpg._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-5 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>LPG Master</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput [max]=\"maxDate\" placeholder=\"BoughtDate\" [matDatepicker]=\"picker1\"\r\n               name=\"boughtDate\" [(ngModel)]=\"lpg.boughtDate\" readonly required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n              <!-- <mat-error>\r\n                <control-messages [control]=\"lpgForm.controls.boughtDate\"></control-messages>\r\n              </mat-error> -->\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"TotalCost\" appNumberValidation [maxlength]=\"10\" name=\"totalCost\"\r\n                [(ngModel)]=\"lpg.totalCost\" required>\r\n              <!-- <mat-error>\r\n                <control-messages [control]=\"lpgForm.controls.totalCost\"></control-messages>\r\n              </mat-error> -->\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"TotNoOfHoursLpgCanbeUsedApprox.\" appNumberValidation [maxlength]=\"10\" name=\"noOfHours\"\r\n                [(ngModel)]=\"lpg.noOfHours\" required>\r\n              <!-- <mat-error>\r\n                <control-messages [control]=\"lpgForm.controls.noOfHours\"></control-messages>\r\n              </mat-error> -->\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"accent\"  style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" style=\"float: right;\" (click)=\"saveLpgMaster(exampleForm)\"\r\n            >Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/lpg-master/lpg-master.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/lpg-master/lpg-master.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 350px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvbHBnLW1hc3Rlci9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxtYXN0ZXJcXHByb2R1Y3Rpb24tbWFzdGVyXFxscGctbWFzdGVyXFxscGctbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFMUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNBLHVCQUF1QjtFQUN2QixrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL2xwZy1tYXN0ZXIvbHBnLW1hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQye1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4uZXhhbXBsZS1jYXJke1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1jYXJkMXtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzMzNzg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICB9XHJcbiAgdHJ7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICB9XHJcbiAgbWF0LWljb257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgdGFibGUgdGJvZHkgdHIgdGR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/lpg-master/lpg-master.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/lpg-master/lpg-master.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LpgMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpgMasterComponent", function() { return LpgMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lpg_master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lpg-master */ "./src/app/foundry/master/production-master/lpg-master/lpg-master.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");







var LpgMasterComponent = /** @class */ (function () {
    function LpgMasterComponent(productionMasterService, notifierService, formBuilder) {
        this.productionMasterService = productionMasterService;
        this.formBuilder = formBuilder;
        this.maxDate = new Date();
        this.notifier = notifierService;
        this.lpgForm = this.formBuilder.group({
            'boughtDate': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            'totalCost': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].numberValidator]],
            'noOfHours': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].numberValidator]],
        });
    }
    LpgMasterComponent.prototype.ngOnInit = function () {
        this.lpg = new _lpg_master__WEBPACK_IMPORTED_MODULE_1__["LpgMaster"]();
        this.getAllLpgMasterDetails();
    };
    /** getAllLpgMasterDetails*/
    LpgMasterComponent.prototype.getAllLpgMasterDetails = function () {
        var _this = this;
        this.productionMasterService.getLpgMaster().subscribe(function (data) {
            _this.lpgMasters = data;
        }, function (err) {
            console.log(err);
        });
    };
    /**save the lPG master details */
    LpgMasterComponent.prototype.saveLpgMaster = function (exampleForm) {
        var _this = this;
        console.log('this.lpg', this.lpg);
        if (this.lpg._id === undefined || this.lpg._id === '') {
            this.lpg.createdBy = localStorage.getItem('user');
            this.productionMasterService.saveLpgMaster(this.lpg).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllLpgMasterDetails();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.lpg.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updateLpgMaster(this.lpg).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllLpgMasterDetails();
                exampleForm.resetForm();
                _this.lpg._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the Lpg master details */
    LpgMasterComponent.prototype.editLpgMaster = function (i, _id, boughtDate, replaceDate, totalCost, noOfHours) {
        this.lpg._id = _id;
        this.lpg.boughtDate = boughtDate;
        this.lpg.replaceDate = replaceDate;
        this.lpg.totalCost = totalCost;
        this.lpg.noOfHours = noOfHours;
    };
    LpgMasterComponent.prototype.deleteLpgMaster = function (i, _id) {
        var _this = this;
        this.lpg.modifiedBy = localStorage.getItem('user');
        this.lpg._id = _id;
        this.productionMasterService.deleteLpgMaster(this.lpg).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllLpgMasterDetails();
            _this.lpg._id = '';
        }, function (error) {
            console.log(error);
        });
    };
    LpgMasterComponent.prototype.refresh = function () {
        this.getAllLpgMasterDetails();
    };
    LpgMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    LpgMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-lpg-master',
            template: __webpack_require__(/*! ./lpg-master.component.html */ "./src/app/foundry/master/production-master/lpg-master/lpg-master.component.html"),
            styles: [__webpack_require__(/*! ./lpg-master.component.scss */ "./src/app/foundry/master/production-master/lpg-master/lpg-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], LpgMasterComponent);
    return LpgMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/lpg-master/lpg-master.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/lpg-master/lpg-master.ts ***!
  \***************************************************************************/
/*! exports provided: LpgMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpgMaster", function() { return LpgMaster; });
var LpgMaster = /** @class */ (function () {
    function LpgMaster() {
    }
    return LpgMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/machine-details/machine-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/machine-details/machine-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-7 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Machine Details</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'340'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Activity Type\" scope=\"col\">Activity Name</th>\r\n                  <th matTooltip=\"Machine Id\" scope=\"col\">Machine Id</th>\r\n                  <th matTooltip=\"Machine Name\" scope=\"col\">Machine Name</th>\r\n                  <th matTooltip=\"Activity Type\" scope=\"col\">Painting Type</th>\r\n                  <th matTooltip=\"Machine Status\" scope=\"col\">Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let machine of machineDetails;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{machine.activityType}}</td>\r\n                  <td>{{machine.machineId}}</td>\r\n                  <td>{{machine.machineName }}</td>\r\n                  <td>{{machine.paintingType}}</td>\r\n                  <td>{{machine.machineStatus}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit MachineMaster\" color=\"accent\" (click)=\"editMachineMaster(i,machine._id,machine.machineId,machine.machineName,machine.activityType,machine.paintingType,machine.machineStatus)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"DeleteMachineMaster\" color=\"accent\" (click)=\"deleteMachineMaster(i,machine._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-5 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Add Machine Master</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"machineDetail._id === undefined\">\r\n              <mat-select placeholder=\"Activity Type\" name=\"activityType\" [(ngModel)]=\"machineDetail.activityType\"\r\n                required>\r\n                <mat-option *ngFor=\"let activityMaster of activityMasters\" [value]=\"activityMaster.activityType\">\r\n                  {{activityMaster.activityType}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"machineDetail._id !== undefined\">\r\n              <input matInput placeholder=\"Activity Type\" name=\"activityType\" [(ngModel)]=\"machineDetail.activityType\" readonly\r\n                required>\r\n            </mat-form-field>\r\n            <div *ngIf=\"machineDetail.activityType != 'Painting'\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"MachineId\" [maxlength]=\"10\" name=\"machineId\" [(ngModel)]=\"machineDetail.machineId\" (change)=\"checkMachineId(machineDetail.machineId)\"\r\n                required>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"MachineName\" [maxlength]=\"10\" name=\"machineName\" [(ngModel)]=\"machineDetail.machineName\" (change)=\"checkMachineName(machineDetail.machineName)\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"machineDetail.activityType == 'Painting'\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Painting Type\" [maxlength]=\"10\" name=\"paintingType\" [(ngModel)]=\"machineDetail.paintingType\" (change)=\"checkPaintingType(machineDetail.paintingType)\"\r\n                  required>\r\n              </mat-form-field>\r\n            </div>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Status\" appStringValidation=\"words\" name=\"machineStatus\" [(ngModel)]=\"machineDetail.machineStatus\"\r\n                required>\r\n                <mat-option value=\"Active\">Active</mat-option>\r\n                <mat-option value=\"Inactive\">InActive</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" style=\"float: right;\" (click)=\"saveMachineDetails(exampleForm)\">Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n  <notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/machine-details/machine-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/machine-details/machine-details.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 400px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvbWFjaGluZS1kZXRhaWxzL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxccHJvZHVjdGlvbi1tYXN0ZXJcXG1hY2hpbmUtZGV0YWlsc1xcbWFjaGluZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFMUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNBLHVCQUF1QjtFQUN2QixrQ0FBa0MsRUFBQTs7QUFFbEM7RUFDRSwwQkFBMEI7RUFDeEIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL21hY2hpbmUtZGV0YWlscy9tYWNoaW5lLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkMntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtY2FyZDF7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgfVxyXG4gIHRye1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgfVxyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgfVxyXG4gIHRhYmxlIHRib2R5IHRyIHRke1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNmNzMzNzg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/machine-details/machine-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/machine-details/machine-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MachineDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDetailsComponent", function() { return MachineDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var _machine_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./machine-details */ "./src/app/foundry/master/production-master/machine-details/machine-details.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var MachineDetailsComponent = /** @class */ (function () {
    function MachineDetailsComponent(masterService, notifierService, formBuilder, productionMasterService) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.productionMasterService = productionMasterService;
        this.notifier = notifierService;
        this.machineForm = this.formBuilder.group({
            'activityType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'machineName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            'machineId': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            'machineStatus': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
    }
    MachineDetailsComponent.prototype.ngOnInit = function () {
        this.machineDetail = new _machine_details__WEBPACK_IMPORTED_MODULE_4__["MachineDetails"]();
        this.getAllActivity();
        this.getAllMachineDetails();
    };
    MachineDetailsComponent.prototype.getAllActivity = function () {
        var _this = this;
        this.masterService.getAllActivityMaster().subscribe(function (data) {
            _this.activityMasters = data;
        }, function (error) {
            console.log(error);
        });
    };
    MachineDetailsComponent.prototype.getAllMachineDetails = function () {
        var _this = this;
        this.productionMasterService.getAllMachineDetails().subscribe(function (data) {
            _this.machineDetails = data;
        }, function (error) {
            console.log(error);
        });
    };
    MachineDetailsComponent.prototype.checkMachineId = function (machineId) {
        var _this = this;
        this.machineDetails.forEach(function (res) {
            if (_this.machineDetail.activityType === res.activityType && machineId === res.machineId) {
                _this.machineDetail.machineId = '';
            }
        });
    };
    MachineDetailsComponent.prototype.checkMachineName = function (machineName) {
        var _this = this;
        this.machineDetails.forEach(function (res) {
            if (_this.machineDetail.machineId === res.machineId && machineName === res.machineName) {
                _this.machineDetail.machineName = '';
            }
        });
    };
    MachineDetailsComponent.prototype.checkPaintingType = function (paintingType) {
        var _this = this;
        this.machineDetails.forEach(function (res) {
            if (_this.machineDetail.activityType === res.activityType && paintingType === res.paintingType) {
                _this.machineDetail.paintingType = '';
            }
        });
    };
    MachineDetailsComponent.prototype.saveMachineDetails = function (exampleForm) {
        var _this = this;
        console.log('this.machineDetail', this.machineDetail);
        if (this.machineDetail._id === undefined || this.machineDetail._id === '') {
            this.machineDetail.createdBy = localStorage.getItem('user');
            this.productionMasterService.saveMachineDetails(this.machineDetail).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllMachineDetails();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.machineDetail.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updateMachineDetails(this.machineDetail).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllMachineDetails();
                exampleForm.resetForm();
                _this.machineDetail._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the MachineMaste details */
    MachineDetailsComponent.prototype.editMachineMaster = function (i, _id, machineId, machineName, activityType, paintingType, machineStatus) {
        this.machineDetail._id = _id;
        this.machineDetail.machineId = machineId;
        this.machineDetail.machineName = machineName;
        this.machineDetail.activityType = activityType;
        this.machineDetail.paintingType = paintingType;
        this.machineDetail.machineStatus = machineStatus;
    };
    MachineDetailsComponent.prototype.deleteMachineMaster = function (i, _id) {
        var _this = this;
        this.machineDetail.modifiedBy = localStorage.getItem('user');
        this.machineDetail._id = _id;
        this.productionMasterService.deleteMachineDetails(this.machineDetail).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllMachineDetails();
            _this.machineDetail._id = undefined;
        }, function (error) {
            console.log(error);
        });
    };
    MachineDetailsComponent.prototype.refresh = function () {
        this.getAllMachineDetails();
    };
    MachineDetailsComponent.prototype.cancel = function (exampleForm) {
        this.machineDetail._id = undefined;
        exampleForm.resetForm();
    };
    MachineDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-machine-details',
            template: __webpack_require__(/*! ./machine-details.component.html */ "./src/app/foundry/master/production-master/machine-details/machine-details.component.html"),
            styles: [__webpack_require__(/*! ./machine-details.component.scss */ "./src/app/foundry/master/production-master/machine-details/machine-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _production_master_service__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterService"]])
    ], MachineDetailsComponent);
    return MachineDetailsComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/machine-details/machine-details.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/machine-details/machine-details.ts ***!
  \*************************************************************************************/
/*! exports provided: MachineDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDetails", function() { return MachineDetails; });
var MachineDetails = /** @class */ (function () {
    function MachineDetails() {
    }
    return MachineDetails;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/painting-master/painting-master.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/painting-master/painting-master.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Painting </mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'440'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Painting Type\" scope=\"col\">Painting Type</th>\r\n                  <th matTooltip=\"Paint Name\" scope=\"col\">Paint Name</th>\r\n                  <th matTooltip=\"per Litre Cost\" scope=\"col\">Litre Cost</th>\r\n                  <th matTooltip=\"Status\" scope=\"col\">Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let painting of paintings;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{painting.paintingType}}</td>\r\n                  <td>{{painting.paintName}}</td>\r\n                  <td>{{painting.perLitreCost}}</td>\r\n                  <td>{{painting.status}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit Painting Master\" color=\"accent\" (click)=\"editPainting(i,painting._id,painting.paintingType,painting.paintName,painting.perLitreCost,painting.status)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"Edit Painting Master\" color=\"accent\" (click)=\"deletePainting(i,painting._id,painting.paintingType,painting.perLitreCost,painting.machineStatus)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Painting Master </mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"paintingForm\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"painting._id === undefined\">\r\n              <mat-select placeholder=\"Painting Type\" name=\"paintingType\" formControlName=\"paintingType\" [(ngModel)]=\"painting.paintingType\"\r\n                required>\r\n                <mat-option *ngFor=\"let machineDetail of machineDetails\" [value]=\"machineDetail.paintingType\">\r\n                  {{machineDetail.paintingType}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error>\r\n                <control-messages [control]=\"paintingForm.controls.paintingType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"painting._id !== undefined\">\r\n              <input matInput placeholder=\"Painting Type\"  name=\"paintingType\"\r\n                formControlName=\"paintingType\" [(ngModel)]=\"painting.paintingType\" readonly>\r\n              <mat-error>\r\n                <control-messages [control]=\"paintingForm.controls.paintingType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"painting._id === undefined\">\r\n              <mat-select placeholder=\"Paint Name\" name=\"paintName\" formControlName=\"paintName\" [(ngModel)]=\"painting.paintName\"\r\n              (ngModelChange)=\"getPerKgCost(painting.paintName)\" required>\r\n                <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                  {{item.itemName}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error>\r\n                <control-messages [control]=\"paintingForm.controls.paintName\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"painting._id !== undefined\">\r\n              <input matInput placeholder=\"Paint Name\"  name=\"paintName\"\r\n                formControlName=\"paintName\" [(ngModel)]=\"painting.paintName\" readonly>\r\n              <mat-error>\r\n                <control-messages [control]=\"paintingForm.controls.paintName\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"PerLitreCost\" appNumberValidation [maxlength]=\"10\" name=\"perLitreCost\"\r\n                formControlName=\"perLitreCost\" [(ngModel)]=\"painting.perLitreCost\">\r\n              <mat-error>\r\n                <control-messages [control]=\"paintingForm.controls.perLitreCost\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Status\" name=\"status\" formControlName=\"status\" [(ngModel)]=\"painting.status\"  >\r\n                <mat-option value=\"Active\">Active</mat-option>\r\n                <mat-option value=\"Inactive\">Inactive</mat-option>\r\n              </mat-select>\r\n              <mat-error>\r\n                <control-messages [control]=\"paintingForm.controls.status\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!paintingForm.valid\" style=\"float: right;\" (click)=\"savePainting(exampleForm)\">Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/painting-master/painting-master.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/painting-master/painting-master.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 390px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvcGFpbnRpbmctbWFzdGVyL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxccHJvZHVjdGlvbi1tYXN0ZXJcXHBhaW50aW5nLW1hc3RlclxccGFpbnRpbmctbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTs7QUFFbkI7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBRTFCO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDQSx1QkFBdUI7RUFDdkIsa0NBQWtDLEVBQUE7O0FBRWxDO0VBQ0UsMEJBQTBCO0VBQ3hCLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3VuZHJ5L21hc3Rlci9wcm9kdWN0aW9uLW1hc3Rlci9wYWludGluZy1tYXN0ZXIvcGFpbnRpbmctbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZDJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMzkwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZXhhbXBsZS1jYXJkMXtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzMzNzg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICB9XHJcbiAgdHJ7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICB9XHJcbiAgbWF0LWljb257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgdGFibGUgdGJvZHkgdHIgdGR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGh7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogI2Y3MzM3ODtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/painting-master/painting-master.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/painting-master/painting-master.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PaintingMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingMasterComponent", function() { return PaintingMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _painting_master_painting_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../painting-master/painting-master */ "./src/app/foundry/master/production-master/painting-master/painting-master.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../items/items.service */ "./src/app/foundry/items/items.service.ts");
/* harmony import */ var _stock_stock_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../stock/stock.service */ "./src/app/foundry/stock/stock.service.ts");









var PaintingMasterComponent = /** @class */ (function () {
    function PaintingMasterComponent(productionMasterService, notifierService, formBuilder, itemService, stockService) {
        this.productionMasterService = productionMasterService;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.stockService = stockService;
        this.cost = true;
        this.notifier = notifierService;
        this.paintingForm = this.formBuilder.group({
            'paintingType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]],
            'paintName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]],
            'perLitreCost': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].numberValidator]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]]
        });
    }
    PaintingMasterComponent.prototype.ngOnInit = function () {
        this.type = 'Painting';
        this.painting = new _painting_master_painting_master__WEBPACK_IMPORTED_MODULE_4__["PaintingMaster"]();
        this.getAllPainting();
        this.getAllPaintingMachine(this.type);
        this.getItemNames();
    };
    PaintingMasterComponent.prototype.getAllPaintingMachine = function (type) {
        var _this = this;
        this.productionMasterService.getMachineDetailsByType(type).subscribe(function (data) {
            _this.machineDetails = data;
        }, function (err) {
            console.log(err);
        });
    };
    /**get all painting details */
    PaintingMasterComponent.prototype.getAllPainting = function () {
        var _this = this;
        this.productionMasterService.getAllPainting().subscribe(function (data) {
            _this.paintings = data;
        }, function (err) {
            console.log(err);
        });
    };
    PaintingMasterComponent.prototype.getItemNames = function () {
        var _this = this;
        this.itemType = 'McConsumable';
        var itemCategory;
        itemCategory = 'Painting';
        this.itemService.getItemsByItemType(this.itemType, itemCategory).subscribe(function (data) {
            _this.items = data;
        }, function (err) {
            console.log(err);
        });
    };
    PaintingMasterComponent.prototype.getPerKgCost = function (itemName) {
        var _this = this;
        this.paintings.forEach(function (res) {
            if (res.paintName === itemName && res.paintingType === _this.painting.paintingType) {
                _this.painting.paintName = '';
                _this.notifier.notify('error', 'Painting Name and Type already Exists');
                _this.cost = false;
            }
        });
        if (this.cost === true) {
            this.stockService.getMcConsumableStockByItemName(itemName).subscribe(function (data) {
                _this.painting.perLitreCost = data.perKG;
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**save the painting details */
    PaintingMasterComponent.prototype.savePainting = function (exampleForm) {
        var _this = this;
        if (this.painting._id === undefined || this.painting._id === '') {
            this.painting.createdBy = localStorage.getItem('user');
            this.productionMasterService.savePainting(this.painting).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllPainting();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.painting.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updatePainting(this.painting).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllPainting();
                exampleForm.resetForm();
                _this.painting._id = undefined;
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /** edit the painting details*/
    PaintingMasterComponent.prototype.editPainting = function (i, _id, paintingType, paintName, perLitreCost, status) {
        this.painting._id = _id;
        this.painting.paintName = paintName;
        this.painting.perLitreCost = perLitreCost;
        this.painting.paintingType = paintingType;
        this.painting.status = status;
    };
    /**delete painting details */
    PaintingMasterComponent.prototype.deletePainting = function (i, _id) {
        var _this = this;
        this.painting._id = _id;
        this.painting.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deletePainting(this.painting).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllPainting();
            _this.painting._id = '';
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    PaintingMasterComponent.prototype.refresh = function () {
        this.getAllPainting();
    };
    PaintingMasterComponent.prototype.cancel = function (exampleForm) {
        this.painting._id = undefined;
        exampleForm.resetForm();
    };
    PaintingMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painting-master',
            template: __webpack_require__(/*! ./painting-master.component.html */ "./src/app/foundry/master/production-master/painting-master/painting-master.component.html"),
            styles: [__webpack_require__(/*! ./painting-master.component.scss */ "./src/app/foundry/master/production-master/painting-master/painting-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _items_items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"], _stock_stock_service__WEBPACK_IMPORTED_MODULE_8__["StockService"]])
    ], PaintingMasterComponent);
    return PaintingMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/painting-master/painting-master.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/painting-master/painting-master.ts ***!
  \*************************************************************************************/
/*! exports provided: PaintingMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingMaster", function() { return PaintingMaster; });
var PaintingMaster = /** @class */ (function () {
    function PaintingMaster() {
    }
    return PaintingMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/production-master-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/production-master-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductionMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionMasterRoutingModule", function() { return ProductionMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _production_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./production-master.component */ "./src/app/foundry/master/production-master/production-master.component.ts");




var routes = [
    {
        path: '',
        component: _production_master_component__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterComponent"],
    }
];
var ProductionMasterRoutingModule = /** @class */ (function () {
    function ProductionMasterRoutingModule() {
    }
    ProductionMasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductionMasterRoutingModule);
    return ProductionMasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/production-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/production-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"margin-top: 30px;\">\r\n    <mat-tab label=\"Machine Details\">\r\n        <app-machine-details></app-machine-details>\r\n      </mat-tab>\r\n  <mat-tab label=\"Shot Blasting\">\r\n    <app-shot-blasting-master></app-shot-blasting-master>\r\n  </mat-tab>\r\n  <mat-tab label=\"Fettling\">\r\n    <app-fettling-master></app-fettling-master>\r\n  </mat-tab>\r\n  <mat-tab label=\"Painting\">\r\n    <app-painting-master></app-painting-master>\r\n  </mat-tab>\r\n  <mat-tab label=\"Labour\">\r\n    <app-labour-master></app-labour-master>\r\n  </mat-tab>\r\n  <!-- <mat-tab label=\"LPG\">\r\n    <app-lpg-master></app-lpg-master>\r\n  </mat-tab> -->\r\n  <mat-tab label=\"Core\">\r\n    <app-core-master></app-core-master>\r\n  </mat-tab>\r\n  <mat-tab label=\"Composition\">\r\n    <app-raw-material-pre-data></app-raw-material-pre-data>\r\n  </mat-tab>\r\n  <mat-tab label=\"Department\">\r\n    <app-department></app-department>\r\n  </mat-tab>\r\n  <mat-tab label=\"Shift\">\r\n    <app-shift></app-shift>\r\n  </mat-tab>\r\n  <mat-tab label=\"Salary\">\r\n      <app-salary></app-salary>\r\n    </mat-tab>\r\n    <mat-tab label=\"Sand Disposal\">\r\n      <app-sand-disposal-master></app-sand-disposal-master>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/production-master.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/production-master.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/production-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/production-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductionMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionMasterComponent", function() { return ProductionMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductionMasterComponent = /** @class */ (function () {
    function ProductionMasterComponent() {
    }
    ProductionMasterComponent.prototype.ngOnInit = function () {
    };
    ProductionMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-master',
            template: __webpack_require__(/*! ./production-master.component.html */ "./src/app/foundry/master/production-master/production-master.component.html"),
            styles: [__webpack_require__(/*! ./production-master.component.scss */ "./src/app/foundry/master/production-master/production-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductionMasterComponent);
    return ProductionMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/production-master.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/production-master.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProductionMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionMasterModule", function() { return ProductionMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _production_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./production-master.component */ "./src/app/foundry/master/production-master/production-master.component.ts");
/* harmony import */ var _production_master_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production-master-routing.module */ "./src/app/foundry/master/production-master/production-master-routing.module.ts");
/* harmony import */ var _shot_blasting_master_shot_blasting_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shot-blasting-master/shot-blasting-master.component */ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.ts");
/* harmony import */ var _fettling_master_fettling_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fettling-master/fettling-master.component */ "./src/app/foundry/master/production-master/fettling-master/fettling-master.component.ts");
/* harmony import */ var _painting_master_painting_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painting-master/painting-master.component */ "./src/app/foundry/master/production-master/painting-master/painting-master.component.ts");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _labour_master_labour_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./labour-master/labour-master.component */ "./src/app/foundry/master/production-master/labour-master/labour-master.component.ts");
/* harmony import */ var _lpg_master_lpg_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lpg-master/lpg-master.component */ "./src/app/foundry/master/production-master/lpg-master/lpg-master.component.ts");
/* harmony import */ var _raw_material_pre_data_raw_material_pre_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./raw-material-pre-data/raw-material-pre-data.component */ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.ts");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./department/department.component */ "./src/app/foundry/master/production-master/department/department.component.ts");
/* harmony import */ var _shift_shift_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shift/shift.component */ "./src/app/foundry/master/production-master/shift/shift.component.ts");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var _salary_salary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./salary/salary.component */ "./src/app/foundry/master/production-master/salary/salary.component.ts");
/* harmony import */ var _foundry_foundry_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../foundry/foundry.module */ "./src/app/foundry/foundry.module.ts");
/* harmony import */ var _sand_disposal_master_sand_disposal_master_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sand-disposal-master/sand-disposal-master.component */ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../items/items.service */ "./src/app/foundry/items/items.service.ts");
/* harmony import */ var _machine_details_machine_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./machine-details/machine-details.component */ "./src/app/foundry/master/production-master/machine-details/machine-details.component.ts");
/* harmony import */ var _core_master_core_master_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core-master/core-master.component */ "./src/app/foundry/master/production-master/core-master/core-master.component.ts");

























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
var ProductionMasterModule = /** @class */ (function () {
    function ProductionMasterModule() {
    }
    ProductionMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_production_master_component__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterComponent"], _shot_blasting_master_shot_blasting_master_component__WEBPACK_IMPORTED_MODULE_5__["ShotBlastingMasterComponent"], _fettling_master_fettling_master_component__WEBPACK_IMPORTED_MODULE_6__["FettlingMasterComponent"], _sand_disposal_master_sand_disposal_master_component__WEBPACK_IMPORTED_MODULE_20__["SandDisposalMasterComponent"],
                _painting_master_painting_master_component__WEBPACK_IMPORTED_MODULE_7__["PaintingMasterComponent"], _labour_master_labour_master_component__WEBPACK_IMPORTED_MODULE_11__["LabourMasterComponent"], _lpg_master_lpg_master_component__WEBPACK_IMPORTED_MODULE_12__["LpgMasterComponent"], _raw_material_pre_data_raw_material_pre_data_component__WEBPACK_IMPORTED_MODULE_13__["RawMaterialPreDataComponent"], _department_department_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentComponent"], _shift_shift_component__WEBPACK_IMPORTED_MODULE_16__["ShiftComponent"], _salary_salary_component__WEBPACK_IMPORTED_MODULE_18__["SalaryComponent"], _machine_details_machine_details_component__WEBPACK_IMPORTED_MODULE_22__["MachineDetailsComponent"], _core_master_core_master_component__WEBPACK_IMPORTED_MODULE_23__["CoreMasterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _production_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductionMasterRoutingModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__["DateInputsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"].withConfig(customNotifierOptions), _foundry_foundry_module__WEBPACK_IMPORTED_MODULE_19__["FoundryModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_master_service__WEBPACK_IMPORTED_MODULE_14__["MasterService"], _items_items_service__WEBPACK_IMPORTED_MODULE_21__["ItemsService"]]
        })
    ], ProductionMasterModule);
    return ProductionMasterModule;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <button mat-raised-button style=\"margin-top: 20px;\" color=\"primary\" (click)=\"enable()\">New Composition</button>\r\n  <div class=\"row\" style=\"margin-top: 30px;\" *ngIf=\"newData==true;\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title></mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"ItemName\" name=\"itemName\" [(ngModel)]=\"preData.itemName\" (selectionChange)=\"itemSelect($event.value)\"\r\n                    required>\r\n                    <mat-option *ngFor=\"let masters of itemMasterList\" [value]=\"masters.itemName\">\r\n                      {{masters.itemName}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"ItemType\" name=\"itemType\" [(ngModel)]=\"preData.itemType\" readonly>\r\n                  <!-- <mat-select placeholder=\"ItemType\" name=\"itemType\" [(ngModel)]=\"preData.itemType\" required>\r\n                    <mat-option *ngFor=\"let masters of itemMasterList\" [value]=\"masters.itemType\">\r\n                      {{masters.itemType}}\r\n                    </mat-option>\r\n                  </mat-select> -->\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"ItemPercentage(%)\" name=\"itemPercentage\" [(ngModel)]=\"preData.itemPercentage\"\r\n                    required>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"MoldType\" name=\"moldType\" [(ngModel)]=\"preData.moldType\" (ngModelChange)=\"checkItemName()\" required>\r\n                    <mat-option *ngFor=\"let masters of moldMasterList\" [value]=\"masters.moldType\">\r\n                      {{masters.moldType}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" (click)=\"saveRawMaterialPreDate(exampleForm)\">Save</button>\r\n              </div>\r\n              <div class=\"col-lg-2 col-md-6 col-sm-6\">\r\n                <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Close</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 30px;\">\r\n      <mat-card>\r\n        <div class=\"row\" id=\"id\">\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header>\r\n                <mat-card class=\"example-card1\">\r\n                    <mat-card-header>\r\n                      <mat-card-title>RawMaterial HM</mat-card-title>\r\n                    </mat-card-header>\r\n                  </mat-card>\r\n            </mat-card-header>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header style=\"float: right;\">\r\n              <mat-card-title>\r\n                <mat-chip-list>\r\n                  <mat-chip *ngIf=\"iron == 100\" style=\"background-color: green;color: white;\">{{iron}}</mat-chip>\r\n                  <mat-chip *ngIf=\"iron < 100\" style=\"background-color: orange;color: white;\">{{iron}}</mat-chip>\r\n                  <mat-chip *ngIf=\"iron > 100\" style=\"background-color:red;color: white;\">{{iron}}</mat-chip>\r\n                  <mat-chip>{{coke}}</mat-chip>\r\n                  <mat-chip>{{inoculant}}</mat-chip>\r\n                </mat-chip-list>\r\n              </mat-card-title>\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n        <mat-card-content>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Item Name</th>\r\n                  <th>Item Type</th>\r\n                  <th>Percentage</th>\r\n                  <th>Mold Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let preData of option1;let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{preData.itemName}}</td>\r\n                  <td>{{preData.itemType}}</td>\r\n                  <td *ngIf=\"percentage[i] == false\">{{preData.itemPercentage}}</td>\r\n                  <td *ngIf=\"percentage[i] == true\">\r\n                    <input placeholder=\"ItemPercentage(%)\" style=\"width: 50px;\" name=\"itemPercentage{{i}}\" [(ngModel)]=\"option1[i].itemPercentage\"\r\n                      (ngModelChange)=\"qty1(preData.itemName,option1[i].itemPercentage)\" required>\r\n                  </td>\r\n                  <td>{{preData.moldType}}</td>\r\n                  <td *ngIf=\"view[i] == false\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"editpreData(i,preData._id,preData.itemName,preData.itemType,preData.itemPercentage,preData.moldType,preData.itemCategory)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                  <td *ngIf=\"view[i] == true\">\r\n                    <button mat-icon-button matTooltip=\"Save preData\" color=\"accent\" (click)=\"option1Update(i)\">\r\n                      <mat-icon>save</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions></mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 30px;\">\r\n      <mat-card>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header>\r\n                <mat-card class=\"example-card1\">\r\n                    <mat-card-header>\r\n                      <mat-card-title>RawMaterial MM</mat-card-title>\r\n                    </mat-card-header>\r\n                  </mat-card>\r\n            </mat-card-header>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header style=\"float: right;\">\r\n              <mat-card-title>\r\n                <mat-chip-list>\r\n                  <mat-chip *ngIf=\"iron2 == 100\" style=\"background-color: green;color: white;\">{{iron2}}</mat-chip>\r\n                  <mat-chip *ngIf=\"iron2 < 100\" style=\"background-color: orange;color: white;\">{{iron2}}</mat-chip>\r\n                  <mat-chip *ngIf=\"iron2 > 100\" style=\"background-color:red;color: white;\">{{iron2}}</mat-chip>\r\n                  <mat-chip>{{coke2}}</mat-chip>\r\n                  <mat-chip>{{inoculant2}}</mat-chip>\r\n                </mat-chip-list>\r\n              </mat-card-title>\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n        <mat-card-content>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Item Name</th>\r\n                  <th>Item Type</th>\r\n                  <th>Percentage</th>\r\n                  <th>Mold Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let preData of option2;let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{preData.itemName}}</td>\r\n                  <td>{{preData.itemType}}</td>\r\n                  <td *ngIf=\"percentage[i] == false\">{{preData.itemPercentage}}</td>\r\n                  <td *ngIf=\"percentage[i] == true\">\r\n                    <input placeholder=\"ItemPercentage(%)\" style=\"width: 50px;\" name=\"itemPercentage{{i}}\" [(ngModel)]=\"option2[i].itemPercentage\"\r\n                      (ngModelChange)=\"qty2(preData.itemName,option2[i].itemPercentage)\" required>\r\n                  </td>\r\n                  <td>{{preData.moldType}}</td>\r\n                  <td *ngIf=\"view[i] == false\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"editpreData(i,preData._id,preData.itemName,preData.itemType,preData.itemPercentage,preData.moldType,preData.itemCategory)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                  <td *ngIf=\"view[i] == true\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"option2Update(i)\">\r\n                      <mat-icon>save</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions></mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Consumable Data-->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 30px;\">\r\n      <mat-card>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header>\r\n                <mat-card class=\"example-card1\">\r\n                    <mat-card-header>\r\n                      <mat-card-title>Consumable HM</mat-card-title>\r\n                    </mat-card-header>\r\n                  </mat-card>\r\n            </mat-card-header>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header style=\"float: right;\">\r\n              <mat-card-title>\r\n                <mat-chip-list>\r\n                  <mat-chip>{{usedSand}}</mat-chip>\r\n                </mat-chip-list>\r\n              </mat-card-title>\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n        <mat-card-content>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Item Name</th>\r\n                  <th>Item Type</th>\r\n                  <th>Percentage</th>\r\n                  <th>Mold Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let preData of option3;let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{preData.itemName}}</td>\r\n                  <td>{{preData.itemType}}</td>\r\n                  <td *ngIf=\"percentage[i] == false\">{{preData.itemPercentage}}</td>\r\n                  <td *ngIf=\"percentage[i] == true\">\r\n                    <input placeholder=\"ItemPercentage(%)\" style=\"width: 50px;\" name=\"itemPercentage{{i}}\" [(ngModel)]=\"option3[i].itemPercentage\"\r\n                      required>\r\n                  </td>\r\n                  <td>{{preData.moldType}}</td>\r\n                  <td *ngIf=\"view[i] == false\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"editpreData(i,preData._id,preData.itemName,preData.itemType,preData.itemPercentage,preData.moldType,preData.itemCategory)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                  <td *ngIf=\"view[i] == true\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"option3Update(i)\">\r\n                      <mat-icon>save</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions></mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 30px;\">\r\n      <mat-card>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header>\r\n              <mat-card class=\"example-card1\">\r\n                  <mat-card-header>\r\n                    <mat-card-title>Consumable MM</mat-card-title>\r\n                  </mat-card-header>\r\n                </mat-card>\r\n            </mat-card-header>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n            <mat-card-header style=\"float: right;\">\r\n              <mat-card-title>\r\n                <mat-chip-list>\r\n                  <mat-chip>{{greenSand}}</mat-chip>\r\n                </mat-chip-list>\r\n              </mat-card-title>\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n        <mat-card-content>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Item Name</th>\r\n                  <th>Item Type</th>\r\n                  <th>Percentage</th>\r\n                  <th>Mold Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let preData of option4;let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{preData.itemName}}</td>\r\n                  <td>{{preData.itemType}}</td>\r\n                  <td *ngIf=\"percentage[i] == false\">{{preData.itemPercentage}}</td>\r\n                  <td *ngIf=\"percentage[i] == true\">\r\n                    <input placeholder=\"ItemPercentage(%)\" style=\"width: 50px;\" name=\"itemPercentage{{i}}\" [(ngModel)]=\"option4[i].itemPercentage\"\r\n                      required>\r\n                  </td>\r\n                  <td>{{preData.moldType}}</td>\r\n                  <td *ngIf=\"view[i] == false\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"editpreData(i,preData._id,preData.itemName,preData.itemType,preData.itemPercentage,preData.moldType,preData.itemCategory)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                  <td *ngIf=\"view[i] == true\">\r\n                    <button mat-icon-button matTooltip=\"Edit preData\" color=\"accent\" (click)=\"option4Update(i)\">\r\n                      <mat-icon>save</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions></mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nbutton {\n  margin-top: -20px; }\n\nmat-chip {\n  color: white; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvcmF3LW1hdGVyaWFsLXByZS1kYXRhL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxccHJvZHVjdGlvbi1tYXN0ZXJcXHJhdy1tYXRlcmlhbC1wcmUtZGF0YVxccmF3LW1hdGVyaWFsLXByZS1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUUxQjtFQUNBLGdCQUFnQixFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRWpCO0VBQ0EsdUJBQXVCO0VBQ3ZCLGtDQUFrQyxFQUFBOztBQUVsQztFQUNFLDBCQUEwQjtFQUN4QixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvcmF3LW1hdGVyaWFsLXByZS1kYXRhL3Jhdy1tYXRlcmlhbC1wcmUtZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5tYXQtY2hpcHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmV4YW1wbGUtY2FyZDF7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgfVxyXG4gIHRye1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgfVxyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgfVxyXG4gIHRhYmxlIHRib2R5IHRyIHRke1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNmNzMzNzg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RawMaterialPreDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialPreDataComponent", function() { return RawMaterialPreDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var _raw_material_pre_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raw-material-pre-data */ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var src_app_foundry_items_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/foundry/items/items.service */ "./src/app/foundry/items/items.service.ts");







var RawMaterialPreDataComponent = /** @class */ (function () {
    function RawMaterialPreDataComponent(productionMasterService, notifierService, masterService, itemsService) {
        this.productionMasterService = productionMasterService;
        this.masterService = masterService;
        this.itemsService = itemsService;
        this.newData = false;
        this.percentage = [];
        this.view = [];
        this.option1 = [];
        this.option2 = [];
        this.option3 = [];
        this.option4 = [];
        this.notifier = notifierService;
    }
    RawMaterialPreDataComponent.prototype.ngOnInit = function () {
        this.getAllRawMaterialPreDate();
        this.preData = new _raw_material_pre_data__WEBPACK_IMPORTED_MODULE_3__["RawMaterialPreData"]();
        this.preData1 = new _raw_material_pre_data__WEBPACK_IMPORTED_MODULE_3__["RawMaterialPreData"]();
        this.getAllItemMaster();
        this.getMoldTypeMaster();
        this.user = localStorage.getItem('user');
    };
    RawMaterialPreDataComponent.prototype.enable = function () {
        this.newData = true;
    };
    RawMaterialPreDataComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /**get Item Master details */
    RawMaterialPreDataComponent.prototype.getAllItemMaster = function () {
        var _this = this;
        this.itemsService.getItemRawMaterial().subscribe(function (data) {
            _this.itemMasterList = data;
        }, function (err) {
            console.log(err);
        });
    };
    /**get Mold Type details */
    RawMaterialPreDataComponent.prototype.getMoldTypeMaster = function () {
        var _this = this;
        this.masterService.getMoldingMaster().subscribe(function (data) {
            _this.moldMasterList = data;
        }, function (err) {
            console.log(err);
        });
    };
    /**get all raw material pre data details */
    RawMaterialPreDataComponent.prototype.getAllRawMaterialPreDate = function () {
        var _this = this;
        this.option1 = [];
        this.option2 = [];
        this.option3 = [];
        this.option4 = [];
        this.iron = 0;
        this.iron2 = 0;
        this.coke = 0;
        this.coke2 = 0;
        this.inoculant = 0;
        this.inoculant2 = 0;
        this.productionMasterService.getRawMaterialPreData().subscribe(function (data) {
            _this.preDatas = data;
            console.log(data);
            var i = 0;
            _this.preDatas.forEach(function (res) {
                if (res.itemType === 'RawMaterial' && res.moldType === 'HM') {
                    _this.option1.push({
                        '_id': res._id, 'itemName': res.itemName, 'itemType': res.itemType, 'itemPercentage': res.itemPercentage,
                        'moldType': res.moldType, 'modifiedBy': _this.user
                    });
                    if (res.itemName !== 'Coke' && res.itemName !== 'Inoculant') {
                        _this.iron = _this.iron + res.itemPercentage;
                    }
                    else if (res.itemName === 'Coke') {
                        _this.coke = res.itemPercentage;
                    }
                    else if (res.itemName === 'Inoculant') {
                        _this.inoculant = res.itemPercentage;
                    }
                    _this.percentage[i] = false;
                    _this.view[i] = false;
                }
                else if (res.itemType === 'RawMaterial' && res.moldType === 'MM') {
                    _this.option2.push({
                        '_id': res._id, 'itemName': res.itemName, 'itemType': res.itemType, 'itemPercentage': res.itemPercentage,
                        'moldType': res.moldType, 'modifiedBy': _this.user
                    });
                    if (res.itemName !== 'Coke' && res.itemName !== 'Inoculant') {
                        _this.iron2 = _this.iron2 + res.itemPercentage;
                    }
                    else if (res.itemName === 'Coke') {
                        _this.coke2 = res.itemPercentage;
                    }
                    else if (res.itemName === 'Inoculant') {
                        _this.inoculant2 = res.itemPercentage;
                    }
                    _this.percentage[i] = false;
                    _this.view[i] = false;
                }
                else if (res.itemType === 'Consumable' && res.moldType === 'HM') {
                    _this.option3.push({
                        '_id': res._id, 'itemName': res.itemName, 'itemType': res.itemType, 'itemPercentage': res.itemPercentage,
                        'moldType': res.moldType, 'modifiedBy': _this.user
                    });
                    if (res.itemName === 'Used Sand') {
                        _this.usedSand = res.itemPercentage;
                    }
                    _this.percentage[i] = false;
                    _this.view[i] = false;
                }
                else if (res.itemType === 'Consumable' && res.moldType === 'MM') {
                    _this.option4.push({
                        '_id': res._id, 'itemName': res.itemName, 'itemType': res.itemType, 'itemPercentage': res.itemPercentage,
                        'moldType': res.moldType, 'modifiedBy': _this.user
                    });
                    if (res.itemName === 'Green Sand') {
                        _this.greenSand = res.itemPercentage;
                    }
                    _this.percentage[i] = false;
                    _this.view[i] = false;
                }
                i++;
            });
        }, function (err) {
            console.log(err);
        });
    };
    RawMaterialPreDataComponent.prototype.itemSelect = function (itemName) {
        var _this = this;
        this.itemMasterList.forEach(function (res) {
            if (itemName === res.itemName) {
                console.log('test', res);
                _this.preData.itemType = res.itemType;
                _this.preData.itemCategory = res.itemCategory;
            }
        });
    };
    RawMaterialPreDataComponent.prototype.checkItemName = function () {
        var _this = this;
        this.preDatas.forEach(function (element) {
            if (_this.preData.itemName === element.itemName && _this.preData.moldType === element.moldType) {
                _this.notifier.notify('error', 'Already ItemName with MoldType exists!');
                _this.preData.itemName = '';
            }
        });
    };
    /** save&update raw material pre data details */
    RawMaterialPreDataComponent.prototype.saveRawMaterialPreDate = function (exampleForm) {
        var _this = this;
        this.preData.createdBy = localStorage.getItem('user');
        this.productionMasterService.saveRawMaterialPreData(this.preData).subscribe(function (data) {
            _this.notifier.notify('success', 'Saved Successfully');
            exampleForm.resetForm();
            _this.getAllRawMaterialPreDate();
        }, function (err) {
            _this.notifier.notify('error', 'Not Save');
        });
    };
    RawMaterialPreDataComponent.prototype.option1Update = function (i) {
        this.percentage[i] = false;
        this.view[i] = false;
        this.updateRawMaterialPreDate(this.option1[i]);
    };
    RawMaterialPreDataComponent.prototype.option2Update = function (i) {
        this.percentage[i] = false;
        this.view[i] = false;
        this.updateRawMaterialPreDate(this.option2[i]);
    };
    RawMaterialPreDataComponent.prototype.option3Update = function (i) {
        this.percentage[i] = false;
        this.view[i] = false;
        this.updateRawMaterialPreDate(this.option3[i]);
    };
    RawMaterialPreDataComponent.prototype.option4Update = function (i) {
        this.percentage[i] = false;
        this.view[i] = false;
        this.updateRawMaterialPreDate(this.option4[i]);
    };
    RawMaterialPreDataComponent.prototype.updateRawMaterialPreDate = function (preData) {
        var _this = this;
        this.productionMasterService.updateRawMaterialPreData(preData).subscribe(function (data) {
            _this.notifier.notify('success', 'Updated Successfully');
            _this.getAllRawMaterialPreDate();
        }, function (err) {
            _this.notifier.notify('error', 'Not Update');
        });
    };
    /**get details for updation*/
    RawMaterialPreDataComponent.prototype.editpreData = function (i, _id, itemName, itemType, itemPercentage, moldType, itemCategory) {
        this.percentage[i] = true;
        this.view[i] = true;
        this.irons = 0;
        this.preData1._id = _id;
        this.preData1.itemName = itemName;
        this.preData1.itemType = itemType;
        this.preData1.itemPercentage = itemPercentage;
        this.preData1.itemCategory = itemCategory;
        this.preData1.moldType = moldType;
        if (moldType === 'HM' && itemType === 'RawMaterial') {
            if (itemName !== 'Coke' && itemName !== 'Inoculant') {
                this.iron = this.iron - itemPercentage;
                this.irons = this.iron;
            }
            else {
                this.coke = this.coke - itemPercentage;
            }
        }
        else if (moldType === 'MM' && itemType === 'RawMaterial') {
            if (itemName !== 'Coke' && itemName !== 'Inoculant') {
                this.iron2 = this.iron2 - itemPercentage;
                this.irons = this.iron2;
            }
            else {
                this.coke2 = this.coke2 - itemPercentage;
            }
        }
    };
    RawMaterialPreDataComponent.prototype.qty1 = function (itemName, itemPercentage) {
        console.log('tetst', itemName, '', itemPercentage);
        this.iron = 0;
        this.iron = this.iron + Number(this.irons);
        if (itemName !== 'Coke' && itemName !== 'Inoculant') {
            this.iron = Number(this.iron) + Number(itemPercentage);
        }
        else if (itemName === 'Coke') {
            this.coke = itemPercentage;
        }
        else if (itemName === 'Inoculant') {
            this.inoculant = itemPercentage;
        }
    };
    RawMaterialPreDataComponent.prototype.qty2 = function (itemName, itemPercentage) {
        console.log('tetst', itemName, '', itemPercentage);
        this.iron2 = 0;
        this.iron2 = this.iron2 + Number(this.irons);
        if (itemName !== 'Coke' && itemName !== 'Inoculant') {
            this.iron2 = Number(this.iron2) + Number(itemPercentage);
        }
        else if (itemName === 'Coke') {
            this.coke2 = itemPercentage;
        }
        else if (itemName === 'Inoculant') {
            this.inoculant2 = itemPercentage;
        }
    };
    /**delete raw material pre data details */
    RawMaterialPreDataComponent.prototype.deleteRawMaterialPreData = function (i, _id) {
        var _this = this;
        this.preData._id = _id;
        this.preData.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deleteRawMaterialPreData(this.preData).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.preData._id = undefined;
            _this.getAllRawMaterialPreDate();
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    RawMaterialPreDataComponent.prototype.refresh = function () {
        this.getAllRawMaterialPreDate();
    };
    RawMaterialPreDataComponent.prototype.cancel = function (exampleForm) {
        this.preData._id = undefined;
        exampleForm.resetForm();
        this.newData = false;
    };
    RawMaterialPreDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raw-material-pre-data',
            template: __webpack_require__(/*! ./raw-material-pre-data.component.html */ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.html"),
            styles: [__webpack_require__(/*! ./raw-material-pre-data.component.scss */ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"], _master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], src_app_foundry_items_items_service__WEBPACK_IMPORTED_MODULE_6__["ItemsService"]])
    ], RawMaterialPreDataComponent);
    return RawMaterialPreDataComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/raw-material-pre-data/raw-material-pre-data.ts ***!
  \*************************************************************************************************/
/*! exports provided: RawMaterialPreData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialPreData", function() { return RawMaterialPreData; });
var RawMaterialPreData = /** @class */ (function () {
    function RawMaterialPreData() {
    }
    return RawMaterialPreData;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/salary/salary.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/salary/salary.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Salary </mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'440'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Salary Type\" scope=\"col\">Salary Type</th>\r\n                  <th matTooltip=\"Working Days\" scope=\"col\">Working Days</th>\r\n                  <th matTooltip=\"Status\" scope=\"col\">Status</th>\r\n                  <th matTooltip=\"Action\" scope=\"col\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let salary of salaries;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{salary.salaryType}}</td>\r\n                  <td>{{salary.workingDays}}</td>\r\n                  <td>{{salary.status}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit Department Master\" color=\"accent\" (click)=\"editSalary(i,salary._id,salary.salaryType,\r\n                          salary.workingDays, salary.status)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"Delte Department Master\" color=\"accent\" (click)=\"deleteSalary(salary._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <h6>Salary Master</h6>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\">\r\n            <div *ngIf='edit == false'>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Salary Type\" appStringValidation=\"words\" [maxlength]=\"20\" name=\"salaryType\"\r\n                [(ngModel)]=\"salary.salaryType\" (change)=\"checkSalaryType()\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf='edit == true'>\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Salary Type\" appStringValidation=\"words\" [maxlength]=\"20\" name=\"salaryType\"\r\n                  [(ngModel)]=\"salary.salaryType\"  readonly required>\r\n                </mat-form-field>\r\n                </div>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Working Days\" appNumberValidation [maxlength]=\"10\" name=\"workingDays\"\r\n                [(ngModel)]=\"salary.workingDays\" required>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Status\" appStringValidation=\"words\" name=\"status\" [(ngModel)]=\"salary.status\"\r\n                  required>\r\n                  <mat-option value=\"Active\">Active</mat-option>\r\n                  <mat-option value=\"Inactive\">InActive</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button type=\"reset\" mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" style=\"float: right;\" (click)=\"saveSalary(exampleForm)\">Save</button>\r\n\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/salary/salary.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/salary/salary.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 350px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvc2FsYXJ5L0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxccHJvZHVjdGlvbi1tYXN0ZXJcXHNhbGFyeVxcc2FsYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUVqQjtFQUNBLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFMUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNBLHVCQUF1QjtFQUN2QixrQ0FBa0MsRUFBQTs7QUFFbEM7RUFDRSwwQkFBMEI7RUFDeEIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL3NhbGFyeS9zYWxhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkMntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcbm1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5oNntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZXhhbXBsZS1jYXJkMXtcclxuYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG5wYWRkaW5nLWxlZnQ6IDBweDtcclxucGFkZGluZy10b3A6IDFweDtcclxubWFyZ2luLXRvcDogLTQwcHg7XHJcbm1hcmdpbi1sZWZ0OiAtNDBweDtcclxuY29sb3I6IHdoaXRlO1xyXG5oZWlnaHQ6IDM1cHg7XHJcbmZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG59XHJcbnRye1xyXG5wYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbm1hdC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgfVxyXG50YWJsZSB0Ym9keSB0ciB0ZHtcclxucGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbnZlcnRpY2FsLWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxudGh7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2Y3MzM3ODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/salary/salary.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/salary/salary.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryComponent", function() { return SalaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _salary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary */ "./src/app/foundry/master/production-master/salary/salary.ts");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");







var SalaryComponent = /** @class */ (function () {
    function SalaryComponent(productionMasterService, notifierService, formBuilder) {
        this.productionMasterService = productionMasterService;
        this.formBuilder = formBuilder;
        this.notifier = notifierService;
        this.itemForm = this.formBuilder.group({
            'salaryType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]],
            'workingDays': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].numberValidator]]
        });
    }
    SalaryComponent.prototype.ngOnInit = function () {
        this.salary = new _salary__WEBPACK_IMPORTED_MODULE_2__["Salary"]();
        this.getAllSalary();
    };
    SalaryComponent.prototype.getAllSalary = function () {
        var _this = this;
        this.edit = false;
        this.productionMasterService.getAllSalary().subscribe(function (data) {
            _this.salaries = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalaryComponent.prototype.checkSalaryType = function () {
        var _this = this;
        this.salaries.forEach(function (element) {
            if (element.salaryType === _this.salary.salaryType) {
                _this.notifier.notify('error', 'Already Salary Type exists!');
            }
        });
    };
    SalaryComponent.prototype.saveSalary = function (exampleForm) {
        var _this = this;
        if (this.salary._id === undefined) {
            this.productionMasterService.saveSalary(this.salary).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllSalary();
                exampleForm.reset();
            }, function (error) {
                _this.notifier.notify('error', 'Not Save');
                console.log(error);
            });
        }
        else {
            this.productionMasterService.updateSalary(this.salary).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllSalary();
                exampleForm.reset();
                _this.salary._id = undefined;
            }, function (error) {
                _this.notifier.notify('error', 'Not Updated');
                console.log(error);
            });
        }
    };
    SalaryComponent.prototype.cancel = function (exampleForm) {
        this.salary._id = undefined;
        exampleForm.reset();
    };
    SalaryComponent.prototype.editSalary = function (i, _id, salaryType, workingDays, status) {
        this.edit = true;
        this.salary._id = _id;
        this.salary.salaryType = salaryType;
        this.salary.workingDays = workingDays;
        this.salary.status = status;
    };
    SalaryComponent.prototype.deleteSalary = function (id) {
        var _this = this;
        this.productionMasterService.deleteSalary(id).subscribe(function (data) {
            _this.notifier.notify('success', 'Delete Successfully');
            _this.getAllSalary();
        }, function (error) {
            _this.notifier.notify('error', 'Not Deleted');
            console.log(error);
        });
    };
    SalaryComponent.prototype.refresh = function () {
        this.getAllSalary();
    };
    SalaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary',
            template: __webpack_require__(/*! ./salary.component.html */ "./src/app/foundry/master/production-master/salary/salary.component.html"),
            styles: [__webpack_require__(/*! ./salary.component.scss */ "./src/app/foundry/master/production-master/salary/salary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], SalaryComponent);
    return SalaryComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/salary/salary.ts":
/*!*******************************************************************!*\
  !*** ./src/app/foundry/master/production-master/salary/salary.ts ***!
  \*******************************************************************/
/*! exports provided: Salary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Salary", function() { return Salary; });
var Salary = /** @class */ (function () {
    function Salary() {
    }
    return Salary;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Sand Disposal Master</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'340'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Item Name\" scope=\"col\">Item Name</th>\r\n                  <th matTooltip=\"Mold Type\" scope=\"col\">Mold Type</th>\r\n                  <th matTooltip=\"Disposal Percentage\" scope=\"col\">Disposal Percentage</th>\r\n                  <th matTooltip=\"Status\" scope=\"col\">Status</th>\r\n                  <th matTooltip=\"Action\" scope=\"col\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let disposal of sandDisposals;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{disposal.itemName}}</td>\r\n                  <td>{{disposal.moldType}}</td>\r\n                  <td>{{disposal.disposalPercentage}}</td>\r\n                  <td>{{disposal.status}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit SandDisposal Master\" color=\"accent\" (click)=\"editSandDisposal(i,disposal._id,disposal.itemName,disposal.disposalPercentage,disposal.moldType,disposal.status)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"Delete SandDisposal Master\" color=\"accent\" (click)=\"deleteSandDisposal(i,disposal._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <h6>Sand Disposal Master</h6>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"disposalForm\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"sandDisposal._id === undefined \">\r\n             <mat-select placeholder=\"ItemName\" formControlName=\"itemName\" name=\"itemName\" [(ngModel)]=\"sandDisposal.itemName\">\r\n                <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                  {{item.itemName}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error>\r\n                <control-messages [control]=\"disposalForm.controls.itemName\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\"  *ngIf=\"sandDisposal._id !== undefined \">\r\n                <input matInput placeholder=\"ItemName\" name=\"itemName\" formControlName=\"itemName\"\r\n                  [(ngModel)]=\"sandDisposal.itemName\" readonly>\r\n                <mat-error>\r\n                  <control-messages [control]=\"disposalForm.controls.itemName\"></control-messages>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\"  *ngIf=\"sandDisposal._id === undefined \">\r\n                  <mat-select placeholder=\"Mold Type\" formControlName=\"moldType\" name=\"moldType\" [(ngModel)]=\"sandDisposal.moldType\">\r\n                    <mat-option *ngFor=\"let masters of masterList\" [value]=\"masters.moldType\">\r\n                      {{masters.moldType}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error>\r\n                    <control-messages [control]=\"disposalForm.controls.moldType\"></control-messages>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\" *ngIf=\"sandDisposal._id !== undefined \">\r\n                    <input matInput placeholder=\"Mold Type\" name=\"moldType\" formControlName=\"moldType\"\r\n                      [(ngModel)]=\"sandDisposal.moldType\" readonly>\r\n                    <mat-error>\r\n                      <control-messages [control]=\"disposalForm.controls.moldType\"></control-messages>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"DisposalPercentage\" name=\"disposalPercentage\" formControlName=\"disposalPercentage\"\r\n                [(ngModel)]=\"sandDisposal.disposalPercentage\">\r\n              <mat-error>\r\n                <control-messages [control]=\"disposalForm.controls.disposalPercentage\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Status\" name=\"status\" formControlName=\"status\" [(ngModel)]=\"sandDisposal.status\"  >\r\n                  <mat-option value=\"Active\">Active</mat-option>\r\n                  <mat-option value=\"Inactive\">Inactive</mat-option>\r\n                </mat-select>\r\n                <mat-error>\r\n                  <control-messages [control]=\"disposalForm.controls.status\"></control-messages>\r\n                </mat-error>\r\n              </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" style=\"float: right;\" [disabled]=\"!disposalForm.valid\" (click)=\"saveSandDisposalMaster(exampleForm)\">Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 390px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvc2FuZC1kaXNwb3NhbC1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxwcm9kdWN0aW9uLW1hc3Rlclxcc2FuZC1kaXNwb3NhbC1tYXN0ZXJcXHNhbmQtZGlzcG9zYWwtbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUUxQjtFQUNBLGdCQUFnQixFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRWpCO0VBQ0EsdUJBQXVCO0VBQ3ZCLGtDQUFrQyxFQUFBOztBQUVsQztFQUNFLDBCQUEwQjtFQUN4QixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvc2FuZC1kaXNwb3NhbC1tYXN0ZXIvc2FuZC1kaXNwb3NhbC1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkMntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZDF7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczMzc4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgfVxyXG4gIHRye1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgfVxyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgfVxyXG4gIHRhYmxlIHRib2R5IHRyIHRke1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNmNzMzNzg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SandDisposalMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandDisposalMasterComponent", function() { return SandDisposalMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _sand_disposal_master_sand_disposal_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sand-disposal-master/sand-disposal-master */ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var src_app_foundry_items_items_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/foundry/items/items.service */ "./src/app/foundry/items/items.service.ts");









var SandDisposalMasterComponent = /** @class */ (function () {
    function SandDisposalMasterComponent(productionMasterService, notifierService, formBuilder, masterService, itemService) {
        this.productionMasterService = productionMasterService;
        this.formBuilder = formBuilder;
        this.masterService = masterService;
        this.itemService = itemService;
        this.notifier = notifierService;
        this.disposalForm = this.formBuilder.group({
            'itemName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]],
            'disposalPercentage': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].numberValidator]],
            'moldType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"].nameValidation]]
        });
    }
    SandDisposalMasterComponent.prototype.ngOnInit = function () {
        this.sandDisposal = new _sand_disposal_master_sand_disposal_master__WEBPACK_IMPORTED_MODULE_4__["SandDisposalMaster"]();
        this.getSandDisposalMaster();
        this.getMouldingMaster();
        this.sandDetails();
    };
    /**get all sand disposal details */
    SandDisposalMasterComponent.prototype.getSandDisposalMaster = function () {
        var _this = this;
        this.productionMasterService.getSandDisposalMaster().subscribe(function (data) {
            _this.sandDisposals = data;
        }, function (err) {
            console.log(err);
        });
    };
    SandDisposalMasterComponent.prototype.getMouldingMaster = function () {
        var _this = this;
        this.masterService.getMoldingMaster().subscribe(function (data) {
            _this.masterList = data;
        }, function (error) {
            console.log(error);
        });
    };
    /*Sand Details*/
    SandDisposalMasterComponent.prototype.sandDetails = function () {
        var _this = this;
        var category;
        category = 'ReUsable';
        this.itemService.getItemsByItemCategory(category).subscribe(function (data) {
            _this.items = data;
        }, function (error) {
            console.log(error);
        });
    };
    /**save the sand disposal details */
    SandDisposalMasterComponent.prototype.saveSandDisposalMaster = function (exampleForm) {
        var _this = this;
        if (this.sandDisposal._id === undefined || this.sandDisposal._id === '') {
            this.sandDisposal.createdBy = localStorage.getItem('user');
            this.productionMasterService.saveSandDisposalMaster(this.sandDisposal).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getSandDisposalMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.sandDisposal.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updateSandDisposalMaster(this.sandDisposal).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getSandDisposalMaster();
                exampleForm.resetForm();
                _this.sandDisposal._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /** edit the sand disposal details*/
    SandDisposalMasterComponent.prototype.editSandDisposal = function (i, _id, itemName, disposalPercentage, moldType, status) {
        this.sandDisposal._id = _id;
        this.sandDisposal.itemName = itemName;
        this.sandDisposal.disposalPercentage = disposalPercentage;
        this.sandDisposal.moldType = moldType;
        this.sandDisposal.status = status;
    };
    /* delete sand disposal details */
    SandDisposalMasterComponent.prototype.deleteSandDisposal = function (i, _id) {
        var _this = this;
        this.sandDisposal._id = _id;
        this.sandDisposal.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deleteSandDisposalMaster(this.sandDisposal).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getSandDisposalMaster();
            _this.sandDisposal._id = undefined;
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    SandDisposalMasterComponent.prototype.refresh = function () {
        this.getSandDisposalMaster();
    };
    SandDisposalMasterComponent.prototype.cancel = function (exampleForm) {
        this.sandDisposal._id = undefined;
        exampleForm.resetForm();
    };
    SandDisposalMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sand-disposal-master',
            template: __webpack_require__(/*! ./sand-disposal-master.component.html */ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.html"),
            styles: [__webpack_require__(/*! ./sand-disposal-master.component.scss */ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], src_app_foundry_items_items_service__WEBPACK_IMPORTED_MODULE_8__["ItemsService"]])
    ], SandDisposalMasterComponent);
    return SandDisposalMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/sand-disposal-master/sand-disposal-master.ts ***!
  \***********************************************************************************************/
/*! exports provided: SandDisposalMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandDisposalMaster", function() { return SandDisposalMaster; });
var SandDisposalMaster = /** @class */ (function () {
    function SandDisposalMaster() {
    }
    return SandDisposalMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/shift/shift.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shift/shift.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Shift</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'440'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" striped=\"true\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">No</th>\r\n                  <th matTooltip=\"Shift Name\" scope=\"col\">Shift Name</th>\r\n                  <th matTooltip=\"Start Time\" scope=\"col\">Start Time</th>\r\n                  <th matTooltip=\"End Time\" scope=\"col\">End Time</th>\r\n                  <th matTooltip=\"Hours\" scope=\"col\">Hours</th>\r\n                  <th matTooltip=\"Status\" scope=\"col\">Status</th>\r\n                  <th matTooltip=\"Action\" scope=\"col\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let shift of shifts;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{shift.shift}}</td>\r\n                  <td>{{shift.startTime | date:'shortTime'}}</td>\r\n                  <td>{{shift.endTime | date:'shortTime'}}</td>\r\n                  <td>{{shift.totalHours}}</td>\r\n                  <td>{{shift.status}}</td>\r\n                  <td>\r\n                    <button mat-icon-button matTooltip=\"Edit Shift Master\" color=\"accent\" (click)=\"editShift(i,shift._id,shift.shift,shift.startTime,shift.endTime,shift.totalHours,shift.status)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button matTooltip=\"Delte Shift Master\" color=\"accent\" (click)=\"deleteShift(shift._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n      <mat-card class=\"example-card2\">\r\n        <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Shift</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\">\r\n            <div *ngIf='edit == false'>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Shift Name\" [maxlength]=\"15\" name=\"shift\" [(ngModel)]=\"shift.shift\"\r\n                  (change)=\"checkShift()\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div *ngIf='edit == true'>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Shift Name\" [maxlength]=\"15\" name=\"shift\" [(ngModel)]=\"shift.shift\"\r\n                  readonly required>\r\n              </mat-form-field>\r\n            </div>\r\n            <label>Start Time: </label>\r\n            <kendo-timepicker placeholder=\"Start Time\" name=\"startTime\" [(ngModel)]=\"shift.startTime\" #dateModel=\"ngModel\"\r\n              required></kendo-timepicker><br>\r\n            <label>End Time: </label>\r\n            <kendo-timepicker placeholder=\"End Time\" name=\"endTime\" [(ngModel)]=\"shift.endTime\" #dateModel=\"ngModel\"\r\n              required></kendo-timepicker>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Total hours\" appNumberValidation [maxlength]=\"10\" name=\"totalHours\"\r\n                [(ngModel)]=\"shift.totalHours\" required>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <mat-select placeholder=\"Status\" appStringValidation=\"words\" name=\"status\" [(ngModel)]=\"shift.status\"\r\n                  required>\r\n                  <mat-option value=\"Active\">Active</mat-option>\r\n                  <mat-option value=\"Inactive\">InActive</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button type=\"reset\" mat-raised-button color=\"accent\" style=\"float: right;\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!exampleForm.valid\" style=\"float: right;\" (click)=\"saveShift(exampleForm)\">Save</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/shift/shift.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shift/shift.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card2 {\n  margin-top: 50px;\n  margin-left: 150px;\n  max-width: 350px;\n  height: 350px; }\n\n.example-card {\n  margin-top: 50px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvc2hpZnQvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxwcm9kdWN0aW9uLW1hc3Rlclxcc2hpZnRcXHNoaWZ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUVqQjtFQUNBLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTs7QUFFMUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNBLHVCQUF1QjtFQUN2QixrQ0FBa0MsRUFBQTs7QUFFbEM7RUFDRSwwQkFBMEI7RUFDeEIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3Byb2R1Y3Rpb24tbWFzdGVyL3NoaWZ0L3NoaWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZDJ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJke1xyXG5tYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZDF7XHJcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxucGFkZGluZy1sZWZ0OiAwcHg7XHJcbnBhZGRpbmctdG9wOiAxcHg7XHJcbm1hcmdpbi10b3A6IC00MHB4O1xyXG5tYXJnaW4tbGVmdDogLTQwcHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuaGVpZ2h0OiAzNXB4O1xyXG5mb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxufVxyXG50cntcclxucGFkZGluZy10b3A6IDFweDtcclxufVxyXG5tYXQtaWNvbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxudGFibGUgdGJvZHkgdHIgdGR7XHJcbnBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG52ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbnRoe1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmNzMzNzg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/shift/shift.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shift/shift.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftComponent", function() { return ShiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shift */ "./src/app/foundry/master/production-master/shift/shift.ts");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ShiftComponent = /** @class */ (function () {
    function ShiftComponent(productionMasterService, notifierService) {
        this.productionMasterService = productionMasterService;
        this.notifier = notifierService;
    }
    ShiftComponent.prototype.ngOnInit = function () {
        this.shift = new _shift__WEBPACK_IMPORTED_MODULE_2__["Shift"]();
        this.getAllShift();
    };
    ShiftComponent.prototype.getAllShift = function () {
        var _this = this;
        this.edit = false;
        this.productionMasterService.getAllShift().subscribe(function (data) {
            _this.shifts = data;
        }, function (error) {
            console.log(error);
        });
    };
    ShiftComponent.prototype.checkShift = function () {
        var _this = this;
        this.shifts.forEach(function (res) {
            if (_this.shift.shift === res.shift) {
                _this.notifier.notify('error', 'Already Shift Name exists!');
            }
        });
    };
    ShiftComponent.prototype.saveShift = function (exampleForm) {
        var _this = this;
        if (this.shift._id === undefined) {
            this.productionMasterService.saveShift(this.shift).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllShift();
                exampleForm.reset();
            }, function (error) {
                _this.notifier.notify('error', 'Not Save');
                console.log(error);
            });
        }
        else {
            this.productionMasterService.updateShift(this.shift).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllShift();
                exampleForm.reset();
                _this.shift._id = undefined;
            }, function (error) {
                _this.notifier.notify('error', 'Not Updated');
                console.log(error);
            });
        }
    };
    ShiftComponent.prototype.cancel = function (exampleForm) {
        this.shift._id = undefined;
        exampleForm.reset();
    };
    ShiftComponent.prototype.editShift = function (i, _id, shift, startTime, endTime, totalHours, status) {
        this.edit = true;
        this.shift._id = _id;
        this.shift.shift = shift;
        this.shift.startTime = startTime;
        this.shift.endTime = endTime;
        this.shift.totalHours = totalHours;
        this.shift.status = status;
    };
    ShiftComponent.prototype.deleteShift = function (id) {
        var _this = this;
        this.productionMasterService.deleteShift(id).subscribe(function (data) {
            _this.notifier.notify('success', 'Delete Successfully');
            _this.getAllShift();
        }, function (error) {
            _this.notifier.notify('error', 'Not Deleted');
            console.log(error);
        });
    };
    ShiftComponent.prototype.refresh = function () {
        this.getAllShift();
    };
    ShiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shift',
            template: __webpack_require__(/*! ./shift.component.html */ "./src/app/foundry/master/production-master/shift/shift.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./shift.component.scss */ "./src/app/foundry/master/production-master/shift/shift.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_3__["ProductionMasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], ShiftComponent);
    return ShiftComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/shift/shift.ts":
/*!*****************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shift/shift.ts ***!
  \*****************************************************************/
/*! exports provided: Shift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shift", function() { return Shift; });
var Shift = /** @class */ (function () {
    function Shift() {
    }
    return Shift;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Shot blasting form-->\r\n<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card class=\"example-card1\">\r\n        <mat-card-header>\r\n          <mat-card-title>Shot Blasting Master</mat-card-title>\r\n        </mat-card-header>\r\n      </mat-card>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form #exampleForm=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\" *ngIf=\"shotBlasting._id === undefined\">\r\n              <mat-form-field class=\"example-full-width\" >\r\n                  <mat-select placeholder=\"Machine Id\" name=\"machineId\" [(ngModel)]=\"shotBlasting.machineId\"\r\n                  (ngModelChange)=\"getMachineName(shotBlasting.machineId)\" required>\r\n                    <mat-option *ngFor=\"let machineDetail of machineDetails\" [value]=\"machineDetail.machineId\">\r\n                      {{machineDetail.machineId}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-3\" *ngIf=\"shotBlasting._id !== undefined\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Machine Id\" name=\"machineId\" [(ngModel)]=\"shotBlasting.machineId\"\r\n                 readonly required>\r\n              </mat-form-field>\r\n            </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"MachineName\" name=\"machineName\" [(ngModel)]=\"shotBlasting.machineName\"\r\n               readonly required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"shotBlasting._id === undefined\">\r\n              <mat-select placeholder=\"ItemType\" appStringValidation=\"words\" name=\"itemType\" [(ngModel)]=\"shotBlasting.itemType\" (ngModelChange)=\"getItemNames(shotBlasting.itemType)\"\r\n                required>\r\n                <mat-option value=\"Consumable\">Consumable</mat-option>\r\n                <mat-option value=\"Parts\">Part</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"shotBlasting._id !== undefined\">\r\n                <input matInput placeholder=\"Item Type\" name=\"itemType\" [(ngModel)]=\"shotBlasting.itemType\"\r\n                 readonly required>\r\n              </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"shotBlasting.itemType == 'Consumable'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"shotBlasting._id === undefined\">\r\n                <mat-select placeholder=\"ConsumableName\" name=\"consumableName\" [(ngModel)]=\"shotBlasting.consumableName\"\r\n                (ngModelChange)=\"getPerKgCost(shotBlasting.consumableName)\" required>\r\n                  <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                    {{item.itemName}}\r\n                  </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"shotBlasting._id !== undefined\">\r\n                <input matInput placeholder=\"Consumable Name\" name=\"consumableName\" [(ngModel)]=\"shotBlasting.consumableName\"\r\n                 readonly required>\r\n              </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"shotBlasting.itemType =='Parts'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"shotBlasting._id === undefined\">\r\n                <mat-select placeholder=\"Part Name\" name=\"partName\" [(ngModel)]=\"shotBlasting.partName\"\r\n                (ngModelChange)=\"getPerKgCost(shotBlasting.partName)\" required>\r\n                  <mat-option *ngFor=\"let item of items\" [value]=\"item.itemName\">\r\n                    {{item.itemName}}\r\n                  </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\" *ngIf=\"shotBlasting._id !== undefined\">\r\n                <input matInput placeholder=\"Part Name\" name=\"partName\" [(ngModel)]=\"shotBlasting.partName\"\r\n                 readonly required>\r\n              </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div *ngIf=\"shotBlasting.itemType == 'Consumable'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"TotalCapacity\" appNumberValidation name=\"totalCapacity\" [(ngModel)]=\"shotBlasting.totalCapacity\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"shotBlasting.itemType == 'Consumable'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"PerKgCost\" appNumberValidation name=\"perKgCost\" [(ngModel)]=\"shotBlasting.perKgCost\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"shotBlasting.itemType == 'Consumable' || shotBlasting.itemType == 'Parts'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"ReplacementRate\" appStringValidation=\"words\" name=\"replacementRate\" [(ngModel)]=\"shotBlasting.replacementRate\"\r\n                      required>\r\n                      <mat-option value=\"MeltWise\">MeltWise</mat-option>\r\n                      <mat-option value=\"Monthly\">Monthly</mat-option>\r\n                      <mat-option value=\"Weekly\">Weekly</mat-option>\r\n                    </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"shotBlasting.itemType == 'Consumable' || shotBlasting.itemType == 'Parts'\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"replacementQuantity\" appNumberValidation name=\"replacementQuantity\"\r\n                [(ngModel)]=\"shotBlasting.replacementQuantity\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf='shotBlasting.itemType == \"Parts\"' class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"PartCost\" appNumberValidation name=\"partCost\" [(ngModel)]=\"shotBlasting.partCost\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select placeholder=\"Status\" appStringValidation=\"words\" name=\"status\" [(ngModel)]=\"shotBlasting.status\"\r\n                required>\r\n                <mat-option value=\"Active\">Active</mat-option>\r\n                <mat-option value=\"Inactive\">InActive</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button style=\"float: right;margin-top:-30px;\" color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n      <button mat-raised-button style=\"float: right;margin-top:-30px;\" color=\"primary\" [disabled]=!exampleForm.valid\r\n      (click)=\"saveShotBlasting(exampleForm)\">Save</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<!-- Shot blasting Table view-->\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Consumable List</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n      </mat-card-header>\r\n      <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\" striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th matTooltip=\"Machine ID\" scope=\"col\">M ID</th>\r\n                <th matTooltip=\"Machine Name\" scope=\"col\">M Name</th>\r\n                <th matTooltip=\"Consumable Name\" scope=\"col\">C Name</th>\r\n                <th matTooltip=\"Mold Type\" scope=\"col\" style=\"text-align: right\">Capacity</th>\r\n                <th matTooltip=\"Consumable Cost\" scope=\"col\" style=\"text-align: right\">Cos/Cost</th>\r\n                <th matTooltip=\"Status\" scope=\"col\" style=\"text-align: center\">Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let shots of shotBlastings1;let i=index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{shots.machineId}}</td>\r\n                <td>{{shots.machineName}}</td>\r\n                <td>{{shots.consumableName}}</td>\r\n                <td style=\"text-align: right\">{{shots.totalCapacity}}</td>\r\n                <td style=\"text-align: right\">{{shots.perKgCost}}</td>\r\n                <td style=\"text-align: center\">{{shots.status}}</td>\r\n                <td>\r\n                  <button mat-icon-button matTooltip=\"Edit ShotBlasting\" color=\"accent\" (click)=\"editshotBlasting(i,shots._id,shots.machineId,shots.machineName,shots.itemType,shots.consumableName,shots.totalCapacity,\r\n                        shots.perKgCost,shots.replacementRate,shots.replacementQuantity,shots.partName,shots.partCost,shots.status)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <!-- <button mat-icon-button matTooltip=\"delete ShotBlasting\" color=\"accent\" (click)=\"deleteShotBlasting(i,shots._id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 40px;\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n          <mat-card class=\"example-card1\">\r\n            <mat-card-header>\r\n              <mat-card-title>Parts List</mat-card-title>\r\n            </mat-card-header>\r\n          </mat-card>\r\n      </mat-card-header>\r\n      <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\" striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th matTooltip=\"Machine Id\" scope=\"col\">Machine ID</th>\r\n                <th matTooltip=\"Machine Name\" scope=\"col\">Machine Name</th>\r\n                <th matTooltip=\"Part Name\" scope=\"col\">Part Name</th>\r\n                <th matTooltip=\"Part Cost\" style=\"text-align: right\" scope=\"col\">Part Cost</th>\r\n                <th matTooltip=\"Status\" style=\"text-align: center\" scope=\"col\">Status</th>\r\n                <th>\r\n                  Action\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let shots of shotBlastings2;let i=index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{shots.machineId}}</td>\r\n                <td>{{shots.machineName}}</td>\r\n                <td>{{shots.partName}}</td>\r\n                <td style=\"text-align: right\">{{shots.partCost}}</td>\r\n                <td style=\"text-align: center\">{{shots.status}}</td>\r\n                <td>\r\n                  <button mat-icon-button matTooltip=\"Edit ShotBlasting\" color=\"accent\" (click)=\"editshotBlasting(i,shots._id,shots.machineId,shots.machineName,shots.itemType,shots.consumableName,shots.totalCapacity,\r\n                  shots.perKgCost,shots.replacementRate,shots.replacementQuantity,shots.partName,shots.partCost,shots.status)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <!-- <button mat-icon-button matTooltip=\"delete ShotBlasting\" color=\"accent\" (click)=\"deleteShotBlasting(i,shots._id)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  margin-top: 50px; }\n\nmat-card {\n  max-width: 100%; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\n.example-full-width {\n  text-align: center;\n  font-family: 'Lora', serif;\n  font-size: 16px; }\n\n.example-card1 {\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #f73378;\n  padding-left: 0px;\n  padding-top: 1px;\n  margin-top: -40px;\n  margin-left: -40px;\n  color: white;\n  height: 35px;\n  font-family: 'Lora', serif; }\n\ntr {\n  padding-top: 1px; }\n\nmat-icon {\n  font-size: 18px;\n  margin-top: 1px; }\n\ntable tbody tr td {\n  padding: 0px !important;\n  vertical-align: inherit !important; }\n\n.example-card {\n  width: 100%;\n  margin-bottom: 5px; }\n\nth {\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  color: #f73378; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvc2hvdC1ibGFzdGluZy1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxwcm9kdWN0aW9uLW1hc3Rlclxcc2hvdC1ibGFzdGluZy1tYXN0ZXJcXHNob3QtYmxhc3RpbmctbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBRTFCO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDQSx1QkFBdUI7RUFDdkIsa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLDBCQUEwQjtFQUN4QixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcHJvZHVjdGlvbi1tYXN0ZXIvc2hvdC1ibGFzdGluZy1tYXN0ZXIvc2hvdC1ibGFzdGluZy1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgLy8gbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5oNntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQxe1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM3ODtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gIH1cclxuICB0cntcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIH1cclxuICBtYXQtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIH1cclxuICB0YWJsZSB0Ym9keSB0ciB0ZHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbnRoe1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmNzMzNzg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ShotBlastingMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShotBlastingMasterComponent", function() { return ShotBlastingMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _production_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../production-master.service */ "./src/app/foundry/master/production-master/production-master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _shot_blasting_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shot-blasting-master */ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../items/items.service */ "./src/app/foundry/items/items.service.ts");
/* harmony import */ var _stock_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stock/stock.service */ "./src/app/foundry/stock/stock.service.ts");







var ShotBlastingMasterComponent = /** @class */ (function () {
    function ShotBlastingMasterComponent(productionMasterService, stockService, notifierService, itemService) {
        this.productionMasterService = productionMasterService;
        this.stockService = stockService;
        this.itemService = itemService;
        this.notifier = notifierService;
    }
    ShotBlastingMasterComponent.prototype.ngOnInit = function () {
        this.type = 'ShotBlasting';
        this.shotBlasting = new _shot_blasting_master__WEBPACK_IMPORTED_MODULE_4__["ShotBlastingMaster"]();
        this.getAllShotBlastingConsumable();
        this.getAllShotBlastingPart();
        this.getAllShotBlastingMachine(this.type);
    };
    ShotBlastingMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ShotBlastingMasterComponent.prototype.getAllShotBlastingMachine = function (type) {
        var _this = this;
        this.productionMasterService.getMachineDetailsByType(type).subscribe(function (data) {
            _this.machineDetails = data;
        }, function (err) {
            console.log(err);
        });
    };
    ShotBlastingMasterComponent.prototype.getMachineName = function (machineId) {
        var _this = this;
        this.machineDetails.forEach(function (res) {
            if (res.machineId === machineId) {
                _this.shotBlasting.machineName = res.machineName;
            }
        });
    };
    ShotBlastingMasterComponent.prototype.getItemNames = function (itemType) {
        var _this = this;
        itemType = 'Mc' + itemType;
        var itemCategory;
        itemCategory = 'ShotBlasting';
        this.itemService.getItemsByItemType(itemType, itemCategory).subscribe(function (data) {
            _this.items = data;
        }, function (err) {
            console.log(err);
        });
    };
    ShotBlastingMasterComponent.prototype.getPerKgCost = function (itemName) {
        var _this = this;
        var item;
        item = true;
        if (this.shotBlasting._id === undefined) {
            if (this.shotBlasting.itemType === 'Consumable') {
                this.shotBlastings1.forEach(function (res) {
                    if (_this.shotBlasting.machineId === res.machineId &&
                        _this.shotBlasting.itemType === res.itemType && itemName === res.consumableName) {
                        _this.shotBlasting.consumableName = '';
                        _this.notifier.notify('error', 'Same Machine Id and consumableName already exists');
                        item = false;
                    }
                });
                if (item === true) {
                    this.stockService.getMcConsumableStockByItemName(itemName).subscribe(function (data) {
                        _this.shotBlasting.perKgCost = data.perKG;
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            else if (this.shotBlasting.itemType === 'Parts') {
                this.shotBlastings2.forEach(function (res) {
                    if (_this.shotBlasting.machineId === res.machineId &&
                        _this.shotBlasting.itemType === res.itemType && itemName === res.partName) {
                        _this.shotBlasting.partName = '';
                        _this.notifier.notify('error', 'Same Machine Id and partName already exists');
                        item = false;
                    }
                });
                if (item === true) {
                    this.stockService.getMcPartStockByItemName(itemName).subscribe(function (data) {
                        _this.shotBlasting.partCost = data.perKG;
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
    };
    /**get All shotBlasting details */
    ShotBlastingMasterComponent.prototype.getAllShotBlastingConsumable = function () {
        var _this = this;
        this.productionMasterService.getAllShotBlastingConsumable().subscribe(function (data) {
            _this.shotBlastings1 = data;
        }, function (err) {
            console.log(err);
        });
    };
    /**get All shotBlasting details */
    ShotBlastingMasterComponent.prototype.getAllShotBlastingPart = function () {
        var _this = this;
        this.productionMasterService.getAllShotBlastingPart().subscribe(function (data1) {
            _this.shotBlastings2 = data1;
        }, function (err) {
            console.log(err);
        });
    };
    /**save the shortBlasting details */
    ShotBlastingMasterComponent.prototype.saveShotBlasting = function (exampleForm) {
        var _this = this;
        if (this.shotBlasting._id === undefined || this.shotBlasting._id === '') {
            this.shotBlasting.createdBy = localStorage.getItem('user');
            this.productionMasterService.saveShotBlasting(this.shotBlasting).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getAllShotBlastingConsumable();
                _this.getAllShotBlastingPart();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.shotBlasting.modifiedBy = localStorage.getItem('user');
            this.productionMasterService.updateShotBlasting(this.shotBlasting).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getAllShotBlastingConsumable();
                _this.getAllShotBlastingPart();
                exampleForm.resetForm();
                _this.shotBlasting._id = undefined;
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the shotBlasting details  */
    ShotBlastingMasterComponent.prototype.editshotBlasting = function (i, _id, machineId, machineName, itemType, consumableName, totalCapacity, perKgCost, replacementRate, replacementQuantity, partName, partCost, status) {
        this.shotBlasting._id = _id;
        this.shotBlasting.machineId = machineId;
        this.shotBlasting.machineName = machineName;
        this.shotBlasting.itemType = itemType;
        this.shotBlasting.consumableName = consumableName;
        this.shotBlasting.totalCapacity = totalCapacity;
        this.shotBlasting.perKgCost = perKgCost;
        this.shotBlasting.replacementRate = replacementRate;
        this.shotBlasting.replacementQuantity = replacementQuantity;
        this.shotBlasting.partName = partName;
        this.shotBlasting.partCost = partCost;
        this.shotBlasting.status = status;
        this.getItemNames(itemType);
        if (consumableName !== undefined) {
            this.getPerKgCost(consumableName);
        }
        else {
            this.getPerKgCost(partName);
        }
    };
    /**delete shotBlasting details */
    ShotBlastingMasterComponent.prototype.deleteShotBlasting = function (i, _id) {
        var _this = this;
        this.shotBlasting._id = _id;
        this.shotBlasting.modifiedBy = localStorage.getItem('user');
        this.productionMasterService.deleteShotBlasting(this.shotBlasting).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllShotBlastingConsumable();
            _this.getAllShotBlastingPart();
            _this.shotBlasting._id = '';
        }, function (err) {
            _this.notifier.notify('error', 'Not Delete');
        });
    };
    ShotBlastingMasterComponent.prototype.refresh = function () {
        this.getAllShotBlastingConsumable();
        this.getAllShotBlastingPart();
    };
    /**cancel button */
    ShotBlastingMasterComponent.prototype.cancel = function (exampleForm) {
        this.shotBlasting._id = undefined;
        exampleForm.resetForm();
    };
    ShotBlastingMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shot-blasting-master',
            template: __webpack_require__(/*! ./shot-blasting-master.component.html */ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.html"),
            styles: [__webpack_require__(/*! ./shot-blasting-master.component.scss */ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_production_master_service__WEBPACK_IMPORTED_MODULE_2__["ProductionMasterService"], _stock_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _items_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]])
    ], ShotBlastingMasterComponent);
    return ShotBlastingMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/foundry/master/production-master/shot-blasting-master/shot-blasting-master.ts ***!
  \***********************************************************************************************/
/*! exports provided: ShotBlastingMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShotBlastingMaster", function() { return ShotBlastingMaster; });
var ShotBlastingMaster = /** @class */ (function () {
    function ShotBlastingMaster() {
    }
    return ShotBlastingMaster;
}());



/***/ })

}]);
//# sourceMappingURL=master-production-master-production-master-module.js.map