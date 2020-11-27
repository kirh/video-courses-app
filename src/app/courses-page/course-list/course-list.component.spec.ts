import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { COURSES } from '../courses-mock';
import { By } from '@angular/platform-browser';
import { CourseComponent } from '../course-list-item/course.component';
import { DurationPipe } from '../course-list-item/duration.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderByPipe } from './order-by.pipe';
import { HighlightDirective } from '../course-list-item/highlight.directive';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseComponent, DurationPipe, OrderByPipe, HighlightDirective],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.courses = COURSES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display courses', () => {
    const courses = fixture.nativeElement.querySelectorAll('app-course');
    expect(courses.length).toBe(4);
  });

  it('should raise deleteCourse event on delete', () => {
    component.deleteCourse.subscribe(id => expect(id).toBe(1));
    const courseDe = fixture.debugElement.query(By.css('app-course'));
    courseDe.triggerEventHandler('deleteCourse', 1);
  });
});
