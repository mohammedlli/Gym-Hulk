import { Tabs } from "antd";
import MaleFilter from "./MaleFilter";
import { useState } from "react";
import ShowMaleCustmerEnd from "./ShowMaleCustmerEnd";
export default function TabsMale(){
    const [end , setEnd] = useState(true);
    const model =()=>{
        setEnd(!end);
    }
    console.log(end);
    return(<>
        <div className="tital-subsicraib">جميع المشتركين</div>
        <Tabs
        defaultActiveKey="5 " 
        centered
        onClick={model}
        items={[
            {label:"اشتراك فعال",key:"1",children: <ShowMaleCustmerEnd/>},
                {label:"",key:"2"},
                {label:"اشتراك نافذ",key:"3",children: <MaleFilter/>},
        ]}
        />
    </>)
}