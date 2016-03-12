import {Component, OnInit} from 'angular2/core';
import { Category } from '../../models/export';

@Component({
    moduleId: 'app/TEMPLATES/category-thumb/',
    selector: 'category-thumb',
    templateUrl: 'category-thumb.component.html',
    inputs: ['category']
})

export class CategoryThumbComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
    
    private category: Category;
}