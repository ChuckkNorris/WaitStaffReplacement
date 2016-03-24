import { Restaurant, Menu, Category, Item } from '../MODELS/export';

export const RESTAURANT_TEST_DATA: Restaurant = {
    name: "Snooze AM Eatery",
    address: "2262 Larimer St, Denver, CO 80205",
    description: "AN A.M. EATERY",
    menu: {
        categories: [
            {
                name: 'Flavors fro m the Hen',
                items: [
                    {
                        description: 'Farm fresh cage free eggs, hash browns, choice of toast Add breakfast meat',
                        name: 'The Snooze Classic', 
                        price: 8.99,
                        pictureUrl: 'http://snoozeeatery.com/wp-content/themes/bootstrap/public/images/menu_02_1500x498.jpg',
                        rating: 3.4
                    },
                    {
                        name: '3 Egg Omelet or Scramble', 
                        description: 'Farm fresh cage free eggs, hash browns, choice of toast Add breakfast meat',
                        price: 8.99,
                        pictureUrl: '',
                        rating: 3.4
                    },
                    {
                        description: 'Farm fresh cage free eggs, hash browns, choice of toast Add breakfast meat',
                        name: 'The Snooze Classic', 
                        price: 8.99,
                        pictureUrl: '',
                        rating: 3.4
                    },
                ]
            },
            {
                name: 'the art of hollandaise',
                items: [
                    {
                        name: 'Ham Benedict III',
                        description: '',
                        price: 8.99,
                        pictureUrl: 'http://snoozeeatery.com/wp-content/themes/bootstrap/public/images/menu_03_1500x498.jpg',
                        rating: 4
                        
                    }
                ]
            },
             {
                name: 'the art of hollandaise',
                items: [
                    {
                        name: 'Ham Benedict III',
                        description: '',
                        price: 8.99,
                        pictureUrl: 'http://snoozeeatery.com/wp-content/themes/bootstrap/public/images/menu_03_1500x498.jpg',
                        rating: 4
                        
                    }
                ]
            }
        ]
        
   
    }
}; 