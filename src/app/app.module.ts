import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { LoopInnerControlsPipe } from './form/loop-inner-controls.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoopInnerControlsPipe
  ],
    imports: [
      CommonModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
