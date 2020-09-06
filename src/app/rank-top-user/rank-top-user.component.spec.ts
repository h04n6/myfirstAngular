import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTopUserComponent } from './rank-top-user.component';

describe('RankTopUserComponent', () => {
  let component: RankTopUserComponent;
  let fixture: ComponentFixture<RankTopUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankTopUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankTopUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
