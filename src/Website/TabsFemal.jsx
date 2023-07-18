import { Tabs } from "antd";
import FemaleFilter from "./FemaleFilter";
import { useState } from "react";
import ShowFemalCustmer from "./ShowFemalCustomer";
export default function TabsFemal(){
    return(<>
        <Tabs
        defaultActiveKey="5 " 
        centered
        items={[
            {label:"جميع المشتركين",key:"1",children: <ShowFemalCustmer/>},
                {label:"",key:"2"},
                {label:"النافذ",key:"3",children: <FemaleFilter/>},
        ]}
        />
    </>)
}