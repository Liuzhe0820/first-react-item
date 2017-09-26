import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {Button} from 'antd';
import PCIndex from './component/pcIndex.js';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的 Index，变成了程序的入口
      <div>
      <PCIndex></PCIndex>
      </div>
    );
  };
};

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
