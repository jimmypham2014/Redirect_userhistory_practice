import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>

      <nav className="comp nav">
        <ul>
          <li>
            <a href="/movies">Anchor</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <NavLink
              activeClassName="purple"
              to="/stocks"
              activeStyle={{ fontWeight: "bold" }}
            >
              Stock
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="purple"
              to="/movies"
              activeStyle={{ fontWeight: "bold" }}
            >
              movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/not-logged-in">
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
