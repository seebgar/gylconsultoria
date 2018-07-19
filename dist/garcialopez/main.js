(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/portafolio/portafolio.component */ "./src/app/components/portafolio/portafolio.component.ts");
/* harmony import */ var _components_portafolio_capacitacion_capacitacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portafolio/capacitacion/capacitacion.component */ "./src/app/components/portafolio/capacitacion/capacitacion.component.ts");
/* harmony import */ var _components_portafolio_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/portafolio/contacto/contacto.component */ "./src/app/components/portafolio/contacto/contacto.component.ts");
/* harmony import */ var _components_portafolio_asociados_asociados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/portafolio/asociados/asociados.component */ "./src/app/components/portafolio/asociados/asociados.component.ts");
/* harmony import */ var _components_foro_foro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/foro/foro.component */ "./src/app/components/foro/foro.component.ts");
/* harmony import */ var _components_publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/publicacion/publicacion.component */ "./src/app/components/publicacion/publicacion.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _components_seed_seed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/seed/seed.component */ "./src/app/components/seed/seed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { state: 'home' } },
    { path: 'portafolio', component: _components_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__["PortafolioComponent"], data: { state: 'portafolio' } },
    { path: 'contacto', component: _components_portafolio_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"], data: { state: 'contacto' } },
    { path: 'asociados', component: _components_portafolio_asociados_asociados_component__WEBPACK_IMPORTED_MODULE_6__["AsociadosComponent"], data: { state: 'asociados' } },
    { path: 'portafolio/capacitacion', component: _components_portafolio_capacitacion_capacitacion_component__WEBPACK_IMPORTED_MODULE_4__["CapacitacionComponent"], data: { state: 'capacitacion' } },
    { path: 'foro', component: _components_foro_foro_component__WEBPACK_IMPORTED_MODULE_7__["ForoComponent"], data: { state: 'foro' } },
    { path: 'foro/publicaciones/:id', component: _components_publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_8__["PublicacionComponent"], data: { state: 'publicacion' } },
    { path: 'social', component: _components_social_social_component__WEBPACK_IMPORTED_MODULE_9__["SocialComponent"], data: { state: 'social' } },
    { path: 'social/posts/:id', component: _components_seed_seed_component__WEBPACK_IMPORTED_MODULE_10__["SeedComponent"], data: { state: 'seed' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-offcanvas-content\" id=\"home_base\">\n\n\n\n\n  <a class=\"uk-button uk-margin-top\" type=\"button\" uk-toggle=\"target: #offcanvas-nav-primary\" style=\"text-decoration: none; position: fixed; z-index: 100;\">\n    <i id=\"menu_icon\" class=\"icon ion-md-menu\" style=\"font-size: 65px; color: white;\"></i>\n  </a>\n\n\n\n\n\n  <router-outlet></router-outlet>\n\n\n\n\n\n\n  <div id=\"offcanvas-nav-primary\" uk-offcanvas=\"mode: push; overlay: true\">\n    <div class=\"uk-offcanvas-bar uk-flex uk-flex-column\" style=\"height: 100vh; width: 100%;\">\n\n      <ul class=\"uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical\">\n\n        <li *ngIf=\"auth.author | async; then authenticated else guest\">\n\n        </li>\n\n        <ng-template #authenticated>\n          <div *ngIf=\"auth.author | async as author\">\n            <p>{{author.displayName}}</p>\n            <img class=\"uk-comment-avatar\" style=\"margin-top: -1em;\" src=\"{{author.photoURL}}\" width=\"60\" height=\"auto\" alt=\"\">\n            <br/>\n            <button (click)=\"auth.logout()\" class=\"uk-button uk-button-text\" style=\"margin-top: -1em;\">Salir</button>\n            <br/>\n          </div>\n        </ng-template>\n\n\n        <ng-template #guest>\n          <div class=\"uk-margin\">\n            <a (click)=\"auth.google_login(); intenta_votar = false;\" style=\"text-decoration: none\">\n              <h1 style=\" font-family: 'Roboto'; font-size: 18px; font-weight: 300; color: rgb(167, 167, 167);\">\n                <i class=\"icon ion-logo-googleplus\" style=\"font-size: 30px;\"></i> &nbsp; Inicia sesión\n              </h1>\n            </a>\n          </div>\n        </ng-template>\n\n\n        <li class=\"uk-nav-divider\"></li>\n        \n\n        <li class=\"uk-nav-header\">MENU</li>\n        <li routerLink=\"/home\" uk-toggle=\"target: #offcanvas-nav-primary\">\n          <a>Inicio</a>\n        </li>\n        <li routerLink=\"/portafolio\" uk-toggle=\"target: #offcanvas-nav-primary\">\n          <a>Portafolio de Servicios</a>\n        </li>\n        <li routerLink=\"/asociados\" href=\"#asociados\" uk-toggle=\"target: #offcanvas-nav-primary\">\n          <a>Asociados</a>\n        </li>\n\n        <li routerLink=\"/social\" uk-toggle=\"target: #offcanvas-nav-primary\">\n          <a>Social</a>\n        </li>\n        <li routerLink=\"/foro\" href=\"#\" uk-toggle=\"target: #offcanvas-nav-primary\">\n          <a>Foro</a>\n        </li>\n\n        <li routerLink=\"/contacto\" href=\"#\" uk-toggle=\"target: #offcanvas-nav-primary\">\n          <a>Contacto</a>\n        </li>\n      </ul>\n\n      <a class=\"uk-button\" type=\"button\" uk-toggle=\"target: #offcanvas-nav-primary\" style=\"text-decoration: none;\">\n        <i class=\"icon ion-md-close\" style=\"font-size: 55px; color: whitesmoke;\"></i>\n      </a>\n\n    </div>\n  </div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authors.service */ "./src/app/services/authors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authors_service__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/portafolio/portafolio.component */ "./src/app/components/portafolio/portafolio.component.ts");
/* harmony import */ var _components_portafolio_capacitacion_capacitacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/portafolio/capacitacion/capacitacion.component */ "./src/app/components/portafolio/capacitacion/capacitacion.component.ts");
/* harmony import */ var _components_portafolio_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/portafolio/contacto/contacto.component */ "./src/app/components/portafolio/contacto/contacto.component.ts");
/* harmony import */ var _components_portafolio_asociados_asociados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/portafolio/asociados/asociados.component */ "./src/app/components/portafolio/asociados/asociados.component.ts");
/* harmony import */ var _components_foro_foro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/foro/foro.component */ "./src/app/components/foro/foro.component.ts");
/* harmony import */ var _components_publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/publicacion/publicacion.component */ "./src/app/components/publicacion/publicacion.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/authors.service */ "./src/app/services/authors.service.ts");
/* harmony import */ var _services_publications_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/publications.service */ "./src/app/services/publications.service.ts");
/* harmony import */ var _services_social_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var _components_seed_seed_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/seed/seed.component */ "./src/app/components/seed/seed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_13__["PortafolioComponent"],
                _components_portafolio_capacitacion_capacitacion_component__WEBPACK_IMPORTED_MODULE_14__["CapacitacionComponent"],
                _components_portafolio_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_15__["ContactoComponent"],
                _components_portafolio_asociados_asociados_component__WEBPACK_IMPORTED_MODULE_16__["AsociadosComponent"],
                _components_foro_foro_component__WEBPACK_IMPORTED_MODULE_17__["ForoComponent"],
                _components_publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_18__["PublicacionComponent"],
                _components_social_social_component__WEBPACK_IMPORTED_MODULE_19__["SocialComponent"],
                _components_seed_seed_component__WEBPACK_IMPORTED_MODULE_23__["SeedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, "garcialopezprod"),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [
                _services_authors_service__WEBPACK_IMPORTED_MODULE_20__["AuthorsService"],
                _services_publications_service__WEBPACK_IMPORTED_MODULE_21__["PublicationsService"],
                _services_social_service__WEBPACK_IMPORTED_MODULE_22__["SocialService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/foro/foro.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/foro/foro.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/foro/foro.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/foro/foro.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute; top: 0; width: 100%; min-height: 100vh; overflow-x: hidden; background-color: whitesmoke\">\n\n\n\n\n    <a class=\"uk-button uk-margin-top\" type=\"button\" uk-toggle=\"target: #offcanvas-nav-primary\" style=\"text-decoration: none; position: fixed; z-index: 100;\">\n        <i id=\"menu_icon\" class=\"icon ion-md-menu\" style=\"font-size: 65px;\"></i>\n      </a>\n\n\n\n\n\n\n\n    <div uk-grid>\n      <div class=\"uk-width-1-3@m\"></div>\n      <div class=\"uk-width-1-3@m\">\n        <div id=\"logo_black\"></div>\n      </div>\n      <div class=\"uk-width-1-3@m\"></div>\n    </div>\n\n\n\n\n    <div id=\"modal-post-publication\" uk-modal>\n      <div class=\"uk-modal-dialog\">\n\n\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n        <div class=\"uk-modal-header\">\n          <h2 *ngIf=\"!publicado\" class=\"uk-modal-title\">Crea una nueva publicación</h2>\n          <h2 *ngIf=\"publicado\" class=\"uk-modal-title\" style=\"color: rgb(31, 177, 61);\">Publicado!</h2>\n        </div>\n\n        <div *ngIf=\"!publicado\" class=\"uk-modal-body\">\n          <form (ngSubmit)=\"onSubmit(publicationForm)\" #publicationForm=\"ngForm\">\n            <fieldset class=\"uk-fieldset\">\n              <div class=\"uk-margin\">\n                <input [(ngModel)]=\"publication.title\" #title=\"ngModel\" name=\"title\" required minlength=\"1\" [ngClass]=\"{'uk-form-danger': title.errors && title.touched}\"\n                  class=\"uk-input\" type=\"text\" placeholder=\"Un título interesante\">\n              </div>\n              <div class=\"uk-margin\">\n                <input [(ngModel)]=\"publication.text\" #text=\"ngModel\" name=\"text\" required minlength=\"1\" [ngClass]=\"{'uk-form-danger': text.errors && text.touched}\"\n                  class=\"uk-input\" type=\"text\" placeholder=\"Breve descripción de la publicación\">\n              </div>\n              <div class=\"uk-margin\">\n                <input [(ngModel)]=\"publication.image\" #image=\"ngModel\" name=\"image\" [ngClass]=\"{'uk-form-danger': image.errors && image.touched}\"\n                  class=\"uk-input\" type=\"text\" placeholder=\"URL Imagen representantiva\">\n              </div>\n              <br/>\n              <hr/>\n              <div class=\"uk-margin uk-text-right\">\n                <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n                <button type=\"submit\" [disabled]=\"!publicationForm.form.valid\" class=\"uk-button uk-button-primary\">\n                  Publicar\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n\n        <div *ngIf=\"publicado\" class=\"uk-modal-body\">\n          <div class=\"uk-margin uk-text-center\">\n            <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Listo</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n    <div uk-grid>\n      <div class=\"uk-width-1-6@m\"></div>\n      <div class=\"uk-width-expand@m\">\n        <div style=\"position: relative;\">\n\n\n\n          <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Nuestro Foro</h1>\n\n\n          <div *ngIf=\"auth.author | async as author\">\n            <a *ngIf=\"author.rol == 'admin'\" (click)=\"publicado = false\" href=\"#modal-post-publication\" uk-toggle>\n              <h1>\n                <i class=\"icon ion-md-add\" style=\"font-size: 75px; position: absolute; top: 0em; right: 1em;\"></i>\n              </h1>\n            </a>\n          </div>\n\n\n          <hr/>\n\n          <br/>\n          <br/>\n\n          <div uk-grid=\"masonry: true\">\n\n\n            <div class=\"uk-width-1-2@m\" *ngFor=\"let pub of publications | async\">\n              <div class=\"uk-card uk-card-default\">\n\n\n                <a routerLink=\"/foro/publicaciones/{{pub.id}}\" style=\"text-decoration: none;\">\n                  <div class=\"uk-card-media-top\">\n                    <img [src]=\"pub.image\" alt=\"\">\n                  </div>\n                </a>\n                <div class=\"uk-card-body\">\n                  <a routerLink=\"/foro/publicaciones/{{pub.id}}\" style=\"text-decoration: none;\">\n                    <h3 class=\"uk-card-title\">{{pub.title}}</h3>\n                  </a>\n                  <h6 style=\"margin-top: -1em;\"> {{pub.visits}} Visitas &nbsp; | &nbsp; {{pub.posts.length}} Publicaciones</h6>\n                  <p>{{pub.text}}</p>\n\n                  <div *ngIf=\"auth.author | async as author\">\n\n                    <div *ngIf=\"author.rol == 'admin'\" class=\"uk-text-right\" style=\"z-index: 100;\" uk-grid>\n                      <div class=\"uk-width-1-2@m\"></div>\n                      <div class=\"uk-width-1-6@m\"></div>\n\n                      <div class=\"uk-width-1-6@m\">\n                        <h1>\n                          <a style=\"text-decoration: none;\" href=\"#modal-full-{{pub.id}}\" uk-toggle (click)=\"actualizando = false\">\n                            <i class=\"icon ion-md-crop\" style=\"font-size: 45px;\"></i>\n                          </a>\n                        </h1>\n                      </div>\n\n                      <div class=\"uk-width-1-6@m\">\n                        <h1>\n                          <a (click)=\"delete(pub.id)\">\n                            <i class=\"icon ion-md-trash\" style=\"font-size: 45px;\"></i>\n                          </a>\n                        </h1>\n                      </div>\n\n\n\n                    </div>\n                  </div>\n\n                </div>\n\n              </div>\n\n\n\n\n\n              <div id=\"modal-full-{{pub.id}}\" class=\"uk-modal-full\" uk-modal>\n                <div class=\"uk-modal-dialog\" style=\"height: 100vh; width: 100%; overflow: hidden;\">\n                  <div style=\"padding-top: 5em;\">\n                    <a class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close>\n                    </a>\n                    <div uk-grid>\n                      <div class=\"uk-width-1-4@m\"></div>\n                      <div class=\"uk-width-expand@m\">\n\n\n                        <div class=\"uk-card\">\n                          <div class=\"uk-card-header\" style=\"margin-bottom: -1em\">\n                            <h2 *ngIf=\"!actualizando\" class=\"uk-modal-title\">Editar la publicación</h2>\n                            <h2 *ngIf=\"actualizando\" class=\"uk-modal-title\" style=\"color: rgb(31, 177, 61);\">Editado!</h2>\n                          </div>\n\n                          <div *ngIf=\"!actualizando\" class=\"uk-card-body\" style=\"margin-top: -1em;\">\n                            <form (ngSubmit)=\"update(updateForm, pub.id)\" #updateForm=\"ngForm\">\n                              <fieldset class=\"uk-fieldset\">\n                                <div class=\"uk-margin\">\n                                  <input class=\"uk-input\" type=\"text\" name=\"title\" value=\"{{pub.title}}\" placeholder=\"{{pub.title}}\" [(ngModel)]=\"pub.title\">\n                                </div>\n                                <div class=\"uk-margin\">\n                                  <input class=\"uk-input\" type=\"text\" name=\"text\" value=\"{{pub.text}}\" placeholder=\"{{pub.text}}\" [(ngModel)]=\"pub.text\">\n                                </div>\n                                <div class=\"uk-margin\">\n                                  <input class=\"uk-input\" type=\"text\" name=\"image\" value=\"{{pub.image}}\" placeholder=\"{{pub.image}}\" [(ngModel)]=\"pub.image\">\n                                </div>\n                                <br/>\n                                <hr/>\n                                <div class=\"uk-margin uk-text-right\">\n                                  <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n                                  <button type=\"submit\" [disabled]=\"!updateForm.form.valid\" class=\"uk-button uk-button-primary\">\n                                    Confirmar\n                                  </button>\n                                </div>\n                              </fieldset>\n                            </form>\n                          </div>\n\n\n                          <div *ngIf=\"actualizando\" class=\"uk-card-body\">\n                            <div class=\"uk-margin uk-text-center\">\n                              <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Listo</button>\n                            </div>\n                          </div>\n\n                        </div>\n\n\n                      </div>\n                      <div class=\"uk-width-1-4@m\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n\n\n\n\n\n\n            </div>\n\n            <div *ngIf=\"!(publications | async)\">\n              <h1 style=\" font-family: 'Roboto'; font-size: 20px; font-weight: 300; color: rgba(167, 167, 167, 0.534);\">Cragando...</h1>\n            </div>\n\n\n\n\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"uk-width-1-6@m\"></div>\n    </div>\n\n\n\n\n\n\n\n    <div id=\"nbsp-inline\">\n      &nbsp;\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foro/foro.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/foro/foro.component.ts ***!
  \***************************************************/
/*! exports provided: ForoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoComponent", function() { return ForoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_publications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/publications.service */ "./src/app/services/publications.service.ts");
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authors.service */ "./src/app/services/authors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForoComponent = /** @class */ (function () {
    function ForoComponent(router, pub_service, auth) {
        this.router = router;
        this.pub_service = pub_service;
        this.auth = auth;
        this.publicado = false;
        this.mujer = false;
        this.publication = {};
    }
    ForoComponent.prototype.ngOnInit = function () {
        this.actualizando = false;
        this.admin = true;
        this.publications = this.pub_service.get_publications();
        //this.sort_publications();
    };
    ForoComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        value.date = new Date().toLocaleString();
        value.visits = 0;
        value.posts = [];
        this.pub_service.post_publication(value);
        this.form.reset();
        this.publicado = true;
        this.publication = {};
        //this.sort_publications();
    };
    ForoComponent.prototype.delete = function (id) {
        if (confirm("Seguro que quieres borrar esta publicación?")) {
            this.pub_service.delete_publication(id);
        }
    };
    ForoComponent.prototype.update = function (_a, id) {
        var value = _a.value, valid = _a.valid;
        value.id = id;
        this.pub_service.put_publication(value);
        this.actualizando = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('publicationForm'),
        __metadata("design:type", Object)
    ], ForoComponent.prototype, "form", void 0);
    ForoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foro',
            template: __webpack_require__(/*! ./foro.component.html */ "./src/app/components/foro/foro.component.html"),
            styles: [__webpack_require__(/*! ./foro.component.css */ "./src/app/components/foro/foro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"],
            _services_authors_service__WEBPACK_IMPORTED_MODULE_3__["AuthorsService"]])
    ], ForoComponent);
    return ForoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div uk-grid>\n  <div class=\"uk-width-1-3@m\"></div>\n  <div class=\"uk-width-1-3@m\">\n    <div id=\"logo\"></div>\n  </div>\n  <div class=\"uk-width-1-3@m\"></div>\n</div>\n\n\n\n\n\n\n<div id=\"nbsp\">\n  &nbsp;\n</div>\n\n\n<div uk-grid>\n  <div class=\"uk-width-1-6@m\" style=\"background-color: white;\"></div>\n  <div class=\"uk-width-1-3@m\" style=\"background-color: white; border-radius: 0 3em 3em 0\">\n    <div style=\"padding: 5em 2.5em 5em 0em;\">\n      <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Visión</h1>\n      <p>\n        Consolidarnos en el 2020 como una empresa referente en el mercado en los servicios que presta, que aplica los sistemas de\n        calidad en la prestación de sus servicios, que genera trabajo digno y estable para sus empleados y que mejora continuamente\n        con la retroalimentación de cada uno de nuestros clientes.\n      </p>\n    </div>\n  </div>\n  <div class=\"uk-width-expand@m\"></div>\n</div>\n\n\n\n\n\n\n<div id=\"nbsp-inline\">\n  &nbsp;\n</div>\n\n\n<div uk-grid>\n  <div class=\"uk-width-1-6@m\"></div>\n  <div class=\"uk-width-expand@m\" style=\"background-color: white; border-radius: 3em\">\n    <div style=\"padding: 3em;\">\n      <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Misión</h1>\n      <p>\n        Somos una empresa experta en servicios legales, de formación y capacitación, dedicada a proveer soluciones ajustadas a las\n        necesidades propias de cada cliente u organización, generando valor agregado en cada una de nuestras actuaciones\n        lo cual permite el logro de los objetivos de nuestros clientes. Nuestros servicios se enfocan a la prestación de\n        servicios profesionales o de consultoría en asesoría legal en el campo del derecho público y privado, así como en\n        el ejercicio de la representación legal y/o la defensa jurídica de personas naturales o jurídicas, nacionales o extranjeras\n        ante las autoridades judiciales o administrativas a nivel nacional o internacional. \n      </p>\n\n        <p [style.display]=\"!readmore ? 'none' : 'block'\">\n            Igualmente, prestamos nuestros\n            servicios en el desarrollo de procesos de capacitación y formación con la finalidad de desarrollar y cualificar el\n            talento humano en las empresas públicas o privadas, con miras a facilitar la consecución de sus objetivos. Nuestra\n            experiencia en la gestión pública administrativa, en la defensa de los derechos e intereses de nuestros clientes\n            y en la gestión del conocimiento de las organizaciones, nos permite contar con los conocimientos para enfrentar la\n            incertidumbre, la complejidad creciente y los altos riesgos del mundo actual.\n        </p>\n    \n\n        <a (click)=\"readmore = !readmore\" [textContent]=\"readmore ? 'leer menos...' : 'leer más...'\"> &nbsp; leer más...</a>\n        \n        \n\n\n      <br/>\n      <br/>\n      <div uk-grid class=\"uk-text-center\">\n          <div class=\"uk-width-1-3@m\"></div>\n          <div class=\"uk-width-1-3@m\"><a style=\"font-size: 18px;\" class=\"uk-button uk-button-text\" routerLink=\"/portafolio\">Portafolio de Servicios</a></div>\n          <div class=\"uk-width-1-3@m\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-6@m\"></div>\n</div>\n\n\n\n\n\n\n\n<div id=\"nbsp-inline\">\n  &nbsp;\n</div>\n\n\n<div uk-grid id=\"asociados\">\n  <div class=\"uk-width-expand@m\"></div>\n\n  <div class=\"uk-width-1-3@m\" style=\"background-color: white; border-radius: 3em 0em 0em 3em\">\n    <div style=\"padding: 5em 2.5em;\">\n      <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Asociados</h1>\n      <div class=\"uk-margin-auto-vertical\">\n        <div id=\"asociadp_1\"></div>\n        <p>Carlos Humberto Garcia Orrego</p>\n        <hr style=\"width: 250px;\" />\n        <p>\n          <i class=\"icon ion-ios-call\"></i>&nbsp;&nbsp;&nbsp;(+57) 313 893-5855 </p>\n          <br/>\n          <p style=\"font-synthesis: 16px; margin-top: -1.5em;\">\n          <i class=\"icon ion-md-mail\" ></i>&nbsp;carloshgarciaorr@hotmail.com</p>\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"uk-width-1-6@m\" style=\"background-color: white;\"></div>\n</div>\n\n\n\n\n\n\n\n\n\n<div id=\"nbsp-inline\">\n  &nbsp;\n</div>\n\n<br/>\n<br/>\n\n\n\n<div uk-grid>\n  <div class=\"uk-width-expand@m\" style=\"background-color: white;\">\n    <div style=\"padding: 5em;\">\n      <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Contacto</h1>\n     \n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">dirección</h1>\n      <p style=\"font-size: 30px\">\n        Carrera 54D Número 135- 06\n        <br/> Torres Aqua Oficina 1004\n        <br/> Bogotá D.C.\n      </p>\n      \n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">celular</h1>\n      <p style=\"font-size: 30px\">\n          (+57) 313 893-5855\n      </p>\n\n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">correo</h1>\n      <p style=\"font-size: 30px\">\n          carloshgarciaorr@hotmail.com\n      </p>\n\n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">siguenos</h1>\n      <a href=\"https://www.instagram.com/g_lsas/\" style=\"text-decoration: none; color: black;\"><span uk-icon=\"icon: instagram; ratio: 2.5\"></span></a>\n      <span> &nbsp; @g_lsas</span>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.readmore = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio/asociados/asociados.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/portafolio/asociados/asociados.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portafolio/asociados/asociados.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/portafolio/asociados/asociados.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 100vh;\">\n\n\n\n  <div id=\"nbspasociados\">\n    &nbsp;\n  </div>\n\n\n\n\n  <div uk-grid>\n    <div class=\"uk-width-1-6@m\"></div>\n    <div class=\"uk-width-expand@m\" style=\"background-color: white; border-radius: 3em;\">\n      <div style=\"padding: 3em;\">\n        <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Asociados</h1>\n\n\n\n        <div class=\"uk-panel\">\n          <div class=\"uk-align-center uk-align-right@m uk-margin-remove-adjacent\"  id=\"asociadp_1\"></div>\n\n          <br/>\n          <br/>\n          <h1 style=\" font-family: 'Roboto'; font-size: 40px; font-weight: 400; color: rgb(43, 43, 43);\">Carlos Humberto García Orrego</h1>\n          <h1 style=\" font-family: 'Roboto'; font-size: 20px; font-weight: 300; color: rgb(167, 167, 167); margin-top: -1em;\">Socio</h1>\n\n\n        </div>\n\n\n        <ul class=\"uk-list uk-list-divider\">\n          <li>\n            <p>Magíster en derecho administrativo Universidad Libre de Colombia.</p>\n          </li>\n          <li>\n            <p>Abogado de la Universidad Libre de Colombia</p>\n          </li>\n          <li>\n            <p>Especializado en Contratación Estatal de la Universidad Externado de Colombia, 2009 </p>\n          </li>\n          <li>\n            <p>Especializado en Planeación Educativa de la Pontificia Universidad Javeriana, 2006</p>\n          </li>\n          <li>\n            <p>Especializado en Derecho Penal de la Universidad Externado de Colombia 1996</p>\n          </li>\n          <li>\n            <p>Especializado en Derecho Administrativo Universidad Colegio Mayor de Nuestra Señora del Rosario 1994</p>\n          </li>\n          <li>\n            <p>Docente en las áreas de derecho administrativo colombiano, contratación estatal, derecho disciplinario, estructura\n              del Estado y temas de gestión organizacional, desarrolladas en diversas actividades de capacitación adelantadas\n              por la Escuela de Investigación Criminal y Criminalística de la Fiscalía General de la Nación, Universidad\n              Santo Tomás, Universidad Libre, Católica de Colombia, Santiago de Cali, Universidad de la Amazonía, Escuela\n              Superior de Administración Pública ESAP y del Instituto de Estudios del Ministerio Público de la Procuraduría\n              General de la Nación.</p>\n          </li>\n          <li>\n            <p>Lider en la red de formadores del Instituto de Estudios del Ministerio Público de la Procuraduría General de\n              la Nación.\n              <br/> Dirigió la publicación Reflexiones Académicas en Derecho Disciplinario y Contratación Estatal que edita el\n              Instituto de Estudios del Ministerio Público.</p>\n          </li>\n          <li>\n              <p>Dirigió la publicación Reflexiones Académicas en Derecho Disciplinario y Contratación Estatal que edita el\n                Instituto de Estudios del Ministerio Público.</p>\n            </li>\n          <li>\n            <p>Jefe de la Oficina de Control Interno y como Jefe de la División de Capacitación del Instituto de Estudios del\n              Ministerio Público de la Procuraduría General de la Nación.</p>\n          </li>\n\n        </ul>\n\n\n\n\n      </div>\n    </div>\n    <div class=\"uk-width-1-6@m\"></div>\n  </div>\n\n\n\n  <div id=\"nbspasociados\">\n    &nbsp;\n  </div>\n\n\n  <div id=\"nbspasociados\">\n    &nbsp;\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/portafolio/asociados/asociados.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/portafolio/asociados/asociados.component.ts ***!
  \************************************************************************/
