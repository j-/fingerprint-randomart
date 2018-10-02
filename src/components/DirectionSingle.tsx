import * as React from 'react';
import Direction from './Direction';

export interface Props {
	input: number;
}

const DirectionSingle: React.StatelessComponent<Props> = ({ input }) => (
	<span className="DirectionSingle">
		<Direction
			x={input & 1 ? 1 : -1}
			y={input & 2 ? 1 : -1}
		/>
	</span>
);

export default DirectionSingle;
