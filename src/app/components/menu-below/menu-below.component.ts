import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-below',
  templateUrl: './menu-below.component.html',
  styleUrls: ['./menu-below.component.scss']
})
export class MenuBelowComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  sendToLandingPage(){
    this.router.navigate(['/'])
  }

}
