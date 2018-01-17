
import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})

export class BlogItemComponent implements OnInit {
 id: string;
  blog: any;

  constructor(private blogService: BlogService, private route:  ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.id = params.id);
    this.blog = this.blogService.getItem(this.id);
  }
  delete() {
    this.blogService.delete(this.id);
    this.router.navigate(['/']);
  }

}
