import {Component, OnInit} from 'angular2/core';

@Component({
    moduleId: 'app/PAGES/food-categories/',
    selector: 'food-categories',
    templateUrl: 'food-categories.component.html'
})

export class FoodCategoriesComponent implements OnInit {
    private coolText:string;
    constructor() { }

    ngOnInit() { }
}