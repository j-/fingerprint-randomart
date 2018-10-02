import { Reducer } from 'redux';
import { isActionSetAnimating, isActionSetPaused, isActionSetDigest } from './actions';

export interface RootReducerState {
	isAnimating: boolean;
	isPaused: boolean;
	digest: string;
}

const DEFAULT_STATE: RootReducerState = {
	isAnimating: true,
	isPaused: true,
	digest: '0b2f3ae7adef1fa6c6698fe372c22c8a4a58387bf165efcc54b253704400dc85',
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

	if (isActionSetDigest(action)) {
		return {
			...state,
			digest: action.data.digest,
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
