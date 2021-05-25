import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() eventSearch = new EventEmitter<string>();

  sendSearch(value: string) {
    this.eventSearch.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


