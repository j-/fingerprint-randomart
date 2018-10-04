import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { setClockFast } from '../store/actions';
import Button from '../components/Button';

interface DispatchProps {
	onClick: () => void;
}

const mapStateToProps: MapStateToProps<void, void, RootReducerState> = () => ({
	children: 'Fast',
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, void> = ({
	onClick: setClockFast,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
