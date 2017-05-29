import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs/Observable';

import {IEmployee} from './employee';

@Component({
    moduleId: module.id,
    templateUrl: 'employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit{
    employeeForm: FormGroup;
    employee: IEmployee;

    constructor(private _empService: EmployeeService) {}

    save() {
        this._empService.addEmployee(this.employeeForm.value).subscribe();
    }

    populateData() {
        this.employeeForm.setValue({
            name: 'John, Doe',
            type: 'DEVELOPER',
            ssn: '852741963'
        });
    }

    ngOnInit() {
        this.employeeForm = new FormGroup({
            name: new FormControl(),
            type: new FormControl(),
            ssn: new FormControl()
        });
    }
}
