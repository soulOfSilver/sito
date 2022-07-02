import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<></>}>
          <Route path=":article=" element={Article}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
