import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(private data: CategoryService, private route: ActivatedRoute) {

    
  }
  
  ngOnInit() {
    }

}
