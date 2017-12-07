import React from 'react';
import ReactDom from 'react-dom';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    Modal,
    CheckBox
} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import MobileHeader from './mobileHeader'
import MobileFooter from './mobileFooter'
import {Row, Col, BackTop} from 'antd';
// import {Row,Col} from 'antd/lib/grid';
export default class MobileUserCenter extends React.Component {
    render() {
        return (
            <div>
            < MobileHeader />
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab='我的收藏列表' key='1'></TabPane>
                            < TabPane tab='我的评论列表' key='2'></TabPane>
                            < TabPane tab='头像设置' key='3'></TabPane>
                        </Tabs>
                    </Col>
                </Row>
                < MobileFooter />
            </div>
        )
    }
}