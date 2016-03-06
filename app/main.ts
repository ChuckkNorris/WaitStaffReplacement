import { bootstrap } from 'angular2/platform/browser';
import { PLATFORM_DIRECTIVES, provide } from 'angular2/core';
import { AppComponent } from './app.component';
import { UxTextBoxComponent } from './CONTROLS/export';
bootstrap(AppComponent, [provide(PLATFORM_DIRECTIVES,  {useValue:UxTextBoxComponent, multi: true})]);