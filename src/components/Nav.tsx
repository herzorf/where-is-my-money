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
            padding: 0.4em;
            width: 33.3333%;
            color:#1296db;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         }
      }
      box-shadow: 0 0 3px rgb(0,0,0,0.25);
`;
function Nav(){
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="tag"/>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Icon name="add"/>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Icon name="statistics"/>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav