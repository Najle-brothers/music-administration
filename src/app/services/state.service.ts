import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { makePlayerData } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private search = new BehaviorSubject("")

  private id = new BehaviorSubject("")

  private playerData = new BehaviorSubject(makePlayerData())

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

  setPlayerData(type){
    this.playerData.next(type)
  }

  getPlayerData(){
    return this.playerData
  }
}