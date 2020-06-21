import styled from "styled-components";

const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      >.output{
        font-size: 40px;
        padding: 4px 12px;
        text-align: right;
        box-shadow:inset 0 -5px 5px -5px #17706e;
        overflow: hidden;
      }
      >.numbers{
        >button{
        font-size: 20px;
        border: none;
        background-color: #17706e;
        color: #f7f7ee;
        float: left;
        border-radius: 8px;
        box-shadow: inset 1px 1px 1px #f7f7ee;          
        width: 25%;
          height: 64px;
          &:nth-child(4){
            background-color: #fb7813;
          }
          &:nth-child(14){
             width: 50% ;
          }          
          &:nth-child(8){
            background-color: #f7f7ee;
            border: 2px solid #17706e;
            color: #17706e;
            &:active{
              background-color: #17706e;
              color: #f7f7ee;
              border: none;
            }
          }
          &.OK{
            height: 128px;
            float: right;
            background-color: #1296db;
          }
       &:active{
         background-color: #f7f7ee;
         color:#17706e;
       }
      }
     }
`;
export {Wrapper}