import * as React from 'react';
import Animation from './Animation';
import FingerprintRandomart from '../containers/FingerprintRandomart';
import AllDirections from './AllDirections';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Animation />
		<FingerprintRandomart />
		<AllDirections />
	</div>
);

export default App;
