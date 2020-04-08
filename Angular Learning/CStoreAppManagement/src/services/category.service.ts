import {CategoryModel} from '../models/category.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class CategoryService
{

    categoryList:CategoryModel[]=[];

    constructor()
    {
        this.categoryList=[
          {CategoryID:1,NameEN:'Category1',IsActive:true},
          {CategoryID:2,NameEN:'Category2',IsActive:true},
          {CategoryID:3,NameEN:'Category3',IsActive:true},
          {CategoryID:4,NameEN:'Category4',IsActive:true},
          {CategoryID:5,NameEN:'Category5',IsActive:false},
          {CategoryID:6,NameEN:'Category6',IsActive:true},
          {CategoryID:7,NameEN:'Category7',IsActive:true},
          {CategoryID:8,NameEN:'Category8',IsActive:false},
          {CategoryID:9,NameEN:'Category9',IsActive:true},
          {CategoryID:10,NameEN:'Category10',IsActive:false} ,
          {CategoryID:11,NameEN:'Category11',IsActive:true}           
        ];
    }

    public GetCategoryList():CategoryModel[]
    {
        return this.categoryList;
    }
    
}