import { Middleware, Dispatch } from 'redux';
import { ActionTickClock, isActionSetPaused, tick } from './actions';

let interval: NodeJS.Timer;

export const clock: Middleware<void, void, Dispatch<ActionTickClock>> = () => (next) => (action) => {
	if (isActionSetPaused(action)) {
		if (action.data.paused) {
			clearInterval(interval);
		} else {
			interval = setInterval(() => {
				next(tick());
			}, 500);
		}
	}
	return next(action);
};
