import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestModuleComponent} from './test-module.component';
import {MaterialModule} from '../material/material.module';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TestModuleComponent]
})
export class TestModuleModule {
}
