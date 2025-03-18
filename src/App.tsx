import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardFutureCapitalSimulator from "./features/futureCapitalSimulator/DashboardFutureCapitalSimulator";
import TestingMenu from "./features/testingMenu/TestingMenu";

function App() {
  return (
    <div className="App">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="Contatori finanziari" />
        <title>Contatori finanziari</title>
      </head>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestingMenu />} />
          <Route
            path="/interesseComposto"
            element={<DashboardFutureCapitalSimulator />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
