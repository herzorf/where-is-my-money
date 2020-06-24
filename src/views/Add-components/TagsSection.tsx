import styled from "styled-components";
import React from "react";
import {useTags} from "useTags";

const Wrapper = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
   >ul{
     >li{
          background: #17706e;
          display: inline-block;
          color: #f7f7ee;
          border-radius: 18px;
          padding: 4px  18px;
          margin: 8px 12px;
          &.selected{
            background-color: #fb7813;
          }
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

type Props = {
    selected:number[];
    onChange:(selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags ,setTags} = useTags();
    const selectedIds = props.selected;
    const addTag = () => {
        const tagName = window.prompt("请输入新增标签的内容:");
        if (tagName !== null) {
            setTags([...tags,{id:Math.random(),name: tagName}])
        }
    };
    const toggleTag = (tagId: number) => {
        if (selectedIds.includes(tagId)) {
            props.onChange(selectedIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedIds, tagId])
        }
    };
    return (
        <Wrapper>
            <ul>
                {tags.map(tag => {
                    return <li key={tag.id} onClick={() => toggleTag(tag.id)}
                               className={selectedIds.includes(tag.id) ? "selected" : ""}>
                        {tag.name}
                    </li>
                })}
            </ul>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )

};
export {TagsSection}