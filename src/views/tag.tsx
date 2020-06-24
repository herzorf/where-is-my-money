import React from "react";
import {useParams} from "react-router";
import {useTags} from "../lib/useTags";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import styled from "styled-components";

const DeleteTag = styled.button`
   font-size: 16px;
  display: block;
  width: 90px;
  padding: 10px;
  border: none;
  background-color: #fb7813;
  color: #f7f7ee;
  border-radius: 4px;
`
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  align-items: center;
  padding: 10px;
  background-color: white;
  font-size: 16px;
      >.icon{
      fill:#1296db;
      }
`

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
                <Icon name="left" />
                <span>编辑标签</span>
                <Icon name="占位" />
            </Topbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="标签名" />
                </label>
                <DeleteTag>删除标签</DeleteTag>
            </div>
        </Layout>
    )
}
export {Tag}
