import { Wrapper_Col } from './../../.tmp/node_modules/ionic-angular/components/grid/grid.ngfactory';
import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp implements OnInit {
  rootPage = TabsPage;
  db : SQLite;

  constructor(private platform: Platform) {}

  ngOnInit() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

        this.db = new SQLite();
        console.log(this.db);
        this.db.openDatabase({
          name: 'data.db',
          location: 'default' // the location field is required
        }).then(() => {
          this.db.executeSql('CREATE TABLE IF NOT EXISTS danceMoves(name VARCHAR(32))', {}).then(() => {
            console.log("Creada");
          }, (err) => {
            console.error('Unable to execute sql: ', err);
          });
        }, (err) => {
          console.error('Unable to open database: ', err);
        });
  }
}
