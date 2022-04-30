import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Guess, Home, Matches } from "pages";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="App h-screen w-screen">
      <HashRouter>
        <Sidebar />
        <div className="px-6 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="guess" element={<Guess />} />
            <Route path="matches" element={<Matches />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
