import { Injectable } from '@angular/core';
import { BookDetail } from './book-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class bookDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL: 'http//localhost:61236/api/BooksAPI';
  formData:BookDetail = new BookDetail();
}
