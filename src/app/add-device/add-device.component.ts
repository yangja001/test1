import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    build = ['1','2','3']
    DeviceBrand = ["Cisco"]
}
