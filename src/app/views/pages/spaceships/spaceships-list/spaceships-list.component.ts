import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { DataService } from '../../../../shared/services/data.service';
import { SharedAnimations } from '../../../../shared/animations/shared-animations';
import { Utils } from '../../../../shared/utils';
import { CustomValidators } from '../../../../shared/validators';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css'],
  animations: [SharedAnimations]
})
export class SpaceshipsListComponent implements OnInit {
  dropOffPlanet = true;
  page = 1;
  pageSize = 8;
  spaceships$: Observable<any[]>;
  searchForm: FormGroup;
  filtersForm: FormGroup;
  planets: string[] = ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  loading = false;
  rentalDays: number;
  queryParams;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      // params below should be used for backend GET call,
      // for demo purposes they're not passed to inMemoryDB internal call
      this.queryParams = {
        planet: params.planet,
        rentalStart: params.rentalStart,
        rentalEnd: params.rentalEnd
      };
    });
    this.createForms();
  }

  ngOnInit() {
    // TODO complex strategy of retrieving rental dates range + validation using Utils
    // ugly copied from home component
    this.searchForm.get('rentalStart').valueChanges.subscribe((rentalStartValChanged) => {
      const currentRentalEndDate = this.searchForm.controls['rentalEnd'].value;
      const rentalRangeUpdated = Utils.differenceInDays(
        Utils.ngbDateToDate(rentalStartValChanged['date_start']),
        Utils.ngbDateToDate(currentRentalEndDate['date_end'])
      );
      this.searchForm.patchValue({rentalRange: rentalRangeUpdated});
    });
    // TODO complex strategy of retrieving rental dates range + validation using Utils
    // ugly copied from home component
    this.searchForm.get('rentalEnd').valueChanges.subscribe((rentalEndValChanged) => {
      const currentRentalStartDate = this.searchForm.controls['rentalStart'].value;
      const rentalRangeUpdated = Utils.differenceInDays(Utils.ngbDateToDate(currentRentalStartDate['date_start'], null), Utils.ngbDateToDate(rentalEndValChanged['date_end']));
      this.searchForm.patchValue({rentalRange: rentalRangeUpdated});
    });

    this.rentalDays = Utils.differenceInDays(this.queryParams.rentalStart, this.queryParams.rentalEnd);

    this.spaceships$ = combineLatest(
      this.dataService.getSpaceships(),
      this.searchForm.get('planet').valueChanges
        .pipe(startWith('Earth'), debounceTime(200)),
      this.filtersForm.valueChanges
        .pipe(startWith({
          category: {economy: true, compact: true, premium: true, gxefast: true},
          transmission: {automatic: true, manual: true},
          fuel: {petrol: true, diesel: true}
        }))
    )
      .pipe(map(([spaceships, searchObj, filterObj]) => {
        return spaceships.filter(p => {
          const filter = {
            // ugly copied from home component TODO shared filters component and operate by Inputs & Outputs
            isCategoryOk: Object.keys(p.category).filter(categoryDataKey => filterObj.category[categoryDataKey] === true).some(categoryDataKey => {
              return filterObj.category[categoryDataKey] === p.category[categoryDataKey];
            }),
            isPlanetOk: searchObj.pick_up === undefined ? true : p.currentLocalization === searchObj.pick_up,
            isTransmissionOk: p.transmission.automatic === filterObj.transmission.automatic || p.transmission.manual === filterObj.transmission.manual,
            isAcOk: filterObj.ac === undefined ? true : p.ac.toString() === filterObj.ac,
            isFuelOk: p.fuel.petrol === filterObj.fuel.petrol || p.fuel.diesel === filterObj.fuel.diesel
          };
          return Object.values(filter).every(item => item === true);
        });
      }));
  }

  createForms() {
    this.searchForm = this.formBuilder.group({
      planet: new FormGroup({
        pick_up: new FormControl(this.queryParams.planet, Validators.required),
        drop_off: new FormControl()
      }),
      rentalStart: new FormGroup({
        date_start: new FormControl(Utils.dateToNgbDate(this.queryParams.rentalStart), Validators.required),
        time_start: new FormControl(Utils.dateToNgbTime(this.queryParams.rentalStart), Validators.required)
      }),
      rentalEnd: new FormGroup({
        date_end: new FormControl(Utils.dateToNgbDate(this.queryParams.rentalEnd), Validators.required),
        time_end: new FormControl(Utils.dateToNgbTime(this.queryParams.rentalEnd), Validators.required)
      }),
      rentalRange: new FormControl({value: this.queryParams.rentalRange}, [Validators.required, CustomValidators.rantalRangeValidator(1, 15)])
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

  dropOffCheckboxChange(e: boolean) {
    this.dropOffPlanet = e;
  }

  book() {
    this.loading = true;
    this.searchForm.disable();
    const query = this.searchForm.getRawValue();
    console.log(query);
  }

}
