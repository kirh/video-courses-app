import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LogoComponent } from './header/logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationBarComponent } from './header/authentication-bar/authentication-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoursesPageModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent, HeaderComponent, LogoComponent, AuthenticationBarComponent, BreadcrumbsComponent, FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'video-course'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('video-course');
  });

});
