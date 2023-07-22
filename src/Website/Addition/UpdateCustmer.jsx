import {doc,updateDoc} from 'firebase/firestore';
import { db } from "../../Firebase/Firebase";
import { useState } from 'react';
import { Form, Input, Button, message} from 'antd';

export default function UpdateCustmer({idr,nameu}){
    const [day_1,setDay_1] = useState('');
    const [mounth_1,setMounth_1] = useState('');
    const [year_1,setYear_1] = useState('');

    const [day_2,setDay_2] = useState('');
    const [mounth_2,setMounth_2] = useState('');
    const [year_2,setYear_2] = useState('');
    const [messageApi, contextHolder] = message.useMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        try {
        await updateDoc(doc(db, 'costemer',`${idr}`), {
            day_1,
            mounth_1,
            year_1,
            day_2,
            mounth_2,
            year_2,
        });
        messageApi.open({
            type: 'success',
            content: 'تم تجديد الاشتراك بنجاح',
            className: 'custom-class',
        });
        } catch (err) {
        alert(err);
        console.log(err);
        }
        
    };
    const options = [];
    options.push({
        value:    "ذكر",
    });
    options.push({
        value:    "انثى",
    });
    return(
        <>
                {contextHolder}
                <Form  onSubmitCapture={handleSubmit}>
                <h3 style={{color:"#1677FF"}}>تجديد الاشتراك</h3>
                <p style={{fontSize:"large"}}>{nameu}</p>
        <div>
            <div className="input">
                <span >بدأ الاشتراك</span>
                <div>
                    <Input
                    value={year_1}
                    onChange={(e)=>setYear_1(e.target.value)}
                    className="input-date" 
                    placeholder="السنة"       
                    />
                    <Input
                    value={day_1}
                    onChange={(e)=>setDay_1(e.target.value)}
                    className="input-date" 
                    placeholder="اليوم"  
                    />
                    <Input 
                    value={mounth_1}
                    onChange={(e)=>setMounth_1(e.target.value)}
                    className="input-date" 
                    placeholder="الشهر"
                    />
                </div>
            </div>
            <div className="input">
                <span>نهاية الاشتراك</span>
                <div>
                    <Input
                    value={year_2}
                    onChange={(e)=>setYear_2(e.target.value)}
                    className="input-date" 
                    placeholder="السنة"     
                    />
                    <Input
                    value={day_2}
                    onChange={(e)=>setDay_2(e.target.value)}
                    className="input-date" 
                    placeholder="اليوم"         
                    />
                    <Input 
                    value={mounth_2}
                    onChange={(e)=>setMounth_2(e.target.value)}
                    className="input-date" 
                    placeholder="الشهر" 
                    />
                </div>
            </div>
    </div>
        <Button htmlType="submit" className="input" type="primary" >
            اشتراك
        </Button>
    </Form>
        </>
    )
}