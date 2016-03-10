import { Menu } from './menu.model';
export interface Restaurant {
    name: string;
    address: string;
    description: string;
    menu: Menu;
}