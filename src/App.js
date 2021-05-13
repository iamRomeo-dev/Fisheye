// import logo from './logo.svg';
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import { PhotographersList } from "./components/PhotographersList";
import { PhotographerDetails } from "./components/PhotographerDetails";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/photographers/:userId" exact component={PhotographerDetails} />
        <Route path="/photographers" exact component={PhotographersList} />
        <Route path="*">
          <Redirect to="/photographers" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
