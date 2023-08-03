import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<h1>movie detail page</h1>} />
          <Route path="movies/type" element={<h1>movie list page</h1>} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
