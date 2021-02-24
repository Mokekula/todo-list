import { call, put, takeEvery } from "redux-saga/effects";
import {
  showLoader,
  hideLoader,
} from "redux/actions/loaderActions";
import {

  fetchNotesSuccess,
  fetchNotesError,
  addNewNote,
  changeDoneNote
} from "redux/actions/notesActions";
import { GET_NOTES_REQUEST, ADD_NEW_NOTE, CHANGE_DONE_NOTE, DELETE_NOTE } from "redux/actions/notesActionTypes";
import { apiGetNotes, apiAddNote, apiChangeNoteDone, apiDeleteNote } from "api/api";
import { ITodo, IAddNoteSaga, IChangeDoneNoteSaga, IDeleteNoteSaga } from 'types/todo';

function* sagaGetNotes() {
    try{
      yield put(showLoader());
      const results: ITodo[] = yield call(apiGetNotes);
      yield put(fetchNotesSuccess(results));
      yield put(hideLoader());
    } catch (err) {
      yield put(fetchNotesError('Error'));
      alert("Something went wrong");
      yield put(hideLoader());
    }
}

function* sagaAddNote({ type, payload }: IAddNoteSaga){
  try{
    yield call(apiAddNote, payload);
  } catch(err) {
    alert('Something went wrong')
  }
}

function* sagaChangeNoteDone({ type, payload } : IChangeDoneNoteSaga){
  try{
    yield call(apiChangeNoteDone, payload);
  } catch(err) {
    alert('Something went wrong')
  }
}

function* sagaDeleteNote({ type, payload } : IDeleteNoteSaga){
  try{
    yield call(apiDeleteNote, payload);
  } catch(err) {
    alert('Something went wrong')
  }
}

export function* notesSaga(){
  yield takeEvery(GET_NOTES_REQUEST, sagaGetNotes);
  yield takeEvery(ADD_NEW_NOTE, sagaAddNote);
  yield takeEvery(CHANGE_DONE_NOTE, sagaChangeNoteDone)
  yield takeEvery(DELETE_NOTE, sagaDeleteNote)
}
