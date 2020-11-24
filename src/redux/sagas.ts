import { takeEvery, put, call } from 'redux-saga/effects';
import { PhotosActionTypes, setPhotosToRedux } from './actions/photosAction';
// сага для перехвата REQUEST_PHOTOS
export function* watchRequest() {
	yield takeEvery(PhotosActionTypes.REQUEST_PHOTOS, sagaWorker);
}
// при перехвате выполняется ф-я sagaWorker
export function* sagaWorker() {
	try {
		const photos = yield call(fetcPhotos);
		yield put(setPhotosToRedux(photos));
	} catch (e) {
		console.log(e);
	}
}
// ф-я для запроса на сервер
async function fetcPhotos() {
	console.log('fetch')
	const response = await fetch(
		'https://api.unsplash.com/photos?page=1&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
	);
	return await response.json();
}
