import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { goNextFrame } from '../store/actions';
import Button, { Props as ButtonProps } from '../components/Button';

const mapStateToProps: MapStateToProps<ButtonProps, ButtonProps, RootReducerState> = () => ({
	children: '>>',
});

const mapDispatchToProps: MapDispatchToProps<ButtonProps, ButtonProps> = ({
	onClick: goNextFrame,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
