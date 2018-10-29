import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.get().subscribe(e => this.data = e);
    console.log(this.data);
  }

}
