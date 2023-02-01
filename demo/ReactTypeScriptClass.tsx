// @ts-ignore
import * as React from 'react';
import './App.css'; // @ts-ignore
import {Component, OnInit, OnDestroy} from '@angular/core'; // @ts-ignore
import {Person, SearchService} from '../shared'; // @ts-ignore
import {ActivatedRoute} from '@angular/router'; // @ts-ignore
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
// @ts-ignore
export class SearchComponent
  extends React.Component
  implements OnInit, OnDestroy
{
  query: string;
  searchResults: Array<Person>;
  sub: Subscription;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    props
  ) {
    super(props);
    // @ts-ignore
    this.state = {
      total: null,
    };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['term']) {
        this.query = decodeURIComponent(params['term']);
        this.search();
      }
    });
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