/*! exports provided: AsociadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociadosComponent", function() { return AsociadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsociadosComponent = /** @class */ (function () {
    function AsociadosComponent() {
    }
    AsociadosComponent.prototype.ngOnInit = function () {
    };
    AsociadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asociados',
            template: __webpack_require__(/*! ./asociados.component.html */ "./src/app/components/portafolio/asociados/asociados.component.html"),
            styles: [__webpack_require__(/*! ./asociados.component.css */ "./src/app/components/portafolio/asociados/asociados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AsociadosComponent);
    return AsociadosComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio/capacitacion/capacitacion.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/portafolio/capacitacion/capacitacion.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portafolio/capacitacion/capacitacion.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/portafolio/capacitacion/capacitacion.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 100vh;\">\n\n\n  <div uk-grid>\n    <div class=\"uk-width-1-6@m\"></div>\n    <div class=\"uk-width-expand@m\" style=\"background-color: white; border-radius: 3em;\">\n      <div style=\"padding: 3em;\">\n        <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Capacitación</h1>\n\n        <br/>\n        <br/>\n\n        <ul uk-accordion class=\"uk-margin-bottom\" style=\"margin-bottom: 5em;\">\n\n\n          <li class=\"uk-open\">\n            <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Justificación</a>\n            <div class=\"uk-accordion-content\">\n              <p>G&L Capacitación atiende y diseña las soluciones de capacitación conforme al diagnóstico de necesidades de\n                capacitación de las entidades públicas o privadas, privilegiando la participación de los funcionarios en\n                la construcción del currículo y el diseño de las metodologías de aprendizaje, generando valor agregado en\n                cada una de nuestras actuaciones lo cual permite el logro de los objetivos de nuestros clientes. Nuestra\n                experiencia en la gestión pública administrativa y en la gestión del conocimiento de las organizaciones,\n                nos permite contar con los conocimientos para enfrentar la incertidumbre, la complejidad creciente y los\n                altos riesgos del mundo actual.</p>\n            </div>\n          </li>\n\n          <li>\n            <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Ciclo del Proceso </a>\n            <div class=\"uk-accordion-content\">\n              <p>\n                Para ello, el área de capacitacion de G&L desarrolla sus procesos con base en un conjunto de acciones que facilitan el aprendizaje\n                organizacional y la gestión de conocimiento de la siguiente manera: </p>\n              <ul class=\"uk-list uk-list-bullet\">\n                <li>\n                  <p>Diagnóstico de necesidades de capacitación: Identificación de las necesidades de acuerdo a la misión y\n                    objetivos estratégicos planteados por la organización. </p>\n                </li>\n                <li>\n                  <p>Planeación. Se priorizan las acciones a desarrollar de acuerdo a los recursos.</p>\n                </li>\n                <li>\n                  <p>Elaboración y propuesta de diseños curriculares pertinentes y oportunos, tendientes a satisfacer las necesidades\n                    de formación de la organización.</p>\n                </li>\n                <li>\n                  <p>Ejecución y seguimiento: Se realiza en el desarrollo y control de las actividades para que concuerden con\n                    lo planeado.</p>\n                </li>\n                <li>\n                  <p>Evaluación y retroalimentación: Proceso que nos permite valorar los resultados conseguidos en torno a los\n                    objetivos de la organización y mejorar continuamente el proceso de capacitación.</p>\n                </li>\n              </ul>\n            </div>\n          </li>\n\n\n          <li>\n            <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Programas Académicos</a>\n            <div class=\"uk-accordion-content\">\n              <p>Nuestra propuesta de capacitación incluye una amplia oferta de programas, cursos, talleres de formación y actualización,\n                orientados a apoyar a los participantes en las distintas etapas de su desarrollo profesional, así como en\n                sus necesidades particulares. Ofrecemos soluciones de capacitación ágiles y aplicadas a la realidad de la\n                organización y al tiempo disponible de los participantes.</p>\n\n              <ul class=\"uk-margin-left\" uk-accordion>\n\n                <li>\n                  <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Curso Virtual</a>\n                  <div class=\"uk-accordion-content\">\n                    <p>\n                      Se propone la elaboración de un curso de inducción - reinducción virtual con el objetivo de facilitar la integración del\n                      empleado a la cultura organizacional, al Plan Estratégico de la Administración y a la comprensión de\n                      los principales aspectos misionales, administrativos y control de la entidad.\n                      <br/> Con el apoyo en las herramientas tecnológicas, se incorporan las tecnologías de la información y la\n                      comunicación para el uso de una plataforma educativa virtual que permita la producción de objetos virtuales\n                      de aprendizaje y de información.\n                      <br/> La principal ventaja de esta modalidad, es la de permitir el inicio del proceso de inducción cada\n                      vez que se produzca la incorporación de un nuevo empleado, sin necesidad de esperar a conformar un\n                      grupo como sucede con la capacitación presencial y además puede ser adelantado en cualquier momento\n                      por el usuario pues se cuenta con disponibilidad los 7 días de la semana durante las 24 horas del día.\n                      <br/>\n                    </p>\n                  </div>\n                </li>\n\n\n                <li>\n                  <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Capacitación presencial - Bloques temáticos</a>\n                  <div class=\"uk-accordion-content\">\n\n                    <ul class=\"uk-margin-left\" uk-accordion>\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">1. Gestión pública</a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Gerencia de las políticas públicas y su ciclo. </p>\n                            </li>\n                            <li>\n                              <p>Planeación. </p>\n                            </li>\n                            <li>\n                              <p>Sistemas de Gestión de Proyectos, Gestión Integrada de Proyectos. </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">2. El contrato estatal, el sistema de compra pública y el presupuesto </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Contratación estatal. Principios en la contratación estatal. Planeación contractual. Plan anual\n                                de contratación. Procedimientos de selección de contratistas. Fases del proceso contractual:\n                                Planeación, selección, contratación y ejecución. Colombia compra eficiente. Nuevos esquemas\n                                de compra pública. </p>\n                            </li>\n                            <li>\n                              <p>Supervisión e interventoría. </p>\n                            </li>\n                            <li>\n                              <p>Proyecto de reforma a la Ley 80 de 1993 y a la Ley 1150 de 2007. </p>\n                            </li>\n                            <li>\n                              <p>Presupuesto público, Elementos conceptuales y normativos, Proyecto político de gobierno, Plan\n                                de desarrollo, Plan financiero, Plan operativo anual de inversiones, regalías, lineamientos\n                                para la inversión de recursos de regalías. </p>\n                            </li>\n                          </ul>\n                        </div>\n                      </li>\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">3. Procesos de control </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Control interno de gestión. Modelo Estándar de Control Interno. </p>\n                            </li>\n                            <li>\n                              <p>Control interno disciplinario. Fundamentos constitucionales de la potestad disciplinaria. Estructura\n                                de la falta disciplinaria. Dogmática de la sanción disciplinaria. El proceso disciplinario.\n                              </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">4. Gestión del talento humano </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Liderazgo </p>\n                            </li>\n                            <li>\n                              <p>Comunicación asertiva </p>\n                            </li>\n                            <li>\n                              <p>Trabajo en equipo </p>\n                            </li>\n                            <li>\n                              <p>Resolución de conflictos </p>\n                            </li>\n                            <li>\n                              <p>Motivación personal </p>\n                            </li>\n                            <li>\n                              <p>Articulación de valores y principios personales e institucionales </p>\n                            </li>\n                            <li>\n                              <p>Manejo del tiempo </p>\n                            </li>\n                            <li>\n                              <p>Toma de decisiones </p>\n                            </li>\n                          </ul>\n                        </div>\n                      </li>\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">5. Ley 1437 de 2011 – Código General del Proceso Administrativo y Contencioso Administrativo (CPACA)</a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Procedimiento administrativo. </p>\n                            </li>\n                            <li>\n                              <p>Procedimiento administrativo general. </p>\n                            </li>\n                            <li>\n                              <p>Procedimiento administrativo sancionatorio.</p>\n                            </li>\n                            <li>\n                              <p>Utilización de medio electrónicos. </p>\n                            </li>\n                            <li>\n                              <p>Publicaciones, notificaciones y recursos. </p>\n                            </li>\n                            <li>\n                              <p>Medios de control. </p>\n                            </li>\n                            <li>\n                              <p>Proceso contencioso administrativo. Demanda. Etapas del proceso.</p>\n                            </li>\n                            <li>\n                              <p>Pruebas</p>\n                            </li>\n                            <li>\n                              <p>Medidas cautelares. </p>\n                            </li>\n                            <li>\n                              <p>Recursos ordinarios y extraordinarios. </p>\n                            </li>\n\n\n                          </ul>\n                        </div>\n                      </li>\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">6. Participación ciudadana y control social </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Derecho de petición y ley de transparencia. </p>\n                            </li>\n                            <li>\n                              <p>Las acciones constitucionales como herramienta fundamental en el ejercicio de la protección\n                                de los derechos. </p>\n                            </li>\n                            <li>\n                              <p>Mecanismos de participación y control social. </p>\n                            </li>\n                            <li>\n                              <p>Política de atención y servicio al ciudadano. </p>\n                            </li>\n                          </ul>\n                        </div>\n                      </li>\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">7. Servicios públicos </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Fundamento constitucional de los servicios públicos. </p>\n                            </li>\n                            <li>\n                              <p>Régimen jurídico administrativo de los servicios públicos en Colombia. </p>\n                            </li>\n                            <li>\n                              <p>El ejercicio del control de los servicios públicos por parte de la administración. </p>\n                            </li>\n                            <li>\n                              <p>Normas relacionadas del CPACA. </p>\n                            </li>\n                            <li>\n                              <p>Normatividad específica para cada área de los servicios públicos. </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">8. Derechos humanos </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Fundamentos de los derechos humanos. </p>\n                            </li>\n                            <li>\n                              <p>Fundamentos del derecho internacional humanitario. </p>\n                            </li>\n                            <li>\n                              <p>Ley de victimas y justicia transicional. </p>\n                            </li>\n                            <li>\n                              <p>Competencias de la entidad en materia de ley de victimas. </p>\n                            </li>\n                            <li>\n                              <p>Modelo de atención, asistencia y reparación integral a las víctimas. </p>\n                            </li>\n                            <li>\n                              <p>Acuerdo final para la terminación del conflicto y la construción de una paz estable y duradera.\n                                </p>\n                            </li>\n                            <li>\n                              <p>La entidad y su papel en el posconflicto. </p>\n                            </li>\n\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">9. Medio ambiente y función pública </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Normas de urbanismo </p>\n                            </li>\n                            <li>\n                              <p>Derecho al medio ambiente sano </p>\n                            </li>\n                            <li>\n                              <p>Desarrollo sostenible </p>\n                            </li>\n                            <li>\n                              <p>Ley de tierras </p>\n                            </li>\n                            <li>\n                              <p>Normatividad ambiental</p>\n                            </li>\n                            <li>\n                              <p>Acuerdo final para la terminación para la terminación del conflicto y la construción de una\n                                paz estable y duradera </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">10. Derecho administrativo sancionador en Colombia </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Sector salud. </p>\n                            </li>\n                            <li>\n                              <p>Sector de medio ambiente. </p>\n                            </li>\n                            <li>\n                              <p>Sector de espacio público. </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">11. Derecho Tributario, Aduanero y Cambiario </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Impuesto sobre la renta y complementarios.\n                                Impuesto sobre las ventas – IVA. Retención en la fuente. Procedimiento tributario. Precios\n                                de transferencia. </p>\n                            </li>\n                            <li>\n                              <p> Actualización tributaria, aduanera y cambiaria. </p>\n                            </li>\n                            <li>\n                              <p>Normas Internacionales de Información Financiera - NIIF </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">12. Lógica, argumentación y redacción jurídica </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Técnica para la presentación de los hechos.</p>\n                            </li>\n                            <li>\n                              <p> Técnica para la presentación de las pruebas. </p>\n                            </li>\n                            <li>\n                              <p>Clases y desarrollo de los argumentos. </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">13. Sistema de Calidad y Modelo Estándar de Control Interno MECI </a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Estrategias </p>\n                            </li>\n                            <li>\n                              <p>Misión y visión de la entidad </p>\n                            </li>\n                            <li>\n                              <p>Análisis de procesos </p>\n                            </li>\n                            <li>\n                              <p>Estructura organizacional </p>\n                            </li>\n                            <li>\n                              <p>Gestión documental </p>\n                            </li>\n                            <li>\n                              <p>Normas ISO </p>\n                            </li>\n                            <li>\n                              <p>Componentes del MECI </p>\n                            </li>\n                          </ul>\n                        </div>\n                      </li>\n\n\n\n\n                      <li>\n                        <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">14. Conciliación</a>\n                        <div class=\"uk-accordion-content\">\n                          <ul class=\"uk-list uk-list-bullet\">\n                            <li>\n                              <p>Origen y evolución del conflicto. </p>\n                            </li>\n                            <li>\n                              <p>Métodos y herramientas para la conciliación. </p>\n                            </li>\n                            <li>\n                              <p>Conciliación en materia contencioso administrativa. </p>\n                            </li>\n                            <li>\n                              <p>Conciliación en civil y comercial. </p>\n                            </li>\n                            <li>\n                              <p>Técnicas de comunicación. Mecanismos alternativos de solución de conflictos en Colombia. </p>\n                            </li>\n                            <li>\n                              <p>Arbitramento </p>\n                            </li>\n\n                          </ul>\n                        </div>\n                      </li>\n\n\n\n\n                    </ul>\n\n\n                  </div>\n                </li>\n\n              </ul>\n\n            </div>\n          </li>\n\n\n\n          \n\n\n          <li>\n              <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Número de horas</a>\n              <div class=\"uk-accordion-content\">\n                <p>Cada bloque temático tendrá la intensidad horaria que requiera la empresa o entidad contratante, de acuerdo al diagnóstico de necesidades y al plan estratégico.</p>\n              </div>\n            </li>\n\n            <li>\n                <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Equipo docente</a>\n                <div class=\"uk-accordion-content\">\n                  <p>El equipo docente está conformado por profesionales especialistas en cada uno de los campos de conocimiento asignado, cuentan con amplia experiencia y trayectoria en el área de desempeño.</p>\n                </div>\n              </li>\n\n              <li>\n                  <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Material</a>\n                  <div class=\"uk-accordion-content\">\n                    <p>\n                        Cada uno de los asistentes recibirá el material académico del correspondiente módulo el cual constará de CD de cada bloque temático con el material de apoyo y de soporte a los conocimientos impartidos, compuesto por jurisprudencia, doctrina, páginas web, notas del profesor y demás información que se considere pertinente.\n                    </p>\n                  </div>\n                </li>\n\n\n                <li>\n                    <a class=\"uk-accordion-title\" style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 300; color: rgb(167, 167, 167);\">Gerente del Área de Capacitación</a>\n                    <div class=\"uk-accordion-content\">\n                        <h1 style=\" font-family: 'Roboto'; font-size: 25px; font-weight: 700; color:black;\">Carlos Humberto García Orrego</h1>\n                        <p>\n\n                            Con más de 15 años al frente de la División de Capacitación del Instituto de Estudios del Ministerio Público de la Procuraduría General de la Nación, ha liderado procesos de formación y capacitación a nivel nacional para los funcionarios del Ministerio Público. \n                            ​<br/>\n                            ​<br/>\n                            Es especialista en Planeación Educativa, derecho administrativo, contratación estatal y derecho penal, acutalmente adelanta maestría en derecho administrativo en la Universidad Libre de Colombia. \n                            ​<br/>\n                            ​<br/>\n                            ​\n                            Igualmente ha sido docente en las áreas de derecho administrativo colombiano, contratación estatal, derecho disciplinario, estructura del Estado y temas de gestión organizacional, desarrolladas en diversas actividades de capacitación adelantadas por la Escuela de Investigación Criminal y Criminalística de la Fiscalía General de la Nación, Universidad Santo Tomás, Universidad Libre, Católica de Colombia, Santiago de Cali, Universidad de la Amazonía, Escuela Superior de Administración Pública ESAP y del Instituto de Estudios del Ministerio Público de la Procuraduría General de la Nación. Hace parte y lideró la red de formadores del Instituto de Estudios del Ministerio Público de la Procuraduría General de la Nación. \n                            ​<br/>\n                            ​<br/>\n                            ​\n                            Creó, dirigió y coordinó la publicación Reflexiones Académicas en Derecho Disciplinario y Contratación Estatal que edita el Instituto de Estudios del Ministerio Público. \n                            ​<br/>\n                            ​<br/>\n                             \n                            También se desempeñó como Jefe de la Oficina de Control Interno de la Procuraduría General de la Nación.\n\n                        </p>\n                    </div>\n                  </li>\n\n\n        </ul>\n\n\n      </div>\n    </div>\n    <div class=\"uk-width-1-6@m\"></div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/portafolio/capacitacion/capacitacion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/portafolio/capacitacion/capacitacion.component.ts ***!
  \******************************************************************************/
/*! exports provided: CapacitacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitacionComponent", function() { return CapacitacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapacitacionComponent = /** @class */ (function () {
    function CapacitacionComponent() {
    }
    CapacitacionComponent.prototype.ngOnInit = function () {
    };
    CapacitacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capacitacion',
            template: __webpack_require__(/*! ./capacitacion.component.html */ "./src/app/components/portafolio/capacitacion/capacitacion.component.html"),
            styles: [__webpack_require__(/*! ./capacitacion.component.css */ "./src/app/components/portafolio/capacitacion/capacitacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CapacitacionComponent);
    return CapacitacionComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio/contacto/contacto.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/portafolio/contacto/contacto.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portafolio/contacto/contacto.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/portafolio/contacto/contacto.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div uk-grid>\n    <div class=\"uk-width-1-3@m\"></div>\n    <div class=\"uk-width-1-3@m\">\n      <div id=\"logo\"></div>\n    </div>\n    <div class=\"uk-width-1-3@m\"></div>\n  </div>\n\n  \n\n  \n\n\n<div uk-grid>\n  <div class=\"uk-width-1-4@m\"></div>\n  <div class=\"uk-width-expand@m\" style=\"background-color: white; border-radius: 3em 3em 0 0;\">\n    <div style=\"padding: 3em;\">\n      <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Contacto</h1>\n\n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">dirección</h1>\n      <p style=\"font-size: 30px\">\n        Carrera 54D Número 135- 06\n        <br/> Torres Aqua Oficina 1004\n        <br/> Bogotá D.C.\n      </p>\n\n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">celular</h1>\n      <p style=\"font-size: 30px\">\n        (+57) 313 893-5855\n      </p>\n\n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">correo</h1>\n      <p style=\"font-size: 30px\">\n        carloshgarciaorr@hotmail.com\n      </p>\n\n      <h1 style=\" font-family: 'Roboto'; font-size: 16px; font-weight: 300; color: rgb(167, 167, 167);\">siguenos</h1>\n      <a href=\"https://www.instagram.com/g_lsas/\" style=\"text-decoration: none; color: black;\">\n        <span uk-icon=\"icon: instagram; ratio: 2.5\"></span>\n      </a>\n      <span> &nbsp; @g_lsas</span>\n\n    </div>\n  </div>\n  <div class=\"uk-width-1-4@m\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/portafolio/contacto/contacto.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/portafolio/contacto/contacto.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/components/portafolio/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/components/portafolio/contacto/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio/portafolio.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/portafolio/portafolio.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/portafolio/portafolio.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/portafolio/portafolio.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height: 100vh;;\">\n\n\n<div uk-grid>\n  <div class=\"uk-width-1-6@m\"></div>\n  <div class=\"uk-width-expand@m\" style=\"background-color: white; border-radius: 3em;\" >\n    <div style=\"padding: 3em;\">\n      <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Portafolio de Servicios</h1>\n\n      <br/>\n      <br/>\n\n      <div uk-grid class=\"uk-text-center\">\n          <div class=\"uk-width-1-3@m\"><a style=\"font-size: 25px;\" class=\"uk-button uk-button-text\" routerLink=\"/portafolio/capacitacion\">Capacitación</a></div>\n          <div class=\"uk-width-1-3@m\"><a style=\"font-size: 25px;\" class=\"uk-button uk-button-text\" >Defensa Jurídica</a></div>\n          <div class=\"uk-width-1-3@m\"><a style=\"font-size: 25px;\" class=\"uk-button uk-button-text\">Consultoría</a></div>\n      </div>\n        \n\n    </div>\n  </div>\n  <div class=\"uk-width-1-6@m\"></div>\n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/portafolio/portafolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/portafolio/portafolio.component.ts ***!
  \***************************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortafolioComponent = /** @class */ (function () {
    function PortafolioComponent() {
    }
    PortafolioComponent.prototype.ngOnInit = function () {
    };
    PortafolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portafolio',
            template: __webpack_require__(/*! ./portafolio.component.html */ "./src/app/components/portafolio/portafolio.component.html"),
            styles: [__webpack_require__(/*! ./portafolio.component.css */ "./src/app/components/portafolio/portafolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortafolioComponent);
    return PortafolioComponent;
}());



/***/ }),

/***/ "./src/app/components/publicacion/publicacion.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/publicacion/publicacion.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/publicacion/publicacion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/publicacion/publicacion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute; top: 0; width: 100%; min-height: 100vh; overflow-x: hidden; background-color: whitesmoke\">\n\n  <a class=\"uk-button\" type=\"button\" style=\"text-decoration: none;\" routerLink=\"/foro\">\n    <i id=\"menu_icon\" class=\"icon ion-ios-arrow-back\" style=\"font-size: 55px;\"></i>\n  </a>\n\n\n\n\n  <div id=\"modal-post-post\" uk-modal>\n    <div class=\"uk-modal-dialog\">\n\n\n      <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n\n      <div class=\"uk-modal-header\">\n        <h2 *ngIf=\"!publicado_post\" class=\"uk-modal-title\">Crea una nueva entrada</h2>\n        <h2 *ngIf=\"publicado_post\" class=\"uk-modal-title\" style=\"color: rgb(31, 177, 61);\">Publicado!</h2>\n      </div>\n\n      <div *ngIf=\"!publicado_post\" class=\"uk-modal-body\">\n        <form (ngSubmit)=\"onSubmit(postForm)\" #postForm=\"ngForm\">\n          <fieldset class=\"uk-fieldset\">\n            <div class=\"uk-margin\">\n              <input [(ngModel)]=\"pub_model.title\" #title=\"ngModel\" name=\"title\" required minlength=\"1\" [ngClass]=\"{'uk-form-danger': title.errors && title.touched}\"\n                class=\"uk-input\" type=\"text\" placeholder=\"Un título interesante\">\n            </div>\n            <div class=\"uk-margin\">\n              <textarea [(ngModel)]=\"pub_model.text\" #text=\"ngModel\" name=\"text\" required minlength=\"1\" [ngClass]=\"{'uk-form-danger': text.errors && text.touched}\"\n                class=\"uk-input\" type=\"text\" placeholder=\"Texto\"></textarea>\n            </div>\n            <div class=\"uk-margin\">\n              <select class=\"uk-select\" [(ngModel)]=\"doc\" #selection=\"ngModel\" name=\"selection\" required>\n                <option value=\"\" selected disabled hidden>Tipo de documento</option>\n                <option value=\"na\">Solo Texto</option>\n                <option value=\"img\">Imagen</option>\n                <option value=\"pdf\">Documento PDF</option>\n              </select>\n            </div>\n\n            <div class=\"uk-margin\" [style.display]=\" doc === 'na' ? 'none' : 'block' \">\n              <input [(ngModel)]=\"pub_model.image\" #image=\"ngModel\" name=\"image\" [ngClass]=\"{'uk-form-danger': image.errors && image.touched}\"\n                class=\"uk-input\" type=\"text\" [placeholder]=\" doc === 'img' ? 'URL Imagen documento' : 'URL Documento PDF, se puede obtener al subir el archivo a Google Drive'\">\n            </div>\n\n            <br/>\n            <hr/>\n            <div class=\"uk-margin uk-text-right\">\n              <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n              <button type=\"submit\" [disabled]=\"!postForm.form.valid\" class=\"uk-button uk-button-primary\">\n                Publicar\n              </button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n\n\n      <div *ngIf=\"publicado_post\" class=\"uk-modal-body\">\n        <div class=\"uk-margin uk-text-center\">\n          <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Listo</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n\n\n\n  <div uk-grid>\n    <div class=\"uk-width-1-6@m\"></div>\n    <div class=\"uk-width-expand@m\">\n      <div style=\"position: relative;\">\n\n\n\n        <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">{{(publication | async)?.title}}</h1>\n\n        <div *ngIf=\"auth.author | async as author\">\n          <a *ngIf=\"author.rol === 'admin'\" (click)=\"publicado_post = false\" href=\"#modal-post-post\" uk-toggle>\n            <h1>\n              <i class=\"icon ion-md-add\" style=\"font-size: 75px; position: absolute; top: 0em; right: 1em;\"></i>\n            </h1>\n          </a>\n        </div>\n\n        <hr/>\n\n        <br/>\n        <br/>\n\n        <div uk-grid=\"masonry: true\">\n\n          <div class=\"uk-width-1-2@m\" style=\"position: relative;\" *ngFor=\"let post of posts; let i = index\">\n            <!--NG FOR-->\n\n            <div class=\"uk-card uk-card-default uk-card-hover \">\n\n\n              <span style=\"position: absolute; top: 8px; right: 8px;\">\n                <h6 style=\"font-size: 12px\">{{post.date | date}}</h6>\n              </span>\n              <a style=\"text-decoration: none;\" href=\"#modal-full-{{i}}\" uk-toggle>\n                <div class=\"uk-card-body\">\n                  <h3 class=\"uk-card-title\">{{post.title}}</h3>\n                </div>\n              </a>\n              <div class=\"uk-card-footer\">\n\n\n\n                <div *ngIf=\"auth.author | async as author; else user\">\n\n                  <div *ngIf=\"author.rol == 'admin'; else rol\">\n                    <div uk-grid>\n                      <div class=\"uk-width-1-3@m\">{{post.visits}} Visitas</div>\n                      <div class=\"uk-width-expand@m\">{{post.comments.length}} Comentarios</div>\n                      <div class=\"uk-width-1-6@m uk-text-right\">\n                        <a (click)=\"delete(i)\">\n                          <i class=\"icon ion-md-trash\" style=\"font-size: 25px;\"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                  <ng-template #rol>\n                    <div uk-grid>\n                      <div class=\"uk-width-1-2@m\">{{post.visits}} &nbsp; Visitas</div>\n                      <div class=\"uk-width-1-2@m uk-text-right\">{{post.comments.length}} &nbsp; Comentarios</div>\n                    </div>\n                  </ng-template>\n\n\n                </div>\n\n                <ng-template #user>\n                  <div uk-grid>\n                    <div class=\"uk-width-1-2@m\">{{post.visits}} &nbsp; Visitas</div>\n                    <div class=\"uk-width-1-2@m uk-text-right\">{{post.comments.length}} &nbsp; Comentarios</div>\n                  </div>\n                </ng-template>\n\n\n\n\n              </div>\n\n\n            </div>\n\n\n\n            <div id=\"modal-full-{{i}}\" class=\"uk-modal-full\" uk-modal>\n              <div class=\"uk-modal-dialog\" style=\"min-height: 100vh;\">\n\n\n                <div style=\"padding-top: 5em;\">\n\n                  <a class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close>\n                  </a>\n\n\n                  <div uk-grid>\n                    <div class=\"uk-width-1-6@m\"></div>\n                    <div class=\"uk-width-expand@m\">\n                      <div>\n\n\n\n                        <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">{{post.title}}</h1>\n                        <hr/>\n\n                        <br/>\n                        <br/>\n\n                        <article class=\"uk-article\">\n\n                          <h1 class=\"uk-article-title\">\n                            <!-- <a class=\"uk-link-reset\">Heading</a> -->\n                          </h1>\n\n                          <p class=\"uk-article-meta\">Publicado por Carlos Humberto Garcia {{post.date}}\n                          </p>\n\n                          <p *ngIf=\"!editmode\" class=\"uk-text-lead\" style=\"white-space: pre-wrap;\">\n                            {{post.text}}\n                          </p>\n\n\n\n                          <textarea *ngIf=\"editmode\" class=\"uk-textarea\" type=\"text\" name=\"text\" value=\"{{post.text}}\" placeholder=\"{{post.text}}\"\n                            [(ngModel)]=\"post.text\" style=\"min-height: 400px;\">\n                          </textarea>\n\n\n                          <div *ngIf=\"auth.author | async as author\">\n\n                            <div *ngIf=\"author.rol == 'admin'\" class=\"uk-margin uk-text-right\">\n                              <h1>\n                                <a *ngIf=\"!editmode\" style=\"text-decoration: none;\" (click)=\"editmode = !editmode\">\n                                  <i class=\"icon ion-md-create\" style=\"font-size: 35px;\"></i>\n                                </a>\n                                <a *ngIf=\"editmode\" style=\"text-decoration: none; font-size: 18px\" (click)=\"editmode = !editmode\">\n                                  Cancelar\n                                </a> &nbsp;&nbsp;&nbsp;\n                                <a *ngIf=\"editmode\" style=\"text-decoration: none; font-size: 18px\" (click)=\"edit_post()\">\n                                  Confirmar\n                                </a>\n                              </h1>\n                            </div>\n\n                          </div>\n\n\n\n                          <div *ngIf=\"post.type === 'pdf'\">\n                            <embed [src]=\"post.pdf\" width=\"800\" height=\"1000px\" />\n                          </div>\n\n                          <div *ngIf=\"post.type === 'img'\">\n                            <img [src]=\"post.image\" width=\"100%\" height=\"auto\">\n                          </div>\n\n\n                          <div class=\"uk-grid-small uk-child-width-auto\" uk-grid>\n                            <div>\n                              <a class=\"uk-button uk-button-text\">{{post.comments.length}} Comments</a>\n                            </div>\n                          </div>\n\n                        </article>\n\n                        <hr/>\n\n                        <br/>\n                        <br/>\n                        <br/>\n                        <br/>\n\n\n\n                        <article class=\"uk-comment\" *ngFor=\"let comment of post.comments\">\n                          <div *ngIf=\"comment.text\">\n                            <br/>\n                            <header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n                              <div class=\"uk-width-auto\">\n                                <img *ngIf=\"comment.author && comment.author.photoURL\" class=\"uk-comment-avatar\" src=\"{{comment.author.photoURL}}\" width=\"80\"\n                                  height=\"80\" alt=\"\">\n                                <img *ngIf=\"!comment.author\" class=\"uk-comment-avatar\" src=\"https://lh3.googleusercontent.com/u3GTJ9bMkzdhyymUto5QvVZpS8EER2D7tN_aOCDLiuQtAlPsWy8h-lO10XIr08Zo8lmIxQ2WVPUCcyJNxmlnQupsaZWZsMuDmn09GNhFOaKGMWra6OP18TU6WN5W6rrjS5-m7OcLQ4eJjHuGUlJm7p98pO8uPjw5UaFyvZ9mdctwnOm8dNVbogP9eQcuUoIYgI6hN20Vda4XwNhqURVX6c19PFWZ_ed77KKBs2tXeRCF9BKGcoHtFKzf6vwVDuhB5G9q0Hlg4dpX6RcfliRJ5oBk5XGzwI1F8GctVskTbNEG9sc-9OOqiA8rCuw7aa2M5U_IYDbi7kDBTrRYSqfD4OktzUu_zCqL8AvhHc0fzs-F6BPLqvB9Jv9p9XAvvmj--aHdlRcZf-nLQxMQJIn47OLBRPBRlNo62uXZlNTPWkpK8yqCREYd2GIQADyzH2aHtFAzcRmyShzegKnCGAdxuFR6rebL7phK9yK8ix4upyOw6BgMkNOKDmHiHZ9sMHtf9Y-W5kcLRZ34H2fe5yQeIwsYlZNvxvYfCeCO6eEHor99yZy7bQDGwb7U3U4SEp-eR9QM1MWnIoJDbV0wADrF4OS4afGEhHpXHEpuM-ek=w245-h244-no\"\n                                  width=\"80\" height=\"80\" alt=\"\">\n                              </div>\n                              <div class=\"uk-width-expand\">\n                                <h4 class=\"uk-comment-title uk-margin-remove\">\n                                  <a *ngIf=\"comment.author\" class=\"uk-link-reset\">{{comment.author.displayName}}</a>\n                                  <a *ngIf=\"!comment.author\" class=\"uk-link-reset\">Anonimo</a>\n                                </h4>\n                                <ul class=\"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\">\n                                  <li>\n                                    <a>{{comment.date | date}}</a>\n                                  </li>\n                                </ul>\n                              </div>\n                            </header>\n                            <div class=\"uk-comment-body\" style=\"white-space: pre-wrap;\">\n                              <p>\n                                {{comment.text}}\n                              </p>\n                            </div>\n                            <hr/>\n                            <br/>\n                          </div>\n                        </article>\n\n\n\n                        <div *ngIf=\"auth.author | async; then authenticated else guest\"></div>\n\n                        <ng-template #authenticated>\n                          <div class=\"uk-margin\">\n                            <textarea [(ngModel)]=\"nuevo_comentario\" name=\"nuevo\" class=\"uk-textarea\" rows=\"5\" placeholder=\"Escribe un comentario...\"></textarea>\n                          </div>\n\n                          <div class=\"uk-margin uk-text-right\">\n                            <button (click)=\"post_comment(i)\" class=\"uk-button uk-button-text\" style=\"font-size: 18px; color: rgb(14, 112, 136);\">Publicar</button>\n                          </div>\n                        </ng-template>\n\n\n                        <ng-template #guest>\n                          <div class=\"uk-margin\">\n                            <a (click)=\"auth.google_login()\">\n                              <h1 style=\" font-family: 'Roboto'; font-size: 20px; font-weight: 300; color: rgb(167, 167, 167);\">\n                                <i class=\"icon ion-logo-googleplus\" style=\"font-size: 35px;\"></i> &nbsp; Registrate para comentar\n                              </h1>\n                            </a>\n                          </div>\n                        </ng-template>\n\n\n\n\n\n\n                      </div>\n                    </div>\n                    <div class=\"uk-width-1-6@m\"></div>\n                  </div>\n\n                  <div id=\"nbsp-inline\">\n                    &nbsp;\n                  </div>\n\n                </div>\n\n\n\n\n\n\n              </div>\n            </div>\n\n\n\n\n\n          </div>\n\n\n\n          <div *ngIf=\"!(publication | async)\">\n            <h1 style=\" font-family: 'Roboto'; font-size: 20px; font-weight: 300; color: rgba(167, 167, 167, 0.534);\">Cragando...</h1>\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n    <div class=\"uk-width-1-6@m\"></div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n  <div id=\"nbsp-inline\">\n    &nbsp;\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/publicacion/publicacion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/publicacion/publicacion.component.ts ***!
  \*****************************************************************/
/*! exports provided: PublicacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionComponent", function() { return PublicacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_publications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/publications.service */ "./src/app/services/publications.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authors.service */ "./src/app/services/authors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PublicacionComponent = /** @class */ (function () {
    function PublicacionComponent(route, location, pub_service, auth) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.pub_service = pub_service;
        this.auth = auth;
        this.publicado_post = false;
        this.pub_model = {};
        this.doc = 'na';
        this.nuevo_comentario = '';
        this.mujer = false;
        if (this.auth.author) {
            this.auth.author.subscribe(function (ar) {
                _this.arturito = ar;
                return;
            });
        }
    }
    PublicacionComponent.prototype.ngOnInit = function () {
        this.administrador = true;
        this.editmode = false;
        this.get_post(this.route.snapshot.paramMap.get('id'));
    };
    PublicacionComponent.prototype.get_post = function (id) {
        var _this = this;
        if (id !== undefined && id !== null) {
            this.publication = this.pub_service.get_pub_by_id(id);
            this.pub_service.get_pub_by_id(id).subscribe(function (p) {
                _this.p = p;
                _this.posts = p.posts;
            });
        }
    };
    PublicacionComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.doc === 'img') {
            value.type = 'img';
        }
        else if (this.doc === 'pdf') {
            value.type = 'pdf';
            value.pdf = value.image;
        }
        else {
            value.type = 'txt';
            value.image = '';
            value.pdf = '';
        }
        value.date = '' + new Date().toLocaleString();
        value.visits = 0;
        value.comments = [];
        this.p.posts.unshift(value);
        this.p.id = this.route.snapshot.paramMap.get('id');
        this.pub_service.put_publication(this.p);
        this.form.reset();
        this.publicado_post = true;
        this.pub_model = {};
    };
    PublicacionComponent.prototype.post_comment = function (pos) {
        if (this.nuevo_comentario !== '' && this.nuevo_comentario !== undefined && this.nuevo_comentario !== null && this.auth.author) {
            var x = {
                date: '' + new Date().toLocaleString(),
                text: this.nuevo_comentario,
                author: this.arturito
            };
            this.p.posts[pos].comments.push(x);
            this.p.id = this.route.snapshot.paramMap.get('id');
            this.pub_service.put_publication(this.p);
            this.nuevo_comentario = '';
        }
    };
    PublicacionComponent.prototype.delete = function (i) {
        if (confirm("Seguro que quieres eliminar esta entrada?")) {
            this.p.posts.splice(i, 1);
            this.p.id = this.route.snapshot.paramMap.get('id');
            this.pub_service.put_publication(this.p);
        }
    };
    PublicacionComponent.prototype.edit_post = function () {
        this.p.posts = this.posts;
        this.p.id = this.route.snapshot.paramMap.get('id');
        this.pub_service.put_publication(this.p);
        this.editmode = !this.editmode;
    };
    PublicacionComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], PublicacionComponent.prototype, "publication", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('postForm'),
        __metadata("design:type", Object)
    ], PublicacionComponent.prototype, "form", void 0);
    PublicacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publicacion',
            template: __webpack_require__(/*! ./publicacion.component.html */ "./src/app/components/publicacion/publicacion.component.html"),
            styles: [__webpack_require__(/*! ./publicacion.component.css */ "./src/app/components/publicacion/publicacion.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_publications_service__WEBPACK_IMPORTED_MODULE_1__["PublicationsService"],
            _services_authors_service__WEBPACK_IMPORTED_MODULE_5__["AuthorsService"]])
    ], PublicacionComponent);
    return PublicacionComponent;
}());



