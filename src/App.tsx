import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom"

import Index from "./pages/index";
import Post from "./pages/post";

function App() {
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [history.location.pathname]);

  return (
    <Switch>
      <Route exact path="/" render={() => (<Index />)} />
      <Route path="/post" render={() => (<Post />)} />
    </Switch>
  );
}

export default App;
