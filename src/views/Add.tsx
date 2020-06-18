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

`;

const NumberSection = styled.section`

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
                        <li>支出</li>
                        <li>收入</li>
                    </ul>
                </TabsSection>
                <NumberSection>
                    <div>100</div>
                    <div>
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
                        <button>确定</button>
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