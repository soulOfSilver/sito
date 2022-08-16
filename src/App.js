import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Article from "./components/Article/Article";
import Articles from "./components/Articles/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
