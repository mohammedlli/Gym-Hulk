import { useRef, useState } from "react";
import React from 'react';
import {useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert, Spin } from "antd";


export default function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/";
    async function handleSubmit(e) {
    e.preventDefault();
    try {
        setError(false);
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate(redirectPath);
        } 
        catch {
        setError(true);
        }
        setLoading(false);
    }
    return(<>
            {loading&&<Spin className="spinner-container-submit" size="large" />}
        <div class="container">
        <div class="card">
            <div class="card_logo"><div>M</div></div>
            <div class="card_title">Hulk<span style={{color:"#0C49A6"}}> Gym</span></div>
            <div class="card_sub-title">تسجيل دخول</div>
            <form onSubmit={handleSubmit} class="card_form">
            <div class="fields">
                <div class="username">
                {/* <!-- email icon  --> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                >
                    <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>

                <input
                id="email" 
                type="email" 
                ref={emailRef} required
                class="pass-input"
                placeholder="البريد الالكتروني"
                />
                </div>
                <div class="password">
                {/* <!-- lock icon  --> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-lock"
                >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>

                <input
                    id="password"
                    ref={passwordRef}
                    required
                    type="password"
                    class="pass-input"
                    placeholder="الرقم السري"
                />
                </div>
                {error&&<Alert className="err"  message="خطاء في تسجيل الدخول" type="error" showIcon />}
            </div>
            <button class="btn">تسجيل دخول</button>
            </form>
        </div>
    </div>
    </>
    );
};
