import { createStore, applyMiddleware, Store } from "redux";
import { rootReducer } from "redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesSaga } from "redux/sagas/notesSaga";


export const appStore = (): Store<IAppState> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(notesSaga);

  return store;
};