import React, {useState} from "react";
import {Wrapper} from "./NumbersSection/Wrapper";
import {calculationOutput} from "./NumbersSection/calculationOutput";
type Props = {
    amount : number,
    onChange : (amount:number) => void,
    onOk? :() => void
}
const NumberSection: React.FC<Props> = (props ) => {
    const output = props.amount.toString();
    const onClickWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return
        }
        if(text === "确定"){
            props.onOk && props.onOk()
            return;
        }
        const setOutput = (output: string) => {
            if (output.length >= 16) {
                props.onChange(parseFloat(output.slice(0, 16)));
            } else {
                props.onChange(parseFloat(output));
            }
        }
        if('0123456789'.split("").concat(["删除","清空","."]).indexOf(text) >= 0){
            setOutput(calculationOutput(text,output))
        }
    }

    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="numbers" onClick={onClickWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="OK">确定</button>
                <button>.</button>
                <button>0</button>
            </div>
        </Wrapper>
    )
}

export {NumberSection}
