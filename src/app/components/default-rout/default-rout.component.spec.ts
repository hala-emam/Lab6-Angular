import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRoutComponent } from './default-rout.component';

describe('DefaultRoutComponent', () => {
  let component: DefaultRoutComponent;
  let fixture: ComponentFixture<DefaultRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultRoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
