import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { AuthenticationBarComponent } from '../authentication-bar/authentication-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent, AuthenticationBarComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title in uppercase', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('VIDEO-COURSE');
  });
});
