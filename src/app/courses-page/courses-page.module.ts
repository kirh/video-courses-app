import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course-list-item/course.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightDirective } from './course-list-item/highlight.directive';
import { DurationPipe } from './course-list-item/duration.pipe';
import { OrderByPipe } from './course-list/order-by.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseListComponent,
    CourseComponent,
    CourseSearchComponent,
    DurationPipe,
    HighlightDirective,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    FilterPipe
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
