import * as React from 'react';
import ButtonPlayPause from '../containers/ButtonPlayPause';
import ButtonSpeedFast from '../containers/ButtonSpeedFast';
import ButtonSpeedNormal from '../containers/ButtonSpeedNormal';
import ButtonSpeedSlow from '../containers/ButtonSpeedSlow';

const AnimationActions: React.StatelessComponent = () => (
	<div className="AnimationActions">
		<ButtonPlayPause />
		<ButtonSpeedFast />
		<ButtonSpeedNormal />
		<ButtonSpeedSlow />
	</div>
);

export default AnimationActions;
