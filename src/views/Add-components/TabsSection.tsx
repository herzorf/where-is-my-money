import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
      font-size: 24px;
      >ul{
         display: flex;      
         >li{
            width: 50%;
            text-align: center;
            background: #17706e;
            color: #fff;
            padding: 16px 0;
            position: relative;
            &.selected{
              background-color: #fb7813;
              color: #f7f7ee;
            }
            &.selected::before{
                content: "";
                display: block;
                height: 3px;
                background: #f7f7ee;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }
         }
      }
`;
const TabsSection: React.FC = () => {
    const tabMap = {"-":"支出","+":"收入"};
    const [tabList] = useState<("+"| "-")[]>(["-","+"]);
    const [tab , setTab] = useState("-");
    return (
        <Wrapper>
            <ul>
                {tabList.map(c => {
                    return <li className={tab === c ? "selected" :''} onClick={()=>{setTab(c)}} key={c}>{tabMap[c]}</li>
                })}
            </ul>
        </Wrapper>
    )
};
export {TabsSection}