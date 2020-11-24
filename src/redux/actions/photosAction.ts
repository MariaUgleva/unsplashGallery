import { ActionCreator } from 'redux';
// экшны для запроса фотографий и добавления их в стор
export enum PhotosActionTypes {
	FETCH_PHOTOS='FETCH_PHOTOS',
	REQUEST_PHOTOS = 'REQUEST_PHOTOS',
}
export type setPhotosType = {
	type: PhotosActionTypes.FETCH_PHOTOS;
	data: Array<any>;
};
export type requestPhotosType = {
	type: PhotosActionTypes.REQUEST_PHOTOS;
};
export type PhotosActions = setPhotosType | requestPhotosType;
export const setPhotosToRedux: ActionCreator<setPhotosType> = (data:Array<any>) => ({
	type: PhotosActionTypes.FETCH_PHOTOS,
	data: data,
});
export const requestPhotos: ActionCreator<requestPhotosType> = () => ({
	type: PhotosActionTypes.REQUEST_PHOTOS,
});