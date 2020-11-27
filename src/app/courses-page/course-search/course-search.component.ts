import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {

  faSearch = faSearch;
  public searchInput: string;
  @Output() public search = new EventEmitter<string>();

    constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit(this.searchInput);
  }

}
