import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Button } from 'antd';
import PCIndex from './component/pcIndex.js';
import PcNewsDetails from './component/pcNewsDetails';
import MobileIndex from './component/mobileIndex.js';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
  render () {
    return (
      // 这里替换了之前的 Index，变成了程序的入口
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path='/' component={PCIndex}></Route>
            <Route path='/details/:uniquekey' component={PcNewsDetails}></Route>
          </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'))
