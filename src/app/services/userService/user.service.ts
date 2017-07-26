import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class UserService {
    authToken: any;
    constructor(private _http: Http) {
    }
    login(jsonReq: Object) {
        let url = "http://192.168.3.144:9000/login";

        let login = this._http.post(url, jsonReq)
            .map((response: Response) => response.json())
            .subscribe((data) => {
                let authToken = 'auth-token';
                this.authToken = data.data[authToken];
                console.log(data);
            });
    }
    register(jsonReq: Object) {
        let url = "http://192.168.3.144:9000/register";
        console.log(jsonReq);
        let resgister = this._http.post(url, jsonReq)
            .map((response: Response) => response.json())
            .subscribe((data) => {
                console.log(data);
            });
    }
    logout() {
        let url = 'http://192.168.3.144:9000/logout';
        let headers = new Headers();
        headers.append('auth-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        let options = new RequestOptions({ headers: headers });
        if (this.authToken) {
            console.log(1);
            return this._http.delete(url, options).
                map((response: Response) => response.json())
                .subscribe((data) => {
                    console.log(data);
                });
        }
    }
}