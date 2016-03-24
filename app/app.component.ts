import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { RestRequest, RestApiService } from 'ng2rest/rest';
 //import { RestRequest } from '../node_modules/ng2rest/rest';

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
export class AppComponent implements OnInit {
    ngOnInit(){
        var req: RestRequest = new RestRequest();
       
        console.log(req);
        // var req = new RestRequest();
        // req.endPoint = 'sds';
        // console.log(req);
    }
    private myText: string;

}