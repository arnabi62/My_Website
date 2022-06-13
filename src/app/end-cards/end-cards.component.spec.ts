import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndCardsComponent } from './end-cards.component';

describe('EndCardsComponent', () => {
  let component: EndCardsComponent;
  let fixture: ComponentFixture<EndCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
