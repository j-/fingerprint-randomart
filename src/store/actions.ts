import { Action } from 'redux';

export interface ActionSetAnimating {
	type: 'SetAnimating';
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

export interface ActionToggleAnimating {
	type: 'ToggleAnimating';
}

export const isActionToggleAnimating = (action: Action): action is ActionToggleAnimating => (
	action.type === 'ToggleAnimating'
);

export const toggleAnimation = (): ActionToggleAnimating => ({
	type: 'ToggleAnimating',
});

export interface ActionSetPaused {
	type: 'SetPaused';
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

export interface ActionSetDigest {
	type: 'SetDigest';
	data: {
		digest: string;
	};
}

export const isActionSetDigest = (action: Action): action is ActionSetDigest => (
	action.type === 'SetDigest'
);

export const setDigest = (digest: string): ActionSetDigest => ({
	type: 'SetDigest',
	data: {
		digest,
	},
});

export interface ActionTickClock {
	type: 'TickClock';
}

export const isActionTickClock = (action: Action): action is ActionTickClock => (
	action.type === 'TickClock'
);

export const tick = (): ActionTickClock => ({
	type: 'TickClock',
});

export interface ActionIncrementTicks {
	type: 'IncrementTicks';
	data: {
		amount: number;
	};
}

export const isActionIncrementTicks = (action: Action): action is ActionIncrementTicks => (
	action.type === 'IncrementTicks'
);

export const incrementTicks = (amount: number): ActionIncrementTicks => ({
	type: 'IncrementTicks',
	data: {
		amount,
	},
});

export const goNextFrame = () => (
	incrementTicks(1)
);

export const goPrevFrame = () => (
	incrementTicks(-1)
);

export interface ActionSetTickDelay {
	type: 'SetTickDelay';
	data: {
		delay: number;
	};
}

export const isActionSetTickDelay = (action: Action): action is ActionSetTickDelay => (
	action.type === 'SetTickDelay'
);

export const setTickDelay = (delay: number): ActionSetTickDelay => ({
	type: 'SetTickDelay',
	data: {
		delay,
	},
});

export const setClockSlow = () => (
	setTickDelay(1000)
);

export const setClockNormal = () => (
	setTickDelay(500)
);

export const setClockFast = () => (
	setTickDelay(100)
);
