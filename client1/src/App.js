import React, { createContext, useContext, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Create } from "./pages";

const LanguageContext = createContext({ edit: false, language: {} });

export const useLanguages = () => useContext(LanguageContext);

function App() {
  const [state, setState] = useState({});

  return (
    <div className="App">
      <LanguageContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="create" element={<Create />} />
              <Route path="create/:id" element={<Create />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
