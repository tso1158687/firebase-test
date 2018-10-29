import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  get() {
    return of([1, 2, 3, 4, 5]);
  }
}
