import React from 'react';
import PCHeader from './pcHeader.js';
import PCFooter from './pcFooter.js';
import PcNewsContainer from './pcNewsContainer.js';

export default class PCIndex extends React.Component {
	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<PcNewsContainer></PcNewsContainer>
				<PCFooter></PCFooter>
			</div>
		);
	};
}
