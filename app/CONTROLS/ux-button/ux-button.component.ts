import {Component, OnInit} from 'angular2/core';

@Component({
    moduleId: 'app/CONTROLS/ux-button/',
    selector: 'ux-button',
    templateUrl: 'ux-button.component.html',
    inputs: ['text']
})

export class UxButtonComponent implements OnInit {
    text: string;
    constructor() { }

    ngOnInit() { 
        console.log(this.text);
    }
    
    
}