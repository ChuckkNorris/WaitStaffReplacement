import {Component, OnInit} from 'angular2/core';
import { CategoryThumbComponent } from './TEMPLATES/export';
 import { UxButtonComponent, UxTextBoxComponent } from './CONTROLS/export';
import { FoodCategoriesComponent } from './PAGES/export';
@Component({
    moduleId: 'app/',
    selector: 'app',
    template: `
        <ux-textbox [(text)]="myText"></ux-textbox>
        <!-- Changing this ^ isn't changing myText-->
        <input type="text" [(ngModel)]="myText" />
        <food-categories></food-categories>
        {{myText}}
    `,
      directives: [UxTextBoxComponent, FoodCategoriesComponent]
})

export class AppComponent {
    private myText: string;

}