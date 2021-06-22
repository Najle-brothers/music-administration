import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() eventSearch = new EventEmitter<string>();
  public searchForm: FormControl;

  constructor(
    private stateService: StateService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  sendSearch(value: string) {
      this.stateService.setSearch(value)
      this.router.navigate(["/search", value])
  }

  // when focus on input enter key should work as a click event

  ngOnInit(): void {
    this.searchForm = this.fb.control('', Validators.required);
  }

  get searchFormIsValid(): boolean {
    return this.searchForm.status === 'VALID';
  }


}


