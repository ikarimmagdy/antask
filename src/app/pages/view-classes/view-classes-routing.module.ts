import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClassesPage } from './view-classes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClassesPageRoutingModule {}
