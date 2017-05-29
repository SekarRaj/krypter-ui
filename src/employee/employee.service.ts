import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    private _url = 'http://localhost:8080/krypter/employee';

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get(this._url)
                    .map((response: Response) => {
                        return <IEmployee[]>response.json();
                    })
                    .catch(this.handleError);
    }

    getEmployee(id: string): Observable<IEmployee> {
        return this.getEmployees().map((employees: IEmployee[]) => employees.find(p => p.id === id));
    }

    addEmployee(event): Observable<any> {
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this._http.post('http://localhost:8080/krypter/employee/add', event, options);
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Erorr');
    }
}