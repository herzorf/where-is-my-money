import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.div`
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
      box-shadow: 0 0 3px rgb(0,0,0,0.25);
`;
function Nav(){
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav