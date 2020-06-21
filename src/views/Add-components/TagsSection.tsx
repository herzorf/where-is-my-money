import styled from "styled-components";
import React, {useState} from "react";

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
    selected:string[];
    onChange:(selected: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const selected = props.selected;
    const addTag = () => {
        const tagName = window.prompt("请输入新增标签的内容:");
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    };
    const toggleTag = (tag: string) => {
        if (selected.includes(tag)) {
            props.onChange(selected.filter(t => t !== tag));
        } else {
            props.onChange([...selected, tag])
        }
    };
    return (
        <Wrapper>
            <ul>
                {tags.map(tag => {
                    return <li key={tag} onClick={() => toggleTag(tag)}
                               className={selected.includes(tag) ? "selected" : ""}>
                        {tag}
                    </li>
                })}
            </ul>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )

};
export {TagsSection}