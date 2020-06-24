import React from "react";
import {useParams} from "react-router";
import {useTags} from "../lib/useTags";
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
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon name="占位"/>
            </Topbar>
            <Space/>
            <InputWrapper>
                <Input value={tag.name} label="标签名" placeholder="标签名"/>
                <Space/>
                <Space/>
                <Center>
                    <DeleteTag>删除标签</DeleteTag>
                </Center>
            </InputWrapper>
        </Layout>
    )
};
export {Tag}
