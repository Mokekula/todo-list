import { 
  GET_NOTES_SUCCESS, 
  GET_NOTES_ERROR,
  ADD_NEW_NOTE,
  CHANGE_DONE_NOTE,
  DELETE_NOTE
 } from 'redux/actions/notesActionTypes'

export interface ITodo {
  id: number
  title: string
  done: boolean
}

export interface INotesState {
  notes: ITodo[] | [],
  error?: string | null,
};

export interface IFetchNotesAction {
  type: typeof GET_NOTES_SUCCESS | typeof GET_NOTES_ERROR,
  payload: ITodo[] | [],
  error?: string | null,
}

export interface IAddNoteAction {
  type: typeof ADD_NEW_NOTE,
  payload: ITodo
}

export interface IAddNoteSaga {
  type: typeof ADD_NEW_NOTE,
  payload: ITodo
}

export interface IChangeDoneNote {
  id: number, 
  done: boolean
}

export interface IChangeDoneNoteSaga {
  type: typeof CHANGE_DONE_NOTE,
  payload: IChangeDoneNote
}

export interface IChangeDoneNoteAction {
  type: typeof CHANGE_DONE_NOTE,
  payload: IChangeDoneNote
}

export interface IDeleteNoteAction {
  type: typeof DELETE_NOTE,
  payload: number
}

export interface IDeleteNoteSaga {
  type: typeof DELETE_NOTE,
  payload: number
}

export type NotesActionTypes = IFetchNotesAction | IAddNoteAction | IChangeDoneNoteAction | IDeleteNoteAction;