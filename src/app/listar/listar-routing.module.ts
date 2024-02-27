import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPage } from './listar.page';
import { ListarItemComponent } from './listar-item/listar-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPage
  },
  {
    path: 'item/:id',
    component: ListarItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPageRoutingModule {}
