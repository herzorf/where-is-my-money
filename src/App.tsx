import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Content = styled.div`
    flex-grow: 1;
`;


function App() {
    return (
        <Router>
            <Wrapper>
                <Content>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Content>
                <Nav/>
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return (
        <div>你输入的页面不存在，请输入正确的页面</div>
    )
}

function Statistics() {
    return <h2>statistics</h2>;
}

function Tags() {
    return <h2>tags</h2>;
}

function Money() {
    return <h2>money</h2>;
}

export default App;
