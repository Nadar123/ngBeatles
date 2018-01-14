import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
 
  member: any;
  id: string;
  constructor(private membersService: MembersService, private route: ActivatedRoute) { }
  ngOnInit () {
    this.route.params.subscribe((params) => this.id = params.id);
    this.member = this.membersService.getMember(this.id);
  }
}
