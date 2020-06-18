import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
   >ul{
     >li{
          background: #17706e;
          display: inline-block;
          color: #f7f7ee;
          border-radius: 18px;
          padding: 4px  18px;
          margin: 8px 12px;
     }
   }
   >button{
       margin: 8px 12px;
       border: none;
       background: none;
       border-bottom: 1px solid #17706e;
       color: #17706e;
       padding: 2px 6px;
       font-size: 16px;
   }
`;

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
        border: none;
        color: #f7f7ee;
        font-size: 16px;
        
    }
    }
`;

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

const NumberSection = styled.section`
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



function Add() {
    return (
        <div>
            <Layout>
                <TagsSection>
                    <ul>
                        <li>衣</li>
                        <li>食</li>
                        <li>住</li>
                        <li>行</li>
                    </ul>
                    <button>新增标签</button>
                </TagsSection>
                <NotesSection>
                    <label>
                        <span>备注</span>
                        <input type="text" placeholder="点击此处添加备注"/>
                    </label>
                </NotesSection>
                <TabsSection>
                    <ul>
                        <li className="selected">支出</li>
                        <li>收入</li>
                    </ul>
                </TabsSection>
                <NumberSection>
                    <div className="output">100</div>
                    <div className="numbers">
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
                </NumberSection>
            </Layout>
        </div>
    );
}
export default Add;