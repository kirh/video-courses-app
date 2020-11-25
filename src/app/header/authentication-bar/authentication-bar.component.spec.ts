import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationBarComponent } from './authentication-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AuthenticationBarComponent', () => {
  let component: AuthenticationBarComponent;
  let fixture: ComponentFixture<AuthenticationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationBarComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user login', () => {
    const logOffButton = fixture.nativeElement.querySelector('li:nth-child(1) span');
    expect(logOffButton.textContent).toBe('User login');
  });

  it('should display label for log in button', () => {
    const logOffButton = fixture.nativeElement.querySelector('li:nth-child(2) span');
    expect(logOffButton.textContent).toBe('Log off');
  });
});
