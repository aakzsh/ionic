import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Experiments from "./pages/Experiments/Experiments";
import Room from "./pages/Room/Room";
import Perform from "./pages/Perform/Perform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/room" element={<Room />} />
        <Route path="/perform" element={<Perform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;