import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'food-categories',
    template: '<br/>YOLO: <ux-textbox [(text)]="coolText"></ux-textbox> {{coolText}}',

})

export class FoodCategoriesComponent implements OnInit {
    private coolText:string;
    constructor() { }

    ngOnInit() { }
}