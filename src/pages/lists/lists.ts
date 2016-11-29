import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SQLite } from 'ionic-native';

@Component({
  selector:    'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage implements OnInit {
  public db:      SQLite;
  public message: string;
  public data:    any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
    
  }

  ngOnInit() {
      // this.dataService.getData().then((data)=>{
      //   this.data = data;
      // });
      this.data = this.dataService.datos;
      
      this.db = new SQLite();
      console.log(this.db);
      setTimeout( () => {
        this.db.openDatabase({
          name: 'data.db',
          location: 'default' // the location field is required
        }).then(() => {
          this.db.executeSql('CREATE TABLE IF NOT EXISTS danceMoves (name VARCHAR(32))', {}).then(() => {
            console.log("Creada");
            this.db.executeSql('INSERT INTO danceMoves (name) VALUES ("Hola")', {}).then((data) => {
              // this.message = data;
            });
            this.db.executeSql('SELECT * FROM danceMoves', {}).then((data) => {
              window['resultado'] = data;
              this.message = data;
            });
          }, (err) => {
            console.error('Unable to execute sql: ', err);
          });
        }, (err) => {
          console.error('Unable to open database: ', err);
        });
      }, 2000)
  }
  push () {
    this.dataService.getData().then((data)=>{
        this.data = data;
      });
  }

}
