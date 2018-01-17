
import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  items: any;
  constructor(private blogService: BlogService ) { }

  ngOnInit() {
    this.items = this.blogService.getItems();
  }

}


  /*id = 1234;
  ngOnInit() {
  }*/

