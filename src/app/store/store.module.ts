import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';



@NgModule({
  declarations: [StoreComponent],
  exports: [StoreComponent],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
  ]

})
export class StoreModule { }
