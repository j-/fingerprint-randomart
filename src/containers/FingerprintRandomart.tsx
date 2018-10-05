import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootReducerState, isAnimationEnabled } from '../store';
import FingerprintRandomartAnimated from './FingerprintRandomartAnimated';
import FingerprintRandomartStatic from './FingerprintRandomartStatic';

interface StateProps {
	isAnimating: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, void, RootReducerState> = (state) => ({
	isAnimating: isAnimationEnabled(state),
});

class FingerprintRandomart extends React.Component<StateProps> {
	render () {
		const { isAnimating } = this.props;
		return (
			isAnimating ?
				<FingerprintRandomartAnimated /> :
				<FingerprintRandomartStatic />
		);
	}
}

export default connect(
	mapStateToProps,
)(FingerprintRandomart);
