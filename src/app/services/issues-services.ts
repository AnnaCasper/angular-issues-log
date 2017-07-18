import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptionsArgs,} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class IssuesService {


    private headers: Headers = new Headers();
    private requestOptions: RequestOptionsArgs = {};

    constructor(private http: Http) {

        this.headers.append('Content-Type', 'application/json');

    }

    get(): Observable<Response> {
        var date = new Date();
        date.setDate(date.getDate() -7);
        console.log(date.toISOString());
        return this.http.get('https://api.github.com/repos/angular/angular/issues?since=' + date.toISOString(), this.headers);
    }


}