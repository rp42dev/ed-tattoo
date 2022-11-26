import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';
import Header from '../../components/header';
import getGalleryListing from '../../components/getGallery';


const Gallery = ({...props}) => {
	const [data, isLoading] = usePrerenderData(props);
	if (isLoading) return null;

	return (
		<>
			<Header links={["home"]} />

			<section classList={style.section}>
				<div class={style.gallery}>
					{getGalleryListing(data.galleryData)}
					{getGalleryListing(data.galleryData)}
					{getGalleryListing(data.galleryData)}
					{getGalleryListing(data.galleryData)}
				</div>
			</section>
		</>
	);
};

export default Gallery;
