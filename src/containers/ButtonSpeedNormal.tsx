import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { setClockNormal } from '../store/actions';
import Button, { Props as ButtonProps } from '../components/Button';

const mapStateToProps: MapStateToProps<ButtonProps, ButtonProps, RootReducerState> = () => ({
	children: 'Normal',
});

const mapDispatchToProps: MapDispatchToProps<ButtonProps, ButtonProps> = ({
	onClick: setClockNormal,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