/***/ }),

/***/ "./src/app/components/seed/seed.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/seed/seed.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/seed/seed.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/seed/seed.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: whitesmoke; position: absolute; top: 0; right: 0; width: 100%; min-height: 100vh;\">\n\n\n  <a class=\"uk-button\" type=\"button\" style=\"text-decoration: none;\" (click)=\"go_back()\">\n    <i id=\"menu_icon\" class=\"icon ion-ios-arrow-back\" style=\"font-size: 55px;\"></i>\n  </a>\n\n\n  <div class=\"uk-container\">\n\n\n\n\n    <article class=\"uk-comment uk-comment-primary\" style=\"padding-left: 5em; position: relative;  background-color: white; border-radius: 0.5em;\">\n\n      <i (click)=\"seed.ups = seed.ups + 1; update()\" class=\"icon ion-ios-arrow-up\" style=\"font-size: 35px; position: absolute; top: 15px; left: 15px;\"></i>\n\n      <p style=\"font-size: 18px; position: absolute; top: 35px; left: 20px;\">{{(seed | async)?.ups}}</p>\n\n      <i (click)=\"seed.ups = seed.ups - 1; update()\" class=\"icon ion-ios-arrow-down\" style=\"font-size: 35px; position: absolute; top: 75px; left: 15px;\"></i>\n\n      <header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n        <div class=\"uk-width-auto\">\n          <img class=\"uk-comment-avatar\" src=\"{{(seed | async)?.author_image}}\" width=\"80\" height=\"80\" alt=\"\">\n        </div>\n        <div class=\"uk-width-expand\">\n          <h4 class=\"uk-comment-title uk-margin-remove\">\n            <a class=\"uk-link-reset\" href=\"#\">{{(seed | async)?.author}}</a>\n          </h4>\n          <ul class=\"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\">\n            <li>\n              <a>{{(seed | async)?.date | date}}</a>\n            </li>\n\n          </ul>\n        </div>\n      </header>\n      <div class=\"uk-comment-body\">\n        <p>\n          {{(seed | async)?.title}}\n        </p>\n\n        <p style=\"font-size: 18px;\">\n          {{(seed | async)?.text}}\n        </p>\n\n        <img *ngIf=\"seed.image != '' && seed.image \" [src]=\"seed.image\" height=\"auto\" width=\"100%\">\n\n      </div>\n      <hr/>\n      <br/>\n    </article>\n\n\n    <div *ngIf=\"auth.author | async; then authenticated else guest\"></div>\n\n    <ng-template #authenticated>\n      <div class=\"uk-margin\">\n        <textarea [(ngModel)]=\"new_reply\" name=\"nuevo\" class=\"uk-textarea\" rows=\"5\" placeholder=\"Escribe un comentario...\"></textarea>\n      </div>\n\n      <div class=\"uk-margin uk-text-right\">\n        <button (click)=\"reply()\" class=\"uk-button uk-button-text\" style=\"font-size: 18px; color: rgb(14, 112, 136);\">Comentar</button>\n      </div>\n    </ng-template>\n\n\n    <ng-template #guest>\n     <div class=\"uk-margin\">\n      <a (click)=\"auth.google_login()\">\n        <h1 style=\" font-family: 'Roboto'; font-size: 20px; font-weight: 300; color: rgb(167, 167, 167);\">\n            <i class=\"icon ion-logo-googleplus\" style=\"font-size: 35px;\"></i> &nbsp;\n            Registrate para comentar\n        </h1>\n      </a>\n    </div>\n    </ng-template>\n\n\n\n\n\n\n\n\n    <article class=\"uk-comment\" *ngFor=\"let comment of replies\">\n      <div *ngIf=\"comment.text\">\n        <br/>\n        <header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n\n          <div class=\"uk-width-expand\">\n            <h4 class=\"uk-comment-title uk-margin-remove\">\n              <a *ngIf=\"comment.author\" class=\"uk-link-reset\">{{comment.author}}</a>\n              <a *ngIf=\"!comment.author\" class=\"uk-link-reset\">Anonimo</a>\n            </h4>\n            <ul class=\"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\">\n              <li>\n                <a>{{comment.date | date}}</a>\n              </li>\n            </ul>\n          </div>\n        </header>\n        <div class=\"uk-comment-body\" style=\"white-space: pre-wrap;\">\n          <p style=\"font-size: 18px;\">\n            {{comment.text}}\n          </p>\n        </div>\n        <hr/>\n        <br/>\n      </div>\n    </article>\n\n\n\n\n\n\n  </div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/seed/seed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/seed/seed.component.ts ***!
  \***************************************************/
