import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Input, { Props as InputProps } from '../components/Input';
import { RootReducerState, isAnimating } from '../store';
import { toggleAnimation } from '../store/actions';

const mapStateToProps: MapStateToProps<InputProps, InputProps, RootReducerState> = (state) => ({
	type: 'checkbox',
	checked: isAnimating(state),
});

const mapDispatchToProps: MapDispatchToProps<InputProps, void> = ({
	onClick: toggleAnimation,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);
