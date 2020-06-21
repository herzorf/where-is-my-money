import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      >.output{
        font-size: 40px;
        padding: 4px 12px;
        text-align: right;
        box-shadow:inset 0 -5px 5px -5px #17706e;
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

const NumberSection:React.FC = () =>{
    const [output ,setOutput] = useState<string>("0");
    const onClickWrapper = (e : React.MouseEvent) =>{
        const text = (e.target as HTMLButtonElement).textContent;
        if(text===null){return}
        switch (text) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                if(output === '0'){
                    setOutput(text);
                }else {
                    setOutput(output + text)
                }
                break;
            case "删除":
                console.log("删除");
                break;
            case ".":
                console.log("点");
                break;
            case "清空":
                console.log("清空");
                break;
            case "确定":
                console.log("确认");
                break;
            case "%":
                console.log("%");
                break;


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
                <button>0</button>
                <button>.</button>
                <button>%</button>
            </div>
        </Wrapper>
    )
}

export {NumberSection}