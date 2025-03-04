import "./App.css";
import Dashboard from "./features/futureCapitalSimulator/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        //TODO: Aggiugnere Routes
      }
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Dashboard /> */}
      <Dashboard />
    </div>
  );
}

export default App;
