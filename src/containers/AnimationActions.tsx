import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState, isAnimating } from '../store';
import AnimationActions from '../components/AnimationActions';

interface StateProps {
	isAnimating: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	isAnimating: isAnimating(state),
});

const MaybeAnimationActions: React.StatelessComponent<StateProps> = ({ isAnimating }) => (
	isAnimating ? <AnimationActions /> : null
);

export default connect(
	mapStateToProps,
)(MaybeAnimationActions);
