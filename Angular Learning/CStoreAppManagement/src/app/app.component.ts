import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CStoreAppManagement';
  tabSelected='Home';

  constructor(private router:Router)
  {

  }

  tabClick(itemSelected:string)
  {
    this.tabSelected=itemSelected;
    console.log(this.tabSelected);
    if(itemSelected === 'Home')
    {
      this.router.navigateByUrl('Home');
    }
    if(itemSelected === 'Category')
    {
      this.router.navigateByUrl('Category');
    }
    if(itemSelected === 'SubCategory')
    {
      this.router.navigateByUrl('SubCategory');
    }
    if(itemSelected === 'Items')
    {
      this.router.navigateByUrl('Item');
    }

  }
}
