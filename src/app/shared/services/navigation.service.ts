import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string;       // Possible values: link/dropDown/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon?: string;      // Material icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
}

export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string;       // Display text
  state?: string;     // Router state
  icon?: string;
  sub?: IChildItem[];
  active?: boolean;
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false
  };

  constructor() {
  }

  defaultMenu: IMenuItem[] = [
    {
      name: 'ALL',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'SLOTS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/videoslots',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'TOPSLOTS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/topslots',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'POPULAR',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/popular',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'NEW',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/new',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'LIVE DEALER',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/livedealer',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'TABLE GAMES',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/tablegames',
      type: 'link',
      icon: 'i-Filter'
    },
    {
      name: 'VIDEO POKER',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      state: '/games/videopoker',
      type: 'link',
      icon: 'i-Filter'
    },
  ];

  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  menuItems$ = this.menuItems.asObservable();
}
