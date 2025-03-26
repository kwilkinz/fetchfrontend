import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogsList from "./components/DogsList";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dogs" element={<DogsList />} />
      </Routes>
    </Router>
  );
}

export default App;