/*! exports provided: SeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedComponent", function() { return SeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authors.service */ "./src/app/services/authors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeedComponent = /** @class */ (function () {
    function SeedComponent(route, location, social_service, auth) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.social_service = social_service;
        this.auth = auth;
        this.new_reply = '';
        if (this.auth.author) {
            this.auth.author.subscribe(function (ar) {
                _this.arturito = ar;
                return;
            });
        }
    }
    SeedComponent.prototype.ngOnInit = function () {
        this.get_seed(this.route.snapshot.paramMap.get('id'));
    };
    SeedComponent.prototype.reply = function () {
        if (this.new_reply !== '' && this.new_reply !== undefined && this.new_reply !== null && this.auth.author) {
            var x = {
                author: this.arturito.displayName,
                date: '' + new Date().toLocaleString(),
                text: this.new_reply,
                ups: 0
            };
            this.s.replies.push(x);
            this.s.id = this.route.snapshot.paramMap.get('id');
            this.social_service.put_seed(this.s);
            this.new_reply = '';
        }
    };
    SeedComponent.prototype.update = function () {
        this.s.id = this.route.snapshot.paramMap.get('id');
        this.social_service.put_seed(this.s);
    };
    SeedComponent.prototype.get_seed = function (id) {
        var _this = this;
        if (id !== undefined && id !== null) {
            this.seed = this.social_service.get_seed(id);
            this.social_service.get_seed(id).subscribe(function (s) {
                _this.s = s;
                _this.replies = s.replies;
            });
        }
    };
    SeedComponent.prototype.go_back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SeedComponent.prototype, "seed", void 0);
    SeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed',
            template: __webpack_require__(/*! ./seed.component.html */ "./src/app/components/seed/seed.component.html"),
            styles: [__webpack_require__(/*! ./seed.component.css */ "./src/app/components/seed/seed.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"],
            _services_authors_service__WEBPACK_IMPORTED_MODULE_5__["AuthorsService"]])
    ], SeedComponent);
    return SeedComponent;
}());



