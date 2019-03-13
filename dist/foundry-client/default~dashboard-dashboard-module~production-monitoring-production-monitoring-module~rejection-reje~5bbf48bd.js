(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~production-monitoring-production-monitoring-module~rejection-reje~5bbf48bd"],{

/***/ "./src/app/foundry/production-monitoring/production-monitoring.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/foundry/production-monitoring/production-monitoring.service.ts ***!
  \********************************************************************************/
/*! exports provided: ProductionMonitoringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionMonitoringService", function() { return ProductionMonitoringService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProductionMonitoringService = /** @class */ (function () {
    function ProductionMonitoringService(http) {
        this.http = http;
        this.baseUrl = 'api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    ProductionMonitoringService.prototype.getCompletedMelts = function () {
        return this.http.get(this.baseUrl + '/completedMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.tempCompScheduledMelts = function (tempSchMelts) {
        return this.http.post(this.baseUrl + '/tempCompScheduleMelts', JSON.stringify(tempSchMelts), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.tempScheduledMelts = function (tempSchMelts) {
        return this.http.post(this.baseUrl + '/tempScheduleMelts', JSON.stringify(tempSchMelts), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.scheduleOnGoingMelt = function () {
        return this.http.get(this.baseUrl + '/onGoingMelts/schedule', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*unscheduled Melts*/
    ProductionMonitoringService.prototype.getUnscheduledMelts = function () {
        return this.http.get(this.baseUrl + '/unscheduledMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getUnscheduledMeltsAll = function () {
        return this.http.get(this.baseUrl + '/unscheduledMelts/all', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getUnscheduledMeltsOrderId = function (customerName) {
        return this.http.get(this.baseUrl + '/unscheduledMelts/' + customerName, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.scheduleUnScheduleMelt = function (sch) {
        return this.http.post(this.baseUrl + '/scheduledMelts/', JSON.stringify(sch), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*close*/
    ProductionMonitoringService.prototype.getScheduledMelts = function () {
        return this.http.get(this.baseUrl + '/scheduledMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getScheduledMeltsAll = function () {
        return this.http.get(this.baseUrl + '/scheduledMelts/all', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getScheduledMeltsOrderId = function (customerName) {
        return this.http.get(this.baseUrl + '/scheduledMelts/' + customerName, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*Stock Module Process  */
    ProductionMonitoringService.prototype.getStockRawMaterial = function () {
        return this.http.get(this.baseUrl + '/stocks/rawmaterial', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getStockConsumable = function () {
        return this.http.get(this.baseUrl + '/stocks/consumable', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*  Melt Process*/
    ProductionMonitoringService.prototype.getAllMelt = function () {
        return this.http.get(this.baseUrl + '/melts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentMeltStatus = function () {
        return this.http.get(this.baseUrl + '/melts/meltStatus', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentBatchStatus = function () {
        return this.http.get(this.baseUrl + '/melts/batchStatus', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateCurrentMelt = function (melt) {
        return this.http.patch(this.baseUrl + '/melts/' + melt._id, JSON.stringify(melt), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateStatusMelt = function (meltNo) {
        return this.http.patch(this.baseUrl + '/melts/statusUpdate/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* Ongoing Melt Process*/
    ProductionMonitoringService.prototype.getOngoingMelt = function (_id) {
        return this.http.get(this.baseUrl + '/onGoingMelts/' + _id, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getOngoingMeltNo = function (onGoingMelt) {
        return this.http.post(this.baseUrl + '/onGoingMelts', JSON.stringify(onGoingMelt), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getOngoingMeltBatch = function (batchId) {
        return this.http.get(this.baseUrl + '/onGoingMelts/batch/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateCurrentOngoingMelt = function (onGoingMelt) {
        return this.http.patch(this.baseUrl + '/onGoingMelts', JSON.stringify(onGoingMelt), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateStatusOnGoingMelt = function (batchId) {
        return this.http.patch(this.baseUrl + '/onGoingMelts/statusUpdate/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getOngoingMelts = function () {
        return this.http.get(this.baseUrl + '/onGoingMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getPartIdCost = function () {
        return this.http.get(this.baseUrl + '/onGoingMelts/partCost', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getPartIdByCustomerName = function (customerName) {
        return this.http.get(this.baseUrl + '/onGoingMelts/get/' + customerName, this.options).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getMeltNoReportByPartId = function (meltReport) {
        return this.http.post(this.baseUrl + '/onGoingMelts' + '/meltReport', JSON.stringify(meltReport), this.options).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getMeltNoOrderIdReportByPartId = function (rawMaterial) {
        return this.http.post(this.baseUrl + '/onGoingMelts' + '/meltReport', JSON.stringify(rawMaterial), this.options).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getMeltNoByPartId = function (rejection) {
        return this.http.post(this.baseUrl + '/onGoingMelts' + '/meltReport', JSON.stringify(rejection), this.options).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* Raw Material Process*/
    ProductionMonitoringService.prototype.saveRawMaterial = function (rawMaterial) {
        return this.http.post(this.baseUrl + '/rawMaterials', JSON.stringify(rawMaterial), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateRawMaterial = function (rawMaterial) {
        return this.http.patch(this.baseUrl + '/rawMaterials', JSON.stringify(rawMaterial), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentRawMaterial = function (meltNo) {
        console.log('meltNo', meltNo);
        return this.http.get(this.baseUrl + '/rawMaterials/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentRawMaterialItemType = function (meltNo) {
        return this.http.get(this.baseUrl + '/rawMaterials/itemType/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /*Core Making */
    ProductionMonitoringService.prototype.getCurrentCoreMaking = function (batchId) {
        return this.http.get(this.baseUrl + '/coreMakings/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateCoreMaking = function (coreMaking) {
        return this.http.patch(this.baseUrl + '/coreMakings', JSON.stringify(coreMaking), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* Moulding Module */
    ProductionMonitoringService.prototype.saveMoulding = function (moulding) {
        return this.http.post(this.baseUrl + '/mouldings', JSON.stringify(moulding), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateMoulding = function (moulding) {
        return this.http.patch(this.baseUrl + '/mouldings/' + moulding._id, JSON.stringify(moulding), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentMoulding = function (batchId) {
        return this.http.get(this.baseUrl + '/mouldings/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.checkCurrentMoulding = function (meltNo) {
        return this.http.get(this.baseUrl + '/mouldings/checkMoulding/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /** Melting  Process */
    ProductionMonitoringService.prototype.saveMelting = function (melting) {
        console.log('meltings ', melting);
        return this.http.post(this.baseUrl + '/meltings', JSON.stringify(melting), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateMelting = function (melting) {
        return this.http.patch(this.baseUrl + '/meltings/' + melting._id, JSON.stringify(melting), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentMelting = function (meltNo) {
        return this.http.get(this.baseUrl + '/meltings/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCheckMelting = function (meltNo) {
        return this.http.get(this.baseUrl + '/meltings/checkMelting/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /**Pouring Module Process */
    /* savePouring(pouring: Pouring) {
       return this.http.post(this.baseUrl + '/pourings', JSON.stringify(pouring), this.options)
         .pipe(map((response: Response) => response.json()),
           catchError((error: any) => {
             return Observable.throw(error);
           }));
     }
     updatePouring(pouring: Pouring) {
       return this.http.patch(this.baseUrl + '/pourings/' + pouring._id, JSON.stringify(pouring), this.options)
         .pipe(map((response: Response) => response.json()),
           catchError((error: any) => {
             return Observable.throw(error);
           }));
     }
     getCurrentPouring(meltNo) {
       return this.http.get(this.baseUrl + '/pourings/' + meltNo, this.options)
         .pipe(map((response: Response) => response.json()),
           catchError((error: any) => {
             return Observable.throw(error);
           }));
     }
     getCheckPouring(meltNo) {
       return this.http.get(this.baseUrl + '/pourings/checkPouring/' + meltNo, this.options)
         .pipe(map((response: Response) => response.json()),
           catchError((error: any) => {
             return Observable.throw(error);
           }));
     }*/
    /** Knock Out */
    ProductionMonitoringService.prototype.saveKnockOut = function (knockOut) {
        return this.http.post(this.baseUrl + '/knockOuts', JSON.stringify(knockOut), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateKnockOut = function (knockOut) {
        return this.http.patch(this.baseUrl + '/knockOuts/' + knockOut._id, JSON.stringify(knockOut), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentKnockOut = function (batchId) {
        return this.http.get(this.baseUrl + '/knockOuts/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCheckKnockOut = function (meltNo) {
        return this.http.get(this.baseUrl + '/knockOuts/checkKnockOut/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /** ShotBlasting */
    ProductionMonitoringService.prototype.saveShotBlasting = function (shotBlasting) {
        return this.http.post(this.baseUrl + '/shotBlastings', JSON.stringify(shotBlasting), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateShotBlasting = function (shotBlasting) {
        return this.http.patch(this.baseUrl + '/shotBlastings/' + shotBlasting._id, JSON.stringify(shotBlasting), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentShotBlasting = function (batchId) {
        return this.http.get(this.baseUrl + '/shotBlastings/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCheckShotBlasting = function (meltNo) {
        return this.http.get(this.baseUrl + '/shotBlastings/checkShotBlasting/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /** Fettling */
    ProductionMonitoringService.prototype.saveFettling = function (fettling) {
        return this.http.post(this.baseUrl + '/fettlings', JSON.stringify(fettling), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateFettling = function (fettling) {
        return this.http.patch(this.baseUrl + '/fettlings/' + fettling._id, JSON.stringify(fettling), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentFettling = function (batchId) {
        return this.http.get(this.baseUrl + '/fettlings/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCheckFettling = function (meltNo) {
        return this.http.get(this.baseUrl + '/fettlings/checkFettling/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /** Painting */
    ProductionMonitoringService.prototype.savePainting = function (painting) {
        return this.http.post(this.baseUrl + '/paintings', JSON.stringify(painting), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updatePainting = function (painting) {
        return this.http.patch(this.baseUrl + '/paintings/' + painting._id, JSON.stringify(painting), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getCurrentPainting = function (batchId) {
        return this.http.get(this.baseUrl + '/paintings/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.checkPainting = function (meltNo) {
        return this.http.get(this.baseUrl + '/paintings/checkPainting/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /** Sand Disposal */
    ProductionMonitoringService.prototype.saveSandDisposal = function (sandDisposal) {
        return this.http.post(this.baseUrl + '/sandDisposals', JSON.stringify(sandDisposal), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getSandDisposalStock = function () {
        return this.http.get(this.baseUrl + '/sandDisposals/stock', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getLastSandDispatchDetails = function () {
        return this.http.get(this.baseUrl + '/sandDisposals/dispatch/lastEntry', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.getSandDisposalByBatchId = function (batchId) {
        return this.http.get(this.baseUrl + '/sandDisposals/batchId/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.saveSandDisposalByBatchId = function (batchId) {
        return this.http.post(this.baseUrl + '/sandDisposals/batchId/' + batchId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.updateSandDisposal = function (sandDisposal) {
        return this.http.put(this.baseUrl + '/sandDisposals', JSON.stringify(sandDisposal), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* getPercentage */
    ProductionMonitoringService.prototype.getPercentage = function (meltId) {
        console.log('getPercentage service');
        return this.http.get(this.baseUrl + '/getPercentage/' + meltId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* get Recently completed Melts */
    ProductionMonitoringService.prototype.getRecentlyCompletedMelts = function () {
        console.log('getRecentlyCompletedMelts service');
        return this.http.get(this.baseUrl + '/melts/recentlyCompletedMelts', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    /* getBatchId*/
    ProductionMonitoringService.prototype.getBatchId = function (meltNo) {
        return this.http.get(this.baseUrl + '/meltReports/' + meltNo, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService.prototype.saveRejection = function (rejection) {
        return this.http.post(this.baseUrl + '/rejections', JSON.stringify(rejection), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    ProductionMonitoringService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductionMonitoringService);
    return ProductionMonitoringService;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~production-monitoring-production-monitoring-module~rejection-reje~5bbf48bd.js.map