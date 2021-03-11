import './App.css';
import NoMatch from './Components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainContainer from './Components/mainContainer/MainContainer';
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
  <div>
    <Router>
    <Switch>
          <Route exact path="/">
          <MainContainer/>
          </Route>
          <Route path="/home">
          <MainContainer/>
          </Route>
          <Route path="/team/:teamDetails">
          <TeamDetails/>
          </Route>
          <Route path="*">
          <NoMatch></NoMatch>
          </Route>
        </Switch>
    </Router>
    
    
    
  </div>
  );
}

export default App;
