import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import ButtonPlayPause from '../components/ButtonPlayPause';
import { RootReducerState, isAnimationPaused } from '../store';
import { pauseAnimation, unpauseAnimation } from '../store/actions';

interface StateProps {
	isPaused: boolean;
}

interface DispatchProps {
	onClickPlay: () => void;
	onClickPause: () => void;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	isPaused: isAnimationPaused(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, void> = ({
	onClickPause: pauseAnimation,
	onClickPlay: unpauseAnimation,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ButtonPlayPause);
