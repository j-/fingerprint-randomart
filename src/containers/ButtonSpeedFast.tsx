import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { setClockFast } from '../store/actions';
import Button, { Props as ButtonProps } from '../components/Button';

const mapStateToProps: MapStateToProps<ButtonProps, ButtonProps, RootReducerState> = () => ({
	children: 'Fast',
});

const mapDispatchToProps: MapDispatchToProps<ButtonProps, ButtonProps> = ({
	onClick: setClockFast,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
