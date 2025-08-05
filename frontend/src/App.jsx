import React from "react";
import HomePage from "./pages/HomePaage";
import Createpage from "./pages/createPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Route, Routes } from "react-router-dom";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
