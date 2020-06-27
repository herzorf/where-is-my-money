import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../components/Input";
const Wrapper = styled.section`
    background: #17706e;
    color: #f7f7ee;
    padding: 10px 18px;
    display: block;
 
`;
type Props = {
    note: string,
    onChange: (note:string) => void
}
const NotesSection: React.FC <Props> = (props) => {
    const note = props.note;
    const onChange :ChangeEventHandler<HTMLInputElement> = (e) =>{
            props.onChange(e.target.value)
    };
    return (
        <Wrapper>
            <Input label="备注" type="text" placeholder="点击此处添加备注" value={note} onChange={onChange} />
        </Wrapper>
    )
};
export {NotesSection}