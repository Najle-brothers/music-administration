import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-greetings',
  templateUrl: './landing-page-greetings.component.html',
  styleUrls: ['./landing-page-greetings.component.scss']
})
export class LandingPageGreetingsComponent implements OnInit {

  @Input() public inputUser = ''

  constructor() { }

  ngOnInit(): void {
  }

}
