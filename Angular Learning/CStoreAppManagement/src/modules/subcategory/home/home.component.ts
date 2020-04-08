import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];  
  pagedItems: Array<any>; 

  isClicked:boolean=false;

  constructor(private categoryService:CategoryService,private router:Router,private currentRoute:ActivatedRoute) { }

  ngOnInit() {

    this.data=this.categoryService.GetCategoryList();
    this.isClicked=false;
  }

  beginPagination(pagedItems: Array<any>) {  
    this.pagedItems = pagedItems;  
  }  


  Details()
  {
    this.isClicked=true;
    this.router.navigate(['Details'],{relativeTo: this.currentRoute});
  }

  Edit()
  {
    this.isClicked=true;
    this.router.navigate(['Edit'],{relativeTo: this.currentRoute});
  }

  Delete()
  {
    this.isClicked=true;
    this.router.navigate(['Delete'],{relativeTo: this.currentRoute});
  }

  AddNew()
  {
    this.isClicked=true;
    this.router.navigate(['Add'],{relativeTo: this.currentRoute});
  }

}
