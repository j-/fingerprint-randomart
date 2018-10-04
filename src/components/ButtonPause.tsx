import * as React from 'react';
import IconPause from './IconPause';

export interface Props {
	onClick: () => void;
}

const ButtonPause: React.StatelessComponent<Props> = ({ onClick }) => (
	<button
		className="ButtonPause"
		type="button"
		onClick={onClick}
	>
		<IconPause />
	</button>
);

export default ButtonPause;
