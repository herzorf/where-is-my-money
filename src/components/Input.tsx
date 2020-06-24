import React from "react";
import styled from "styled-components";

const Label = styled.label`
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
            color: #17706e;
            font-size: 16px;
            background:#f7f7ee;      
            border-radius: 4px;  
       }
`;

type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
    const {label, children, ...rest} = props
    return (
        <Label>
            <span>{props.label}</span>
            <input {...rest} />
        </Label>
    )
};
export {Input}


// defaultValue={note} ref={refInput} onBlur={onblur}