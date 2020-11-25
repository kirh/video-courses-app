import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { AuthenticationBarComponent } from './authentication-bar/authentication-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, LogoComponent, AuthenticationBarComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logo', () => {
    expect(headerEl.querySelector('app-logo')).toBeTruthy();
  });

  it('should display authentication bar', () => {
    expect(headerEl.querySelector('app-authentication-bar')).toBeTruthy();
  });
});
