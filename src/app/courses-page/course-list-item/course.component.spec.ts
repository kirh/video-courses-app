import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { DurationPipe } from './duration.pipe';
import { ICourse } from '../shared/course.model';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderByPipe } from '../course-list/order-by.pipe';
import { HighlightDirective } from './highlight.directive';

const course: ICourse = {
  id: 1,
  title: 'title',
  description: 'description',
  creationDate: new Date(0),
  duration: 1000,
  isTopRated: false
};

describe('CourseComponent as a class', () => {
  it('raises delete event when deleted', () => {
    const component = new CourseComponent();
    component.course = course;
    component.deleteCourse.subscribe((id: number) => expect(id).toBe(1));
    component.onDelete();
  });
});


describe('CourseComponent as standalone component', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let componentEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, DurationPipe, OrderByPipe, HighlightDirective],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = course;
    componentEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title in uppercase', () => {
    const header = componentEl.querySelector('.course-title > h2');
    expect(header.textContent).toBe('TITLE');
  });

  it('should display description', () => {
    const description = componentEl.querySelector('.course > p');
    expect(description.textContent).toBe('description');
  });

  it('should display creation date', () => {
    const creationDate = componentEl.querySelector('.course-creation-date');
    expect(creationDate.textContent).toBe('Jan 1, 1970');
  });

  it('should display course duration', () => {
    const duration = componentEl.querySelector('.course-duration');
    expect(duration.textContent).toBe('16 h 40 min');
  });

  it('should raise deleteCourse event when delete button clicked', () => {
    const deleteButton: HTMLElement = componentEl.querySelector('.delete-btn');
    component.deleteCourse.subscribe(courseId => expect(courseId).toBe(1));
    deleteButton.click();
  });
});

describe('CourseComponent within a host component', () => {
  @Component({
      template: `
        <app-course [course]="course" (deleteCourse)="onDelete($event)"></app-course>`
    }
  )
  class HostComponent {
    public course: ICourse = course;
    public deletedId: number;

    public onDelete(id: number): void {
      this.deletedId = id;
    }
  }

  let fixture: ComponentFixture<HostComponent>;
  let courseEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, CourseComponent, DurationPipe, HighlightDirective],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    courseEl = fixture.nativeElement.querySelector('app-course');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(courseEl).toBeTruthy();
  });

  it('should display title in uppercase', () => {
    const header = courseEl.querySelector('.course-title > h2');
    expect(header.textContent).toBe('TITLE');
  });

  it('should display description', () => {
    const description = courseEl.querySelector('.course > p');
    expect(description.textContent).toBe('description');
  });

  it('should display creation date', () => {
    const creationDate = courseEl.querySelector('.course-creation-date');
    expect(creationDate.textContent).toBe('Jan 1, 1970');
  });

  it('should display course duration', () => {
    const duration = courseEl.querySelector('.course-duration');
    expect(duration.textContent).toBe('16 h 40 min');
  });

  it('should raise deleteCourse event when delete button clicked', () => {
    const deleteButton: HTMLElement = courseEl.querySelector('.delete-btn');
    deleteButton.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.deletedId).toBe(1);
  });
});
