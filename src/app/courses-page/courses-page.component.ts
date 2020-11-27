import {
  Component,
  OnInit
} from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from './shared/course.model';
import { COURSES } from './courses-mock';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  public faPlusCircle = faPlusCircle;

  private loadedCourses: ICourse[];
  private isSearchResult: boolean;
  public courses: ICourse[];

  constructor(private filterPipe: FilterPipe) {
  }

  onDelete(id: number): void {
    console.log(`Delete course with id=${id}`);
  }

  ngOnInit(): void {
    this.loadedCourses = COURSES;
    this.courses = this.loadedCourses;
  }

  onSearch(searchInput: string): void {
    if (searchInput) {
      searchInput = searchInput.trim();
      this.courses = this.filterPipe.transform(this.loadedCourses, 'title', searchInput);
      this.isSearchResult = true;
    } else {
      this.courses = this.loadedCourses;
      this.isSearchResult = false;
    }
  }

  public isLoadMoreButtonShown(): boolean {
    return !this.courses || !this.isSearchResult;
  }

  onLoadMore(): void {
    console.log('Load more...');
  }
}
