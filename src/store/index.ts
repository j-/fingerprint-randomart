import { Reducer } from 'redux';
import { isActionSetAnimating, isActionSetPaused } from './actions';

export interface RootReducerState {
	isAnimating: boolean;
	isPaused: boolean;
}

const DEFAULT_STATE: RootReducerState = {
	isAnimating: true,
	isPaused: true,
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetAnimating(action)) {
		return {
			...state,
			isAnimating: action.data.animating,
		};
	}

	if (isActionSetPaused(action)) {
		return {
			...state,
			isPaused: action.data.paused,
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
