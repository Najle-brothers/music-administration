import { Injectable } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private search = new BehaviorSubject("")

  private id = new BehaviorSubject("")

  constructor() { }

  setSearch(search: string): void {
    this.search.next(search)
  }

  getSearch() {
    return this.search
  }

  setId(id): void {
    this.id.next(id)
  }

  getId(){
    return this.id
  }
}