import { Component, OnInit } from '@angular/core';
import {Featured} from "../models/Featured";
import {ApiService} from '../api.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featuredList: Featured[] = [
    { title: "Chef", subtitle: '90 Top Chef',image:"ad" },
    { title: "Trendy", subtitle: '23 Places',image:"ad" },
    { title: "New in Town", subtitle: '23 Places',image:"ad" }
  ];
  list;

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.getFeatured().subscribe((data)=> {
      console.log(data)
      this.list=data
    });
  }
}
