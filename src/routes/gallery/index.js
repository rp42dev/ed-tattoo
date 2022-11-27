import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';
import Header from '../../components/header';
import getGalleryListing from '../../components/getGallery';
import CardPlaceholder from '../../components/cardPlaceholder';


const Gallery = ({ ...props }) => {
	const [data, isLoading] = usePrerenderData(props);

	let placeholders = [];
	for (let i = 0; i < 20; i++) placeholders.push(i);
	
	return (
		<>
			<Header links={["home"]} />

			<section classList={style.section}>
				<div class={style.gallery}>
					{!isLoading ? getGalleryListing(data.galleryData) :
						placeholders.map((item, index) => {
							return (
								
								<CardPlaceholder key={index} />
								
							);
						}
						)}

				</div>
			</section>
		</>
	);
};

export default Gallery;
