import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankUserComponent } from './rank-user.component';

describe('RankUserComponent', () => {
  let component: RankUserComponent;
  let fixture: ComponentFixture<RankUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
