import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import List from "./List";
import Details from "./Details";

const Visits = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/:userId`} component={Details} />
            <Route path={match.path} component={List} />
        </Switch>
    );
}

export default Visits;