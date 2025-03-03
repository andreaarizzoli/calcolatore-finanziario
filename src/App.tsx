import "./App.css";
import Dashboard from "./features/futureCapitalSimulator/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="calcolatore-finanziario" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Dashboard />
    </div>
  );
}

export default App;
