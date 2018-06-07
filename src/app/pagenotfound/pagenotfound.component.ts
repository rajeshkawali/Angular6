import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <h1>
      Page Not Found
    </h1>
  `,
  styles: [`
  h1{
  color: red;
  }
  `]
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
