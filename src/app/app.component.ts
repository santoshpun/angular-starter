import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-starter';
  name: string = 'Santosh Pun';

  constructor() { }

  ngOnInit() {
    console.log("AppComponent initialized...")
  }

}
