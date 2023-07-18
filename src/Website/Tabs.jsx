import { Tabs } from "antd";
import MaleFilter from "./MaleFilter";
import { useState } from "react";
import ShowMaleCustmerEnd from "./ShowMaleCustmerEnd";
export default function TabsPage(){
    const [end , setEnd] = useState(true);
    const model =()=>{
        setEnd(!end);
    }
    console.log(end);
    return(<>
        <Tabs
        defaultActiveKey="5 " 
        centered
        onClick={model}
        items={[
            {label:"جميع المشتركين",key:"1",children: <ShowMaleCustmerEnd/>},
                {label:"",key:"2"},
                {label:"النافذ",key:"3",children: <MaleFilter/>},
        ]}
        />
    </>)
}