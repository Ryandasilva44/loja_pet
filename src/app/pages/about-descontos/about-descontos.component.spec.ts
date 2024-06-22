import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDescontosComponent } from './about-descontos.component';

describe('AboutDescontosComponent', () => {
  let component: AboutDescontosComponent;
  let fixture: ComponentFixture<AboutDescontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutDescontosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDescontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
