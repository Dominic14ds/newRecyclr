import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class AdvertisementService {
    products: Array<any> = [];
    //url = 'http://192.168.3.144:9000/postAd';
    constructor(private _http: Http) {
    }
    getAllAdvertisements() {
        let url = 'http://192.168.3.144:9000/posts';
        let headers = new Headers();
        headers.append('auth-token', '5976ea531c0edf75e32798d5');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this._http.get(url,options).
            map((response: Response) => response.json());
    }
    getCategories(){
        let url = 'http://192.168.3.144:9000/categories';
        
        return this._http.get(url).
            map((response: Response) => response.json());
    }
    getActions(){
        let url = 'http://192.168.3.144:9000/actions';
        let headers = new Headers();
        headers.append('auth-token', '5976ea531c0edf75e32798d5');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this._http.get(url,options).
            map((response: Response) => response.json());
    }
    deleteAdvertisement(index: any) {
        let url = 'http://192.168.3.144:9000/post?postId=';
        return this._http.delete(url+index).
            map((response: Response) => response.json());


    }
    editAdvertisement(jsonReq: Object) {
        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', '5976ea531c0edf75e32798d5');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, jsonReq, options)
            .map((response: Response) => response.json());
    }
    postAd(jsonReq:Object) {
        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', '5976ea531c0edf75e32798d5');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, jsonReq, options)
            .map((response: Response) => response.json());

    }
}