/***/ }),

/***/ "./src/app/components/social/social.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/social/social.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/social/social.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/social/social.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute; top: 0; width: 100%; min-height: 100vh; overflow-x: hidden; background-color: whitesmoke\">\n\n\n    <a class=\"uk-button uk-margin-top\" type=\"button\" uk-toggle=\"target: #offcanvas-nav-primary\" style=\"text-decoration: none; position: fixed; z-index: 100;\">\n        <i id=\"menu_icon\" class=\"icon ion-md-menu\" style=\"font-size: 65px;\"></i>\n      </a>\n    \n\n\n\n\n\n\n    <div id=\"modal-full\" class=\"uk-modal-full\" uk-modal>\n      <div class=\"uk-modal-dialog\" style=\"height: 100vh; width: 100%;\">\n        <div style=\"padding-top: 5em;\">\n          <a class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close>\n          </a>\n          <div uk-grid>\n            <div class=\"uk-width-1-4@m\"></div>\n            <div class=\"uk-width-expand@m\">\n\n\n              <div class=\"uk-card\">\n                <div class=\"uk-card-header\" style=\"margin-bottom: -1em\">\n                  <h2 *ngIf=\"!posteado\" class=\"uk-modal-title\">Post</h2>\n                  <h2 *ngIf=\"posteado\" class=\"uk-modal-title\" style=\"color: rgb(31, 177, 61);\">Publicado!</h2>\n                </div>\n\n                <div *ngIf=\"!posteado\" class=\"uk-card-body\" style=\"margin-top: -1em;\">\n\n                  <form (ngSubmit)=\"onSubmit(seedForm)\" #seedForm=\"ngForm\">\n                    <fieldset class=\"uk-fieldset\">\n                      <div class=\"uk-margin\">\n                        <input class=\"uk-input\" type=\"text\" name=\"title\" required minlength=\"3\" placeholder=\"Un título interesante\" [(ngModel)]=\"model_seed.title\"\n                          #title=\"ngModel\" [ngClass]=\"{'uk-form-danger': title.errors && title.touched}\">\n                      </div>\n                      <div class=\"uk-margin\">\n                        <textarea class=\"uk-textarea\" name=\"text\" placeholder=\"Texto (opcional)\" [(ngModel)]=\"model_seed.text\" #text=\"ngModel\"></textarea>\n                      </div>\n                      <div class=\"uk-margin\">\n                        <input class=\"uk-input\" type=\"text\" name=\"image\" placeholder=\"URL Imagen (opcional)\" [(ngModel)]=\"model_seed.image\" #image=\"ngModel\">\n                      </div>\n\n                      <br/>\n                      <hr/>\n                      <div class=\"uk-margin uk-text-right\">\n                        <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancelar</button>\n                        <button type=\"submit\" [disabled]=\"!seedForm.form.valid\" class=\"uk-button uk-button-primary\">\n                          Confirmar\n                        </button>\n                      </div>\n                    </fieldset>\n                  </form>\n\n                </div>\n\n\n                <div *ngIf=\"posteado\" class=\"uk-card-body\">\n                  <div class=\"uk-margin uk-text-center\">\n                    <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Listo</button>\n                  </div>\n                </div>\n\n              </div>\n\n\n            </div>\n            <div class=\"uk-width-1-4@m\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <div uk-grid>\n      <div class=\"uk-width-1-3@m\"></div>\n      <div class=\"uk-width-1-3@m\">\n        <div id=\"logo_black\"></div>\n      </div>\n      <div class=\"uk-width-1-3@m\"></div>\n    </div>\n\n\n\n\n\n\n    <div uk-grid>\n      <div class=\"uk-width-1-6@m\"></div>\n      <div class=\"uk-width-expand@m\">\n        <div style=\"position: relative;\">\n\n\n\n\n\n          <h1 style=\" font-family: 'Roboto'; font-size: 60px; font-weight: 300; color: rgb(167, 167, 167);\">Social</h1>\n\n        <div *ngIf=\"auth.author | async\">\n          <a style=\"text-decoration: none;\" href=\"#modal-full\" uk-toggle (click)=\"posteado = false\">\n            <h1>\n              <i class=\"icon ion-md-add\" style=\"font-size: 75px; position: absolute; top: 0em; right: 1em;\"></i>\n            </h1>\n          </a>\n        </div>\n\n          <hr/>\n\n          <br/>\n          <br/>\n\n          <div uk-grid>\n\n\n            <div class=\"uk-width-1-1\" *ngFor=\"let seed of seeds | async; let i = index\">\n\n\n\n              <article class=\"uk-comment uk-comment-primary\" style=\"padding-left: 5em; position: relative;  background-color: white; border-radius: 0.5em;\">\n\n\n                <div *ngIf=\"auth.author | async; then authenticated else guest\"></div>\n\n                <ng-template #authenticated>\n                  <div *ngIf=\"auth.author | async as author\">\n                    <span *ngIf=\"author.rol == 'admin'\" (click)=\"delete(seed.id)\" style=\"font-size: 35px; position: absolute; top: 25px; right: 25px;\"\n                      uk-icon=\"icon: minus-circle; ratio: 1.5\"></span>\n                  </div>\n\n                  <i (click)=\"seed.ups = seed.ups + 1; update(seed)\" class=\"icon ion-ios-arrow-up\" style=\"font-size: 35px; position: absolute; top: 15px; left: 15px;\"></i>\n\n                  <p style=\"font-size: 18px; position: absolute; top: 35px; left: 20px;\">{{seed.ups}}</p>\n\n                  <i (click)=\"seed.ups = seed.ups - 1; update(seed)\" class=\"icon ion-ios-arrow-down\" style=\"font-size: 35px; position: absolute; top: 75px; left: 15px;\"></i>\n                </ng-template>\n\n\n                <ng-template #guest>\n                  <div *ngIf=\"intenta_votar\">\n                    <a (click)=\"auth.google_login()\">\n                      <h1 style=\" font-family: 'Roboto'; font-size: 20px; font-weight: 300; color: rgb(167, 167, 167);\">\n                        <i class=\"icon ion-logo-googleplus\" style=\"font-size: 35px;\"></i> &nbsp; Registrate para votar\n                      </h1>\n                    </a>\n                  </div>\n                  <i (click)=\"update(seed)\" class=\"icon ion-ios-arrow-up\" style=\"font-size: 35px; position: absolute; top: 15px; left: 15px;\"></i>\n                  <p style=\"font-size: 18px; position: absolute; top: 35px; left: 20px;\">{{seed.ups}}</p>\n                  <i (click)=\"update(seed)\" class=\"icon ion-ios-arrow-down\" style=\"font-size: 35px; position: absolute; top: 75px; left: 15px;\"></i>\n                </ng-template>\n\n\n\n\n\n\n\n\n                <header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n                  <div class=\"uk-width-auto\">\n                    <img class=\"uk-comment-avatar\" [src]=\"seed.author_image\" width=\"80\" height=\"80\" alt=\"\">\n                  </div>\n                  <div class=\"uk-width-expand\">\n                    <h4 class=\"uk-comment-title uk-margin-remove\">\n                      <a class=\"uk-link-reset\">{{seed.author}}</a>\n                    </h4>\n                    <ul class=\"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\">\n                      <li>\n                        <a>{{seed.date | date}}</a>\n                      </li>\n                      <li>\n                        <a routerLink=\"/social/posts/{{seed.id}}\">{{seed.replies.length}} &nbsp; Comentarios</a>\n                      </li>\n                    </ul>\n                  </div>\n                </header>\n\n\n                <div class=\"uk-comment-body\">\n                  <p>\n                    {{seed.title}}\n                  </p>\n\n                  <img *ngIf=\"seed.image != '' && seed.image \" [src]=\"seed.image\" height=\"auto\" width=\"100%\">\n\n                </div>\n\n\n              </article>\n\n\n\n\n\n            </div>\n\n\n            <div *ngIf=\"!(seeds | async)\">\n              Cargando...\n            </div>\n\n\n\n\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"uk-width-1-6@m\"></div>\n    </div>\n\n\n\n\n\n\n    <div id=\"nbsp-inline\">\n      &nbsp;\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/social/social.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_social_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authors.service */ "./src/app/services/authors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocialComponent = /** @class */ (function () {
    function SocialComponent(social_servicce, route, location, auth) {
        var _this = this;
        this.social_servicce = social_servicce;
        this.route = route;
        this.location = location;
        this.auth = auth;
        this.model_seed = {};
        this.posteado = false;
        if (this.auth.author) {
            this.auth.author.subscribe(function (ar) {
                _this.arturito = ar;
                return;
            });
        }
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.admin = true;
        this.intenta_votar = false;
        this.seeds = this.social_servicce.get_seeds();
    };
    SocialComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.auth.author) {
            if (value.text === undefined || value.text === '') {
                value.text = '';
            }
            if (value.image === undefined || value.image === '') {
                value.image = '';
            }
            value.author = this.arturito.displayName;
            value.author_image = this.arturito.photoURL;
            value.date = '' + new Date().toLocaleString();
            value.replies = [];
            value.ups = 0;
            this.social_servicce.post_seed(value);
            this.posteado = !this.posteado;
            this.form.reset();
        }
    };
    SocialComponent.prototype.update = function (x) {
        this.intenta_votar = true;
        if (this.auth.author) {
            this.social_servicce.put_seed(x);
        }
    };
    SocialComponent.prototype.delete = function (id) {
        if (confirm('Seguro que quieres eleminar esta publicación?')) {
            this.social_servicce.delete_seed(id);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('seedForm'),
        __metadata("design:type", Object)
    ], SocialComponent.prototype, "form", void 0);
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/components/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/components/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [_services_social_service__WEBPACK_IMPORTED_MODULE_1__["SocialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_authors_service__WEBPACK_IMPORTED_MODULE_4__["AuthorsService"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/services/authors.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/authors.service.ts ***!
  \*********************************************/
/*! exports provided: AuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsService", function() { return AuthorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthorsService = /** @class */ (function () {
    function AuthorsService(afs, afAuth, route) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.route = route;
        this.author = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("authors/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    // 1. Mkae reference in const to thir service PUBLIC
    // *ngIf="auth.user | async; then authenticated else guest"
    AuthorsService.prototype.google_login = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthorsService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthorsService.prototype.updateUserData = function (user) {
        // SI EL USUSARIO NO EXISTE, LO CREA
        var userRef = this.afs.doc("authors/" + user.uid);
        var items = [
            'https://pro2-bar-s3-cdn-cf5.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/6716b5a6-6370-48ac-965f-3160b55ac980_rw_1200.png?h=ad54b256d8cfc3e3bfa19823db435b46',
            'https://pro2-bar-s3-cdn-cf1.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/2ae1aa1d-c9be-4a67-8fb9-3fdec94fa6ff_rw_1200.png?h=d670eb019c6ca2c8223515fe704f1d30',
            'https://pro2-bar-s3-cdn-cf1.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/98d7fe84-29d2-4e3c-9047-13a1444c6796_rw_600.png?h=ca915f979a592abdaafaa6aeb53bab3e',
            'https://pro2-bar-s3-cdn-cf.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/1c1ecb21-df98-45dd-ad86-02489897788d_rw_600.png?h=2086e105facd4ba31537763ee1170720'
        ];
        var data = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: items[Math.floor(Math.random() * items.length)],
            rol: (user.email === 'sebgarcia.26@gmail.com' || user.email === 'carloshgarciaorr@gmail.com') ? 'admin' : 'user'
        };
        return userRef.set(data);
    };
    AuthorsService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthorsService);
    return AuthorsService;
}());



/***/ }),

