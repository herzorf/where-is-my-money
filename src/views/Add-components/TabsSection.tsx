import styled from "styled-components";

const TabsSection = styled.section`
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
            &.selected::after{
                content: "";
                display: block;
                height: 3px;
                background: #f7f7ee;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
         }
      }
`;

export {TabsSection}