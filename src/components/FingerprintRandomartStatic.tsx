import * as React from 'react';
import RandomArtRaw from './RandomArtRaw';
import { fingerprintRandomart } from '../fingerprint-randomart';

export interface Props {
	digest: string;
}

export default class FingerprintRandomartFrame extends React.Component<Props> {
	render () {
		const { digest } = this.props;
		const retval = fingerprintRandomart(digest);
		return (
			<RandomArtRaw
				raw={retval}
				highlight={false}
			/>
		);
	}
}
