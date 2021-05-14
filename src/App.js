// import logo from './logo.svg';
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import { PhotographerList } from "./components/PhotographerList";
import { PhotographerDetails } from "./components/PhotographerDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <Navbar />
      {/* Get the components which need react query inside the provider.
      Don't forget to call the new QueryClient before */}
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route
            path="/photographers/:userId"
            exact
            component={PhotographerDetails}
          />
          <Route path="/photographers" exact component={PhotographerList} />
          <Route path="*">
            <Redirect to="/photographers" />
          </Route>
        </Switch>
      </QueryClientProvider>
    </>
  );
};

export default App;
