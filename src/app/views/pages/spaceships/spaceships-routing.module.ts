import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceshipsListComponent } from './spaceships-list/spaceships-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipsRoutingModule { }
