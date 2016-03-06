import {Component, Output,EventEmitter} from 'angular2/core';

@Component({
    moduleId: 'app/CONTROLS/ux-textbox/',
    selector: 'ux-textbox',
    template: `
        <input type="text" [(ngModel)]="text" (ngModelChange)="textChange.emit($event)" />
        {{text}}
    `,
    inputs: ['text'],
})

export class UxTextBoxComponent {
    public text: string;
    @Output() textChange:EventEmitter<string> = new EventEmitter<string>();
}