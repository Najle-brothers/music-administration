import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-all-search-albums',
  templateUrl: './all-search-albums.component.html',
  styleUrls: ['./all-search-albums.component.scss']
})
export class AllSearchAlbumsComponent implements OnInit {

  @Input() public inputAlbums = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  sendToAlbumPage(id: number){
    this.router.navigate(['/album', id])
  }

}
