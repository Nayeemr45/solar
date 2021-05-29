import "./App.css";
import Navbar from "./components/Navbar";
import HomaPage from "./Pages/HomaPage";
import Footer from "./components/Footer";
import SolarCalculator from "./Pages/SolarCalculator";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path={"/"} exact>
        <HomaPage />
      </Route>
      <Route path={"/SolarCalculator"} exact>
        <SolarCalculator />
      </Route>
      <Route
        path="/Contact"
        component={() => {
          window.location.href = "/";
          return null;
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
