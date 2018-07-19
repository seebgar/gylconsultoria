import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './services/authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    public auth: AuthorsService
  ) {}

  ngOnInit() {

  }

}
