import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceshipsListComponent } from './spaceships-list/spaceships-list.component';
import { SpaceshipsDetailComponent } from './spaceships-detail/spaceships-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipsListComponent
  },
  {
    path: ':category',
    component: SpaceshipsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipsRoutingModule { }
