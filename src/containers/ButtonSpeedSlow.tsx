import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { setClockSlow } from '../store/actions';
import Button, { Props as ButtonProps } from '../components/Button';

const mapStateToProps: MapStateToProps<ButtonProps, ButtonProps, RootReducerState> = () => ({
	children: 'Slow',
});

const mapDispatchToProps: MapDispatchToProps<ButtonProps, ButtonProps> = ({
	onClick: setClockSlow,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
