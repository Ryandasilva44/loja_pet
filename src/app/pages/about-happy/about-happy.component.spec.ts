import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHappyComponent } from './about-happy.component';

describe('AboutHappyComponent', () => {
  let component: AboutHappyComponent;
  let fixture: ComponentFixture<AboutHappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHappyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
