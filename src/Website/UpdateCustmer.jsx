import {doc,updateDoc} from 'firebase/firestore';
import { db } from "../Firebase/Firebase";
import React, { useEffect, useState } from 'react';
import { UserOutlined ,PhoneOutlined} from '@ant-design/icons';
import { Form, Input, Button, message} from 'antd';
import { useNavigate } from 'react-router-dom';

export default function UpdateCustmer({idr,nameu}){

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [gender,setGender] = useState( "");
    const [numberphone,setNumberphone] = useState("");

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
                style={{color:"black"}}
                value={year_1}
                onChange={(e)=>setYear_1(e.target.value)}
                className="input1" placeholder="سنة"       />
                <Input
                style={{color:"black"}}
                value={day_1}
                onChange={(e)=>setDay_1(e.target.value)}
                className="input1" placeholder="يوم"   min={1} max={32}     />
                <Input
                style={{color:"black"}} 
                value={mounth_1}
                onChange={(e)=>setMounth_1(e.target.value)}
                className="input1" placeholder="شهر"  min={1} max={12}   />
                </div>
            </div>
            <div className="input">
                <span>نهاية الاشتراك</span>
                <div>
                <Input
                style={{color:"black"}}
                value={year_2}
                onChange={(e)=>setYear_2(e.target.value)}
                className="input1" placeholder="سنة"   min={2000} max={100000}     />
                <Input
                style={{color:"black"}}
                value={day_2}
                onChange={(e)=>setDay_2(e.target.value)}
                className="input1" placeholder="يوم"   min={1} max={32}     />
                <Input
                style={{color:"black"}} 
                value={mounth_2}
                onChange={(e)=>setMounth_2(e.target.value)}
                className="input1" placeholder="شهر"  min={1} max={12}   />
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