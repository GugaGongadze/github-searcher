import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'f07d2f8a5b87fadee0ff';
  private client_secret = '99ae3b7f6d201378982547ca636cecd390811167';

  constructor(private _http: Http) {
    console.log('Github Service Ready');
    this.username = 'GugaGongadze';
  }

  getUser() {
    // tslint:disable-next-line:max-line-length
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                     .map(res => res.json());

  }

  getRepos() {
    // tslint:disable-next-line:max-line-length
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret' + this.client_secret)
                     .map(res => res.json());

  }

  updateUser(username: string) {
    this.username = username;
  }
}
