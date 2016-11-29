import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  public datos = "inicial";
  // private data = [
  //   "uno", "dos", "tres", "cuatro", "cinco"
  // ];
  
  // private index = 0;

  constructor() {

  }

  getData(): Promise<string> {

    // this.observer.next(this.data[this.index++]);
    // (this.index === this.data.length)?
    //   this.index = 0:
    //   null;

    return Promise.resolve(this.datos);
  }

  setData(data:string){
    this.datos = data;
  }
}