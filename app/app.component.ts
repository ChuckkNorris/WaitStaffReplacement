import {Component, OnInit} from 'angular2/core';
import { CategoryThumbComponent } from './TEMPLATES/export';
import { UxButtonComponent, UxTextBoxComponent } from './CONTROLS/export';
@Component({
    moduleId: 'app/',
    selector: 'app',
    template: `
        <ux-textbox [(text)]="myText"></ux-textbox>
        <!-- Changing this ^ isn't changing myText-->
        <input type="text" [(ngModel)]="myText" />
        {{myText}}
    `,
    directives: [UxTextBoxComponent]
})

export class AppComponent {
    private myText: string;

}