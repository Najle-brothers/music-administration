import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlayerData, makePlayerData } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private search = new BehaviorSubject("")

  private id = new BehaviorSubject(0)

  private playerData = new BehaviorSubject(makePlayerData())

  constructor() { }

  setSearch(search: string): void {
    this.search.next(search)
  }

  getSearch(): BehaviorSubject<string> {
    return this.search
  }

  setId(id): void {
    this.id.next(id)
  }

  getId(): BehaviorSubject<number>{
    return this.id
  }

  setPlayerData(type): void{
    this.playerData.next(type)
  }

  getPlayerData(): BehaviorSubject<IPlayerData>{
    return this.playerData
  }
}