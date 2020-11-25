import {
  Component,
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
export class CoursesPageComponent implements OnInit {

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
}
