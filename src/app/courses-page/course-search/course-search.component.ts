import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {

  faSearch = faSearch;
  public searchInput: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log(`Searching for ${this.searchInput}`);
  }

}
