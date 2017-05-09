import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
    moduleId: module.id,
    templateUrl: 'employee-list.component.html',
    styles: [`
        .ky-card-listing{
            margin-top: 10px;;
        }
        .ky-font-white{
            color: #fff;
        }
    `]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    constructor(private _empSrv: EmployeeService) { }

    ngOnInit() {
        this._empSrv.getEmployees().subscribe(employees => {
            this.employees = employees;
            console.log(this.employees);
        }, err => console.log(err));
    }
}