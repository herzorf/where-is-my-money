import styled from "styled-components";
import React, {useRef, useState} from "react";
const Wrapper = styled.section`
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
type Props = {
    note: string,
    onChange: (note:string) => void
}
const NotesSection: React.FC <Props> = (props) => {
    const note = props.note;
    const refInput = useRef<HTMLInputElement>(null);
    const onblur = () =>{
        if(refInput.current !== null){
            props.onChange(refInput.current.value)
        }
    };
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="点击此处添加备注"  defaultValue={note}  ref={refInput}  onBlur={onblur}/>
            </label>
        </Wrapper>
    )
}
export {NotesSection}