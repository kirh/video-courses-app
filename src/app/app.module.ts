import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CourseListComponent } from './courses-page/course-list/course-list.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { CourseComponent } from './courses-page/course-list-item/course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { AuthenticationBarComponent } from './header/authentication-bar/authentication-bar.component';
import { CourseSearchComponent } from './courses-page/course-search/course-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './courses-page/course-list-item/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseListComponent,
    FooterComponent,
    LogoComponent,
    CourseComponent,
    BreadcrumbsComponent,
    CoursesPageComponent,
    AuthenticationBarComponent,
    CourseSearchComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
