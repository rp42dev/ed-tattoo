import { Link } from 'preact-router';
import CardComponent from '../cardComponent';


function getGalleryListing(data, display) {

    let gallery;

    if (!data || !data.edges) return null;

    if (!display) {
        gallery = data.edges
    }
    else {
        gallery = data.edges
            .filter(item => item.details.isDisplay === true)
            .slice(0, 7);
    }

    return (
        <>
            {gallery ?
                gallery.map((image, index) => {
                    return (
                        <Link key={index} href={`/gallery/${image.slug}`}>
                            <CardComponent details={image.details} />
                        </Link>
                    )
                })
                : null}

        </>
    );
}

export default getGalleryListing;