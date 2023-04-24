import { createReducer, on } from '@ngrx/store';
import { BookState } from './models/book.model';
import { loadBooksSuccess } from './book.actions';

export const initialState: BookState[] = [];

const _bookReducer = createReducer(
  initialState,
  on(loadBooksSuccess, (state, { books }) => [...books])
);

export function bookReducer(state: BookState[] | undefined, action: any) {
  return _bookReducer(state, action);
}