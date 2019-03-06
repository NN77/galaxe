import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './home-layout/header/header.component';
import { FooterComponent } from './home-layout/footer/footer.component';

const components = [
  AuthLayoutComponent,
  HomeLayoutComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    PerfectScrollbarModule,
    SharedDirectivesModule,
    SharedPipesModule
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
