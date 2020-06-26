import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

type RecordItem = {
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
        const newRecord = {...record, createdAt: (new Date()).toISOString()}
        setRecords([...records,newRecord])
    };
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem("records",JSON.stringify(records))
    },[records]);
    return {records,setRecords,addRecord}
}

export {useRecords}