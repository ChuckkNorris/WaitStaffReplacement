import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { FoodCategoriesComponent, AdminComponent } from './PAGES/export';
@Component({
    moduleId: 'app/',
    selector: 'app',
    templateUrl: 'app.component.html',
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/FoodCategories', name:'FoodCategories', useAsDefault: true, component:FoodCategoriesComponent},
    {path: '/Admin', name:'Admin', component:AdminComponent},

])
export class AppComponent {
    private myText: string;

}