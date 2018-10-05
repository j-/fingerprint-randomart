import { connect, MapStateToProps } from 'react-redux';
import FingerprintRandomartFrame from '../components/FingerprintRandomartFrame';
import { RootReducerState, getDigest, getCursorPosition } from '../store';

interface StateProps {
	digest: string;
	tick: number;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	digest: getDigest(state),
	tick: getCursorPosition(state),
});

export default connect(
	mapStateToProps,
)(FingerprintRandomartFrame);