/***/ "./src/app/services/publications.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/publications.service.ts ***!
  \**************************************************/
/*! exports provided: PublicationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsService", function() { return PublicationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicationsService = /** @class */ (function () {
    function PublicationsService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.publications_collection = afs.collection('publications', function (ref) { return ref.orderBy('date', 'desc'); });
    }
    /**
     * Returns an observable collection of Publications with their IDs
     */
    PublicationsService.prototype.get_publications = function () {
        this.publications = this.publications_collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.publications;
    };
    /**
     * Returns a Publication by ID
     * Null if not exists
     * @param id string
     */
    PublicationsService.prototype.get_pub_by_id = function (id) {
        this.pub_doc = this.afs.doc("publications/" + id);
        this.pub = this.pub_doc.valueChanges();
        return this.pub;
    };
    /**
     * POSTs a Publication to Firebase and Returns the generated ID
     * @param pub Publication object to be posted
     */
    PublicationsService.prototype.post_publication = function (pub) {
        var id = undefined;
        this.publications_collection.add(pub)
            .then(function (onfulfilled) {
            id = onfulfilled.id;
        }, function (onrejected) {
            console.log('Publication Rejected >> ', onrejected);
        })
            .catch(function (error) {
            console.log("EXCAPTION! >>>> ", error);
        });
        return id;
    };
    /**
     * Updates the values of a Publication
     * @param pub Publication object to be updated
     */
    PublicationsService.prototype.put_publication = function (pub) {
        this.pub_doc = this.afs.doc("publications/" + pub.id);
        this.pub_doc.update(pub);
    };
    /**
     * Deletes a Publication Document from the Database
     * @param id string
     */
    PublicationsService.prototype.delete_publication = function (id) {
        this.afs.doc("publications/" + id)
            .delete().catch(function (err) { return alert('No se pudo eliminar la publicación. ' + err.message); });
    };
    PublicationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], PublicationsService);
    return PublicationsService;
}());



