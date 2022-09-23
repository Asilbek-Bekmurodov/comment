import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RefAndState from "pages/ref-state";
import Home from "pages/home";
import MemoCallback from "pages/memo-callback";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path='' element={null} />
        <Route path='ref-state' element={<RefAndState />} />
        <Route path='memo-callback' element={<MemoCallback />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default App;
