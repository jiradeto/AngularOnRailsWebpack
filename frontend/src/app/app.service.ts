import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
	

	constructor(private _http: Http) {
		console.log("Users Service Initialized .....");
  }

	getUsers(){
		return this._http.get('/users')
			.map(res => res.json());
	}
}
