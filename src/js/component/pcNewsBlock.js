import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class PcNewsBlock extends React.Component{
  constructor(){
    super();
    this.state = {
      news:''
    }
  };
  componentWillMount(){
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
    const {news} = this.state;
    const newsList = news.length?
    news.map((newsItem,index)=>(
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
          {newsItem.title}
        </Link>
      </li>
    ))
    :
    '没有加载到任何新闻'
    return(
        <div className='topNewsList'>
          <Card>
            <ul>
              {newsList}
            </ul>
          </Card>
        </div>
    );
  };
};
