import * as React from 'react';
import DirectionDouble from './DirectionDouble';

const AllDirections: React.StatelessComponent = () => {
	const rows: JSX.Element[] = [];
	for (let i = 0; i < 0x10; i++) {
		rows.push(
			<tr key={i}>
				<td>{i.toString(16)}</td>
				<td><DirectionDouble input={i} /></td>
			</tr>
		);
	}
	return (
		<table className="AllDirections">
			<tbody>
				{rows}
			</tbody>
		</table>
	);
};

export default AllDirections;
