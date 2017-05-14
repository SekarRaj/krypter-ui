import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import {IEmployee} from './employee';

@Component({
    moduleId: module.id,
    templateUrl: 'employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit{
    employeeForm : FormGroup;
    employee: IEmployee

    save(){
        console.log(this.employeeForm);
        console.log(this.employeeForm.value);
    }

    populateData(){
        this.employeeForm.setValue({
            name:"John, Doe",
            type:"DEVELOPER",
            ssn:"852741963"
        });
    }

    ngOnInit(){
        this.employeeForm = new FormGroup({
            name: new FormControl(),
            type: new FormControl(),
            ssn: new FormControl()
        });
    }
}