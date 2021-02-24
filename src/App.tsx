import React from "react";
import { MainPage } from "views/MainPage";
import { appStore } from "redux/store";
const { Provider } = require('react-redux');


const App: React.FC = () => {
  return (
    <Provider store={appStore()}>
      <MainPage />
    </Provider>
  );
};

export default App;
