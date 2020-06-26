import Layout from "../components/Layout";
import React, {useState} from "react";
import {NotesSection} from "./Add-components/NotesSection";
import {TabsSection} from "./Add-components/TabsSection";
import {TagsSection} from "./Add-components/TagsSection";
import {NumberSection} from "./Add-components/NumbersSection";
import {useRecords} from "../hooks/useRecords";

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    tab: "-" as Tab,
    amount: 0
};

type Tab = "-" | "+"

function Add() {
    const [selected, setSelected] = useState(defaultFormData);
    const {records, addRecord} = useRecords();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    };
    const submit = () => {
        if (addRecord(selected)) {
            alert("保存成功");
            setSelected(defaultFormData)
        }
    };
    return (
        <div>
            <Layout>
                <TagsSection selected={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
                <NotesSection note={selected.note} onChange={(note) => onChange({note})}/>
                <TabsSection tab={selected.tab} onChange={(tab) => onChange({tab})}/>
                <NumberSection amount={selected.amount} onChange={(amount) => onChange({amount})} onOk={submit}/>
            </Layout>
        </div>
    );
}

export default Add;

