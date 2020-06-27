import Layout from "../components/Layout";
import React, {useState} from "react";
import {TabsSection} from "./Add-components/TabsSection";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs"
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid #fb7813;
  color: #17706e;
  line-height: 20px;
  padding: 10px;
  >.note{
      margin-right: auto;
      margin-left: 1em;
      color: #1296db;
  }
`;
const Header = styled.h3`
 font-size: 18px;
 line-height: 20px;
 padding: 5px 10px;
 background-color: #fb7813;
 color: #f7f7ee;
`;
function Statistics() {
    const {getName} = useTags();
    const {records} = useRecords();
    const [tab,setTab] = useState<"-" | "+">("-");
    const selectedRecord = records.filter((record)=>record.tab === tab);
    const hash :{[K:string]: RecordItem[]} = {};
    selectedRecord.map(record =>{
        const key = day(record.createdAt).format("YYYY年MM月DD日");
        if(!(key in hash)){
            hash[key] = [];
        }
        hash[key].push(record);
    });
    const array = Object.entries(hash).sort((a,b)=>{
       if(a[0] === b[0]) return 0;
       if(a[0] < b[0]) return 1;
       if(a[0] > b[0]) return -1;
       return 0;
    });
    console.log(hash);
    return (
            <Layout>
                <TabsSection tab={tab} onChange={tab => setTab(tab)}/>

                {array.map(([date,records])=>
                    <div>
                        <Header>{date}</Header>
                        <div>
                            {records.map((record) =>{
                                return(
                                    <Item key={record.createdAt}>
                                        <div className="tags" >{record.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}<span>   </span></span>)}</div>
                                        <div className="note">{record.note}</div>
                                        <div className="amount">￥{record.amount}</div>
                                    </Item>
                                )
                            })}
                        </div>
                    </div>
                )}
            </Layout>
    );
}

export default  Statistics;