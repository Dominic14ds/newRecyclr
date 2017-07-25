import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class AdvertisementService {
    products: Array<any> = [];
    url = 'http://192.168.3.144:9000/categories';
    constructor(private _http: Http) {
    }
    getAllAdvertises() {
        return this.products;
    }
    addAdvertise(item: Object) {
        this.products.push(item);
        console.log(this.products);
    }
    deleteAdvertise(index: any) {
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    editAdvertise(index: any, value:Object){
        this.products.splice(index, 1, value)
    }
    postAd() {
        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', '5976ea531c0edf75e32798d5');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": "laptop sale", "name": "Anand Kulkarni", "category": "Mobile", "description": "intel core 3"};
        return this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());

    }
}