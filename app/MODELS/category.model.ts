import { Item } from './Item.model';
export interface Category {
    name: string;
    items: Item[];
}