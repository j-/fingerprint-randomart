import * as React from 'react';
import { fingerprintRandomartFrame } from './fingerprint-randomart';

export interface Props {
	digest: string;
}

interface State {
	tick: number;
}

export default class FingerprintRandomartAnimated extends React.Component<Props, State> {
	private interval: NodeJS.Timer;
	private delay = 100;
	private ticks = (
		64 // Digest length
		* 2 // Number of instructions
		+ 100 // Pause at end
	);

	state: State = {
		tick: 0,
	}

	componentDidMount () {
		this.interval = setInterval(this.tick, this.delay);
	}

	componentWillUnmount () {
		clearInterval(this.interval);
		delete this.interval;
	}

	render () {
		const art = fingerprintRandomartFrame(
			this.state.tick,
			this.props.digest,
		);
		return <pre>{art}</pre>;
	}

	private tick = () => {
		this.setState((state) => ({
			tick: (state.tick + 1) % this.ticks,
		}));
	}
}
