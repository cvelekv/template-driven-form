import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicFormComponent } from './basicForm/basic-form.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UpdateOnComponent } from './update-on/update-on.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/startertemplateform" },
  { path: "basicform", component: BasicFormComponent },
  { path: "startertemplateform", component: StarterTemplateFormComponent },
  { path: "starterreactiveform", component: StarterReactiveFormComponent },
  { path: "templateform", component: TemplateFormComponent },
  { path: "reactiveform", component: ReactiveFormComponent },
  { path: "updateon", component: UpdateOnComponent },
  { path: "controlvalueaccessor", component: ControlValueAccessorComponent }
  // { path: "reactivedynamicform", component: ReactiveDynamicFormComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    StarterTemplateFormComponent,
    BasicFormComponent,
    StarterReactiveFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    UpdateOnComponent,
    ControlValueAccessorComponent

    // ReactiveDynamicFormComponent
  ];
}
