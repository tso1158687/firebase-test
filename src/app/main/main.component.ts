import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data;
  add:  string;
  items: Observable<any[]>;
  itemRef: AngularFireObject<any>;
  itemList: AngularFireList<any>;
  itemRefList: Observable<any[]>;
  constructor(db: AngularFireDatabase, private service: DataService) {
    this.itemRef = db.object('apple');
    this.itemList = db.list('item');
    this.itemRefList = this.itemList.valueChanges();
    this.items = this.itemRef.valueChanges();
    // 這裡可以取到list的內容
    this.itemList.snapshotChanges(['child_added'])
    .subscribe(actions => {
      actions.forEach(action => {
        // 型別
        console.log(action.type);
        // key
        console.log(action.key);
        // list content
        console.log(action.payload.val());
      });
    });
  }

  ngOnInit() {
    this.service.get().subscribe(e => this.data = e);
    console.log(this.data);
    console.log('items是什麼');
    console.log(this.itemRefList);
    this.itemRefList.subscribe(e => {
      console.log(e);
    });
  }
  addValue() {
    console.log(this.add);
    // const updateArray = [];
    this.itemList.push(this.add);
  }
  removeValue() {
    this.itemList.remove();
  }
  save(newName: string) {
    this.itemRef.set({ name: newName });
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }
}
