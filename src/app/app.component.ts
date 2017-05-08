import { Component } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      a, ul{
        color: white
    }
  `],
  providers: [EmployeeService]
})
export class AppComponent {
  title = 'app works!';
}
