import * as React from 'react';
import DirectionSingle from './DirectionSingle';

export interface Props {
	input: number;
}

const DirectionDouble: React.StatelessComponent<Props> = ({ input }) => (
	<span className="DirectionDouble">
		<DirectionSingle input={input} />
		<DirectionSingle input={input >> 2} />
	</span>
);

export default DirectionDouble;
