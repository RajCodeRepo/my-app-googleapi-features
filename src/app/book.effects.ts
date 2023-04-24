import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadBooks, loadBooksSuccess } from './book.actions';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      switchMap((action) =>
        this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${action.query}`).pipe(
          map((response: any) => {
            return loadBooksSuccess({ books: response.items });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}