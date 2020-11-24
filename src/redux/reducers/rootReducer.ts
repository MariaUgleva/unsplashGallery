import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';

// поставила any так-как объекты с сервера сложные
export type AppState = {
	router: any
	photos: Array<any>;
};

const rootReducer = (history: History) => combineReducers<AppState>({
	router: connectRouter(history),
	photos: photosReducer
});
export default rootReducer;