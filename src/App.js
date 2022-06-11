import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import DeviceList from "./components/DeviceList";
import Sample from "./pages/Sample";
import DeviceStates from "./components/DeviceStates";
import DeviceForm from "./components/DeviceForm";
import About from "./pages/About";
import { DeviceProvider } from "./context/DeviceContext";

function App() {
  return (
    <DeviceProvider>
      <Router>
        <Header />
        {/* <Sample /> */}
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <DeviceForm />
                  <DeviceStates />
                  <DeviceList />
                </>
              }
            />

            <Route path="/sam" element={<Sample />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </DeviceProvider>
  );
}

export default App;
