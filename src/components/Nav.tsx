import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
const NavWrapper = styled.div`
      &>ul{
         display: flex;   
         justify-content: center;   
         align-items: center;
         text-align: center;
          >li{
            border: 1px solid red;
            width: 33.3333%;
            color:#1296db;
            padding: 0.4em;
            display: flex;
            justify-content: center;
            align-items: center;
          >a{
           border: 1px solid yellow;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;          
          }}
      }
      box-shadow: 0 0 3px rgb(0,0,0,0.25);
`;
function Nav(){
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name="tag"/>
                        标签</Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name="add"/>
                        记账</Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name="statistics"/>
                        统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav