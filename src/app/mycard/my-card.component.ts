import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-my-card',
    templateUrl: './my-card.component.html'
})

export class MyCardComponent{
  @Input() title: string;
  @Input() subtitle: string;
  @Input() matCardClass: string;
}