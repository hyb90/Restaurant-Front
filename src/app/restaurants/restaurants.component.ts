import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../models/Restaurant";
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantList: Restaurant[] = [
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest1.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest2.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest3.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest4.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest5.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest1.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest2.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest3.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest4.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest5.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest1.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest2.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest3.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest4.png" },
    { name: "Chef", location: '90 Top Chef',status:'Online',image:"/assets/rest5.png" },
  ];
  constructor() {}

  ngOnInit(): void {

  }

}
