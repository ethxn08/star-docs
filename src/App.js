import "./App.css";
import Categories from "./Components/Categories";
import SliderFilms from "./Components/SliderFilms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="star-docs">
      <Switch>
        <Route path="/vehiles">
          <Categories />
        </Route>
        <Route path="/contact-me">
          <Categories />
        </Route>
        <Route path="/starships">
          <Categories />
        </Route>
        <Route path="/films">
          <SliderFilms />
        </Route>
        <Route path="/">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
