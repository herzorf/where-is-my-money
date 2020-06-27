import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecordItem = {
    tagIds: number[],
    note: string,
    tab: "+" | "-",
    amount: number
    createdAt: string
}


type newRecordItem = Omit<RecordItem,"createdAt">
const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    const addRecord = (record:newRecordItem) =>{
        if(record.tagIds.length === 0){
            alert("请选择标签");
            return false;
        }else if(record.amount === 0){
            alert("请输入金额");
            return false;
        }else{
            const newRecord = {...record, createdAt: (new Date()).toISOString()};
            setRecords([...records,newRecord]);
            return true;
        }};
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
    },[]);
    useUpdate(()=>{
        window.localStorage.setItem("records",JSON.stringify(records))
    },records);
    return {records,setRecords,addRecord}
};

export {useRecords}