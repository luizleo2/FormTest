import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCityFormComponent } from './country-city-form.component';

describe('CountryCityFormComponent', () => {
  let component: CountryCityFormComponent;
  let fixture: ComponentFixture<CountryCityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryCityFormComponent]
    });
    fixture = TestBed.createComponent(CountryCityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
