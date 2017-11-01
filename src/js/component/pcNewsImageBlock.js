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
    const styleImage = {
        display:'block',
        width:this.props.imageWidth,
        height:'90px'
    };
    const styleH3 = {
        width:this.props.imageWidth,
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
    };
    const{news} = this.state;
    const newsList = news.length?
    news.map((newsItem,index)=>(
      <div key={index} className='imageblock'>
        <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
          <div className='custom-image'>
            <img alt='' src={newsItem.thumbnail_pic_s} style={styleImage} />
          </div>
          <div className='custom-card'>
            <h3 style={styleH3}>{newsItem.title}</h3>
            <p style={styleH3}>{newsItem.author_name}</p>
          </div>
        </Link>
      </div>
    ))
    :
    '没有加载到新闻内容';
    return(
      <div className='topNewsList'>
        <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
          {newsList}
        </Card>
      </div>
    );
  }
}
