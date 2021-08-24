import { Component, OnInit } from '@angular/core';
import { bookDetailService } from '../shared/book-detail.service';

@Component({
  selector: 'bookdetailsform',
  templateUrl: './book-details-form.component.html',
  styles: [
  ]
})
export class BookDetailsFormComponent implements OnInit {

  constructor(public service : bookDetailService) { }

  ngOnInit(): void {

    
  }

}
