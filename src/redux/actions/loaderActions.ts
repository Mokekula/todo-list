import {
  SHOW_LOADER,
  HIDE_LOADER
} from "./loaderActionTypes";

export const showLoader = (): ILoaderAction => ({ type: SHOW_LOADER });

export const hideLoader = (): ILoaderAction => ({ type: HIDE_LOADER });