import {Injectable} from 'angular2/core';
import { Category } from '../models/export';
import { RESTAURANT_TEST_DATA } from '../data/restaurant.data'

@Injectable()
export class CategoryService {

    constructor() { }
    
    public getRestaurant() : Category[] {
        return  RESTAURANT_TEST_DATA.menu.categories;
    }

}