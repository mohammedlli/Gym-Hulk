import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc,query,onSnapshot} from 'firebase/firestore';
import React from 'react';
import { UserOutlined ,PhoneOutlined} from '@ant-design/icons';
import { Form, Input, Button,InputNumber,Select, Space } from 'antd';
import {PauseOutlined,CaretRightOutlined } from '@ant-design/icons';




export default function AddCostmer(){
    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [numberphone,setNumberphone] = useState('');
    const [day_1,setDay_1] = useState('');
    const [mounth_1,setMounth_1] = useState('');
    const [year_1,setYear_1] = useState('');

    const [day_2,setDay_2] = useState('');
    const [mounth_2,setMounth_2] = useState('');
    const [year_2,setYear_2] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await addDoc(collection(db,'costemer'), {
            name,
            numberphone,
            day_1,
            mounth_1,
            year_1,
            day_2,
            mounth_2,
            year_2,
        });
        } catch (err) {
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
    const handleChange = (value) => {
        setGender(value);
    };

    return(
<div className="container-form">
<div className="inside-container-form" >
    <Form className="form" onSubmitCapture={handleSubmit}>
        <div>
            <Input className="input" value={name}
            onChange={(e)=>setName(e.target.value)}
            size="large" placeholder="الاسم الثلاثي" prefix={<UserOutlined />} />
            <Input className="input" value={numberphone}
            onChange={(e)=>setNumberphone(e.target.value)}
            size="large" placeholder="رقم الهاتف" prefix={<PhoneOutlined />} />
                    <Select
                    
                    className="input"
                    defaultValue="الجنس"
                    onChange={handleChange}
                    style={{
                    width: 100,
                    }}
                    options={[
                        {value:"ذكر"},
                        {value:"انثى"}
                    ]}
                    />
        </div>
        <div>
            <div className="input">
                <span >بدأ الاشتراك</span>
                <div>
                <InputNumber
                value={year_1}
                onChange={(e)=>setYear_1(e.target.value)}
                className="input1" placeholder="سنة"       />
                <InputNumber
                value={day_1}
                onChange={(e)=>setDay_1(e.target.value)}
                className="input1" placeholder="يوم"   min={1} max={32}     />
                <InputNumber 
                value={mounth_1}
                onChange={(e)=>setMounth_1(e.target.value)}
                className="input1" placeholder="شهر"  min={1} max={12}   />
                </div>
            </div>
            <div className="input">
                <span>نهاية الاشتراك</span>
                <div>
                <InputNumber
                value={year_2}
                onChange={(e)=>setYear_2(e.target.value)}
                className="input1" placeholder="سنة"   min={2000} max={100000}     />
                <InputNumber
                value={day_2}
                onChange={(e)=>setDay_2(e.target.value)}
                className="input1" placeholder="يوم"   min={1} max={32}     />
                <InputNumber 
                value={mounth_2}
                onChange={(e)=>setMounth_2(e.target.value)}
                className="input1" placeholder="شهر"  min={1} max={12}   />
                </div>
            </div>
    </div>
    <Button className="input" type="primary" >
            اشتراك
        </Button>
    </Form>
    
    </div>
    </div>
    );
};
