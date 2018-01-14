import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  id: string;
  constructor(private albumService: AlbumService, private route:  ActivatedRoute) { }
  ngOnInit () {
    this.route.params.subscribe((params) => this.id = params.id);
    this.album = this.albumService.getAlbum(this.id);
  }
}

