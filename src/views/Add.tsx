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
                <TabsSection>
                    <ul>
                        <li className="selected">支出</li>
                        <li>收入</li>
                    </ul>
                </TabsSection>
                <NumberSection>
                    <div className="output">100</div>
                    <div className="numbers">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>删除</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>清空</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button className="OK">确定</button>
                        <button>0</button>
                        <button>.</button>
                        <button>%</button>
                    </div>
                </NumberSection>
            </Layout>
        </div>
    );
}

export default Add;