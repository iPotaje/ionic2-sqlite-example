import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `
  <ion-menu [content]="content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Contexts</ion-title>
      <ion-buttons end>
      <button ion-button icon-only>
        <ion-icon name="options"></ion-icon>
      </button>
    </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    lists of contexts
    <ion-fab right bottom>
      <button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>
    </ion-fab>
  </ion-content>
</ion-menu>

  <ion-nav id="nav" #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>`
})
export class MyApp implements OnInit {
  rootPage = TabsPage;
  db : SQLite;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit() {
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
