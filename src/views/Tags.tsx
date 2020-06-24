import Layout from "../components/Layout";
import React from "react";
import {useTags} from "lib/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";
import {Center} from "../components/Center";
import {Space} from "../components/Space";

const TagsList = styled.ol`
  >li{
    font-size: 18px;
    line-height: 28px;
    border-bottom: 1px solid #1296db;
    margin-left: 0.5em;
    margin-right: 0.5em;
   
    >a{
        padding: 0.5em  0 0.5em 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
         >.icon{
          fill:#1296db;
        }
     }
    color: #1296db;
   
  }
`;
const AddTagButton = styled.button`
 font-size: 16px;
  display: block;
  width: 90px;
  padding: 10px;
  border: none;
  background-color: #17706e;
  color: #f7f7ee;
  border-radius: 4px;
`;


function Tags() {
    const {tags } = useTags();
    return (
        <div>
            <Layout>
                <TagsList>
                    {tags.map((tag)=>{
                        return (<li key={tag.id} >
                                    <Link to={"/tags/" + tag.id} >
                                           <span className="oneLine">{tag.name}</span>
                                           <Icon name="right"/>
                                    </Link>
                                </li>)
                    })}
                </TagsList>
                <Center>
                    <Space/>
                    <Space/>
                    <AddTagButton>新增标签</AddTagButton>
                </Center>
            </Layout>
        </div>
    );
}
export default Tags;