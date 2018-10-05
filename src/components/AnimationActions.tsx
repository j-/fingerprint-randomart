import * as React from 'react';
import ButtonPlayPause from '../containers/ButtonPlayPause';
import ButtonSpeedFast from '../containers/ButtonSpeedFast';
import ButtonSpeedNormal from '../containers/ButtonSpeedNormal';
import ButtonSpeedSlow from '../containers/ButtonSpeedSlow';
import ButtonTickMinusOne from '../containers/ButtonTickMinusOne';
import ButtonTickPlusOne from '../containers/ButtonTickPlusOne';

const AnimationActions: React.StatelessComponent = () => (
	<div className="AnimationActions">
		<ButtonPlayPause />
		<ButtonSpeedFast />
		<ButtonSpeedNormal />
		<ButtonSpeedSlow />
		<ButtonTickMinusOne />
		<ButtonTickPlusOne />
	</div>
);

export default AnimationActions;
