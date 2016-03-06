System.register(['angular2/platform/browser', 'angular2/core', './app.component', './CONTROLS/export'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, app_component_1, export_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (export_1_1) {
                export_1 = export_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: export_1.UxTextBoxComponent, multi: true })]);
        }
    }
});
//# sourceMappingURL=main.js.map