
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';
import Header from '../../components/header';
import getGalleryListing from '../../components/getGallery';



const Gallery = ({...props}) => {

	const [data, isLoading] = usePrerenderData(props);

	return (
		<>
			<Header links="home" />

			<section classList={style.section}>
				<div class={style.gallery}>
					{getGalleryListing(data, isLoading)}
					{getGalleryListing(data, isLoading)}
					{getGalleryListing(data, isLoading)}
					{getGalleryListing(data, isLoading)}
				</div>
			</section>
		</>
	);
};

export default Gallery;
