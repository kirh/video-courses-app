import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private readonly freshDays = 14;
  private readonly currentDate = new Date();
  @Input() public date: Date;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    if (this.isFresh()) {
      this.highlight('green');
    } else if (this.isUpcoming()) {
      this.highlight('blue');
    }
  }

  private isFresh(): boolean {
    return this.isWithin(this.getStartDateForFresh(), this.currentDate);
  }

  private isWithin(start: Date, end: Date): boolean {
    return this.date >= start && this.date <= end;
  }

  private getStartDateForFresh(): Date {
    return this.getDateWithOffsetInDays(-this.freshDays);
  }

  private getDateWithOffsetInDays(offsetInDays: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + offsetInDays);
    return date;
  }

  private isUpcoming(): boolean {
    return this.currentDate < this.date;
  }

  private highlight(color: string): void {
    this.element.nativeElement.style.border = `2px solid ${color}`;
  }

}
