import * as React from 'react';
import { FLDSIZE_X } from './fingerprint-randomart';

export interface Props {
	raw: string;
	highlight?: boolean;
	x?: number;
	y?: number;
}

export default class RandomArtRaw extends React.Component<Props> {
	render () {
		const { raw, highlight, x, y } = this.props;
		if (highlight && x !== undefined && y !== undefined) {
			const i = y * (FLDSIZE_X + 1) + x; // + 1 for '\n'
			const before = raw.substring(0, i);
			const e = raw[i];
			const after = raw.substring(i + 1);
			return <pre>{before}<strong>{e}</strong>{after}</pre>;
		} else {
			return <pre>{raw}</pre>;
		}
	}
}
