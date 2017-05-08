import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    constructor(private _http: Http) { }
    private _url = '../assets/employees.json';

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get(this._url).map((response: Response) => <IEmployee[]>response.json()).catch(this.handleError);
    }

    getEmployee(id: string): Observable<IEmployee> {
        return this.getEmployees().map((employees: IEmployee[]) => employees.find(p => p.id === id));
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Erorr')
    }
}