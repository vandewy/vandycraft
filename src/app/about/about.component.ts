import { Component, OnInit } from '@angular/core';

// do not fetch data in a component constructor
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// always export so you can import else where
export class AboutComponent implements OnInit {
  hero = 'Windstorm';

  constructor() {
  }

  // good place to fetch initial data
  ngOnInit() {
  }

}
