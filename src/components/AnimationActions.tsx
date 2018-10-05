import * as React from 'react';
import ButtonPlayPause from '../containers/ButtonPlayPause';
import ButtonSpeedFast from '../containers/ButtonSpeedFast';
import ButtonSpeedNormal from '../containers/ButtonSpeedNormal';
import ButtonSpeedSlow from '../containers/ButtonSpeedSlow';
import ButtonFrameNext from '../containers/ButtonFrameNext';
import ButtonFramePrev from '../containers/ButtonFramePrev';

const AnimationActions: React.StatelessComponent = () => (
	<div className="AnimationActions">
		<ButtonPlayPause />
		<ButtonSpeedFast />
		<ButtonSpeedNormal />
		<ButtonSpeedSlow />
		<ButtonFrameNext />
		<ButtonFramePrev />
	</div>
);

export default AnimationActions;
