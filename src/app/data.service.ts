import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GiphyFetch } from '@giphy/js-fetch-api'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) {}

  private searchEntry: any = new BehaviorSubject([]);
  entry = this.searchEntry.asObservable();
  private gf = new GiphyFetch('w5DzARpjdOVV3DeeuJ3NzbM5UYvJ9FmL');

  setEntry(value: any) {
    this.searchEntry.next(value);
  }

  getGifs(value: any): any {
    this.searchEntry.next(value);
    this.gf.search('value', { sort: 'relevant', lang: 'es', limit: 25 }).then(res => {
      return res;
    })
    // return this._http.get(`https://api.giphy.com/v1/gifs/search?api_key=w5DzARpjdOVV3DeeuJ3NzbM5UYvJ9FmL&q=${encodeURI(this.searchEntry)}`);
  }
}
