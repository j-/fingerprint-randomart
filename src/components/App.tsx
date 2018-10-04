import * as React from 'react';
import FingerprintRandomart from '../containers/FingerprintRandomartAnimated';
import AllDirections from './AllDirections';
import ButtonPlayPause from '../containers/ButtonPlayPause';

const App: React.StatelessComponent = () => (
	<div className="App">
		<ButtonPlayPause />
		<FingerprintRandomart />
		<AllDirections />
	</div>
);

export default App;
