(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~items-items-module~master-master-module~master-production-master-prod~e16e7384"],{

/***/ "./src/app/foundry/master/master.service.ts":
/*!**************************************************!*\
  !*** ./src/app/foundry/master/master.service.ts ***!
  \**************************************************/
/*! exports provided: MasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return MasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var MasterService = /** @class */ (function () {
    function MasterService(http) {
        this.http = http;
        this.baseURL = '/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    /*  Item Type Master Service*/
    MasterService.prototype.getItemTypeMaster = function () {
        return this.http.get(this.baseURL + '/itemTypeMasters', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.saveItemTypeMaster = function (itemTypeMaster) {
        return this.http.post(this.baseURL + '/itemTypeMasters', JSON.stringify(itemTypeMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.updateItemTypeMaster = function (master) {
        return this.http.put(this.baseURL + '/itemTypeMasters', JSON.stringify(master), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.deleteItemTypeMaster = function (master) {
        return this.http.patch(this.baseURL + '/itemTypeMasters', JSON.stringify(master), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* Service For vendor Type Master */
    MasterService.prototype.getVendorTypeMaster = function () {
        return this.http.get(this.baseURL + '/vendorTypeMasters', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.saveVendorTypeMaster = function (vendorTypeMaster) {
        return this.http.post(this.baseURL + '/vendorTypeMasters', JSON.stringify(vendorTypeMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.updateVendorTypeMaster = function (vendorTypeMaster) {
        return this.http.put(this.baseURL + '/vendorTypeMasters', JSON.stringify(vendorTypeMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.deleteVendorTypeMaster = function (master) {
        return this.http.patch(this.baseURL + '/vendorTypeMasters', JSON.stringify(master), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* Service For Molding Master*/
    MasterService.prototype.getMoldingMaster = function () {
        return this.http.get(this.baseURL + '/moldingMasters', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.saveMoldingMaster = function (moldingMaster) {
        return this.http.post(this.baseURL + '/moldingMasters', JSON.stringify(moldingMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.updateMoldingMaster = function (moldingMaster) {
        return this.http.put(this.baseURL + '/moldingMasters', JSON.stringify(moldingMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.deleteMoldingMaster = function (master) {
        return this.http.patch(this.baseURL + '/moldingMasters', JSON.stringify(master), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*Service For Role Master */
    MasterService.prototype.getRoleMaster = function () {
        return this.http.get(this.baseURL + '/roleMasters', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.saveRoleMaster = function (roleMaster) {
        return this.http.post(this.baseURL + '/roleMasters', JSON.stringify(roleMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.updateRoleMaster = function (roleMaster) {
        return this.http.put(this.baseURL + '/roleMasters', JSON.stringify(roleMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.deleteRoleMaster = function (roleMaster) {
        return this.http.patch(this.baseURL + '/roleMasters', JSON.stringify(roleMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**get All unit Master */
    MasterService.prototype.getAllUnitMaster = function () {
        return this.http.get(this.baseURL + '/unitMaster', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Save unit Master */
    MasterService.prototype.saveUnitMaster = function (unit) {
        return this.http.post(this.baseURL + '/unitMaster', JSON.stringify(unit), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Update unit Master */
    MasterService.prototype.updateUnitMaster = function (unit) {
        return this.http.put(this.baseURL + '/unitMaster', JSON.stringify(unit), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**delete unit Master */
    MasterService.prototype.deleteUnitMaster = function (unit) {
        return this.http.patch(this.baseURL + '/unitMaster', JSON.stringify(unit), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**get All unit Master */
    MasterService.prototype.getAllActivityMaster = function () {
        return this.http.get(this.baseURL + '/activityMaster', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Save activity Master */
    MasterService.prototype.saveActivityMaster = function (activity) {
        return this.http.post(this.baseURL + '/activityMaster', JSON.stringify(activity), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Update activity Master */
    MasterService.prototype.updateActivityMaster = function (activity) {
        return this.http.put(this.baseURL + '/activityMaster', JSON.stringify(activity), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**delete Activity Master */
    MasterService.prototype.deleteActivityMaster = function (activity) {
        return this.http.patch(this.baseURL + '/activityMaster', JSON.stringify(activity), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Service for item catergory master */
    MasterService.prototype.getItemCategoryMaster = function () {
        return this.http.get(this.baseURL + '/itemCategoryMaster', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.saveItemCategoryMaster = function (itemCategory) {
        return this.http.post(this.baseURL + '/itemCategoryMaster', JSON.stringify(itemCategory), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.updateItemCategoryMaster = function (itemCategory) {
        return this.http.put(this.baseURL + '/itemCategoryMaster', JSON.stringify(itemCategory), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService.prototype.deleteItemCategoryMaster = function (itemCategory) {
        return this.http.patch(this.baseURL + '/itemCategoryMaster', JSON.stringify(itemCategory), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    MasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MasterService);
    return MasterService;
}());



/***/ })

}]);
//# sourceMappingURL=default~company-company-module~items-items-module~master-master-module~master-production-master-prod~e16e7384.js.map