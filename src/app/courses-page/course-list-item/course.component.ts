import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../shared/course.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public deleteCourse = new EventEmitter<number>();

  public faPen = faPen;
  public faTrash = faTrash;
  public faCalendar = faCalendar;
  public faClock = faClock;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteCourse.emit(this.course.id);
  }

}
