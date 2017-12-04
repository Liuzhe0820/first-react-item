import React from 'react';
import {Row, Col,BackTop} from 'antd';
import PCHeader from './pcHeader';
import PCFooter from './pcFooter';
import PcNewsImageBlock from './pcNewsImageBlock';
import CommonComment from './common_comment';
export default class PcNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            'newsItem': ''
        };
    };
    //生命周期  页面加载完成
    componentDidMount() {

        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + '-React News|React驱动的新闻平台';
            })
    }
    createMarkup() {
        //创建标记
        return {__html: this.state.newsItem.pagecontent}
    };
    //dangerouslySetInnerHTML  把原始的HTML加载到页面
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className='container'>
                        <div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <CommonComment uniquekey={this.props.params.uniquekey}></CommonComment>
                    </Col>
                    <Col span={6}>
                        <PcNewsImageBlock count={40} width='100%' cardTitle='相关新闻' type='top' imageWidth='142px'></PcNewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop></BackTop>
            </div>
        );
    };
};