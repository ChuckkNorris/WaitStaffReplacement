System.register(['angular2/core', '../../SERVICES/export', '../../TEMPLATES/export'], function(exports_1, context_1) {
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
    var core_1, export_1, export_2;
    var FoodCategoriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (export_1_1) {
                export_1 = export_1_1;
            },
            function (export_2_1) {
                export_2 = export_2_1;
            }],
        execute: function() {
            FoodCategoriesComponent = (function () {
                function FoodCategoriesComponent(categoryService) {
                    this.categoryService = categoryService;
                }
                FoodCategoriesComponent.prototype.ngOnInit = function () {
                    this.categories = this.categoryService.getRestaurant();
                    console.log('loading categories');
                };
                FoodCategoriesComponent = __decorate([
                    core_1.Component({
                        moduleId: 'app/PAGES/food-categories/',
                        selector: 'food-categories',
                        templateUrl: 'food-categories.component.html',
                        providers: [export_1.CategoryService],
                        directives: [export_2.CategoryThumbComponent]
                    }), 
                    __metadata('design:paramtypes', [export_1.CategoryService])
                ], FoodCategoriesComponent);
                return FoodCategoriesComponent;
            }());
            exports_1("FoodCategoriesComponent", FoodCategoriesComponent);
        }
    }
});
//# sourceMappingURL=food-categories.component.js.map