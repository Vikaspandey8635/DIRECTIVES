import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikasComponent } from './vikas.component';

describe('VikasComponent', () => {
  let component: VikasComponent;
  let fixture: ComponentFixture<VikasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VikasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VikasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
