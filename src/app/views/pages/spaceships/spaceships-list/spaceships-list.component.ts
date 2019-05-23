import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { DataService } from '../../../../shared/services/data.service';
import { SharedAnimations } from '../../../../shared/animations/shared-animations';
import { Utils } from '../../../../shared/utils';
import { CustomValidators } from '../../../../shared/validators';

enum Categories {
  VIDEOSLOTS = '51',
  TOPSLOTS = '93',
  CHRISTMASSLOTS = '101',
  NEW = '65',
  POPULAR = '95',
  MINIGAMES = '52',
  SKILLGAMES = '36',
  VIDEOPOKER = '40',
  LINES25 = '76',
  OTHERGAMES = '44',
  PROGRESSIVE = '59'
}

enum Features {
  BONUSGAMES = '186',
  BONUSSYMBOLS = '187',
  FREESPINS = '189',
  REELRESPINS = '195'
}

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css'],
  animations: [SharedAnimations]
})

export class SpaceshipsListComponent implements OnInit {
  category: string;
  filtersForm: FormGroup;
  searchCtrl: FormControl = new FormControl('');
  providers: string[] = ['BSG', 'ASG', 'EVL', 'PNH'];
  viewMode: 'list' | 'grid' = 'grid';
  page = 1;
  pageSize = 18;
  games$: Observable<any[]>;
  loading = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForms();
    this.route.params.subscribe(params => {
      this.games$ = combineLatest(
        this.dataService.getGames(),
        this.filtersForm.valueChanges
          .pipe(startWith({
            features: {bonusgames: true, bonussymbols: true, freespins: true, reelrespins: true},
            provider: ''
          })),
        this.searchCtrl.valueChanges
          .pipe(startWith(''), debounceTime(200))
      )
        .pipe(map(([games, filterObj, searchTerm]) => {
          return games.filter(g => {
            const filter = {
              isCategoryOk: params.category ? g.categories.includes(Categories[params.category.toUpperCase()]) : true,
              isProviderOk: filterObj.provider ? filterObj.provider.includes(g.provider) : true,
              isSearchOk: searchTerm ? g.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 : true
            };
            return Object.values(filter).every(item => item === true) ? {...g, isNew: filterObj.category === '65'} : false;
          });
        }));
    });
  }

  ngOnInit() {

  }

  createForms() {
    this.filtersForm = this.formBuilder.group({
      category: new FormControl(),
      provider: new FormControl()
    });
  }

  // book(id) {
  //   if (this.searchForm.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.searchForm.disable();
  //   const query = this.searchForm.getRawValue();
  //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       'planetPickup': query.planet.pick_up,
  //       'planetDropoff': query.planet.drop_off,
  //       'rentalStart': Utils.ngbDateToDate(query.rentalStart.date_start, query.rentalStart.time_start),
  //       'rentalEnd': Utils.ngbDateToDate(query.rentalEnd.date_end, query.rentalEnd.time_end),
  //       'rentalRange': query.rentalRange
  //     }
  //   };
  //   this.router.navigate([`spaceships/${id}`], navigationExtras);
  // }

}
