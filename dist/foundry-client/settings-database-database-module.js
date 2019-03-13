(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-database-database-module"],{

/***/ "./src/app/foundry/settings/database/database-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/foundry/settings/database/database-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DatabaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseRoutingModule", function() { return DatabaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _database_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.component */ "./src/app/foundry/settings/database/database.component.ts");




var routes = [
    {
        path: '',
        component: _database_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseComponent"],
    }
];
var DatabaseRoutingModule = /** @class */ (function () {
    function DatabaseRoutingModule() {
    }
    DatabaseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DatabaseRoutingModule);
    return DatabaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/foundry/settings/database/database.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/foundry/settings/database/database.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <h1 class=\"mat-h1\">DATABASE IMPORT AND EXPORT</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"200px\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            EXPORT WITH COLUMN\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Collection Name\" [(ngModel)]=\"database.collectionName\">\r\n              <mat-option *ngFor=\"let data of databases1\" [value]=\"data.collectionName\">\r\n                {{data.collectionName}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <button mat-raised-button style=\"margin-left:200px;\" color=\"accent\">\r\n            <a style=\"color: white;\" href=\"http://localhost:3000/api/databases/Export/{{database.collectionName}}\">Export</a>\r\n          </button>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            IMPORT\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Collection Name\" [(ngModel)]=\"database2.collectionName2\">\r\n                  <mat-option *ngFor=\"let data of databases1\" [value]=\"data.collectionName2\">\r\n                    {{data.collectionName2}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"file\" (change)=\"fileUpload($event)\">\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <button mat-raised-button  color=\"accent\" (click)=\"importCollection()\">\r\n                Import\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <mat-card class=\"dashboard-card\">\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              EXPORT WITH DATA\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"dashboard-card-content\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Collection Name\" [(ngModel)]=\"database3.collectionName3\">\r\n                <mat-option *ngFor=\"let data of databases1\" [value]=\"data.collectionName3\">\r\n                  {{data.collectionName3}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <button mat-raised-button style=\"margin-left:200px;\" color=\"accent\" (click)=\"download()\">\r\n              <a style=\"color: white;\" href=\"http://localhost:3000/api/databases/ExportData/{{database3.collectionName3}}\">Export</a></button>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foundry/settings/database/database.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/foundry/settings/database/database.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\ntd {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRyeS9zZXR0aW5ncy9kYXRhYmFzZS9FOlxcVnBfV1NcXGZvdW5kcnktY2xpZW50L3NyY1xcYXBwXFxmb3VuZHJ5XFxzZXR0aW5nc1xcZGF0YWJhc2VcXGRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUliO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kcnkvc2V0dGluZ3MvZGF0YWJhc2UvZGF0YWJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubW9yZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbnRkIHtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foundry/settings/database/database.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/foundry/settings/database/database.component.ts ***!
  \*****************************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ "./src/app/foundry/settings/database/database.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.service */ "./src/app/foundry/settings/database/database.service.ts");




var databases = [
    { collectionName: 'customers', collectionName2: 'customers', collectionName3: 'customers' },
    { collectionName: 'completedmelts', collectionName2: 'completedmelts', collectionName3: 'completedmelts' },
    { collectionName: 'fettlings', collectionName2: 'fettlings', collectionName3: 'fettlings' },
    { collectionName: 'items', collectionName2: 'items', collectionName3: 'items' },
    { collectionName: 'knockouts', collectionName2: 'knockouts', collectionName3: 'knockouts' },
    { collectionName: 'meltings', collectionName2: 'meltings', collectionName3: 'meltings' },
    { collectionName: 'meltreports', collectionName2: 'meltreports', collectionName3: 'meltreports' },
    { collectionName: 'melts', collectionName2: 'melts', collectionName3: 'melts' },
    { collectionName: 'mouldings', collectionName2: 'mouldings', collectionName3: 'mouldings' },
    { collectionName: 'ongoingmelts', collectionName2: 'ongoingmelts', collectionName3: 'ongoingmelts' },
    { collectionName: 'orders', collectionName2: 'orders', collectionName3: 'orders' },
    { collectionName: 'paintings', collectionName2: 'paintings', collectionName3: 'paintings' },
    { collectionName: 'products', collectionName2: 'products', collectionName3: 'products' },
    { collectionName: 'purchasereports', collectionName2: 'purchasereports', collectionName3: 'purchasereports' },
    { collectionName: 'purchases', collectionName2: 'purchases', collectionName3: 'purchases' },
    {
        collectionName: 'rawmaterialconsumptionreports', collectionName2: 'rawmaterialconsumptionreports',
        collectionName3: 'rawmaterialconsumptionreports'
    },
    { collectionName: 'rawmaterialsummaryreports', collectionName2: 'rawmaterialsummaryreports',
        collectionName3: 'rawmaterialsummaryreports' },
    { collectionName: 'rawmaterials', collectionName2: 'rawmaterials', collectionName3: 'rawmaterials' },
    { collectionName: 'returnandrejections', collectionName2: 'returnandrejections', collectionName3: 'returnandrejections' },
    { collectionName: 'rejections', collectionName2: 'rejections', collectionName3: 'rejections' },
    { collectionName: 'schedulemelts', collectionName2: 'schedulemelts', collectionName3: 'schedulemelts' },
    { collectionName: 'stocks', collectionName2: 'stocks', collectionName3: 'stocks' },
    { collectionName: 'unschedulemelts', collectionName2: 'unschedulemelts', collectionName3: 'unschedulemelts' },
    { collectionName: 'users', collectionName2: 'users', collectionName3: 'users' },
    { collectionName: 'vendors', collectionName2: 'vendors', collectionName3: 'vendors' },
    { collectionName: 'yields', collectionName2: 'yields', collectionName3: 'yields' },
    { collectionName: 'employees', collectionName2: 'employees', collectionName3: 'employees' },
    { collectionName: 'shotblastingmasters', collectionName2: 'shotblastingmasters', collectionName3: 'shotblastingmasters' },
    { collectionName: 'fettlingmasters', collectionName2: 'fettlingmasters', collectionName3: 'fettlingmasters' },
    { collectionName: 'paintingmasters', collectionName2: 'paintingmasters', collectionName3: 'paintingmasters' },
    { collectionName: 'labourmasters', collectionName2: 'labourmasters', collectionName3: 'labourmasters' },
    { collectionName: 'lpgmasters', collectionName2: 'lpgmasters', collectionName3: 'lpgmasters' },
    { collectionName: 'rawmaterialcompositions', collectionName2: 'rawmaterialcompositions', collectionName3: 'rawmaterialcompositions' },
    { collectionName: 'departments', collectionName2: 'departments', collectionName3: 'departments' },
    { collectionName: 'shifts', collectionName2: 'shifts', collectionName3: 'shifts' }
];
var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(databaseService) {
        this.databaseService = databaseService;
        this.data = false;
    }
    DatabaseComponent.prototype.ngOnInit = function () {
        this.database = new _database__WEBPACK_IMPORTED_MODULE_2__["Database"]();
        this.database2 = new _database__WEBPACK_IMPORTED_MODULE_2__["Database"]();
        this.database3 = new _database__WEBPACK_IMPORTED_MODULE_2__["Database"]();
        this.databases1 = databases;
    };
    DatabaseComponent.prototype.fileUpload = function (event) {
        this.file = event.target.files;
    };
    DatabaseComponent.prototype.importCollection = function () {
        var files = this.file.item(0);
        console.log(this.database2.collectionName2);
        this.databaseService.databaseimport(files, this.database2.collectionName2).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    DatabaseComponent.prototype.download = function () {
        var _this = this;
        console.log('test');
        this.databases1.forEach(function (element) {
            console.log('test1', element.collectionName3);
            _this.databaseService.dataFullExport(element.collectionName3);
        });
    };
    DatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.component.html */ "./src/app/foundry/settings/database/database.component.html"),
            styles: [__webpack_require__(/*! ./database.component.scss */ "./src/app/foundry/settings/database/database.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/foundry/settings/database/database.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/foundry/settings/database/database.module.ts ***!
  \**************************************************************/
/*! exports provided: DatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseModule", function() { return DatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _database_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.component */ "./src/app/foundry/settings/database/database.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _database_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database-routing.module */ "./src/app/foundry/settings/database/database-routing.module.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database.service */ "./src/app/foundry/settings/database/database.service.ts");








var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_database_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _database_routing_module__WEBPACK_IMPORTED_MODULE_6__["DatabaseRoutingModule"]
            ],
            providers: [
                _database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]
            ]
        })
    ], DatabaseModule);
    return DatabaseModule;
}());



/***/ }),

/***/ "./src/app/foundry/settings/database/database.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/foundry/settings/database/database.service.ts ***!
  \***************************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DatabaseService = /** @class */ (function () {
    function DatabaseService(http, https) {
        this.http = http;
        this.https = https;
        this.baseURL = '/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    DatabaseService.prototype.databaseimport = function (files, collectionName) {
        var formData = new FormData();
        formData.append('file', files);
        console.log('formData', formData);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', this.baseURL + '/databases/ImportData/' + collectionName, formData, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.https.request(req);
    };
    DatabaseService.prototype.dataFullExport = function (collectionName) {
        console.log('test2', collectionName);
        return this.http.get(this.baseURL + '/databases/' + collectionName);
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/foundry/settings/database/database.ts":
/*!*******************************************************!*\
  !*** ./src/app/foundry/settings/database/database.ts ***!
  \*******************************************************/
/*! exports provided: Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
var Database = /** @class */ (function () {
    function Database() {
    }
    return Database;
}());



/***/ })

}]);
//# sourceMappingURL=settings-database-database-module.js.map