import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class PcNewsImageBlock extends React.Component{
  constructor(){//构造函数
    super();
    this.state = {
      news:''
    };
  };
  componentWillMount(){//生命周期
    //生命周期函数
    var myFetchOptions = {//数据请求方式
      method:'GET'
    };
    //请求接口
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
    .then(response=>response.json())
    .then(json=>this.setState({news:json}));
  }
  render(){
    const{news} = this.state;
    const newsList = news.length?
    news.map((newsItem,index)=>(
    ))
    return(
      <div className='topNewsList'>
        <Card title={this.props.cartTitle} bordered={true}>
          
        </Card>
      </div>
    );
  }
}
