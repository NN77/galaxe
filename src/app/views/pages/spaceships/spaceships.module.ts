import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceshipsListComponent } from './spaceships-list/spaceships-list.component';
import { SpaceshipsDetailComponent } from './spaceships-detail/spaceships-detail.component';
import { SpaceshipsRoutingModule } from './spaceships-routing.module';

const components = [
  SpaceshipsListComponent,
  SpaceshipsDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    SpaceshipsRoutingModule
  ],
  declarations: components
})
export class SpaceshipsModule { }
