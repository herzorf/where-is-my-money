import Layout from "../components/Layout";
import React, {useState} from "react";
import {NotesSection} from "./Add-components/NotesSection";
import {TabsSection} from "./Add-components/TabsSection";
import {TagsSection} from "./Add-components/TagsSection";
import {NumberSection} from "./Add-components/NumbersSection";

type Tab = "-" | "+"
function Add() {
    const [selected, setSelected]  =useState({
        tags:[] as string[],
        note:'',
        tab: "-" as Tab,
        amount :0
    });
    return (
        <div>
            <Layout>
                <TagsSection selected={selected.tags} onChange={(tags)=>{
                    setSelected({
                        ...selected,
                        tags:tags
                    })
                }} />
                <NotesSection note={selected.note} onChange={(note)=>{
                    setSelected({
                        ...selected,
                        note:note
                    })
                }}/>
                <TabsSection tab={selected.tab} onChange={(tab)=>{
                    setSelected({
                        ...selected,
                        tab:tab
                    })
                }}/>
                <NumberSection amount={selected.amount} onChange={(amount)=>{
                    setSelected({
                        ...selected,
                        amount:amount
                    })
                }} onOk={()=>{}}/>
            </Layout>
        </div>
    );
}

export default Add;