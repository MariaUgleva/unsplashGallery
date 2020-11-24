import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './redux/reducers/rootReducer';
import { watchRequest } from './redux/sagas';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// сохраняем фотографии между сессиями
export const history = createBrowserHistory();
const persistConfig = {
	key: 'photos',
	storage,
};
// сага мидлвейр для запроса на сервер
const sagaMiddleWare = createSagaMiddleWare();
// создаем стор
const initStore = (): { store: Store; persistor: Persistor } => {
	const initialStore = {};
	const store = createStore(
		persistReducer(persistConfig, rootReducer(history)),
		initialStore,
		composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleWare))
	);
	const persistor: Persistor = persistStore(store);
	return { store, persistor };
};
const { store, persistor } = initStore();
// включаем сагу watchRequest
sagaMiddleWare.run(watchRequest);
ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
