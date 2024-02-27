import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BindingPageRoutingModule } from './binding-routing.module';

import { BindingPage } from './binding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BindingPageRoutingModule
  ],
  declarations: [BindingPage]
})
export class BindingPageModule {}
