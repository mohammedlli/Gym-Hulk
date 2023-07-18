import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    } from '@ant-design/icons';
    import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
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
    getItem("الرئيسية", '/', <PieChartOutlined />),
    getItem("اشتراك جديد", '/1', <DesktopOutlined />),
    getItem("المشتركين", 'sub1',<TeamOutlined />, [
        getItem('رجال', '2'),
        getItem('نساء', '3'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
    ];
    const MainDashbord = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout
        style={{
            minHeight: '100vh',
        }}
        >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" 
            onClick={({key})=>{
                if(key=== "singout"){

                }else{
                    navigate(key);
                }
            }}
            items={items} />
        </Sider>
        <Layout>
            <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                fontSize:"40px",
                fontWeight:"600",
                color:"#1677FF",
                display:"flex",
                justifyContent:"center"
            }}
            >HULK</Header>
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
            <Breadcrumb.Item>GYM</Breadcrumb.Item>
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
            }}
            >
            Created by Mohammedlli ©2023 to HULK GYM
            </Footer>
        </Layout>
        </Layout>
    );
};
export default MainDashbord;