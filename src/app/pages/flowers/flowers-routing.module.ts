import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowersPage } from './flowers.page';

const routes: Routes = [
  {
    path: '',
    component: FlowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowersPageRoutingModule {}
