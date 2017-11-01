 import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PcNewsBlock from './pcNewsBlock';
import PcNewsImageBlock from './pcNewsImageBlock';
const TabPane = Tabs.TabPane;

export default class PcNewsContainer extends React.Component{
  render(){
    const settings = {
      dots:true,//显示面板指示点
      infinite:true,
     speed:1000,//速度
     slidesToShow:1,//从哪一张显示
      autoplay:true//自动播放
    };
    //一共分为24块，左右两侧各占一块
    return(
      <div>
        <Row>

          <Col span={2}></Col>
          <Col span={20} className='container'>
            <div className='leftContainer'>
              <div className='carousel'>
                <Carousel {...settings}>
                  <div><img src='./src/img/1.jpg'/></div>
                  <div><img src='./src/img/2.jpg'/></div>
                  <div><img src='./src/img/3.jpg'/></div>
                  <div><img src='./src/img/4.jpg'/></div>
                  <div><img src='./src/img/5.jpg'/></div>
                </Carousel>
              </div>
              <PcNewsImageBlock count={6} type='guoji' width='400px' cartTitle='国际头条' imageWidth='112px'>
              </PcNewsImageBlock>
            </div>
            <Tabs className='tabs_news'>
              <TabPane tab='头条新闻' key='1'>
                <PcNewsBlock count={22} type='top' width="100%" bordered='false'></PcNewsBlock>
              </TabPane>
              <TabPane tab='社会' key='2'>
                <PcNewsBlock count={22} type='shehui' width="100%" bordered='false'></PcNewsBlock>
              </TabPane>
              <TabPane tab='国内' key='3'>
                <PcNewsBlock count={22} type='guonei' width="100%" bordered='false'></PcNewsBlock>
              </TabPane>
              <TabPane tab='国际' key='4'>
                <PcNewsBlock count={22} type='guoji' width="100%" bordered='false'></PcNewsBlock>
              </TabPane>
              <TabPane tab='娱乐' key='5'>
                <PcNewsBlock count={22} type='yule' width="100%" bordered='false'></PcNewsBlock>
              </TabPane>
              <TabPane tab='体育' key='6'>
                <PcNewsBlock count={22} type='tiyu' width="100%" bordered='false'></PcNewsBlock>
              </TabPane>
            </Tabs>
            <div className='clearfix'>
            <PcNewsImageBlock count={16} type='guonei' width='100%' cartTitle='国内' imageWidth='125px'>
            </PcNewsImageBlock>
            <PcNewsImageBlock count={8} type='yule' width='100%' cartTitle='娱乐' imageWidth='125px'>
            </PcNewsImageBlock>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
