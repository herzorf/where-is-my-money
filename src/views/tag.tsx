import React from "react";
import {useParams,useHistory} from "react-router";
import {useTags} from "../hooks/useTags";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Center} from "../components/Center";
import {Space} from "../components/Space";

const DeleteTag = styled.button`
   font-size: 16px;
  display: block;
  width: 90px;
  padding: 10px;
  border: none;
  background-color: #fb7813;
  color: #f7f7ee;
  border-radius: 4px;
`;
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  align-items: center;
  padding: 16px;
  background-color: white;
  font-size: 16px;
      >.icon{
      fill:#1296db;
      }
`;
const InputWrapper = styled.div`
    >label{
        background-color: #1296db;
        color: #f7f7ee;
        padding: 0.5em;
        >input{
         color: #1296db;
        }
    }
`;

type Params = {
    id: string
}
const Tag = () => {
    const {findTag,updateTag,deleteTag} = useTags();
    let {id:idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));
    const history = useHistory()
    const goBack = () =>{
        history.goBack()
    }
    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={goBack}/>
                <span>编辑标签</span>
                <Icon name="占位"/>
            </Topbar>
            <Space/>
            {tag ?
                <InputWrapper>
                    <Input value={tag.name} label="标签名" placeholder="标签名"
                           onChange={(e)=>{
                               updateTag(tag.id,{ name :e.target.value})
                           }}/>
                    <Space/>
                    <Space/>
                    <Center>
                        <DeleteTag onClick={()=>{deleteTag(tag.id)}}>删除标签</DeleteTag>
                    </Center>
                </InputWrapper>
                : <div>标签不存在</div>}
        </Layout>
    )
};
export {Tag}
