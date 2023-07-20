import { useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc} from 'firebase/firestore';
import React from 'react';
import { UserOutlined ,PhoneOutlined} from '@ant-design/icons';
import { Form, Input, Button,Select, message} from 'antd';
import {useNavigate } from "react-router-dom";


export default function AddCostmer(){
    const navigate = useNavigate();

    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [numberphone,setNumberphone] = useState('');


    const [day_1,setDay_1] = useState('');
    const [mounth_1,setMounth_1] = useState('');
    const [year_1,setYear_1] = useState('');

    const [day_2,setDay_2] = useState('');
    const [mounth_2,setMounth_2] = useState('');
    const [year_2,setYear_2] = useState('');
    const [loading, setLoding] = useState(false);
    const [err, setErr] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

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
            gender,
        });
        messageApi.open({
            type: 'success',
            content: 'تم اضافه مشترك جديد',
            className: 'custom-class',
        });
        setLoding(true);
        setErr("تم اضافة مشترك جديد بنجاح");
        navigate("/2");
        } catch (err) {
        console.log(err);
        setLoding(true);
        setErr("خطاء في التسجيل");
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

    return(<>
        {contextHolder}
    <div  className="tital-subsicraib">انشاء اشتراك  </div>
<div className="container-form">
<div className="inside-container-form" >
    <Form className="form" onSubmitCapture={handleSubmit}>
        <div>
            <Input style={{boxShadow:' 0 0 4px -3px'}} className="input" value={name}
            onChange={(e)=>setName(e.target.value)}
            size="large" placeholder="الاسم الثلاثي" prefix={<UserOutlined />} />
            <Input style={{boxShadow:' 0 0 4px -3px'}} className="input" value={numberphone}
            onChange={(e)=>setNumberphone(e.target.value)}
            size="large" placeholder="رقم الهاتف" prefix={<PhoneOutlined />} />
                    <Select
                    className="input"
                    defaultValue="الجنس"
                    onChange={handleChange}
                    style={{
                    width: 100,
                    boxShadow:' 0 0 4px -3px'
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
    
    </div>
    </div>
    </>
    );
};
