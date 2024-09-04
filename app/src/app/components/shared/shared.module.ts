import { HomeBtnComponent } from '../home-btn/home-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HomeBtnComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HomeBtnComponent]
})
export class SharedModule { }
