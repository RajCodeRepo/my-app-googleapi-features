import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookState } from './models/book.model';
import { Store } from '@ngrx/store';
import { loadBooks } from './book.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  books$: Observable<BookState[]>;

  constructor(private store: Store<{ books: BookState[] }>) {
    this.books$ = store.select('books');
  }

  ngOnInit(): void {
    this.store.dispatch(loadBooks({ query: 'angular' }));

    this.books$.subscribe((books) => {
      console.log(books);
    });
  }

}
