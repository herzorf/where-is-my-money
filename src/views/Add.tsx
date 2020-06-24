import Layout from "../components/Layout";
import React, {useState} from "react";
import {NotesSection} from "./Add-components/NotesSection";
import {TabsSection} from "./Add-components/TabsSection";
import {TagsSection} from "./Add-components/TagsSection";
import {NumberSection} from "./Add-components/NumbersSection";

type Tab = "-" | "+"
function Add() {
    const [selected, setSelected]  =useState({
        tagIds:[] as number[],
        note:'',
        tab: "-" as Tab,
        amount :0
    });
    const onChange = (obj :Partial<typeof selected>) =>{
        setSelected({
            ...selected,
            ...obj
        })
    };
    return (
        <div>
            {selected.note}
            <Layout>
                <TagsSection selected={selected.tagIds} onChange={(tagIds)=> onChange({tagIds})}/>
                <NotesSection note={selected.note} onChange={(note)=> onChange({note})}/>
                <TabsSection tab={selected.tab} onChange={(tab)=> onChange({tab})}/>
                <NumberSection amount={selected.amount} onChange={(amount)=> onChange({amount})} onOk={()=>{}}/>
            </Layout>
        </div>
    );
}

export default Add;