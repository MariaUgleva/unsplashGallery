import React, {useMemo} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { Link } from 'react-router-dom';

const Photo: React.FC = (): JSX.Element => {
	// берем фото из стора
	const photos: Array<any> = useSelector((state: AppState) => state.photos);
	// берем id открытой фото для отрисовки
	const { id } = useParams<{ id: string }>();
	// ищем фото для отрисовки по id
	const photoToRender: any = useMemo(() => photos.find((item) => item.id === id), [id]);;
	return (
		<div className="photo">
			<img src={photoToRender.urls.full} alt="" className="photo__img" />
			<div>
				<div className="photo__info">
					<p className="photo__info-name">Автор: {photoToRender.user.name}</p>
					<p className="photo__info-name">Логин: {photoToRender.user.username}</p>
					<p className="photo__info-descr">{photoToRender.user.bio}</p>
					<div className="likes"><span>{photoToRender.likes}</span><img className='likes__img' src='https://www.flaticon.com/svg/static/icons/svg/889/889140.svg' alt='' /></div>
					<p className="photo__info-date">Дата публикации: {photoToRender.created_at.substring(0, 10)}</p>
				</div>
				<Link to="/">
					<button className="photo__btn">Назад</button>
				</Link>
			</div>
		</div>
	);
};
export default Photo;
