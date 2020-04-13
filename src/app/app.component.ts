import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myClassForMatCardField = "myClassForMatCardField"
  title = 'title';
  subtitle = 'subtitle';
  matClass = "matClass";
  titleClass = "titleClass";
  subtitleClass = "subtitleClass";

}
