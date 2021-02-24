import {
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  ADD_NEW_NOTE,
  CHANGE_DONE_NOTE,
  DELETE_NOTE,
} from "./notesActionTypes";
import { 
  ITodo, 
  IChangeDoneNote, 
  NotesActionTypes 
} from 'types/todo';

export const fetchNotesRequest = () => {
  return {
    type: GET_NOTES_REQUEST
  };
};

export const fetchNotesSuccess = (payload: ITodo[]): NotesActionTypes => {
  return {
    type: GET_NOTES_SUCCESS,
    payload,
    error: null,
  };
};

export const fetchNotesError = (error: string): NotesActionTypes => {
  return {
    type: GET_NOTES_ERROR,
    payload: [],
    error,
  };
};


export const addNewNote = (payload: ITodo): NotesActionTypes  => {
  return {
    type: ADD_NEW_NOTE,
    payload,
  };
};

export const changeDoneNote = (payload: IChangeDoneNote): NotesActionTypes => {
  return {
    type: CHANGE_DONE_NOTE,
    payload
  };
};

export const deleteNote = (payload: number): NotesActionTypes => {
  return {
    type: DELETE_NOTE,
    payload,
  };
};
