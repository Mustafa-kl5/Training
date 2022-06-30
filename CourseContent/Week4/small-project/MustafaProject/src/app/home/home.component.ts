import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeId : number=10
  homeStatus="open"
  constructor() { }

  ngOnInit(): void {
  }

}
