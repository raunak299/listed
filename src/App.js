import {
  Switch,
  Redirect,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/authentication" />
        </Route>

        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        <Route path="/authentication" exact>
          <Authentication />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
