import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { BtnLoadingComponent } from './btn-loading/btn-loading.component';

const components = [
  BtnLoadingComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    PerfectScrollbarModule,
    LayoutsModule,
    SharedDirectivesModule,
    SharedPipesModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
