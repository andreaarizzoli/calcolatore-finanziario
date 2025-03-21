import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardFutureCapitalSimulator from "./features/futureCapitalSimulator/DashboardFutureCapitalSimulator";
import TestingMenu from "./features/testingMenu/TestingMenu";
import { ConfigProvider } from "antd";

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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#182eff", // Cambia il colore primario
          },
        }}
      >
        <BrowserRouter>
          <div
            style={{
              backgroundColor: "#FEF9FC", // Cambia il colore di sfondo
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            <Routes>
              <Route path="/" element={<TestingMenu />} />
              <Route
                path="/interesseComposto"
                element={<DashboardFutureCapitalSimulator />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
