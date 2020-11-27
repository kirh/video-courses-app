import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('HighlightDirective', () => {

  @Component({
      template: `<div appHighlight [date]="date"></div>`
    }
  )
  class TestComponent {
    public date = new Date();
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let div: HTMLElement;

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2020, 11, 20));
    TestBed.configureTestingModule({declarations: [HighlightDirective, TestComponent]});
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    div = fixture.nativeElement.querySelector('div');

  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  function setDate(date: Date): void {
    component.date = date;
    fixture.detectChanges();
  }

  it('should create component with highlight directive', () => {
    expect(component).toBeTruthy();
  });

  it('should highlight fresh course with green when created 14 days ago', () => {
    setDate(new Date(2020, 11, 6));
    expect(div.style.border).toBe('2px solid green');
  });

  it('should highlight fresh course with green when created today', () => {
    setDate(new Date(2020, 11, 20));
    expect(div.style.border).toBe('2px solid green');
  });

  it('should highlight upcoming course with blue when created tomorrow', () => {
    setDate(new Date(2020, 11, 21));
    expect(div.style.border).toBe('2px solid blue');
  });

  it('should not highlight course when created 15 days ago', () => {
    setDate(new Date(2020, 11, 5));
    expect(div.style.border).toBe('');
  });
});
