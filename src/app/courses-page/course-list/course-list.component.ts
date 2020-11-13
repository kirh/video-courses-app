import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '../shared/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() public courses: ICourse[];
  @Output() public deleteCourse = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onLoadMore(): void {
    console.log('Load more...');
  }

  onDelete(id: number): void {
    this.deleteCourse.emit(id);
  }

}
