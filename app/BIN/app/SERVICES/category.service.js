System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var OMDB_BASE_URL, CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OMDB_BASE_URL = 'http://www.omdbapi.com';
            CategoryService = (function () {
                function CategoryService() {
                    // private restApiService: RestApiService
                    // this.restApiService.baseUrl = OMDB_BASE_URL;
                    // this.restApiService.globalParameters['r'] = 'JSON';
                }
                CategoryService.prototype.getRestaurant = function () {
                    // var omdbRequest = new RestRequest();
                    console.log('getting movie');
                    // this.restApiService.executeRequest<OmdbMovie>(omdbRequest).then(omdbMovie => {
                    //     console.log(omdbMovie);
                    // });
                    var toReturn;
                    return toReturn; //  RESTAURANT_TEST_DATA.menu.categories;
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=category.service.js.map