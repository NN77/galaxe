import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGaurd} from './shared/guards/auth.gaurd';
import {AuthLayoutComponent} from './shared/components/layouts/auth-layout/auth-layout.component';
import {HomeLayoutComponent} from './shared/components/layouts/home-layout/home-layout.component';

const adminRoutes: Routes = [
  {
    path: 'bonus',
    loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule'
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
