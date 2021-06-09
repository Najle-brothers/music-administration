import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor() { }

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
      return hours + "hs " + this.twoDigits(minutes - hours * 60) + "mins" 
      //+ this.twoDigits(seconds - minutes * 60)
    } else {
      return this.twoDigits(minutes) + ":" + this.twoDigits(seconds - minutes * 60)
    }
  }

  getYearFromDate(date: string): string {
    return date.slice(0,4) 
  }

}
