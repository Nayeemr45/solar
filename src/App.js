import './App.css';
import Navbar from './components/Navbar';
import HomaPage from './Pages/HomaPage';
import SolarCalculator from './Pages/SolarCalculator';
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path={"/"} exact>
      <HomaPage/>
      </Route>
      <Route path={"/SolarCalculator"} exact>
      <SolarCalculator/>
      </Route>
    
 {/* <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button> */}
 </div>
  );
}

export default App;
