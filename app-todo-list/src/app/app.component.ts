import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
    <li>Item da lista</li>
  `,
  styles:`
    li {
      color: red
    }
  `
})
export class AppComponent {
}
