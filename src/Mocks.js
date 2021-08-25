import React, {Fragment} from "react";
import {Component} from "react";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import Logo from "./css/styles.css"

const {Header, Content, Footer} = Layout;

class Mocks extends Component {

    render() {
        return (
            <Fragment>
                <Layout className="layout">

                    <Header>
                        <div className="Logo"/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} onClick={this.menuClicked.bind(this)}>
                            <Menu.Item key="home">首页</Menu.Item>
                            <Menu.Item key="myApp">我的应用</Menu.Item>
                            <Menu.Item key="in">快速接入</Menu.Item>
                            <Menu.Item key="help">帮助中心</Menu.Item>
                        </Menu>
                    </Header>

                    <Content style={{padding: '0 50px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">Content</div>
                    </Content>

                    <Footer style={{textAlign: 'center'}}>Mocks ©2021 by Guize</Footer>

                </Layout>
            </Fragment>
        );
    }

    menuClicked(e) {
        console.log(e)
    }

}


export default Mocks;