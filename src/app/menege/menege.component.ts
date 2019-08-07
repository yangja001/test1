import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menege',
  templateUrl: './menege.component.html',
  styleUrls: ['./menege.component.css']
})
export class MenegeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  add_1 = ['10.10.1.1','10.10.1.2','10.10.1.3','10.10.1.4']
  loc_1 = ["ICT1101","ICT1102","ICT1103","ICT1104"]
  uname = ["N","U","E","N","G"]
  fname = ["G","N","E","U","N",]
  utype = ["user","admin"]
}
