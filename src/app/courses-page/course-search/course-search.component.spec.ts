import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchComponent } from './course-search.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseSearchComponent],
      imports: [FormsModule, FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on search', () => {
    const input = fixture.nativeElement.querySelector('.search-input');
    const searchButton = fixture.nativeElement.querySelector('.search-button');
    input.value = 'value';
    input.dispatchEvent(new Event('input'));
    component.search.subscribe((text: string) => expect(text).toBe('value'));
    searchButton.click();
  });
});
