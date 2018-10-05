import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState, getDigest } from '../store';
import FingerprintRandomartStatic from '../components/FingerprintRandomartStatic';

interface StateProps {
	digest: string;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	digest: getDigest(state),
});

export default connect(
	mapStateToProps,
)(FingerprintRandomartStatic);
