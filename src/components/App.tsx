import * as React from 'react';
import FingerprintRandomart from '../containers/FingerprintRandomartAnimated';
import AllDirections from './AllDirections';
import ButtonPlayPause from '../containers/ButtonPlayPause';
import ButtonSpeedFast from '../containers/ButtonSpeedFast';
import ButtonSpeedNormal from '../containers/ButtonSpeedNormal';
import ButtonSpeedSlow from '../containers/ButtonSpeedSlow';

const App: React.StatelessComponent = () => (
	<div className="App">
		<ButtonPlayPause />

		<ButtonSpeedFast />
		<ButtonSpeedNormal />
		<ButtonSpeedSlow />

		<FingerprintRandomart />
		<AllDirections />
	</div>
);

export default App;
