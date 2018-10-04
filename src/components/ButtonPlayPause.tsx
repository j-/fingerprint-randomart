import * as React from 'react';
import ButtonPlay from './ButtonPlay';
import ButtonPause from './ButtonPause';

export interface Props {
	isPaused: boolean;
	onClickPlay: () => void;
	onClickPause: () => void;
}

const ButtonPlayPause: React.StatelessComponent<Props> = ({ isPaused, onClickPause, onClickPlay }) => (
	isPaused ?
		<ButtonPlay onClick={onClickPlay} /> :
		<ButtonPause onClick={onClickPause} />
);

export default ButtonPlayPause;
