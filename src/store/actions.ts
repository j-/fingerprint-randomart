import { Action } from 'redux';

export interface ActionSetAnimating {
	type: 'SetAnimating',
	data: {
		animating: boolean;
	};
}

export const isActionSetAnimating = (action: Action): action is ActionSetAnimating => (
	action.type === 'SetAnimating'
);

export const startAnimating = (): ActionSetAnimating => ({
	type: 'SetAnimating',
	data: {
		animating: true,
	},
});

export const stopAnimating = (): ActionSetAnimating => ({
	type: 'SetAnimating',
	data: {
		animating: false,
	},
});

export interface ActionSetPaused {
	type: 'SetPaused',
	data: {
		paused: boolean;
	};
}

export const isActionSetPaused = (action: Action): action is ActionSetPaused => (
	action.type === 'SetPaused'
);

export const pauseAnimation = (): ActionSetPaused => ({
	type: 'SetPaused',
	data: {
		paused: true,
	},
});

export const unpauseAnimation = (): ActionSetPaused => ({
	type: 'SetPaused',
	data: {
		paused: false,
	},
});