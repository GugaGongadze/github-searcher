import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = '';
  private client_secret = '';

  constructor(private _http: Http) { }

  getUser() {
    return this._http.get('https://api.github.com/users/'
                      + this.username
                      + '?client_id='
                      + this.client_id
                      + '&client_secret='
                      + this.client_secret)
                      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/'
                      + this.username
                      + '/repos?client_id='
                      + this.client_id
                      + '&client_secret'
                      + this.client_secret)
                      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
