import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Input, { Props as InputProps } from '../components/Input';
import { RootReducerState, isAnimationEnabled } from '../store';
import { toggleAnimation } from '../store/actions';

const mapStateToProps: MapStateToProps<InputProps, InputProps, RootReducerState> = (state) => ({
	type: 'checkbox',
	checked: isAnimationEnabled(state),
});

const mapDispatchToProps: MapDispatchToProps<InputProps, void> = ({
	onChange: toggleAnimation,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);
