import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsListComponent } from './spaceships-list.component';

describe('SpaceshipsListComponent', () => {
  let component: SpaceshipsListComponent;
  let fixture: ComponentFixture<SpaceshipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
