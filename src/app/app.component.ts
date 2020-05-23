import { Component, OnInit } from '@angular/core';
import { renderGrid } from '@giphy/js-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchEntry: string =  '';
  gifsList: any;
  offset: number = 0;
  gf: any = new GiphyFetch('w5DzARpjdOVV3DeeuJ3NzbM5UYvJ9FmL');

  title = 'GiphyApp';

  constructor() {}

  ngOnInit(): void {
  }

  searchGif(value: any): any {
    this.searchEntry = value;
    this.fetchGifs(this.offset, value).then(res => {
      this.gifsList = res["data"];
      this.offset = res["data"].length
    })
  }

  fetchGifs = (offset: number, value: string) => {
    return this.gf.search(value, { sort: 'relevant', lang: 'es', limit: 18, offset })
  }
}
