import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  users$: Object;

  constructor(private data: CategoryService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {
        this.users$ = data['hydra:member']
        console.log(this.users$)
      }
    )
    
  }


}
