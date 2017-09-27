import React from 'react';
import PCHeader from './pcHeader.js';
import PCFooter from './pcFooter.js';

export default class PCIndex extends React.Component {
	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<PCFooter></PCFooter>
			</div>
		);
	};
}
