import { Component } from '@angular/core';

import { ListsPage } from '../lists/lists';
import { TasksPage } from '../tasks/tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ListsPage;
  tab2Root: any = TasksPage;

  constructor() {

  }
}
