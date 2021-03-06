import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { EmployeeFormTemplateComponent } from './employee-form-template/employee-form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    EmployeeFormTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
