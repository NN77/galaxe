import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import {startWith, debounceTime, switchMap, map, take} from 'rxjs/operators';

import { DataService } from '../../shared/services/data.service';
import { SharedAnimations } from '../../shared/animations/shared-animations';
import { Utils } from '../../shared/utils';
import { CustomValidators } from '../../shared/validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [SharedAnimations]
})
export class HomeComponent implements OnInit {
  selectedTab = 'topslots';
  dropOffAnotherPlanet = false;
  viewMode: 'list' | 'grid' = 'grid';
  page = 1;
  pageSize = 6;
  games$: Observable<any[]>;
  searchForm: FormGroup;
  filtersForm: FormGroup;
  planets: string[] = ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  loading = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.games$ = this.dataService.getGames();
  }

  selectTab(id: string) {
    this.selectedTab = id;
  }

  // continue() {
  //   if (this.searchForm.invalid) {
  //     return;
  //   }
  //   if (this.spaceships$) {
  //
  //   }
  //   this.loading = true;
  //   this.searchForm.disable();
  //   const query = this.searchForm.getRawValue();
  //
  //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       'planetPickup': query.planet.pick_up,
  //       'planetDropoff': query.planet.drop_off,
  //       'rentalStart': Utils.ngbDateToDate(query.rentalStart.date_start, query.rentalStart.time_start),
  //       'rentalEnd': Utils.ngbDateToDate(query.rentalEnd.date_end, query.rentalEnd.time_end),
  //       'rentalRange': query.rentalRange
  //     }
  //   };
  //
  //   this.route.navigate(['/spaceships'], navigationExtras);
  // }

}
