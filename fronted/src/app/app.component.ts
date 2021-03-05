import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dissapear = true;

  constructor(public router: Router) {

  }

  title = 'fronted';


  irAlaApp() {
    this.router.navigate(['/registros']);
    this.dissapear = false;
  }
}
