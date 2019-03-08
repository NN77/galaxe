import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceshipsListComponent } from './spaceships-list/spaceships-list.component';
import { SpaceshipsDetailComponent } from './spaceships-detail/spaceships-detail.component';

const components = [
  SpaceshipsListComponent,
  SpaceshipsDetailComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
})
export class SpaceshipsModule { }
