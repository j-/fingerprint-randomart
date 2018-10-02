// import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState, getDigest } from '../store';
import FingerprintRandomartAnimated from '../components/FingerprintRandomartAnimated';

interface StateProps {
	digest: string;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	digest: getDigest(state),
});

export default connect(
	mapStateToProps,
)(FingerprintRandomartAnimated);
