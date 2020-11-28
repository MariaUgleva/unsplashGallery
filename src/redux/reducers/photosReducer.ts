import { Reducer } from 'redux';
import { PhotosActions, PhotosActionTypes } from '../actions/photosAction';
const initialvalue: Array<any> = [];
const photosReducer: Reducer<Array<any>, PhotosActions> = (state: Array<any> = initialvalue, action) => {
	switch (action.type) {
		case PhotosActionTypes.FETCH_PHOTOS:
			return [...action.data];
		default:
			return state;
	}
};
export default photosReducer;
