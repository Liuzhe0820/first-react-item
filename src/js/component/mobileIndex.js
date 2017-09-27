import React from 'react';
import MobileHeader from './mobileHeader.js';
import MobileFooter from './MobileFooter.js';
export default class MobileIndex extends React.Component {
  render(){
    return (
      <div>
        <MobileHeader></MobileHeader>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
