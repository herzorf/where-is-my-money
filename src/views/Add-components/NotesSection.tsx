import styled from "styled-components";

const NotesSection = styled.section`
    background: #17706e;
    color: #f7f7ee;
    display: flex;
    padding: 10px 18px;
    display: block;
    >label{
        display: flex;
        align-items: center;
    >span{
      white-space: nowrap;
      margin-right: 12px;
    }
    >input{
        display: block;
        width: 100%;height: 3em;
        background: none;
        padding: 8px;
        border: none;
        color: #f7f7ee;
        font-size: 16px;
      &:focus{
        background-color: #f7f7ee;
        color: #17706e;
      }        
    }
    }
`;
export {NotesSection}