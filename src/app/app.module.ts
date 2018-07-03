import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basicForm/basic-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UpdateOnComponent } from './update-on/update-on.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    BasicFormComponent,
    StarterTemplateFormComponent,
    StarterReactiveFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    UpdateOnComponent,
    ControlValueAccessorComponent,
    ReactiveDynamicFormComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
