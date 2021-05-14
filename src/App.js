// import logo from './logo.svg';
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import { PhotographersList } from "./components/PhotographersList";
import { PhotographerDetails } from "./components/PhotographerDetails";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* Get the components which need react query inside the provider.
      Don't forget to call the new QueryClient before */}
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route
            path="/photographers/:userId"
            exact
            component={PhotographerDetails}
          />
          <Route path="/photographers" exact component={PhotographersList} />
          <Route path="*">
            <Redirect to="/photographers" />
          </Route>
        </Switch>
      </QueryClientProvider>
    </>
  );
};

export default App;
