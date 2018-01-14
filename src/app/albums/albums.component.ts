import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  albums: any[];

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
