import { connect, MapStateToProps } from 'react-redux';
import FingerprintRandomartFrame from '../components/FingerprintRandomartFrame';
import { RootReducerState, getDigest, getClockTick } from '../store';

interface StateProps {
	digest: string;
	tick: number;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	digest: getDigest(state),
	tick: getClockTick(state),
});

export default connect(
	mapStateToProps,
)(FingerprintRandomartFrame);
