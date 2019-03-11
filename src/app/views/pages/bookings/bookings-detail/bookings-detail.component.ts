import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedAnimations } from '../../../../shared/animations/shared-animations';
import { Spaceship } from '../../../../shared/models/spaceship.model';
import { LocalStoreService } from '../../../../shared/services/local-store.service';

@Component({
  selector: 'app-bookings-detail',
  templateUrl: './bookings-detail.component.html',
  styleUrls: ['./bookings-detail.component.css'],
  animations: [SharedAnimations]
})
export class BookingsDetailComponent implements OnInit {
  spaceship: Spaceship;
  extras: string[] = [];
  loading = false;
  booking;

  constructor(
    private route: ActivatedRoute,
    private lsService: LocalStoreService
  ) {}

  ngOnInit() {
    // for demo purposes they're fetched from local storage
    this.booking = this.lsService.getItem('booking');
  }
}
