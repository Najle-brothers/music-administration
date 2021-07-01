import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() eventSearch = new EventEmitter<string>();

  sendSearch(search: string) {
    this.eventSearch.emit(search)
 }
  constructor() { }

  ngOnInit(): void {
  }

}