/***/ }),

/***/ "./src/app/services/social.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/social.service.ts ***!
  \********************************************/
/*! exports provided: SocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialService", function() { return SocialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialService = /** @class */ (function () {
    function SocialService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.seed_collection = afs.collection('seeds', function (ref) { return ref.orderBy('date', 'desc'); });
    }
    /**
     * Returns an observable collection of Seeds with their IDs
     */
    SocialService.prototype.get_seeds = function () {
        this.seeds = this.seed_collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.seeds;
    };
    /**
     * Returns a Seed by ID
     * Null if not exists
     * @param id string
     */
    SocialService.prototype.get_seed = function (id) {
        this.seed_doc = this.afs.doc("seeds/" + id);
        this.seed = this.seed_doc.valueChanges();
        return this.seed;
    };
    /**
     * POSTs a Publication to Firebase and Returns the generated ID
     * @param pub Publication object to be posted
     */
    SocialService.prototype.post_seed = function (seed) {
        this.seed_collection.add(seed)
            .catch(function (error) {
            console.log("EXCAPTION! >>>> ", error);
        });
    };
    /**
     * Updates the values of a Seed
     * @param pub Publication object to be updated
     */
    SocialService.prototype.put_seed = function (seed) {
        this.seed_doc = this.afs.doc("seeds/" + seed.id);
        this.seed_doc.update(seed);
    };
    /**
     * Deletes a Seed Document from the Database
     * @param id string
     */
    SocialService.prototype.delete_seed = function (id) {
        this.afs.doc("seeds/" + id).delete()
            .catch(function (err) { return alert('Could not delete Social Seed. ' + err.message); });
    };
    SocialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], SocialService);
    return SocialService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC-2mSPoK7F40x953nxm_4ISoxcmEdbaRQ",
        authDomain: "garcialopezprod.firebaseapp.com",
        databaseURL: "https://garcialopezprod.firebaseio.com",
        projectId: "garcialopezprod",
        storageBucket: "garcialopezprod.appspot.com",
        messagingSenderId: "124833624024"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sebastiangarcia/Desktop/garcialopez/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map