import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
id: string;
item: any;
formTitle: string;

  constructor(private blogService: BlogService, private router: Router, private route:  ActivatedRoute) { }

  ngOnInit() {
    // to bring the id
    this.route.params.subscribe((params) => this.id = params.id);
    // go to the service to bring an item
    if (this.id) {
      this.item = this.blogService.getItem(this.id);
      this.formTitle = 'Edit post';
    } else {
        this.item = {title: '', image: '', body: ''};
        this.formTitle = 'New post';
    }
  }
  onSubmit() {
    // update inside the service the new item
    if (this.id) {
      this.blogService.update(this.item);

    } else {
      // create inside the service the new item
      this.id = this.blogService.create(this.item);
    }
      this.router.navigate(['blog/' + this.id]);

  }

}
