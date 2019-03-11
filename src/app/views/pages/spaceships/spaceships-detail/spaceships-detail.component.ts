import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookingService } from '../../../../shared/services/booking.service';
import { DataService } from '../../../../shared/services/data.service';
import { SharedAnimations } from '../../../../shared/animations/shared-animations';
import { Spaceship } from '../../../../shared/models/spaceship.model';
import { LocalStoreService } from '../../../../shared/services/local-store.service';
import { Booking } from '../../../../shared/models/booking.model';

@Component({
  selector: 'app-spaceships-detail',
  templateUrl: './spaceships-detail.component.html',
  styleUrls: ['./spaceships-detail.component.css'],
  animations: [SharedAnimations]
})
export class SpaceshipsDetailComponent implements OnInit {
  queryParams;
  spaceship: Spaceship;
  extras: string[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private dataService: DataService,
    private lsService: LocalStoreService
  ) {
    this.route.queryParams.subscribe(queryParams => {
      // params below should be used for backend GET call,
      // for demo purposes they're not passed to inMemoryDB internal call
      this.queryParams = {
        planetPickup: queryParams.planetPickup,
        planetDropoff: queryParams.planetDropoff,
        rentalStart: queryParams.rentalStart,
        rentalEnd: queryParams.rentalEnd,
        rentalRange: queryParams.rentalRange
      };
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getSpaceships().subscribe(spaceships => {
        spaceships.map(spaceship => {
          if (spaceship._id === params.id) {
            this.spaceship = new Spaceship(spaceship);
            this.spaceship = spaceship;
          }
        });
      });
    });
  }

  addExtra(extra: string) {
    if (this.extras.includes(extra)) {
      return;
    }
    this.extras.push(extra);
  }

  removeExtra(extra) {
    if (this.extras.includes(extra)) {
      const index = this.extras.indexOf(extra);
      this.extras.splice(index, 1);
    }
  }

  bookAndPay() {
    this.loading = true;
    const booking = {
      id: 'abcdefgh',
      spaceship: this.spaceship,
      planet: {
        pick_up: this.queryParams.planetPickup,
        drop_off: this.queryParams.planetDropoff
      },
      rentalStart: this.queryParams.rentalStart,
      rentalEnd: this.queryParams.rentalEnd,
      extras: this.extras
    };
    this.bookingService.addBooking(booking).subscribe((next: any) => {
      this.lsService.setItem('booking', booking);
      this.router.navigateByUrl('/bookings/confirmation');
    });
  }

}
