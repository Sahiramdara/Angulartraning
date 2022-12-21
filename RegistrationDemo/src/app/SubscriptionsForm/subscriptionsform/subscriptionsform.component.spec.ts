import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsformComponent } from './subscriptionsform.component';

describe('SubscriptionsformComponent', () => {
  let component: SubscriptionsformComponent;
  let fixture: ComponentFixture<SubscriptionsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
