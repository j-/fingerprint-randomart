import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState, isAnimationEnabled } from '../store';
import AnimationActions from '../components/AnimationActions';

interface StateProps {
	isAnimationEnabled: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	isAnimationEnabled: isAnimationEnabled(state),
});

const MaybeAnimationActions: React.StatelessComponent<StateProps> = ({ isAnimationEnabled }) => (
	isAnimationEnabled ? <AnimationActions /> : null
);

export default connect(
	mapStateToProps,
)(MaybeAnimationActions);
