import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersoComponent } from './single-perso.component';

describe('SinglePersoComponent', () => {
  let component: SinglePersoComponent;
  let fixture: ComponentFixture<SinglePersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
