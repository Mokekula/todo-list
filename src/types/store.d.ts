interface IAppState {
  loader: ILoaderState,
  notes: NotesStateType
}

declare module 'react-redux' {
  interface DefaultRootState extends IAppState {}
}