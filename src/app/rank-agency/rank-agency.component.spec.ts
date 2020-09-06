import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankAgencyComponent } from './rank-agency.component';

describe('RankAgencyComponent', () => {
  let component: RankAgencyComponent;
  let fixture: ComponentFixture<RankAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
