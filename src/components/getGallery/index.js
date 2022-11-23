import { Link } from 'preact-router';
import CardComponent from '../cardComponent';


function getGalleryListing(data, display) {

    let gallery;

    switch (display) {
        case null || undefined:
            gallery = data.edges;
            break;
        case true:
            gallery = data.edges.filter(item => item.details.isDisplay === true);
            break;
        default:
            gallery = data.edges;
    }

    return (
        <>
            {gallery ?
                gallery.map((image, index) => {
                    return (
                        <Link key={index} href={`/gallery/${image.id}`}>
                            <CardComponent details={image.details} />
                        </Link>
                    )
                })
                : null}

        </>
    );
}

export default getGalleryListing;