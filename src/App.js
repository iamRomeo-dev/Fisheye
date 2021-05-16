// import logo from './logo.svg';
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import { PhotographerList } from "./components/PhotographerList";
import { PhotographerDetails } from "./components/PhotographerDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [filter, setFilter] = useState();

  return (
    <>
      {/* Get the components which need react query inside the provider.
      Don't forget to call the new QueryClient before */}
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route
            path="/photographers/:userId"
            exact><PhotographerDetails setFilter={setFilter}/></Route>
          <Route path="/photographers" exact>
            <PhotographerList filter={filter} setFilter={setFilter}/>
          </Route>
          <Route path="*">
            <Redirect to="/photographers" />
          </Route>
        </Switch>
      </QueryClientProvider>
    </>
  );
};

export default App;
