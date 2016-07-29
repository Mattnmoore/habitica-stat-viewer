import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { UserData } from './user-data';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ DataService ],
  directives: [ CHART_DIRECTIVES, TAB_DIRECTIVES ]
})
export class AppComponent implements OnInit {

  public data: UserData;

  public credentials = false;

  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  setCredentials(userId, apiToken) {
    this.dataService.setCredentials(userId, apiToken);
    this.getData();
  }

  getData() {
    this.credentials = true;
    if(this.dataService.checkCredentials()) {
      this.dataService.getData().subscribe(
          data => this.data = data
      )
    } else {
      alert('No credentials!');
    }
  }

}
