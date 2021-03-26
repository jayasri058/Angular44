import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name="jayasri kedarisetti";
dept="UI";
b1=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
