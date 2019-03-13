(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-master-module"],{

/***/ "./src/app/foundry/master/activity-master/activity-master.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/master/activity-master/activity-master.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>Activity Type Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>Activity</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let activity of activitys; let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{activity.activityType}}</td>\r\n                  <td><button mat-icon-button matTooltip=\"Edit ActivityMaster\" color=\"accent\" (click)=\"updateActivityMaster(i,activity._id,activity.activityType)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                     <button mat-icon-button matTooltip=\"Delete ActivityMaster\" color=\"accent\" (click)=\"deleteActivityMaster(i,activity._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Activity Type Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"activityForm\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"ActivityType\" name=\"activityType\" formControlName=\"activityType\" [(ngModel)]=\"activity.activityType\">\r\n              <mat-error>\r\n                <control-messages [control]=\"activityForm.controls.activityType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" style=\"margin-left: 80px;\" [disabled]=\"!activityForm.valid\" (click)=\"saveActivityMaster(exampleForm)\">Save</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/activity-master/activity-master.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/master/activity-master/activity-master.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  height: 300px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvYWN0aXZpdHktbWFzdGVyL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxcYWN0aXZpdHktbWFzdGVyXFxhY3Rpdml0eS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1QsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWSxFQUFBOztBQUVkOztFQUVFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL2FjdGl2aXR5LW1hc3Rlci9hY3Rpdml0eS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWljb257XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnRhYmxlPnRib2R5PnRyPnRkLFxyXG4udGFibGU+dGhlYWQ+dHI+dGh7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/master/activity-master/activity-master.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/activity-master/activity-master.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActivityMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityMasterComponent", function() { return ActivityMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _activity_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-master */ "./src/app/foundry/master/activity-master/activity-master.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var ActivityMasterComponent = /** @class */ (function () {
    function ActivityMasterComponent(notifierService, masterService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['activityType', 'actions'];
        this.notifier = notifierService;
        this.activityForm = this.formBuilder.group({
            'activityType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    ActivityMasterComponent.prototype.ngOnInit = function () {
        this.activity = new _activity_master__WEBPACK_IMPORTED_MODULE_4__["ActivityMaster"]();
        this.getAllActivity();
    };
    ActivityMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /** get all activity master details */
    ActivityMasterComponent.prototype.getAllActivity = function () {
        var _this = this;
        this.masterService.getAllActivityMaster().subscribe(function (data) {
            _this.activitys = data;
            // this.dataSource = new MatTableDataSource(data);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    /** save&update the activity master  */
    ActivityMasterComponent.prototype.saveActivityMaster = function (exampleForm) {
        var _this = this;
        if (this.activity._id === undefined || this.activity._id === '') {
            this.activity.createdBy = localStorage.getItem('user');
            this.masterService.saveActivityMaster(this.activity).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                exampleForm.resetForm();
                _this.getAllActivity();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.activity.modifiedBy = localStorage.getItem('user');
            this.masterService.updateActivityMaster(this.activity).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                exampleForm.resetForm();
                _this.getAllActivity();
                _this.activity._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /** get details for updation */
    ActivityMasterComponent.prototype.updateActivityMaster = function (i, _id, activityType) {
        this.activity._id = _id;
        this.activity.activityType = activityType;
    };
    /**delete Activity Master */
    ActivityMasterComponent.prototype.deleteActivityMaster = function (i, _id, activityType) {
        var _this = this;
        this.activity._id = _id;
        this.masterService.deleteActivityMaster(this.activity).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllActivity();
            _this.activity._id = '';
        }, function (err) {
            _this.notifier.notify('error', 'Nor delate');
        });
    };
    ActivityMasterComponent.prototype.refresh = function () {
        this.getAllActivity();
    };
    ActivityMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ActivityMasterComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ActivityMasterComponent.prototype, "sort", void 0);
    ActivityMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-master',
            template: __webpack_require__(/*! ./activity-master.component.html */ "./src/app/foundry/master/activity-master/activity-master.component.html"),
            styles: [__webpack_require__(/*! ./activity-master.component.scss */ "./src/app/foundry/master/activity-master/activity-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ActivityMasterComponent);
    return ActivityMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/activity-master/activity-master.ts":
/*!*******************************************************************!*\
  !*** ./src/app/foundry/master/activity-master/activity-master.ts ***!
  \*******************************************************************/
/*! exports provided: ActivityMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityMaster", function() { return ActivityMaster; });
var ActivityMaster = /** @class */ (function () {
    function ActivityMaster() {
    }
    return ActivityMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/item-category-master/item-category-master.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/foundry/master/item-category-master/item-category-master.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>ItemCategory Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>ItemCategory</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let category of itemCategoryList; let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{category.itemCategory}}</td>\r\n                  <td><button mat-icon-button matTooltip=\"Edit RoleMaster\" color=\"accent\" (click)=\"editItemCategory(i,category._id,category.itemCategory)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete RoleMaster\" color=\"accent\" (click)=\"deleteItemCategory(i,category._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>ItemCategory Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"roleForm\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"ItemCategory\" name=\"itemCategory\" formControlName=\"itemCategory\" [(ngModel)]=\"itemCategoryMaster.itemCategory\">\r\n              <mat-error>\r\n                <control-messages [control]=\"roleForm.controls.itemCategory\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!roleForm.valid\" style=\"margin-left: 80px;\" (click)=\"saveItemCategory(exampleForm)\">Save</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/item-category-master/item-category-master.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/foundry/master/item-category-master/item-category-master.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  height: 300px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvaXRlbS1jYXRlZ29yeS1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxpdGVtLWNhdGVnb3J5LW1hc3RlclxcaXRlbS1jYXRlZ29yeS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7O0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvaXRlbS1jYXRlZ29yeS1tYXN0ZXIvaXRlbS1jYXRlZ29yeS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgbWF0LWljb257XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAudGFibGU+dGJvZHk+dHI+dGQsXHJcbiAgLnRhYmxlPnRoZWFkPnRyPnRoe1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/master/item-category-master/item-category-master.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/foundry/master/item-category-master/item-category-master.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemCategoryMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryMasterComponent", function() { return ItemCategoryMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");
/* harmony import */ var _item_category_master__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-category-master */ "./src/app/foundry/master/item-category-master/item-category-master.ts");







var ItemCategoryMasterComponent = /** @class */ (function () {
    function ItemCategoryMasterComponent(masterService, notifierService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['itemCategory', 'actions'];
        this.notifier = notifierService;
        this.roleForm = this.formBuilder.group({
            'itemCategory': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].nameValidation]]
        });
    }
    ItemCategoryMasterComponent.prototype.ngOnInit = function () {
        this.itemCategoryMaster = new _item_category_master__WEBPACK_IMPORTED_MODULE_6__["ItemCategoryMaster"]();
        this.getItemCategoryMaster();
    };
    ItemCategoryMasterComponent.prototype.getItemCategoryMaster = function () {
        var _this = this;
        this.masterService.getItemCategoryMaster().subscribe(function (data) {
            _this.itemCategoryList = data;
            // console.log('data',data);
            // this.dataSource = new MatTableDataSource(this.roleMasters);
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator= this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    /* Save Role Master */
    ItemCategoryMasterComponent.prototype.saveItemCategory = function (exampleForm) {
        var _this = this;
        if (this.itemCategoryMaster._id === undefined || this.itemCategoryMaster._id === '') {
            this.itemCategoryMaster.createdBy = localStorage.getItem('user');
            this.masterService.saveItemCategoryMaster(this.itemCategoryMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getItemCategoryMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.itemCategoryMaster.modifiedBy = localStorage.getItem('user');
            this.masterService.updateItemCategoryMaster(this.itemCategoryMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getItemCategoryMaster();
                exampleForm.resetForm();
                _this.itemCategoryMaster._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the Role master details */
    ItemCategoryMasterComponent.prototype.editItemCategory = function (i, _id, itemCategory) {
        this.itemCategoryMaster._id = _id;
        this.itemCategoryMaster.itemCategory = itemCategory;
    };
    ItemCategoryMasterComponent.prototype.deleteItemCategory = function (i, _id) {
        var _this = this;
        this.itemCategoryMaster.modifiedBy = localStorage.getItem('user');
        this.itemCategoryMaster._id = _id;
        this.masterService.deleteItemCategoryMaster(this.itemCategoryMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getItemCategoryMaster();
            _this.itemCategoryMaster._id = '';
        }, function (error) {
            console.log(error);
        });
    };
    ItemCategoryMasterComponent.prototype.refresh = function () {
        this.getItemCategoryMaster();
    };
    ItemCategoryMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    ItemCategoryMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-category-master',
            template: __webpack_require__(/*! ./item-category-master.component.html */ "./src/app/foundry/master/item-category-master/item-category-master.component.html"),
            styles: [__webpack_require__(/*! ./item-category-master.component.scss */ "./src/app/foundry/master/item-category-master/item-category-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ItemCategoryMasterComponent);
    return ItemCategoryMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/item-category-master/item-category-master.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/item-category-master/item-category-master.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemCategoryMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryMaster", function() { return ItemCategoryMaster; });
var ItemCategoryMaster = /** @class */ (function () {
    function ItemCategoryMaster() {
    }
    return ItemCategoryMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/item-type-master/item-type-master.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/master/item-type-master/item-type-master.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-7 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Item Type Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>ItemType</th>\r\n                  <th>Stock Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of itemTypeMasters; let i=index\">\r\n                  <td>{{item.itemType}}</td>\r\n                  <td>{{item.stockType}}</td>\r\n                  <td><button mat-icon-button matTooltip=\"Edit ItemTypeMaster\" color=\"accent\" (click)=\"editItemTypeMaster(i,item._id,item.itemType,item.stockType)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete ItemTypeMaster\" color=\"accent\" (click)=\"deleteItemTypeMaster(i,item._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-5 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Item Type Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"itemForm\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Item Type\" formControlName=\"itemType\" name=\"itemType\" [(ngModel)]=\"itemTypeMaster.itemType\">\r\n              <mat-error>\r\n                <control-messages [control]=\"itemForm.controls.itemType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Stock Type\" formControlName=\"stockType\" name=\"stockType\" [(ngModel)]=\"itemTypeMaster.stockType\">\r\n              <mat-error>\r\n                <control-messages [control]=\"itemForm.controls.stockType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button style=\"margin-left: 60px;\" color=\"primary\" [disabled]=\"!itemForm.valid\" (click)=\"saveItemTypeMaster(exampleForm)\">Save</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/item-type-master/item-type-master.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/foundry/master/item-type-master/item-type-master.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 100%;\n  height: 300px;\n  margin-bottom: 10px; }\n\n.example-full-width {\n  text-align: center;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvaXRlbS10eXBlLW1hc3Rlci9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxtYXN0ZXJcXGl0ZW0tdHlwZS1tYXN0ZXJcXGl0ZW0tdHlwZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUliO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7O0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvaXRlbS10eXBlLW1hc3Rlci9pdGVtLXR5cGUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5oNntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxubWF0LWljb257XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnRhYmxlPnRib2R5PnRyPnRkLFxyXG4udGFibGU+dGhlYWQ+dHI+dGh7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/master/item-type-master/item-type-master.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/foundry/master/item-type-master/item-type-master.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemTypeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeMasterComponent", function() { return ItemTypeMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_type_master_item_type_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-type-master/item-type-master */ "./src/app/foundry/master/item-type-master/item-type-master.ts");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var ItemTypeMasterComponent = /** @class */ (function () {
    function ItemTypeMasterComponent(masterService, notifierService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['itemType', 'stockType', 'actions'];
        this.notifier = notifierService;
        this.itemForm = this.formBuilder.group({
            'itemType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]],
            'stockType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    ItemTypeMasterComponent.prototype.ngOnInit = function () {
        this.itemTypeMaster = new _item_type_master_item_type_master__WEBPACK_IMPORTED_MODULE_2__["ItemTypeMaster"]();
        this.getItemTypeMaster();
    };
    ItemTypeMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ItemTypeMasterComponent.prototype.getItemTypeMaster = function () {
        var _this = this;
        this.masterService.getItemTypeMaster().subscribe(function (data) {
            _this.itemTypeMasters = data;
            console.log('data', data);
            // this.dataSource = new MatTableDataSource(this.itemTypeMasters);
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator= this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    /* Save Item Type Master */
    ItemTypeMasterComponent.prototype.saveItemTypeMaster = function (exampleForm) {
        var _this = this;
        if (this.itemTypeMaster._id === undefined || this.itemTypeMaster._id === '') {
            this.itemTypeMaster.createdBy = localStorage.getItem('user');
            this.masterService.saveItemTypeMaster(this.itemTypeMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getItemTypeMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.itemTypeMaster.modifiedBy = localStorage.getItem('user');
            this.masterService.updateItemTypeMaster(this.itemTypeMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getItemTypeMaster();
                exampleForm.resetForm();
                _this.itemTypeMaster._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the Item Type master details */
    ItemTypeMasterComponent.prototype.editItemTypeMaster = function (i, _id, itemType, stockType) {
        this.itemTypeMaster._id = _id;
        this.itemTypeMaster.itemType = itemType;
        this.itemTypeMaster.stockType = stockType;
    };
    ItemTypeMasterComponent.prototype.deleteItemTypeMaster = function (i, _id) {
        var _this = this;
        this.itemTypeMaster.modifiedBy = localStorage.getItem('user');
        this.itemTypeMaster._id = _id;
        this.masterService.deleteItemTypeMaster(this.itemTypeMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getItemTypeMaster();
            _this.itemTypeMaster._id = '';
        }, function (error) {
            console.log(error);
        });
    };
    ItemTypeMasterComponent.prototype.refresh = function () {
        this.getItemTypeMaster();
    };
    ItemTypeMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ItemTypeMasterComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ItemTypeMasterComponent.prototype, "sort", void 0);
    ItemTypeMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-type-master',
            template: __webpack_require__(/*! ./item-type-master.component.html */ "./src/app/foundry/master/item-type-master/item-type-master.component.html"),
            styles: [__webpack_require__(/*! ./item-type-master.component.scss */ "./src/app/foundry/master/item-type-master/item-type-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ItemTypeMasterComponent);
    return ItemTypeMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/item-type-master/item-type-master.ts":
/*!*********************************************************************!*\
  !*** ./src/app/foundry/master/item-type-master/item-type-master.ts ***!
  \*********************************************************************/
/*! exports provided: ItemTypeMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeMaster", function() { return ItemTypeMaster; });
var ItemTypeMaster = /** @class */ (function () {
    function ItemTypeMaster() {
    }
    return ItemTypeMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/master-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/foundry/master/master-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master.component */ "./src/app/foundry/master/master.component.ts");




var routes = [
    {
        path: '',
        component: _master_component__WEBPACK_IMPORTED_MODULE_3__["MasterComponent"],
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/master/master.component.html":
/*!******************************************************!*\
  !*** ./src/app/foundry/master/master.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <perfect-scrollbar>\r\n      <app-item-type-master></app-item-type-master>\r\n    </perfect-scrollbar>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <app-vendor-type-master></app-vendor-type-master>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <app-molding-master></app-molding-master>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <app-unit-master></app-unit-master>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <app-activity-master></app-activity-master>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <app-role-master></app-role-master>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n    <app-item-category-master></app-item-category-master>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 20px;\">\r\n  </div>\r\n</div>\r\n\r\n<notifier-container></notifier-container>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/master.component.scss":
/*!******************************************************!*\
  !*** ./src/app/foundry/master/master.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL21hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foundry/master/master.component.ts":
/*!****************************************************!*\
  !*** ./src/app/foundry/master/master.component.ts ***!
  \****************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/foundry/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.scss */ "./src/app/foundry/master/master.component.scss")]
        })
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/master.module.ts":
/*!*************************************************!*\
  !*** ./src/app/foundry/master/master.module.ts ***!
  \*************************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master.component */ "./src/app/foundry/master/master.component.ts");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/foundry/master/master-routing.module.ts");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _vendor_type_master_vendor_type_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor-type-master/vendor-type-master.component */ "./src/app/foundry/master/vendor-type-master/vendor-type-master.component.ts");
/* harmony import */ var _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-type-master/item-type-master.component */ "./src/app/foundry/master/item-type-master/item-type-master.component.ts");
/* harmony import */ var _molding_master_molding_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./molding-master/molding-master.component */ "./src/app/foundry/master/molding-master/molding-master.component.ts");
/* harmony import */ var _role_master_role_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role-master/role-master.component */ "./src/app/foundry/master/role-master/role-master.component.ts");
/* harmony import */ var _activity_master_activity_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./activity-master/activity-master.component */ "./src/app/foundry/master/activity-master/activity-master.component.ts");
/* harmony import */ var _unit_master_unit_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./unit-master/unit-master.component */ "./src/app/foundry/master/unit-master/unit-master.component.ts");
/* harmony import */ var _foundry_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../foundry.module */ "./src/app/foundry/foundry.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _item_category_master_item_category_master_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./item-category-master/item-category-master.component */ "./src/app/foundry/master/item-category-master/item-category-master.component.ts");


















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
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true
};
var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_master_component__WEBPACK_IMPORTED_MODULE_3__["MasterComponent"], _vendor_type_master_vendor_type_master_component__WEBPACK_IMPORTED_MODULE_8__["VendorTypeMasterComponent"], _item_type_master_item_type_master_component__WEBPACK_IMPORTED_MODULE_9__["ItemTypeMasterComponent"], _molding_master_molding_master_component__WEBPACK_IMPORTED_MODULE_10__["MoldingMasterComponent"],
                _role_master_role_master_component__WEBPACK_IMPORTED_MODULE_11__["RoleMasterComponent"], _activity_master_activity_master_component__WEBPACK_IMPORTED_MODULE_12__["ActivityMasterComponent"], _unit_master_unit_master_component__WEBPACK_IMPORTED_MODULE_13__["UnitMasterComponent"], _item_category_master_item_category_master_component__WEBPACK_IMPORTED_MODULE_17__["ItemCategoryMasterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _master_routing_module__WEBPACK_IMPORTED_MODULE_4__["MasterRoutingModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierModule"].withConfig(customNotifierOptions), _foundry_module__WEBPACK_IMPORTED_MODULE_14__["FoundryModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/foundry/master/molding-master/molding-master.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/molding-master/molding-master.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Molding Type Master</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>No</th>\r\n                          <th>Mold Type</th>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let mold of moldingMasters; let i=index\">\r\n                          <td>{{i+1}}</td>\r\n                          <td>{{mold.moldType}}</td>\r\n                          <td><button mat-icon-button matTooltip=\"Edit MoldingTypeMaster\" color=\"accent\" (click)=\"editMoldingMaster(i,mold._id,mold.moldType)\">\r\n                              <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                             <button mat-icon-button matTooltip=\"Delete MoldingTypeMaster\" color=\"accent\" (click)=\"deleteMoldingMaster(i,mold._id)\">\r\n                              <mat-icon>delete</mat-icon>\r\n                            </button></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-header>\r\n              <mat-card-title>Molding Type Master</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <form #exampleForm=\"ngForm\" [formGroup]=\"moldingForm\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Mold Type\" name=\"moldType\" formControlName=\"moldType\" [(ngModel)]=\"moldingMaster.moldType\">\r\n                <mat-error><control-messages [control]=\"moldingForm.controls.moldType\"></control-messages></mat-error>\r\n              </mat-form-field>\r\n            </form>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-raised-button color=\"primary\"  style=\"margin-left: 80px;\"  [disabled]=\"!moldingForm.valid\"  (click)=\"saveMoldingMaster(exampleForm)\">Save</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/molding-master/molding-master.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/foundry/master/molding-master/molding-master.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  height: 300px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvbW9sZGluZy1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxtb2xkaW5nLW1hc3RlclxcbW9sZGluZy1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUliO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7O0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvbW9sZGluZy1tYXN0ZXIvbW9sZGluZy1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxubWF0LWljb257XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnRhYmxlPnRib2R5PnRyPnRkLFxyXG4udGFibGU+dGhlYWQ+dHI+dGh7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foundry/master/molding-master/molding-master.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/foundry/master/molding-master/molding-master.component.ts ***!
  \***************************************************************************/
/*! exports provided: MoldingMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoldingMasterComponent", function() { return MoldingMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _molding_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./molding-master */ "./src/app/foundry/master/molding-master/molding-master.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var MoldingMasterComponent = /** @class */ (function () {
    function MoldingMasterComponent(masterService, notifierService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['moldType', 'actions'];
        this.notifier = notifierService;
        this.moldingForm = this.formBuilder.group({
            'moldType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    MoldingMasterComponent.prototype.ngOnInit = function () {
        this.moldingMaster = new _molding_master__WEBPACK_IMPORTED_MODULE_5__["MoldingMaster"]();
        this.getMoldingMaster();
    };
    MoldingMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MoldingMasterComponent.prototype.getMoldingMaster = function () {
        var _this = this;
        this.masterService.getMoldingMaster().subscribe(function (data) {
            _this.moldingMasters = data;
            // this.dataSource = new MatTableDataSource(this.moldingMasters);
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator = this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    /* Save Molding Master */
    MoldingMasterComponent.prototype.saveMoldingMaster = function (exampleForm) {
        var _this = this;
        if (this.moldingMaster._id === undefined || this.moldingMaster._id === '') {
            this.moldingMaster.createdBy = localStorage.getItem('user');
            this.masterService.saveMoldingMaster(this.moldingMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getMoldingMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.moldingMaster.modifiedBy = localStorage.getItem('user');
            this.masterService.updateMoldingMaster(this.moldingMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getMoldingMaster();
                exampleForm.resetForm();
                _this.moldingMaster._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the Molding master details */
    MoldingMasterComponent.prototype.editMoldingMaster = function (i, _id, moldType) {
        this.moldingMaster._id = _id;
        this.moldingMaster.moldType = moldType;
    };
    MoldingMasterComponent.prototype.deleteMoldingMaster = function (i, _id) {
        var _this = this;
        this.moldingMaster.modifiedBy = localStorage.getItem('user');
        this.moldingMaster._id = _id;
        this.masterService.deleteMoldingMaster(this.moldingMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getMoldingMaster();
            _this.moldingMaster._id = '';
        }, function (error) {
            console.log(error);
        });
    };
    MoldingMasterComponent.prototype.refresh = function () {
        this.getMoldingMaster();
    };
    MoldingMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MoldingMasterComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MoldingMasterComponent.prototype, "sort", void 0);
    MoldingMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-molding-master',
            template: __webpack_require__(/*! ./molding-master.component.html */ "./src/app/foundry/master/molding-master/molding-master.component.html"),
            styles: [__webpack_require__(/*! ./molding-master.component.scss */ "./src/app/foundry/master/molding-master/molding-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], MoldingMasterComponent);
    return MoldingMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/molding-master/molding-master.ts":
/*!*****************************************************************!*\
  !*** ./src/app/foundry/master/molding-master/molding-master.ts ***!
  \*****************************************************************/
/*! exports provided: MoldingMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoldingMaster", function() { return MoldingMaster; });
var MoldingMaster = /** @class */ (function () {
    function MoldingMaster() {
    }
    return MoldingMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/role-master/role-master.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/foundry/master/role-master/role-master.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>Role Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>Role Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let role of roleMasters; let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{role.role}}</td>\r\n                  <td><button mat-icon-button matTooltip=\"Edit RoleMaster\" color=\"accent\" (click)=\"editRoleMaster(i,role._id,role.role)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete RoleMaster\" color=\"accent\" (click)=\"deleteRoleMaster(i,role._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Role Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"roleForm\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Role\" name=\"role\" formControlName=\"role\" [(ngModel)]=\"roleMaster.role\">\r\n              <mat-error>\r\n                <control-messages [control]=\"roleForm.controls.role\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!roleForm.valid\" style=\"margin-left: 80px;\" (click)=\"saveRoleMaster(exampleForm)\">Save</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/role-master/role-master.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/foundry/master/role-master/role-master.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  height: 300px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcm9sZS1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFxyb2xlLW1hc3Rlclxccm9sZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7O0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvcm9sZS1tYXN0ZXIvcm9sZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1pY29ue1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5idXR0b257XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi50YWJsZT50Ym9keT50cj50ZCxcclxuLnRhYmxlPnRoZWFkPnRyPnRoe1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/role-master/role-master.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/foundry/master/role-master/role-master.component.ts ***!
  \*********************************************************************/
/*! exports provided: RoleMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMasterComponent", function() { return RoleMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _role_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-master */ "./src/app/foundry/master/role-master/role-master.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var RoleMasterComponent = /** @class */ (function () {
    function RoleMasterComponent(masterService, notifierService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['role', 'actions'];
        this.notifier = notifierService;
        this.roleForm = this.formBuilder.group({
            'role': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    RoleMasterComponent.prototype.ngOnInit = function () {
        this.roleMaster = new _role_master__WEBPACK_IMPORTED_MODULE_5__["RoleMaster"]();
        this.getRoleMaster();
    };
    RoleMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    RoleMasterComponent.prototype.getRoleMaster = function () {
        var _this = this;
        this.masterService.getRoleMaster().subscribe(function (data) {
            _this.roleMasters = data;
            // console.log('data',data);
            // this.dataSource = new MatTableDataSource(this.roleMasters);
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator= this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    /* Save Role Master */
    RoleMasterComponent.prototype.saveRoleMaster = function (exampleForm) {
        var _this = this;
        if (this.roleMaster._id === undefined || this.roleMaster._id === '') {
            this.roleMaster.createdBy = localStorage.getItem('user');
            this.masterService.saveRoleMaster(this.roleMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getRoleMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.roleMaster.modifiedBy = localStorage.getItem('user');
            this.masterService.updateRoleMaster(this.roleMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getRoleMaster();
                exampleForm.resetForm();
                _this.roleMaster._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the Role master details */
    RoleMasterComponent.prototype.editRoleMaster = function (i, _id, role) {
        this.roleMaster._id = _id;
        this.roleMaster.role = role;
    };
    RoleMasterComponent.prototype.deleteRoleMaster = function (i, _id) {
        var _this = this;
        this.roleMaster.modifiedBy = localStorage.getItem('user');
        this.roleMaster._id = _id;
        this.masterService.deleteRoleMaster(this.roleMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getRoleMaster();
            _this.roleMaster._id = '';
        }, function (error) {
            console.log(error);
        });
    };
    RoleMasterComponent.prototype.refresh = function () {
        this.getRoleMaster();
    };
    RoleMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], RoleMasterComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], RoleMasterComponent.prototype, "sort", void 0);
    RoleMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-master',
            template: __webpack_require__(/*! ./role-master.component.html */ "./src/app/foundry/master/role-master/role-master.component.html"),
            styles: [__webpack_require__(/*! ./role-master.component.scss */ "./src/app/foundry/master/role-master/role-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], RoleMasterComponent);
    return RoleMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/role-master/role-master.ts":
/*!***********************************************************!*\
  !*** ./src/app/foundry/master/role-master/role-master.ts ***!
  \***********************************************************/
/*! exports provided: RoleMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMaster", function() { return RoleMaster; });
var RoleMaster = /** @class */ (function () {
    function RoleMaster() {
    }
    return RoleMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/unit-master/unit-master.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/foundry/master/unit-master/unit-master.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>Unit Type Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No</th>\r\n                  <th>Unit Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let unit of units; let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{unit.unitType}}</td>\r\n                  <td><button mat-icon-button matTooltip=\"Edit UnitTypeMaster\" color=\"accent\" (click)=\"editUnitTypeMaster(i,unit._id,unit.unitType)\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                     <button mat-icon-button matTooltip=\"Delete UnitTypeMaster\" color=\"accent\" (click)=\"deleteUnitMaster(i,unit._id)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <mat-card-title>Unit Type Master</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <form #exampleForm=\"ngForm\" [formGroup]=\"unitForm\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Unit Type\" name=\"unitType\" formControlName=\"unitType\" [(ngModel)]=\"unit.unitType\">\r\n              <mat-error>\r\n                <control-messages [control]=\"unitForm.controls.unitType\"></control-messages>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" style=\"margin-left: 80px;\" [disabled]=\"!unitForm.valid\" (click)=\"saveUnitMaster(exampleForm)\">Save</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/unit-master/unit-master.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/foundry/master/unit-master/unit-master.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  height: 300px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvdW5pdC1tYXN0ZXIvRTpcXFZwX1dTXFxmb3VuZHJ5LWNsaWVudC9zcmNcXGFwcFxcZm91bmRyeVxcbWFzdGVyXFx1bml0LW1hc3RlclxcdW5pdC1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1QsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWSxFQUFBOztBQUVkOztFQUVFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3VuaXQtbWFzdGVyL3VuaXQtbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1jYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1pY29ue1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5idXR0b257XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi50YWJsZT50Ym9keT50cj50ZCxcclxuLnRhYmxlPnRoZWFkPnRyPnRoe1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/unit-master/unit-master.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/foundry/master/unit-master/unit-master.component.ts ***!
  \*********************************************************************/
/*! exports provided: UnitMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitMasterComponent", function() { return UnitMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unit_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-master */ "./src/app/foundry/master/unit-master/unit-master.ts");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var UnitMasterComponent = /** @class */ (function () {
    function UnitMasterComponent(masterService, notifierService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['unitType', 'actions'];
        this.notifier = notifierService;
        this.unitForm = this.formBuilder.group({
            'unitType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    UnitMasterComponent.prototype.ngOnInit = function () {
        this.unit = new _unit_master__WEBPACK_IMPORTED_MODULE_2__["UnitMaster"]();
        this.getAllUnitMaster();
    };
    UnitMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /** get all unit details */
    UnitMasterComponent.prototype.getAllUnitMaster = function () {
        var _this = this;
        this.masterService.getAllUnitMaster().subscribe(function (data) {
            _this.units = data;
            // this.dataSource = new MatTableDataSource(data);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    /** save&update the unit master  */
    UnitMasterComponent.prototype.saveUnitMaster = function (exampleForm) {
        var _this = this;
        if (this.unit._id === '' || this.unit._id === undefined) {
            this.unit.createdBy = localStorage.getItem('user');
            this.masterService.saveUnitMaster(this.unit).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                exampleForm.resetForm();
                _this.getAllUnitMaster();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.unit.modifiedBy = localStorage.getItem('user');
            this.masterService.updateUnitMaster(this.unit).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                exampleForm.resetForm();
                _this.getAllUnitMaster();
                _this.unit._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /** get the details for updation  */
    UnitMasterComponent.prototype.editUnitTypeMaster = function (i, _id, unitType) {
        this.unit._id = _id;
        this.unit.unitType = unitType;
    };
    /**delete Unit Master */
    UnitMasterComponent.prototype.deleteUnitMaster = function (i, _id, unitType) {
        var _this = this;
        this.unit._id = _id;
        this.masterService.deleteUnitMaster(this.unit).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getAllUnitMaster();
            _this.unit._id = '';
        }, function (err) {
            _this.notifier.notify('error', 'Nor delate');
        });
    };
    UnitMasterComponent.prototype.refresh = function () {
        this.getAllUnitMaster();
    };
    UnitMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UnitMasterComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], UnitMasterComponent.prototype, "sort", void 0);
    UnitMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unit-master',
            template: __webpack_require__(/*! ./unit-master.component.html */ "./src/app/foundry/master/unit-master/unit-master.component.html"),
            styles: [__webpack_require__(/*! ./unit-master.component.scss */ "./src/app/foundry/master/unit-master/unit-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], UnitMasterComponent);
    return UnitMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/unit-master/unit-master.ts":
/*!***********************************************************!*\
  !*** ./src/app/foundry/master/unit-master/unit-master.ts ***!
  \***********************************************************/
/*! exports provided: UnitMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitMaster", function() { return UnitMaster; });
var UnitMaster = /** @class */ (function () {
    function UnitMaster() {
    }
    return UnitMaster;
}());



/***/ }),

/***/ "./src/app/foundry/master/vendor-type-master/vendor-type-master.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/vendor-type-master/vendor-type-master.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Vendor Type Master</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'240'\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>No</th>\r\n                          <th>Vendor Type</th>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let vendor of vendorTypeMasters; let i=index\">\r\n                          <td>{{i+1}}</td>\r\n                          <td>{{vendor.vendorType}}</td>\r\n                          <td><button mat-icon-button matTooltip=\"Edit VendorTypeMaster\" color=\"accent\" (click)=\"editVendorTypeMaster(i,vendor._id,vendor.vendorType)\">\r\n                              <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                             <button mat-icon-button matTooltip=\"Delete VendorTypeMaster\" color=\"accent\" (click)=\"deleteVendorTypeMaster(i,vendor._id)\">\r\n                              <mat-icon>delete</mat-icon>\r\n                            </button></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12\" style=\"margin-top: 10px;\">\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-header>\r\n              <mat-card-title>Vendor Type Master</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <form #exampleForm=\"ngForm\" [formGroup]=\"vendorForm\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Vendor Type\" name=\"vendorType\"  formControlName=\"vendorType\" [(ngModel)]=\"vendorTypeMaster.vendorType\">\r\n                <mat-error><control-messages [control]=\"vendorForm.controls.vendorType\"></control-messages></mat-error>\r\n              </mat-form-field>\r\n            </form>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-raised-button color=\"primary\" style=\"margin-left: 80px;\" [disabled]=\"!vendorForm.valid\"  (click)=\"saveVendorTypeMaster(exampleForm)\">Save</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"cancel(exampleForm)\">Reset</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/foundry/master/vendor-type-master/vendor-type-master.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/foundry/master/vendor-type-master/vendor-type-master.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  height: 300px; }\n\nmat-form-field {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px;\n  width: 100%; }\n\nh6 {\n  text-align: center;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%; }\n\nmat-icon {\n  margin-top: -10px;\n  font-size: 18px; }\n\nbutton {\n  height: 30px; }\n\n.table > tbody > tr > td,\n.table > thead > tr > th {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9tYXN0ZXIvdmVuZG9yLXR5cGUtbWFzdGVyL0U6XFxWcF9XU1xcZm91bmRyeS1jbGllbnQvc3JjXFxhcHBcXGZvdW5kcnlcXG1hc3RlclxcdmVuZG9yLXR5cGUtbWFzdGVyXFx2ZW5kb3ItdHlwZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWSxFQUFBOztBQUVkOztFQUVFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvbWFzdGVyL3ZlbmRvci10eXBlLW1hc3Rlci92ZW5kb3ItdHlwZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1pY29ue1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5idXR0b257XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi50YWJsZT50Ym9keT50cj50ZCxcclxuLnRhYmxlPnRoZWFkPnRyPnRoe1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/foundry/master/vendor-type-master/vendor-type-master.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/foundry/master/vendor-type-master/vendor-type-master.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VendorTypeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTypeMasterComponent", function() { return VendorTypeMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../master.service */ "./src/app/foundry/master/master.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vendor_type_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-type-master */ "./src/app/foundry/master/vendor-type-master/vendor-type-master.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validation/validation-service */ "./src/app/foundry/validation/validation-service.ts");








var VendorTypeMasterComponent = /** @class */ (function () {
    function VendorTypeMasterComponent(masterService, notifierService, formBuilder) {
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['vendorType', 'actions'];
        this.notifier = notifierService;
        this.vendorForm = this.formBuilder.group({
            'vendorType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].nameValidation]]
        });
    }
    VendorTypeMasterComponent.prototype.ngOnInit = function () {
        this.vendorTypeMaster = new _vendor_type_master__WEBPACK_IMPORTED_MODULE_5__["VendorTypeMaster"]();
        this.getVendorTypeMaster();
    };
    VendorTypeMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    VendorTypeMasterComponent.prototype.getVendorTypeMaster = function () {
        var _this = this;
        this.masterService.getVendorTypeMaster().subscribe(function (data) {
            _this.vendorTypeMasters = data;
            // this.dataSource = new MatTableDataSource(this.vendorTypeMasters);
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator= this.paginator;
        }, function (error) {
            console.log(error);
        });
    };
    /* Save Item Type Master */
    VendorTypeMasterComponent.prototype.saveVendorTypeMaster = function (exampleForm) {
        var _this = this;
        if (this.vendorTypeMaster._id === undefined || this.vendorTypeMaster._id === '') {
            this.vendorTypeMaster.createdBy = localStorage.getItem('user');
            this.masterService.saveVendorTypeMaster(this.vendorTypeMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Saved Successfully');
                _this.getVendorTypeMaster();
                exampleForm.resetForm();
            }, function (err) {
                _this.notifier.notify('error', 'Not Save');
            });
        }
        else {
            this.vendorTypeMaster.modifiedBy = localStorage.getItem('user');
            this.masterService.updateVendorTypeMaster(this.vendorTypeMaster).subscribe(function (data) {
                _this.notifier.notify('success', 'Updated Successfully');
                _this.getVendorTypeMaster();
                exampleForm.resetForm();
                _this.vendorTypeMaster._id = '';
            }, function (err) {
                _this.notifier.notify('error', 'Not Update');
            });
        }
    };
    /**edit the Vendor Type master details */
    VendorTypeMasterComponent.prototype.editVendorTypeMaster = function (i, _id, vendorType) {
        this.vendorTypeMaster._id = _id;
        this.vendorTypeMaster.vendorType = vendorType;
    };
    VendorTypeMasterComponent.prototype.deleteVendorTypeMaster = function (i, _id) {
        var _this = this;
        this.vendorTypeMaster.modifiedBy = localStorage.getItem('user');
        this.vendorTypeMaster._id = _id;
        this.masterService.deleteVendorTypeMaster(this.vendorTypeMaster).subscribe(function (data) {
            _this.notifier.notify('success', 'Deleted Successfully');
            _this.getVendorTypeMaster();
            _this.vendorTypeMaster._id = '';
        }, function (error) {
            console.log(error);
        });
    };
    VendorTypeMasterComponent.prototype.refresh = function () {
        this.getVendorTypeMaster();
    };
    VendorTypeMasterComponent.prototype.cancel = function (exampleForm) {
        exampleForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], VendorTypeMasterComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], VendorTypeMasterComponent.prototype, "sort", void 0);
    VendorTypeMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-type-master',
            template: __webpack_require__(/*! ./vendor-type-master.component.html */ "./src/app/foundry/master/vendor-type-master/vendor-type-master.component.html"),
            styles: [__webpack_require__(/*! ./vendor-type-master.component.scss */ "./src/app/foundry/master/vendor-type-master/vendor-type-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], VendorTypeMasterComponent);
    return VendorTypeMasterComponent;
}());



/***/ }),

/***/ "./src/app/foundry/master/vendor-type-master/vendor-type-master.ts":
/*!*************************************************************************!*\
  !*** ./src/app/foundry/master/vendor-type-master/vendor-type-master.ts ***!
  \*************************************************************************/
/*! exports provided: VendorTypeMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTypeMaster", function() { return VendorTypeMaster; });
var VendorTypeMaster = /** @class */ (function () {
    function VendorTypeMaster() {
    }
    return VendorTypeMaster;
}());



/***/ })

}]);
//# sourceMappingURL=master-master-module.js.map