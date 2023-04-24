import { createAction, props } from '@ngrx/store';
import { BookState } from '../app/models/book.model';

export const loadBooks = createAction('[Book] Load Books', props<{ query: string }>());
export const loadBooksSuccess = createAction('[Book] Load Books Success', props<{ books: BookState[] }>());