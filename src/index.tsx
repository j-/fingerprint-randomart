import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { clock } from './store/clock';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(clock),
));

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
