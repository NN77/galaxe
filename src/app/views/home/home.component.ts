import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { startWith, debounceTime, switchMap, map } from 'rxjs/operators';

import { DataService } from '../../shared/services/data.service';
import { SharedAnimations } from '../../shared/animations/shared-animations';
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [SharedAnimations]
})
export class HomeComponent implements OnInit {
  selectedTab = 'spaceships';
  dropOffPlanet = true;
  viewMode: 'list' | 'grid' = 'grid';
  page = 1;
  pageSize = 8;
  spaceships$: Observable<any[]>;
  searchForm: FormGroup;
  planets: string[] = ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  loading = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.createForms();
  }

  ngOnInit() {
    this.spaceships$ = combineLatest(
      this.dataService.getSpaceships(),
      this.searchForm.get('planet').valueChanges
        .pipe(startWith({}), debounceTime(200))
    )
      .pipe(map(([spaceships, searchObj]) => {
        return spaceships.filter(p => {
          return p.currentLocalization === searchObj.pick_up;
        });
      }));
  }

  createForms() {
    this.searchForm = this.formBuilder.group({
      planet: new FormGroup({
        pick_up: new FormControl('', Validators.required),
        drop_off: new FormControl()
      }),
      rentalStart: new FormGroup({
        date: new FormControl({}, Validators.required),
        time: new FormControl({}, Validators.required)
      }),
      rentalEnd: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required)
      }),
    });
  }

  selectTab(id: string) {
    this.selectedTab = id;
  }

  dropOffCheckboxChange(e: boolean) {
    this.dropOffPlanet = e;
  }

  continue() {
    this.loading = true;
    this.searchForm.disable();
    const query = this.searchForm.getRawValue();

    const navigationExtras: NavigationExtras = {
      queryParams: {
        'planet': query.planet.pick_up,
        'rentalStart': Utils.ngbDateToDate(query.rentalStart.date),
        'rentalEnd': Utils.ngbDateToDate(query.rentalEnd.date)
      }
    };

    this.route.navigate(['/spaceships'], navigationExtras);
  }

}
