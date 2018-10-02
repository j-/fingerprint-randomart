import * as React from 'react';

export interface Props {
	x: 1 | -1;
	y: 1 | -1;
}

const NORTH_WEST_ARROW = 0x2196;
const NORTH_EAST_ARROW = 0x2197;
const SOUTH_EAST_ARROW = 0x2198;
const SOUTH_WEST_ARROW = 0x2199;

const getDirectionCharCode = (x: 1 | -1, y: 1 | -1) => (
	y === -1 ? (x === -1 ? NORTH_WEST_ARROW : NORTH_EAST_ARROW) :
	           (x === -1 ? SOUTH_WEST_ARROW : SOUTH_EAST_ARROW)
);

const Direction: React.StatelessComponent<Props> = ({ x, y }) => (
	<span className="Direction">
		{String.fromCharCode(getDirectionCharCode(x, y))}
	</span>
);

export default Direction;
