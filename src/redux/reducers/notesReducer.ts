import {
  GET_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  CHANGE_DONE_NOTE,
  ADD_NEW_NOTE,
  DELETE_NOTE
} from "redux/actions/notesActionTypes";
import { INotesState, NotesActionTypes, ITodo } from 'types/todo';

const initialState: INotesState = {
  notes: [],
  error: null,
};

export const notesReducer = (state = initialState, action: NotesActionTypes): INotesState => {
  switch (action.type) {
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
      };
    case GET_NOTES_ERROR:
      return { ...state, error: action.error };
    case ADD_NEW_NOTE:
      return {...state, notes: [action.payload, ...state.notes]};
    case CHANGE_DONE_NOTE:
        return {...state, notes: state.notes.filter((note: ITodo) => {
          if (note.id === action.payload.id) {
            note.done = action.payload.done;
            return note;
          }

          return note;
        })};
    case DELETE_NOTE:
      return {...state, notes: state.notes.filter((note) => note.id !== action.payload)}
    default:
      return state;
  }
};

