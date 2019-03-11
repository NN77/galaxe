import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsDetailComponent } from './bookings-detail/bookings-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsDetailComponent
  },
  {
    path: 'confirmation',
    component: BookingsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
