import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeHeaderComponent } from './home-layout/home-header/home-header.component';
import { HomeFooterComponent } from './home-layout/home-footer/home-footer.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { SidebarHeaderComponent } from './sidebar-layout/sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-layout/sidebar-footer/sidebar-footer.component';

const components = [
  AuthLayoutComponent,
  HomeLayoutComponent,
  HomeHeaderComponent,
  HomeFooterComponent,
  SidebarLayoutComponent,
  SidebarHeaderComponent,
  SidebarFooterComponent
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
