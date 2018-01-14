import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallerybeatles',
  templateUrl: './gallerybeatles.component.html',
  styleUrls: ['./gallerybeatles.component.css']
})

export class GallerybeatlesComponent implements OnChanges {
  images: any[];
  filterBy?: String = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    // console.log( this.filterBy );
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
