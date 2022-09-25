import { Navigate, Route, Routes } from "react-router-dom";
import RefAndState from "pages/ref-state";
import MemoCallback from "pages/memo-callback";
import Shunchaki from "pages/shunchaki";

const App = () => {
  return (
    <Routes>
      <Route path='' element={null} />
      <Route path='ref-state' element={<RefAndState />} />
      <Route path='memo-callback' element={<MemoCallback />} />
      <Route path='shunchaki' element={<Shunchaki />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
