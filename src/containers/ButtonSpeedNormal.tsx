import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { setClockNormal } from '../store/actions';
import Button from '../components/Button';

interface DispatchProps {
	onClick: () => void;
}

const mapStateToProps: MapStateToProps<void, void, RootReducerState> = () => ({
	children: 'Normal',
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, void> = ({
	onClick: setClockNormal,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
