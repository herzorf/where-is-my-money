import styled from "styled-components";
import { NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
const NavWrapper = styled.div`
      &>ul{
         display: flex;   
         justify-content: center;   
         align-items: center;
         text-align: center;
          >li{
            width: 33.3333%;
            color:#1296db;
            padding: 0.4em;
            display: flex;
            justify-content: center;
            align-items: center;
          >a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;  
            >.icon{
              fill: #1296db;
            }
            &.selected{
               color:#fb7813;
               >.icon{
                fill: #fb7813;
               }
            }      
          }}
      }
      box-shadow: 0 0 3px rgb(0,0,0,0.25);
      background: white;
`;
function Nav(){
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" exact activeClassName="selected">
                        <Icon name="tag"/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" activeClassName="selected">
                        <Icon name="add"/>
                        记账</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>
                        统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav