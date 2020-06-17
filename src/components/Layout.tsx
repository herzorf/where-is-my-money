import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Content = styled.div`
    flex-grow: 1;
`;


function Layout(props:any) {
    return (
        <div>
            <Wrapper>
                <Content>
                    {props.children}
                </Content>
                <Nav/>
            </Wrapper>
        </div>
    );
}

export default Layout;