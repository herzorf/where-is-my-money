import React, {useState} from "react";
import {Wrapper} from "./NumbersSection/Wrapper";
import {calculationOutput} from "./NumbersSection/calculationOutput";

const NumberSection: React.FC = () => {
    const [output, _setOutput] = useState<string>("0");
    const onClickWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return
        }
        const setOutput = (output: string) => {
            if (output.length >= 16) {
                _setOutput(output.slice(0, 16));
            } else {
                _setOutput(output);
            }
        }
        if('0123456789'.split("").concat(["删除","清空"]).indexOf(text) >= 0){
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