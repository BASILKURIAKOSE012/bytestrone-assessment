import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestAllocateComponent } from './user-request-allocate.component';

describe('UserRequestAllocateComponent', () => {
  let component: UserRequestAllocateComponent;
  let fixture: ComponentFixture<UserRequestAllocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestAllocateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestAllocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
