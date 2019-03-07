import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, combineLatest} from 'rxjs';
import {startWith, debounceTime, switchMap, map} from 'rxjs/operators';

import {DataService} from '../../shared/services/data.service';
import {SharedAnimations} from '../../shared/animations/shared-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [SharedAnimations]
})
export class HomeComponent implements OnInit {
  selectedTab = 'spaceships';
  viewMode: 'list' | 'grid' = 'grid';
  page = 1;
  pageSize = 8;
  spaceships$: Observable<any[]>;
  searchCtrl: FormControl = new FormControl('');

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.spaceships$ = combineLatest(
      this.dataService.getSpaceships(),
      this.searchCtrl.valueChanges
        .pipe(startWith(''), debounceTime(200))
    )
      .pipe(map(([products, searchTerm]) => {
        return products.filter(p => {
          return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
      }));
  }

  selectTab(id: string) {
    this.selectedTab = id;
  }
}
