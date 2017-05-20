import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Switchboard
        <a routerLink="/add">Add an operator</a>
    </h1>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {}
