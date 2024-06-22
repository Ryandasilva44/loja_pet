import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOtherSectionComponent } from './about-other-section.component';

describe('AboutOtherSectionComponent', () => {
  let component: AboutOtherSectionComponent;
  let fixture: ComponentFixture<AboutOtherSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutOtherSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutOtherSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
