import {Component, OnInit} from 'angular2/core';
import { UxTextBoxComponent } from '../../CONTROLS/export';
@Component({
    moduleId: 'app/TEMPLATES/edit-menu/',
    selector: 'edit-menu',
    templateUrl: 'edit-menu.component.html',
    directives: [UxTextBoxComponent]
})

export class EditMenuComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}