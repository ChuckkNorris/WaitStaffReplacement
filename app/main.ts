import { bootstrap } from 'angular2/platform/browser';
import { PLATFORM_DIRECTIVES, provide } from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { AppComponent } from './app.component';
import { UxTextBoxComponent, UxButtonComponent } from './CONTROLS/export';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(PLATFORM_DIRECTIVES,  {useValue:UxTextBoxComponent, multi: true}),
    provide(PLATFORM_DIRECTIVES,  {useValue:UxButtonComponent, multi: true})
]);