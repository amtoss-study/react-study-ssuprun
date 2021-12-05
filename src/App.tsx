import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "routes/Home";
import Users from "routes/Users/Index";
import Nav from "components/Nav";
import { UsersContextProvider } from "UsersContext";

const App = () => {
    return (
        <UsersContextProvider>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </UsersContextProvider>
    );
};

export default App;
