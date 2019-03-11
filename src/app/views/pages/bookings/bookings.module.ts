import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsDetailComponent } from './bookings-detail/bookings-detail.component';

import { BookingRoutingModule } from './bookings-routing.module';

const components = [
  BookingsDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  declarations: components
})
export class BookingsModule { }
