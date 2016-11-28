import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  constructor(public navCtrl: NavController, private dataService: DataService) {
  }
  push() {
    this.dataService.setData("okkkkkk");
  }
}
