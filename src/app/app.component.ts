import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      a, ul{
        color: white
    }
  `]
})
export class AppComponent {
  title = 'app works!';
}
