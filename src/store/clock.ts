import { Middleware, Dispatch } from 'redux';
import { ActionTickClock, tick, isActionSetTickDelay } from './actions';
import { RootReducerState, getTickDelay, isAnimationPaused, isAnimationEnabled } from '.';

let interval: NodeJS.Timer;
let callback: () => void;

export const clock: Middleware<void, RootReducerState, Dispatch<ActionTickClock>> = (store) => (next) => (action) => {
	const before = store.getState();
	next(action);
	const after = store.getState();
	const delay = getTickDelay(after);
	const isPausedBefore = isAnimationPaused(before);
	const isPausedAfter = isAnimationPaused(after);
	const isAnimatingBefore = isAnimationEnabled(before);
	const isAnimatingAfter = isAnimationEnabled(after);

	// Action has paused the animation
	if (!isPausedBefore && isPausedAfter || isAnimatingBefore !== isAnimatingAfter) {
		clearInterval(interval);
	}

	// Action has resumed the animation
	if (isPausedBefore && !isPausedAfter && isAnimatingAfter) {
		callback = () => {
			next(tick());
		};
		interval = setInterval(callback, delay);
	}

	// Action has changed the animation speed while animating
	if (isActionSetTickDelay(action) && !isPausedAfter) {
		clearInterval(interval);
		interval = setInterval(callback, delay);
	}
};
