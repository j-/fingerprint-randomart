import * as React from 'react';
import ToggleAnimation from './ToggleAnimation';
import AnimationActions from '../containers/AnimationActions';

const Animation: React.StatelessComponent = () => (
	<div className="Animation">
		<ToggleAnimation />
		<AnimationActions />
	</div>
);

export default Animation;
