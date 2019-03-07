import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { PlanetsRoutingModule } from './planets-routing.module';

const components = [
  PlanetsListComponent,
  PlanetsDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ],
  declarations: components
})
export class PlanetsModule { }
