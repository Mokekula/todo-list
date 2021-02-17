import React, { useState } from "react";
import Context from "./context";
import { MainPage } from "./views/MainPage";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <Context.Provider value={{ notes, setNotes }}>
      <MainPage />
    </Context.Provider>
  );
};

export default App;
