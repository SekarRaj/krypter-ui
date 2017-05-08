import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

    constructor(private _empSrv: EmployeeService) { }

    ngOnInit() {
        this._empSrv.getEmployees().subscribe(employees => console.log(employees), err => console.log(err));
    }
}