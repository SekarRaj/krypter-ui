import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICustomer } from './customer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {

    private _url = '../assets/customers.json';

    constructor(private _http: Http) { }

    getCustomers(): Observable<ICustomer[]> {
        return this._http.get(this._url).map((response: Response) => <ICustomer[]>response.json()).catch(this.handleError);
    }

    getCustomer(id: string) {
        return this.getCustomers().map((customers: ICustomer[]) => customers.find(c => c.id == id));
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}