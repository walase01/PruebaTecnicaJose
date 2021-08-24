import { Component, OnInit } from '@angular/core';
import { bookDetailService } from '../shared/book-detail.service';

@Component({
  selector: 'bookdetails',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
