import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentsModule } from './components/shared-components.module';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PerfectScrollbarModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule
  ]
})
export class SharedModule { }
