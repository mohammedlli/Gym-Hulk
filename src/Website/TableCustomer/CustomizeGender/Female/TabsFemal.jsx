import { Tabs } from "antd";
import FemaleFilter from "./FemaleFilter";
import ShowFemalCustmer from "./ShowFemalCustomer";
export default function TabsFemal(){
    return(<>
        <div className="tital-subsicraib">جميع  المشتركات</div>
        <Tabs
        defaultActiveKey="5 " 
        centered
        items={[
            {label:"اشتراك فعال",key:"1",children: <ShowFemalCustmer/>},
                {label:"",key:"2"},
                {label:"اشتراك نافذ",key:"3",children: <FemaleFilter/>},
        ]}
        />
    </>)
}