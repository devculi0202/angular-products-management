import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewsComponent } from './model-views.component';

describe('ModelViewsComponent', () => {
  let component: ModelViewsComponent;
  let fixture: ComponentFixture<ModelViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelViewsComponent]
    });
    fixture = TestBed.createComponent(ModelViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
