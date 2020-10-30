import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from './shared/course.model';
import { COURSES } from './courses-mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  public faPlusCircle = faPlusCircle;

  public courses: ICourse[];

  constructor() {
  }

  onDelete(id: number): void {
    console.log(`Delete course with id=${id}`);
  }

  ngOnInit(): void {
    console.log('ngOnInit is invoked on CoursesComponent');
    this.courses = COURSES;
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is invoked on CoursesComponent');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is invoked on CoursesComponent');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is invoked on CoursesComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is invoked on CoursesComponent');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is invoked on CoursesComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is invoked on CoursesComponent');
  }
}
