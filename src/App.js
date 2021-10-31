import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// component
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'

function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
