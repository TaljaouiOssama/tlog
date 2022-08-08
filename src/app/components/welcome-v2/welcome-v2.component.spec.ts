import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeV2Component } from './welcome-v2.component';

describe('WelcomeV2Component', () => {
  let component: WelcomeV2Component;
  let fixture: ComponentFixture<WelcomeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
