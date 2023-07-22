import { useRef, useState } from "react";
import React from 'react';
import { UserOutlined ,LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Spin, Alert} from 'antd';
import {useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Update(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateUserPassword, updateUserEmail } = useAuth();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
        function handleSubmit(e) {
        e.preventDefault();
        const promises = [];
        setLoading(true);
        setError(false);
    
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateUserEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updateUserPassword(passwordRef.current.value));
        }
    
        Promise.all(promises)
            .then(() => {
            navigate("/");
            })
            .catch(() => {
            setError(true);
            })
            .finally(() => {
            setLoading(false);
            });
        }
    
    return(<>
        {loading&&<Spin className="spinner-container-submit" size="large" />}
<div className="container-form">
<div className="inside-container-form" >
    <Form className="form" onSubmitCapture={handleSubmit}>
    <div  className="form-title"> تعديل  حساب  </div>
        <div>
            <Input 
            style={{  boxShadow: "1px 1px 3px #cbced1, -1px -1px 3px #fff"}} 
            className="input"
            id="email" 
            type="email" 
            ref={emailRef} 
            required 
            size="large" 
            placeholder="البريد الالكتروني" 
            defaultValue={currentUser?.email}
            prefix={<UserOutlined />} />

            <Input 
            style={{  boxShadow: "1px 1px 3px #cbced1, -1px -1px 3px #fff"}} 
            className="input"
            id="password"
            ref={passwordRef}
            required
            type="password"
            size="large" 
            placeholder="الرقم السري" 
            prefix={<LockOutlined />} />

            <Input 
            style={{  boxShadow: "1px 1px 3px #cbced1, -1px -1px 3px #fff"}} 
            className="input" 
            id="password"
            ref={passwordConfirmRef}
            required
            type="password"
            size="large" 
            placeholder=" اعد كتابه الرقم السري" 
            prefix={<LockOutlined />} />
            {error&&<Alert className="err" style={{margin:"10px 0 0 0",borderRadius:"9px"}}  message="خطاء في انشاء حساب" type="error" showIcon />}
        </div>
        
    <Button htmlType="submit" className="m-10" type="primary" >
            تعديل
        </Button>
    </Form>
    
    </div>
    </div>
    </>
    );
};

