import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseComponent } from './course-list-item/course.component';
import { DurationPipe } from './course-list-item/duration.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './course-list/order-by.pipe';
import { HighlightDirective } from './course-list-item/highlight.directive';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesPageComponent, CourseListComponent, CourseSearchComponent, CourseComponent, DurationPipe, FilterPipe,
        OrderByPipe, HighlightDirective],
      imports: [FontAwesomeModule, FormsModule],
      providers: [FilterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log course id on deleteCourse', () => {
    const courseListDe: DebugElement = fixture.debugElement.query(By.css('app-course-list'));
    const courseId = component.courses[0].id;
    courseListDe.triggerEventHandler('deleteCourse', courseId);
    expect(console.log).toHaveBeenCalledWith(`Delete course with id=${courseId}`);
  });

  it('should have courses', () => {
    expect(component.courses.length).toBe(4);
  });

  it('should loadMore', () => {
    const loadMoreButton = fixture.nativeElement.querySelector('.load-more-btn');
    loadMoreButton.click();
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('Load more...');
  });
});
