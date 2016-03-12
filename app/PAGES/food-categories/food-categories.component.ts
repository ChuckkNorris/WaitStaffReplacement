import {Component, OnInit} from 'angular2/core';
import { CategoryService } from '../../SERVICES/export';
import { Category } from '../../MODELS/export';
import { CategoryThumbComponent } from '../../TEMPLATES/export';

@Component({
    moduleId: 'app/PAGES/food-categories/',
    selector: 'food-categories',
    templateUrl: 'food-categories.component.html',
    providers: [CategoryService],
    directives: [CategoryThumbComponent]
})

export class FoodCategoriesComponent implements OnInit {
    
    constructor(private categoryService: CategoryService) { }

    ngOnInit() { 
        this.categories = this.categoryService.getRestaurant();
        console.log('loading categories');
    }
    
    private categories: Category[];
}