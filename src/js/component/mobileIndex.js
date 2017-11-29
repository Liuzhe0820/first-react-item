import React from 'react';
import MobileHeader from './mobileHeader.js';
import MobileFooter from './MobileFooter.js';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  Carousel
} from 'antd';
import MobileList from './mobileList.js';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
  render() {
    const settings = {
      dots: true, //显示面板指示点
      infinite: true,
      speed: 1000, //速度
      slidesToShow: 1, //从哪一张显示
      autoplay: true //自动播放
    };
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab='头条' key='1'>
             <div className='carousel'>
                <Carousel {...settings}>
                  <div><img src='./src/img/1.jpg'/></div>
                  <div><img src='./src/img/2.jpg'/></div>
                  <div><img src='./src/img/3.jpg'/></div>
                  <div><img src='./src/img/4.jpg'/></div>
                  <div><img src='./src/img/5.jpg'/></div>
                </Carousel>
              </div>
            <MobileList count={20} type='top'></MobileList>
          </TabPane>
          <TabPane tab='社会' key='2'>
            <MobileList count={20} type='shehui'></MobileList>
          </TabPane>
          <TabPane tab='国内' key='3'>
            <MobileList count={20} type='guonei'></MobileList>
          </TabPane>
          <TabPane tab='国际' key='4'>
            <MobileList count={20} type='guoji'></MobileList>
          </TabPane>
          <TabPane tab='娱乐' key='5'>
            <MobileList count={20} type='yule'></MobileList>
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
