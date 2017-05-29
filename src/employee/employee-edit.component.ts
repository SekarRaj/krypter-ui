import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
    moduleId: module.id,
    templateUrl: 'employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
    @Input() empId = 'E123456';

    empEditForm: FormGroup;

    constructor(private _empSrv: EmployeeService) {}

    ngOnInit(){
        this.empEditForm = new FormGroup({
            name: new FormControl(),
            type: new FormControl(),
            ssn: new FormControl()
        });

        this._empSrv.getEmployee(this.empId).subscribe((emp: IEmployee) => {
            this.empEditForm.setValue({
                name: emp.name,
                type: emp.type,
                ssn: emp.ssn
            });
        }
        , err => console.log(err));
    };

    save(){
        console.log(this.empEditForm.value);
    }
}
