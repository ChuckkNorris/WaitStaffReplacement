import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { FoodCategoriesComponent } from './PAGES/export';
@Component({
    moduleId: 'app/',
    selector: 'app',
    templateUrl: 'app.component.html',
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/FoodCategories', name:'FoodCategories', useAsDefault: true, component:FoodCategoriesComponent}
])
export class AppComponent {
    private myText: string;

}