import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RootReducerState } from '../store';
import { goPrevFrame } from '../store/actions';
import Button from '../components/Button';

interface DispatchProps {
	onClick: () => void;
}

const mapStateToProps: MapStateToProps<void, void, RootReducerState> = () => ({
	children: '<<',
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, void> = ({
	onClick: goPrevFrame,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);
