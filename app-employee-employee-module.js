(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-employee-employee-module"],{

/***/ "./src/app/employee/employee-dashboard/employee-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/employee/employee-dashboard/employee-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDashboardComponent", function() { return EmployeeDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");









class EmployeeDashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.getDate();
    }
    getDate() {
        let crrDate = new Date();
        setInterval(() => {
            let seconds = (new Date().getTime() - crrDate.getTime()) / 1000;
            this.dispTime = toHHMMSS(seconds);
        }, 1000);
        let toHHMMSS = (secs) => {
            let sec_num = parseInt(secs, 10);
            let hours = Math.floor(sec_num / 3600);
            let minutes = Math.floor(sec_num / 60) % 60;
            let seconds = sec_num % 60;
            return [hours, minutes, seconds]
                .map(v => v < 10 ? "0" + v : v)
                .filter((v, i) => v !== "00" || i > 0)
                .join(":");
        };
    }
    logout() {
        this.router.navigate(['/login']);
    }
}
EmployeeDashboardComponent.ɵfac = function EmployeeDashboardComponent_Factory(t) { return new (t || EmployeeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EmployeeDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDashboardComponent, selectors: [["app-employee-dashboard"]], decls: 18, vars: 2, consts: [["color", "primary"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxFlex", "90", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "25px"], ["matTooltip", "Dashboard", "mat-icon-button", "", 3, "routerLink"], ["mat-icon-button", "", 1, "header-logo-icon"], ["fxHide.xs", ""], [2, "margin-right", "20px"], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "start center"], ["matTooltip", "logout", "mat-icon-button", "", 3, "click"]], template: function EmployeeDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Employee Management Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDashboardComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dispTime);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["mat-toolbar-row[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  width: 100% !important;\n  background-color: #3f51b5;\n}\n\n.header-logo-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGFzaGJvYXJkL2VtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGFzaGJvYXJkL2VtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyLXJvdyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcbi5oZWFkZXItbG9nby1pY29ue1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-dashboard',
                templateUrl: './employee-dashboard.component.html',
                styleUrls: ['./employee-dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee/employee-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-dashboard/employee-dashboard.component */ "./src/app/employee/employee-dashboard/employee-dashboard.component.ts");
/* harmony import */ var _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employee-details/employee-details.component */ "./src/app/employee/employees/employee-details/employee-details.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employee/employees/employees.component.ts");







const routes = [
    {
        path: "",
        component: _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDashboardComponent"],
        children: [
            {
                path: '',
                redirectTo: 'employees'
            },
            {
                path: 'employees',
                component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"]
            },
            {
                path: 'employeeDetail/:employeeId',
                component: _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailsComponent"]
            },
        ]
    }
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/employee/employee-routing.module.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employee/employees/employees.component.ts");
/* harmony import */ var _employees_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/create-employee/create-employee.component */ "./src/app/employee/employees/create-employee/create-employee.component.ts");
/* harmony import */ var _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/employee-details/employee-details.component */ "./src/app/employee/employees/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-dashboard/employee-dashboard.component */ "./src/app/employee/employee-dashboard/employee-dashboard.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class EmployeeModule {
}
EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"], _employees_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"], _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"], _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"], _employees_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"], _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"], _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/employee/employees/create-employee/create-employee.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/employee/employees/create-employee/create-employee.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/employee.service */ "./src/app/employee/service/employee.service.ts");
/* harmony import */ var src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/spinner.service */ "./src/app/shared/spinner.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















function CreateEmployeeComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.createEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateEmployeeComponent {
    constructor(fb, snackBar, dialogRef, employeeService, spinnerService, dialogInjectedData) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.employeeService = employeeService;
        this.spinnerService = spinnerService;
        this.dialogInjectedData = dialogInjectedData;
        this.dialogTitle = "Create Employee";
        this.EmployeeDetailSubscription = null;
        this.EmployeeCreateSubscription = null;
        this.EmployeeUpdateSubscription = null;
    }
    ngOnInit() {
        if (this.dialogInjectedData.action == "update") {
            this.dialogTitle = "Update Employee";
            this.getEmployeeData(this.dialogInjectedData.id);
        }
        this.createLoginFormGroup();
    }
    createLoginFormGroup() {
        this.employeeFormGroup = this.fb.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[1-9][0-9]*$")]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[1-9][0-9]*$")]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[1-9][0-9]*$")]],
        });
    }
    getEmployeeData(employeeId) {
        this.spinnerService.setSpinnerVisibility(true);
        this.EmployeeDetailSubscription = this.employeeService.getEmployeeDetailsById(employeeId).subscribe((res) => {
            this.spinnerService.setSpinnerVisibility(false);
            if (res.status) {
                this.employeeData = res.data;
                this.setMenuDetails();
            }
            else {
                this.snackBar.open("No data found!!", '', {
                    duration: 2000,
                    horizontalPosition: 'end',
                    panelClass: ['Employee', 'mat-warn']
                });
            }
        }, error => {
            this.spinnerService.setSpinnerVisibility(false);
            this.snackBar.open("Something went wrong..!!", '', {
                duration: 2000,
                horizontalPosition: 'end',
                panelClass: ['Employee', 'mat-warn']
            });
        });
    }
    setMenuDetails() {
        this.employeeFormGroup.controls["id"].setValue(this.employeeData.id);
        this.employeeFormGroup.controls["age"].setValue(this.employeeData.employee_age);
        this.employeeFormGroup.controls["name"].setValue(this.employeeData.employee_name);
        this.employeeFormGroup.controls["salary"].setValue(this.employeeData.employee_salary);
    }
    createEmployee() {
        if (this.employeeFormGroup.valid) {
            let body = {
                "id": this.employeeFormGroup.get('id').value,
                "age": this.employeeFormGroup.get('age').value,
                "name": this.employeeFormGroup.get('name').value,
                "salary": this.employeeFormGroup.get('salary').value
            };
            this.spinnerService.setSpinnerVisibility(true);
            this.EmployeeCreateSubscription = this.employeeService.createEmployee(JSON.stringify(body)).subscribe(res => {
                this.spinnerService.setSpinnerVisibility(false);
                if (res.status) {
                    console.log('CreateRes', res);
                    this.snackBar.open(res.message, '', {
                        duration: 2000,
                        horizontalPosition: 'end',
                        panelClass: ['mat-toolbar', 'mat-primary']
                    });
                    this.dialogRef.close({ isNeedToReload: true });
                }
            }, error => {
                this.spinnerService.setSpinnerVisibility(false);
                this.snackBar.open("Something went wrong..!!", '', {
                    duration: 2000,
                    horizontalPosition: 'end',
                    panelClass: ['Employee', 'mat-warn']
                });
            });
        }
        else {
            this.employeeFormGroup.markAllAsTouched();
            this.snackBar.open("Please add proper field!", '', {
                duration: 2000,
                horizontalPosition: 'end',
                panelClass: ['Employee', 'mat-warn']
            });
        }
    }
    updateEmployee() {
        if (this.employeeFormGroup.valid) {
            let employeeId = this.employeeFormGroup.get('id').value;
            let body = {
                "id": this.employeeFormGroup.get('id').value,
                "age": this.employeeFormGroup.get('age').value,
                "name": this.employeeFormGroup.get('name').value,
                "salary": this.employeeFormGroup.get('salary').value
            };
            this.spinnerService.setSpinnerVisibility(true);
            this.EmployeeUpdateSubscription = this.employeeService.updateEmployee(employeeId, JSON.stringify(body)).subscribe(res => {
                this.spinnerService.setSpinnerVisibility(false);
                if (res.status) {
                    console.log('UpdateRes', res);
                    this.snackBar.open(res.message, '', {
                        duration: 2000,
                        horizontalPosition: 'end',
                        panelClass: ['mat-toolbar', 'mat-primary']
                    });
                    this.dialogRef.close({ isNeedToReload: true });
                }
            }, error => {
                this.spinnerService.setSpinnerVisibility(false);
                this.snackBar.open("Something went wrong..!!", '', {
                    duration: 2000,
                    horizontalPosition: 'end',
                    panelClass: ['Employee', 'mat-warn']
                });
            });
        }
        else {
            this.employeeFormGroup.markAllAsTouched();
            this.snackBar.open("Please add proper field!", '', {
                duration: 2000,
                horizontalPosition: 'end',
                panelClass: ['Employee', 'mat-warn']
            });
        }
    }
    onCloseDialogClick() {
        this.dialogRef.close({ isNeedToReload: false });
    }
    ngOnDestroy() {
        if (this.EmployeeDetailSubscription) {
            this.EmployeeDetailSubscription.unsubscribe();
        }
        if (this.EmployeeCreateSubscription) {
            this.EmployeeCreateSubscription.unsubscribe();
        }
        if (this.EmployeeUpdateSubscription) {
            this.EmployeeUpdateSubscription.unsubscribe();
        }
    }
}
CreateEmployeeComponent.ɵfac = function CreateEmployeeComponent_Factory(t) { return new (t || CreateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CreateEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEmployeeComponent, selectors: [["app-create-employee"]], decls: 36, vars: 4, consts: [["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "dialog-title"], ["matTooltip", "close", "mat-icon-button", "", 3, "click"], ["fxLayout", "column", "fxFlex", "100"], ["fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center stretch", 3, "formGroup"], ["fxFlex", "100", "appearance", "outline"], ["required", "", "matInput", "", "placeholder", "Enter employee id", "autocomplete", "off", "formControlName", "id"], ["required", "", "matInput", "", "placeholder", "Enter age", "autocomplete", "off", "formControlName", "age"], ["required", "", "matInput", "", "placeholder", "Enter Name", "autocomplete", "off", "formControlName", "name"], ["required", "", "matInput", "", "placeholder", "Enter salary", "autocomplete", "off", "formControlName", "salary"], ["fxLayout", "column", "fxLayoutAlign", "center"], ["mat-raised-button", "", "color", "primary", "fxFlex", "50", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "fxFlex", "50", 3, "click"]], template: function CreateEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_Template_button_click_4_listener() { return ctx.onCloseDialogClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Employee Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Employee Id must be valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Age must be valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name must be valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Salary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "salary must be valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateEmployeeComponent_button_34_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateEmployeeComponent_button_35_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.employeeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogInjectedData.action != "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogInjectedData.action == "update");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlcy9jcmVhdGUtZW1wbG95ZWUvY3JlYXRlLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-employee',
                templateUrl: './create-employee.component.html',
                styleUrls: ['./create-employee.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] }, { type: src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee/employees/employee-details/employee-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employee/employees/employee-details/employee-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/employee.service */ "./src/app/employee/service/employee.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/spinner.service */ "./src/app/shared/spinner.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












class EmployeeDetailsComponent {
    constructor(routes, employeeService, snackBar, location, spinnerService) {
        this.routes = routes;
        this.employeeService = employeeService;
        this.snackBar = snackBar;
        this.location = location;
        this.spinnerService = spinnerService;
        this.EmployeeDetailSubscription = null;
    }
    ngOnInit() {
        this.employeeId = this.routes.snapshot.params['employeeId'];
        this.getEmployeeData();
    }
    getEmployeeData() {
        this.spinnerService.setSpinnerVisibility(true);
        this.EmployeeDetailSubscription = this.employeeService.getEmployeeDetailsById(this.employeeId).subscribe((res) => {
            this.spinnerService.setSpinnerVisibility(false);
            if (res.status) {
                this.employeeData = res.data;
            }
            else {
                this.snackBar.open("No data found!!", '', {
                    duration: 2000,
                    horizontalPosition: 'end',
                    panelClass: ['Employee', 'mat-warn']
                });
            }
        }, error => {
            this.spinnerService.setSpinnerVisibility(false);
            this.snackBar.open("Something went wrong..!!", '', {
                duration: 2000,
                horizontalPosition: 'end',
                panelClass: ['Employee', 'mat-warn']
            });
        });
    }
    goBackToList() {
        this.location.back();
    }
    ngOnDestroy() {
        if (this.EmployeeDetailSubscription) {
            this.EmployeeDetailSubscription.unsubscribe();
        }
    }
}
EmployeeDetailsComponent.ɵfac = function EmployeeDetailsComponent_Factory(t) { return new (t || EmployeeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"])); };
EmployeeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDetailsComponent, selectors: [["app-employee-details"]], decls: 29, vars: 4, consts: [[1, "employee-detail-container"], ["fxFlex.xs", "90", "fxFlex", "50"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout.xs", "column", 1, "detail_header"], ["matTooltip", "Go Back", "mat-icon-button", "", 3, "click"], ["fxLayout", "column", "fxLayoutGap.xs", "20px", "fxLayoutGap.gt-xs", "30px"], ["fxFlex", "33"], [1, "mat-h4", "db"]], template: function EmployeeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailsComponent_Template_button_click_3_listener() { return ctx.goBackToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Employees Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Employee Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Employee Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Employee Salary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Employee Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData.employee_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData.employee_salary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData.employee_age);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"]], styles: [".employee-detail-container[_ngcontent-%COMP%] {\n  padding-top: 51px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin: 0px auto 50px;\n}\n\n.detail_header[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWVzL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZXMvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcGxveWVlLWRldGFpbC1jb250YWluZXJ7XHJcbiAgcGFkZGluZy10b3A6IDUxcHg7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDBweCBhdXRvIDUwcHg7XHJcbn1cclxuLmRldGFpbF9oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5zcGFue1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-details',
                templateUrl: './employee-details.component.html',
                styleUrls: ['./employee-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee/employees/employees.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/employees/employees.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-employee/create-employee.component */ "./src/app/employee/employees/create-employee/create-employee.component.ts");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/employee.service */ "./src/app/employee/service/employee.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/spinner.service */ "./src/app/shared/spinner.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");



















function EmployeesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Record Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesComponent_ng_template_10_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesComponent_ng_template_10_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const visit_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](visit_r11.id);
} }
function EmployeesComponent_ng_template_10_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesComponent_ng_template_10_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const visit_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", visit_r12.employee_name, " ");
} }
function EmployeesComponent_ng_template_10_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesComponent_ng_template_10_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_ng_template_10_mat_cell_9_Template_mat_cell_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_ng_template_10_mat_cell_9_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const visit_r13 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.editEmployee(visit_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_ng_template_10_mat_cell_9_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const visit_r13 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.deleteEmployee(visit_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "format_list_bulleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r14);
} }
function EmployeesComponent_ng_template_10_mat_header_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function EmployeesComponent_ng_template_10_mat_row_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_ng_template_10_mat_row_11_Template_mat_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const row_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.viewEmployeeDetails(row_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeesComponent_ng_template_10_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeesComponent_ng_template_10_mat_cell_3_Template, 2, 1, "mat-cell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmployeesComponent_ng_template_10_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmployeesComponent_ng_template_10_mat_cell_6_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmployeesComponent_ng_template_10_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeesComponent_ng_template_10_mat_cell_9_Template, 17, 1, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployeesComponent_ng_template_10_mat_header_row_10_Template, 1, 0, "mat-header-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmployeesComponent_ng_template_10_mat_row_11_Template, 1, 0, "mat-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.paidDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
} }
class EmployeesComponent {
    constructor(employeeService, snackBar, dialog, router, spinnerService) {
        this.employeeService = employeeService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.spinnerService = spinnerService;
        this.isNoRecordFound = false;
        this.EmployeeListSubscription = null;
        this.EmployeeDeleteSubscription = null;
        this.displayedColumns = ['id', 'employee_name', 'Actions'];
        this.paidDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.getAllEmployees();
    }
    getAllEmployees() {
        this.spinnerService.setSpinnerVisibility(true);
        this.EmployeeListSubscription = this.employeeService.getAllEmployees().subscribe((res) => {
            this.spinnerService.setSpinnerVisibility(false);
            if (res.status) {
                if (res.data.length == 0) {
                    this.isNoRecordFound = true;
                }
                else {
                    this.isNoRecordFound = false;
                }
                this.paidDataSource = res.data;
            }
        }, error => {
            this.spinnerService.setSpinnerVisibility(false);
            this.snackBar.open("Something went wrong..!!", '', {
                duration: 2000,
                horizontalPosition: 'end',
                panelClass: ['Employee', 'mat-warn']
            });
        });
    }
    addEmployee() {
        this.openEmployeeDialog("create", 0);
    }
    editEmployee(employeeId) {
        this.openEmployeeDialog("update", employeeId);
    }
    openEmployeeDialog(action, id) {
        const dialogRef = this.dialog.open(_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__["CreateEmployeeComponent"], {
            width: "450px",
            disableClose: true,
            data: {
                action: action,
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.isNeedToReload) {
                this.getAllEmployees();
            }
        });
    }
    deleteEmployee(employeeId) {
        this.spinnerService.setSpinnerVisibility(true);
        this.EmployeeDeleteSubscription = this.employeeService.deleteEmployee(employeeId).subscribe(res => {
            this.spinnerService.setSpinnerVisibility(false);
            if (res.status) {
                this.snackBar.open(res.message, '', {
                    duration: 2000,
                    horizontalPosition: 'end',
                    panelClass: ['mat-toolbar', 'mat-primary']
                });
                this.getAllEmployees();
            }
        }, error => {
            this.spinnerService.setSpinnerVisibility(false);
            this.snackBar.open("Something went wrong..!!", '', {
                duration: 2000,
                horizontalPosition: 'end',
                panelClass: ['Employee', 'mat-warn']
            });
        });
    }
    viewEmployeeDetails(employeeId) {
        this.router.navigate([`dashboard/employeeDetail/${employeeId}`]);
    }
    ngOnDestroy() {
        if (this.EmployeeListSubscription) {
            this.EmployeeListSubscription.unsubscribe();
        }
        if (this.EmployeeDeleteSubscription) {
            this.EmployeeDeleteSubscription.unsubscribe();
        }
    }
}
EmployeesComponent.ɵfac = function EmployeesComponent_Factory(t) { return new (t || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"])); };
EmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesComponent, selectors: [["app-employees"]], decls: 12, vars: 2, consts: [[1, "employee-list-container"], ["fxFlex.xs", "90", "fxFlex", "58"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.xs", "column", 1, "table_header"], ["fxFlex.xs", "100", "mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], ["recordFound", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], [3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "employee_name"], ["fxLayoutAlign.xs", "center center", 4, "matHeaderCellDef"], ["fxLayoutAlign.xs", "center center", 4, "matCellDef"], ["matColumnDef", "Actions"], ["fxLayoutAlign", "end center", 4, "matHeaderCellDef"], ["fxLayoutAlign", "end center", 3, "click", 4, "matCellDef"], [4, "matHeaderRowDef"], ["class", "example-element-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["fxLayoutAlign.xs", "center center"], ["fxLayoutAlign", "end center"], ["fxLayoutAlign", "end center", 3, "click"], ["dailyPerformanceMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["matListIcon", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["matTooltip", "Actions"], [1, "example-element-row", 3, "click"]], template: function EmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Employees List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesComponent_Template_button_click_5_listener() { return ctx.addEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeesComponent_div_9_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployeesComponent_ng_template_10_Template, 12, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNoRecordFound)("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".employee-list-container[_ngcontent-%COMP%] {\n  padding-top: 51px;\n}\n\n.table_header[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin: 0px auto 50px;\n}\n\n.example-element-row[_ngcontent-%COMP%]:hover, .example-element-row[_ngcontent-%COMP%]:focus {\n  \n  background-color: rgba(0, 0, 0, 0.041);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBREE7O0VBRUUsc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtbGlzdC1jb250YWluZXJ7XHJcbiAgcGFkZGluZy10b3A6IDUxcHg7XHJcbn1cclxuLnRhYmxlX2hlYWRlcntcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAwcHggYXV0byA1MHB4O1xyXG59XHJcbi5leGFtcGxlLWVsZW1lbnQtcm93OmhvdmVyLFxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdzpmb2N1cyB7XHJcbiAgLyogYmFja2dyb3VuZDogIzc3NzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQxKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employees',
                templateUrl: './employees.component.html',
                styleUrls: ['./employees.component.scss']
            }]
    }], function () { return [{ type: _service_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_shared_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee/service/employee.service.ts":
/*!******************************************************!*\
  !*** ./src/app/employee/service/employee.service.ts ***!
  \******************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class EmployeeService {
    constructor(http) {
        this.http = http;
    }
    getAllEmployees() {
        return this.http.get(`http://dummy.restapiexample.com/api/v1/employees`);
    }
    createEmployee(body) {
        return this.http.post(`http://dummy.restapiexample.com/api/v1/create`, body);
    }
    deleteEmployee(employeeId) {
        return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${employeeId}`);
    }
    getEmployeeDetailsById(employeeId) {
        return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${employeeId}`);
    }
    updateEmployee(employeeId, body) {
        return this.http.put(`http://dummy.restapiexample.com/api/v1/update/${employeeId}`, body);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-employee-employee-module.js.map