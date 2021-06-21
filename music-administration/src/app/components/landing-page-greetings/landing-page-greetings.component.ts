import { Component, Input, OnInit } from '@angular/core';
import { IUser, makeUser } from 'src/app/models/user';

@Component({
  selector: 'app-landing-page-greetings',
  templateUrl: './landing-page-greetings.component.html',
  styleUrls: ['./landing-page-greetings.component.scss']
})
export class LandingPageGreetingsComponent implements OnInit {

  @Input() public inputUser: IUser = makeUser();

  constructor() { }

  ngOnInit(): void {
  }

}
