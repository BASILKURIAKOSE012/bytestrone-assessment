import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestReleaseComponent } from './user-request-release.component';

describe('UserRequestReleaseComponent', () => {
  let component: UserRequestReleaseComponent;
  let fixture: ComponentFixture<UserRequestReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
