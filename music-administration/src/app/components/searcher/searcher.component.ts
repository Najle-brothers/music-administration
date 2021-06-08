import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() eventSearch = new EventEmitter<string>();

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  sendSearch(value: string) {
    this.stateService.setSearch(value)
    this.router.navigate(["/search"])
  }



  ngOnInit(): void {
  }

}


