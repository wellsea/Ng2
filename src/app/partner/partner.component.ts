import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  title:string = '链库合伙人';
  constructor() { }

  ngOnInit() {
  }

}
