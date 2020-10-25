import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { CourseComponent } from './courses/course-list-item/course.component';
import { BreadcrumbsComponent } from './header/breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthenticationBarComponent } from './header/authentication-bar/authentication-bar.component';
import { CourseSearchComponent } from './courses/course-search/course-search.component';

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    CourseListComponent,
    FooterComponent,
    LogoComponent,
    CourseComponent,
    BreadcrumbsComponent,
    CoursesComponent,
    AuthenticationBarComponent,
    CourseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
