import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internship3';
}

const elementPadding1 = '0px';
const elementPadding2 = 0; //false /null

!elementPadding1 // false
!elementPadding2 // true