import * as React from 'react';
import AnimationActions from './AnimationActions';
import FingerprintRandomart from '../containers/FingerprintRandomartAnimated';
import AllDirections from './AllDirections';

const App: React.StatelessComponent = () => (
	<div className="App">
		<AnimationActions />
		<FingerprintRandomart />
		<AllDirections />
	</div>
);

export default App;
