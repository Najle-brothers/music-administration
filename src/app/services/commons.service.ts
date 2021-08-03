import { Injectable } from '@angular/core';
import { ITracks } from '../models/tracks';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor(
    private stateService: StateService
  ) { }

  twoDigits(digit): string {
    let isItADigit = digit <  10
    if (isItADigit) {
      return "0" + digit
    } else {
      return digit
    }
  }

  secondsToFullDuration(seconds: number, isItAnHour: boolean, twoDigits): string {
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    if (isItAnHour) {
      return hours + " hs " + this.twoDigits(minutes - hours * 60) + " mins" 
      //+ this.twoDigits(seconds - minutes * 60)
    } else {
      return this.twoDigits(minutes) + ":" + this.twoDigits(seconds - minutes * 60)
    }
  }

  getYearFromDate(date: string): string {
    return date.slice(0,4) 
  }

  fansWithCommas(digits): string {
    var parts = digits.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",") + " seguidores";
  }

  startPlayback(id: string, type: string): void{
    this.stateService.setPlayerData({
      id,
      type
    })
  }

  explicitLyrics(option: boolean, array): ITracks[] {
    if(option){
      var resultado = array;
    }else{
      console.log(array)
      //var resultado = array.filter((track) => track.explicit === false);
      var resultado = array.filter(
        (track) => {
          return track.explicit === false
        }
      );
    }
    return resultado;
  }

}
