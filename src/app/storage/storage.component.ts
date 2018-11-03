import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    console.log(task);
  }

}
