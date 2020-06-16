import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    border:1px solid red;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Content = styled.div`
border: 1px solid green;
flex-grow: 1;
`;
const Nav = styled.div`
      &>ul{
         display: flex;   
         justify-content: center;   
         align-items: center;
         text-align: center;
         >li{
         padding: 1em;
            width: 33.3333%;
         }
      }
border: 1px solid yellow;
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
                <Nav>
                    <ul>
                        <li>
                            <Link to="/tags">tags</Link>
                        </li>
                        <li>
                            <Link to="/money">money</Link>
                        </li>
                        <li>
                            <Link to="/statistics">statistics</Link>
                        </li>
                    </ul>
                </Nav>
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
