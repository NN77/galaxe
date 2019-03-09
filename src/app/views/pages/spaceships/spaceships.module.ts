import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { SpaceshipsListComponent } from './spaceships-list/spaceships-list.component';
import { SpaceshipsDetailComponent } from './spaceships-detail/spaceships-detail.component';
import { SpaceshipsRoutingModule } from './spaceships-routing.module';
import { SharedComponentsModule } from '../../../shared/components/shared-components.module';
import { SharedPipesModule } from '../../../shared/pipes/shared-pipes.module';

const components = [
  SpaceshipsListComponent,
  SpaceshipsDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    SharedComponentsModule,
    SharedPipesModule,
    SpaceshipsRoutingModule
  ],
  declarations: components
})
export class SpaceshipsModule { }
