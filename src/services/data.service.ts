import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  datos = "inicial";
  getData(): Promise<string[]> {
    return Promise.resolve(this.datos);
  }

  setData(data:string){
    this.datos = data;
  }
}