System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UxTextBoxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UxTextBoxComponent = (function () {
                function UxTextBoxComponent() {
                    this.textChange = new core_1.EventEmitter();
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], UxTextBoxComponent.prototype, "textChange", void 0);
                UxTextBoxComponent = __decorate([
                    core_1.Component({
                        moduleId: 'app/CONTROLS/ux-textbox/',
                        selector: 'ux-textbox',
                        template: "\n    <div style=\"display:block;\">\n        <label>{{label}}</label>\n        <input type=\"text\" [(ngModel)]=\"text\" (ngModelChange)=\"textChange.emit($event)\" />\n    </div>\n    ",
                        inputs: ['text', 'label'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], UxTextBoxComponent);
                return UxTextBoxComponent;
            }());
            exports_1("UxTextBoxComponent", UxTextBoxComponent);
        }
    }
});
//# sourceMappingURL=ux-textbox.component.js.map