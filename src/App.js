import "./App.css";
import Categories from "./Components/Categories";
import SliderFilms from "./Components/SliderFilms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SliderVehicles from "./Components/SliderVehicles";
import SliderStarships from "./Components/SliderStarships";

function App() {
  return (
    <div className="star-docs">
      <Switch>
        <Route path="/films">
          <SliderFilms />
        </Route>
        <Route path="/starships">
          <SliderStarships />
        </Route>
        <Route path="/vehicles">
          <SliderVehicles />
        </Route>
        <Route path="/contact-me">
          <Categories />
        </Route>

        <Route path="/">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
