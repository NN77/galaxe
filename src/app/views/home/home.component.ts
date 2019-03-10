import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { startWith, debounceTime, switchMap, map } from 'rxjs/operators';

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
  selectedTab = 'spaceships';
  dropOffAnotherPlanet = false;
  viewMode: 'list' | 'grid' = 'grid';
  page = 1;
  pageSize = 8;
  spaceships$: Observable<any[]>;
  searchForm: FormGroup;
  filtersForm: FormGroup;
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
        .pipe(startWith({ pick_up: '', drop_off: '' }), debounceTime(200)),
      this.filtersForm.valueChanges
        .pipe(startWith({
          category: { economy: true, compact: true, premium: true, gxefast: true },
          transmission: { automatic: true, manual: true },
          ac: 'true',
          fuel: { petrol: true, diesel: true }
        }))
    )
      .pipe(map(([spaceships, searchObj, filterObj]) => {
        return spaceships.filter(p => {
          const filter = {
            // deserves for comment :) TODO to be moved to Object Utils comparison
            // in current example category following filter(checkboxes) are allowed be multi-check
            // changing .some method to .every will result exactly matched spaceships by exactly marked checkboxes
            isCategoryOk: Object.keys(p.category).filter(categoryDataKey => filterObj.category[categoryDataKey] === true).some(categoryDataKey => {
              return filterObj.category[categoryDataKey] === p.category[categoryDataKey];
            }),
            isPlanetOk: p.currentLocalization === searchObj.pick_up,
            isTransmissionOk: p.transmission.automatic === filterObj.transmission.automatic || p.transmission.manual === filterObj.transmission.manual,
            isAcOk: p.ac.toString() === filterObj.ac,
            isFuelOk: p.fuel.petrol === filterObj.fuel.petrol || p.fuel.diesel === filterObj.fuel.diesel
          };
          return Object.values(filter).every(item => item === true);
        });
      }));

    // TODO complex strategy of retrieving rental dates range + validation using Utils
    this.searchForm.get('rentalStart').valueChanges.subscribe( (rentalStartValChanged) => {
      const currentRentalEndDate = this.searchForm.controls['rentalEnd'].value;
      const rentalRangeUpdated = Utils.differenceInDays(
        Utils.ngbDateToDate(rentalStartValChanged['date_start']),
        Utils.ngbDateToDate(currentRentalEndDate['date_end'])
      );
      this.searchForm.patchValue({ rentalRange: rentalRangeUpdated });
    });

    // TODO complex strategy of retrieving rental dates range + validation using Utils
    this.searchForm.get('rentalEnd').valueChanges.subscribe( (rentalEndValChanged) => {
      const currentRentalStartDate = this.searchForm.controls['rentalStart'].value;
      const rentalRangeUpdated = Utils.differenceInDays(Utils.ngbDateToDate(currentRentalStartDate['date_start']), Utils.ngbDateToDate(rentalEndValChanged['date_end']));
      this.searchForm.patchValue({ rentalRange: rentalRangeUpdated });
    });
  }

  createForms() {
    this.searchForm = this.formBuilder.group({
      planet: new FormGroup({
        pick_up: new FormControl('', Validators.required),
        drop_off: new FormControl('')
      }),
      rentalStart: new FormGroup({
        date_start: new FormControl({}, Validators.required),
        time_start: new FormControl({}, Validators.required)
      }),
      rentalEnd: new FormGroup({
        date_end: new FormControl('', Validators.required),
        time_end: new FormControl('', Validators.required)
      }),
      rentalRange: new FormControl(0, [Validators.required, CustomValidators.rantalRangeValidator(1, 15)])
    });
    this.filtersForm = this.formBuilder.group({
      category: new FormGroup({
        economy: new FormControl(true),
        compact: new FormControl(true),
        premium: new FormControl(true),
        gxefast: new FormControl(true)
      }),
      transmission: new FormGroup({
        automatic: new FormControl(true),
        manual: new FormControl(true),
      }),
      ac: new FormControl('true'),
      fuel: new FormGroup({
        petrol: new FormControl(true),
        diesel: new FormControl(true),
      }),
    });
  }

  selectTab(id: string) {
    this.selectedTab = id;
  }

  dropOffCheckboxChange(e: boolean) {
    this.dropOffAnotherPlanet = e;
  }

  continue() {
    if (this.searchForm.invalid) {
      return;
    }
    if (this.spaceships$) {

    }
    this.loading = true;
    this.searchForm.disable();
    const query = this.searchForm.getRawValue();

    const navigationExtras: NavigationExtras = {
      queryParams: {
        'planetPickup': query.planet.pick_up,
        'planetDropoff': query.planet.drop_off,
        'rentalStart': Utils.ngbDateToDate(query.rentalStart.date_start, query.rentalStart.time_start),
        'rentalEnd': Utils.ngbDateToDate(query.rentalEnd.date_end, query.rentalEnd.time_end),
        'rentalRange': query.rentalRange
      }
    };

    this.route.navigate(['/spaceships'], navigationExtras);
  }

}
