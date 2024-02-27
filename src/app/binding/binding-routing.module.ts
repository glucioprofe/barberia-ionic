import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingPage } from './binding.page';

const routes: Routes = [
  {
    path: '',
    component: BindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BindingPageRoutingModule {}
