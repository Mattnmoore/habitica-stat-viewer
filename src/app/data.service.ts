import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  private dataUrl = 'https://habitica.com/export/userdata.json';
  private userId;
  private apiToken;

  checkCredentials () {
    return this.userId && this.apiToken;
  }

  setCredentials(userId, apiToken) {
    this.userId = userId;
    this.apiToken = apiToken;
  }

  getData () {
    let headers = new Headers();

    headers.append('x-api-user', this.userId);
    headers.append('x-api-key', this.apiToken);

    return this.http.get(this.dataUrl, { headers: headers })
                    .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
