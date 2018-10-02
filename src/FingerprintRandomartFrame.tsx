import * as React from 'react';
import RandomArtRaw from './RandomArtRaw';
import { fingerprintRandomartFrame } from './fingerprint-randomart';

export interface Props {
	digest: string;
	tick: number;
}

export default class FingerprintRandomartFrame extends React.Component<Props> {
	render () {
		const { tick, digest } = this.props;
		const { retval, x, y } = fingerprintRandomartFrame(tick, digest);
		return (
			<RandomArtRaw
				raw={retval}
				highlight={true}
				x={x}
				y={y}
			/>
		);
	}
}
