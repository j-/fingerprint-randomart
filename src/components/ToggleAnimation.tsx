import * as React from 'react';
import CheckboxAnimating from '../containers/CheckboxAnimating';

const ToggleAnimation: React.StatelessComponent = () => (
	<div className="ToggleAnimation">
		<CheckboxAnimating id="ToggleAnimation-checkbox-animating" />
		<label htmlFor="ToggleAnimation-checkbox-animating">
			Animate
		</label>
	</div>
);

export default ToggleAnimation;
