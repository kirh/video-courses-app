import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public faPlayCircle = faPlayCircle;
  public title = 'video-course';

  constructor() {
  }

  ngOnInit(): void {
  }

}
