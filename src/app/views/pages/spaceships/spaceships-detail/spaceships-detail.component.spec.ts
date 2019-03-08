import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsDetailComponent } from './spaceships-detail.component';

describe('SpaceshipsDetailComponent', () => {
  let component: SpaceshipsDetailComponent;
  let fixture: ComponentFixture<SpaceshipsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
