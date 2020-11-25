import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course-list-item/course.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseListComponent,
    CourseComponent,
    CourseSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
