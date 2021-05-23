import './App.css';
import Navbar from './components/Navbar';
import HomaPage from './Pages/HomaPage';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomaPage />
    
 {/* <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button> */}
 </div>
  );
}

export default App;
