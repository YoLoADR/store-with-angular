"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var catalog_services_1 = require('./../services/catalog.services');
var CatalogComponent = (function () {
    function CatalogComponent(catalogService, router) {
        this.catalogService = catalogService;
        this.router = router;
        this.category = ["watch", "parfume"];
        this.images = ["http://lorempicsum.com/nemo/350/200/1", "http://lorempicsum.com/simpsons/350/200/1"];
    }
    CatalogComponent.prototype.getCatalog = function () {
        var _this = this;
        this.catalogService.getCatalog().then(function (catalog) {
            _this.catalog = catalog;
        });
    };
    CatalogComponent.prototype.getProducts = function () {
        var _this = this;
        this.catalogService
            .getProducts()
            .then(function (products) {
            _this.products = products;
        });
    };
    CatalogComponent.prototype.add = function (title, description, image, category) {
        var _this = this;
        title = title.trim();
        description = description.trim();
        image = image.trim();
        category = category.trim();
        if (!title) {
            return;
        }
        this.catalogService.create(title, description, image, category)
            .then(function (product) {
            _this.products.push(product);
        });
    };
    CatalogComponent.prototype.delete = function (product) {
        var _this = this;
        this.catalogService
            .delete(product._id)
            .then(function () {
            _this.products = _this.products.filter(function (h) { return h !== product; });
        });
    };
    CatalogComponent.prototype.ngOnInit = function () {
        this.getCatalog();
        this.getProducts();
    };
    CatalogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalog',
            templateUrl: './catalog.component.html',
            styleUrls: ['./catalog.component.css'],
            providers: [catalog_services_1.CatalogService]
        }), 
        __metadata('design:paramtypes', [catalog_services_1.CatalogService, router_1.Router])
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
//# sourceMappingURL=catalog.component.js.map