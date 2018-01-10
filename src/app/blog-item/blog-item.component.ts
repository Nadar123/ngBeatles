import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})

export class BlogItemComponent implements OnInit {

 id: string;

  blog: any;

  constructor(private blogService: BlogService, private route:  ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.id = params.id);
    this.blog = this.blogService.getItem(this.id);
  }

}
