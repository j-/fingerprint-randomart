import { Middleware, Dispatch } from 'redux';
import { ActionTickClock, isActionSetPaused, tick, isActionSetTickDelay } from './actions';
import { RootReducerState, getTickDelay } from '.';

let interval: NodeJS.Timer;
let callback: () => void;

export const clock: Middleware<void, RootReducerState, Dispatch<ActionTickClock>> = (store) => (next) => (action) => {
	if (isActionSetPaused(action)) {
		if (action.data.paused) {
			clearInterval(interval);
		} else {
			callback = () => {
				next(tick());
			};
			const delay = getTickDelay(store.getState());
			interval = setInterval(callback, delay);
		}
		return next(action);
	}

	if (isActionSetTickDelay(action)) {
		clearInterval(interval);
		const result = next(action);
		const delay = getTickDelay(store.getState());
		interval = setInterval(callback, delay);
		return result;
	}

	return next(action);
};
