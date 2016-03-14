import {Component, Output,EventEmitter} from 'angular2/core';

@Component({
    moduleId: 'app/CONTROLS/ux-textbox/',
    selector: 'ux-textbox',
    template: `
    <div style="display:block;">
        <label>{{label}}</label>
        <input type="text" [(ngModel)]="text" (ngModelChange)="textChange.emit($event)" />
    </div>
    `,
    inputs: ['text', 'label'],
})

export class UxTextBoxComponent {
    public label: string;
    public text: string;
    @Output() textChange:EventEmitter<string> = new EventEmitter<string>();
}