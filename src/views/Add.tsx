import Layout from "../components/Layout";
import React from "react";
import {NotesSection} from "./Add-components/NotesSection";
import {TabsSection} from "./Add-components/TabsSection";
import {TagsSection} from "./Add-components/TagsSection";
import {NumberSection} from "./Add-components/NumbersSection";

function Add() {
    return (
        <div>
            <Layout>
                <TagsSection />
                <NotesSection />
                <TabsSection />
                <NumberSection />
            </Layout>
        </div>
    );
}

export default Add;