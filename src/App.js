import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Guess, Home, Matches } from "pages";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="App h-screen w-screen">
      <BrowserRouter basename="course-games">
        <Sidebar />
        <div className="px-6 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="guess" element={<Guess />} />
            <Route path="matches" element={<Matches />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
