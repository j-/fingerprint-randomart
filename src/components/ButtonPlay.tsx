import * as React from 'react';
import IconPlay from './IconPlay';

export interface Props {
	onClick: () => void;
}

const ButtonPlay: React.StatelessComponent<Props> = ({ onClick }) => (
	<button
		className="ButtonPlay"
		type="button"
		onClick={onClick}
	>
		<IconPlay />
	</button>
);

export default ButtonPlay;
