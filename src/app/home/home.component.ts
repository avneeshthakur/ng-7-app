import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  users : any = [] ;

  constructor(private data:DataService) { }


  ngOnInit() {

  }

  clickEvent = () => {
  	console.log("buton clicked ")
  	this.data.getData().subscribe(data => {
  		this.users = data;
  	})
  }

}
