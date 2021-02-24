import { HIDE_LOADER, SHOW_LOADER } from "redux/actions/loaderActionTypes";

const initialState: ILoaderState = {
  loading: false,
};

export const loaderReducer = (state = initialState, action: ILoaderAction): ILoaderState => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};