import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { setClockSlow } from '../store/actions';
import Button from '../components/Button';

interface DispatchProps {
	onClick: () => void;
}

const mapStateToProps: MapStateToProps<void, void, RootReducerState> = () => ({
	children: 'Slow',
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, void> = ({
	onClick: setClockSlow,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
