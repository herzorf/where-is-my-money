import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Tags from "./views/Tags";
import Add from "./views/Add";
import Statistics from "./views/Statistics";
import NoMatch from "./views/Nomatch";
import {Tag} from "./views/tag";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags" exact>
                    <Tags/>
                </Route>
                <Route path="/tags/:tag" exact>
                    <Tag/>
                </Route>
                <Route path="/add" exact>
                    <Add/>
                </Route>
                <Route path="/statistics" exact>
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="add"  />
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
