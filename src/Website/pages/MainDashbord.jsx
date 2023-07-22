import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    DesktopOutlined,
    SettingOutlined,
    UserAddOutlined,
    PlusCircleOutlined,
    TeamOutlined,
    GithubOutlined,
    LinkedinFilled ,
    LogoutOutlined,
    } from '@ant-design/icons';
    import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../Auth/context/AuthContext';
    const { Header, Content, Footer, Sider } = Layout;
    function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
        
    };
    }
    const items = [
    getItem("الصفحة الرئيسية", '1', <DesktopOutlined />),
    getItem("اشتراك جديد", '/addcuostmer', <PlusCircleOutlined />),
    getItem("المشتركين", '',<TeamOutlined />, [
        getItem('رجال', 'male'),
        getItem('نساء', 'femal'),
    ]),
    getItem('انشاء حساب', '/register', <UserAddOutlined />),
    getItem('تعديل الحساب', '/update', <SettingOutlined />),

    ];
    const MainDashbord = () => {
        const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    async function handleLogout() {
        try {
        await logout();
        navigate("/login");
        } catch {        }
    }
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout
        style={{
            minHeight: '100vh',
        }}
        >
        <Sider
        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" >
                HULK GYM
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
            onClick={({key})=>{
                if(key=== "1"){
                    navigate("/");
                }else{
                    navigate(key);
                }
            }}
            items={items}/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" 
            style={{marginTop:"50px"}}
            onClick={({key})=>{
                if(key=== "singout"){
                    handleLogout();
                }else{
                    navigate(key);
                }
            }}
            items={[
                {label:"تسجيل خروج",key:"singout",icon:<LogoutOutlined />}
            ]}/>
            </Sider>
        <Layout>
            <Header
            style={{
                padding: 0,
                background: "#EFEEEE",
                fontSize:"40px",
                fontWeight:"600",
                backgroundColor:"#EFEEEE",
                display:"flex",
                justifyContent:"center",
                boxShadow:"0px 0px 3px -1px inset",
            }}
            ><span style={{color:"#1677FF"}}>GYM</span>HULK</Header>
            <Content
            style={{
                margin: '0 16px',
            }}
            >
            <Breadcrumb
                style={{
                margin: '10px 0',
                fontSize:"large",
                fontWeight:"600",
                color:"wheat",
                display:"flex",
                justifyContent:"center"
                
                }}
            >
            <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                padding: 24,
                minHeight: 360,
                background:  "#F5F5F5",
                }}
            >
                <Outlet/>
            </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
                boxShadow:"0 0 2.5px -1px ",
            }}
            >
                <div style={{display:"flex", justifyContent:"space-around"}}>
                <div>
                <div>
                <a href='https://github.com/mohammedlli' style={{color:"black"}}>mohammedlli  <GithubOutlined /> </a> </div>
                <div> <a href='https://www.linkedin.com/in/mohammedahmed00/' style={{color:"black"}}>Linkedin  <LinkedinFilled /> 
                </a></div>
                </div>
            <div>Created by Mohammed Ahmed ©2023 to HULK GYM</div>
            </div>
            </Footer>
        </Layout>
        </Layout>
    );
};
export default MainDashbord;