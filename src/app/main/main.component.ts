import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase, private service: DataService) {
    this.items = db.list('item').valueChanges();
  }

  ngOnInit() {
    this.service.get().subscribe(e => this.data = e);
    console.log(this.data);
  }

}
