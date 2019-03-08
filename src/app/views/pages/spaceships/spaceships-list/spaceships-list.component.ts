import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { DataService } from '../../../../shared/services/data.service';
import { SharedAnimations } from '../../../../shared/animations/shared-animations';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css'],
  animations: [SharedAnimations]
})
export class SpaceshipsListComponent implements OnInit {
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
    private formBuilder: FormBuilder
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
        return spaceships;
        // return spaceships.filter(p => {
        //   return p.currentLocalization === searchObj.pick_up;
        // });
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
