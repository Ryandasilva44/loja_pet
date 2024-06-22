import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInstagramComponent } from './about-instagram.component';

describe('AboutInstagramComponent', () => {
  let component: AboutInstagramComponent;
  let fixture: ComponentFixture<AboutInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutInstagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
