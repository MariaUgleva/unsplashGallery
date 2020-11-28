import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPhotos } from '../../redux/actions/photosAction';
import { AppState } from '../../redux/reducers/rootReducer';
import { Link } from 'react-router-dom';

const Gallery: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	// берем фото из стора
	const photos: Array<any> = useSelector((state: AppState) => state.photos);
	// если фото еще нет, то делаем запрос на подгрузку
	useEffect(() => {
		if (photos.length === 0) {
			console.log('подгружаю');
			dispatch(requestPhotos());
		}
	}, [photos.length]);
	return (
		<div className="container">
			<div className="gallery">
				<h2 className="gallery__title">Unsplash gallery</h2>
				<div className="gallery__list">
					{photos.map((item: any) => (
						<Link to={`/gallery/${item.id}`} key={item.id} className="gallery__item">
							<div>
								<img id={item.id} src={item.urls.small} className="gallery__item-img" />
								<h4 className="gallery__item-title">{item.alt_description}</h4>
							</div>
							<p className="gallery__item-author">{item.user.name}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default Gallery;
