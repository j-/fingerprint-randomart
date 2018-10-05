import { Reducer } from 'redux';
import {  } from '../fingerprint-randomart';
import {
	isActionSetAnimating,
	isActionSetPaused,
	isActionSetDigest,
	isActionTickClock,
	isActionSetTickDelay,
	isActionIncrementTicks,
	isActionToggleAnimating,
} from './actions';

export interface RootReducerState {
	isAnimating: boolean;
	isPaused: boolean;
	digest: string;
	tick: number;
	delay: number;
}

const DEFAULT_STATE: RootReducerState = {
	isAnimating: false,
	isPaused: true,
	digest: '0b2f3ae7adef1fa6c6698fe372c22c8a4a58387bf165efcc54b253704400dc85',
	tick: 0,
	delay: 500,
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetAnimating(action)) {
		return {
			...state,
			isAnimating: action.data.animating,
			tick: 0, // Reset clock when toggling animation
		};
	}

	if (isActionToggleAnimating(action)) {
		return {
			...state,
			isAnimating: !isAnimating(state),
			tick: 0, // Reset clock when toggling animation
		};
	}

	if (isActionSetPaused(action)) {
		return {
			...state,
			isPaused: action.data.paused,
		};
	}

	if (isActionSetDigest(action)) {
		return {
			...state,
			digest: action.data.digest,
			tick: 0, // Reset clock when updating digest
		};
	}

	if (isActionTickClock(action)) {
		return {
			...state,
			tick: getClockTick(state) + 1,
		};
	}

	if (isActionIncrementTicks(action)) {
		return {
			...state,
			tick: getClockTick(state) + action.data.amount,
			isPaused: true, // Pause when advancing clock
		};
	}

	if (isActionSetTickDelay(action)) {
		return {
			...state,
			delay: action.data.delay,
		};
	}

	return state;
};

export default reducer;

/** Draw fingerprint randomart frame-by-frame instead of showing final result. */
export const isAnimating = (state: RootReducerState) => (
	state.isAnimating
);

/** Pause drawing of the fingerprint randomart on the current frame. */
export const isPaused = (state: RootReducerState) => (
	state.isPaused
);

/** Get fingerprint digest hash. */
export const getDigest = (state: RootReducerState) => (
	state.digest.replace(/[^0-9a-f]/gi, '').toLowerCase()
);

/** Number of bytes in digest. */
export const getDigestLength = (state: RootReducerState) => (
	getDigest(state).length
);

/** Get the current number of ticks for the clock. */
export const getClockTick = (state: RootReducerState) => (
	state.tick
);

/** Get the clock tick value bound between 0 and 2 * digest length. */
export const getBoundClockTick = (state: RootReducerState) => {
	const max = getDigestLength(state) * 2 + 1;
	const tick = getClockTick(state);
	return (tick % max + max) % max;
};

/** Number of milliseconds between clock ticks. */
export const getTickDelay = (state: RootReducerState) => (
	state.delay
);
