import { Link } from 'preact-router';
import CardComponent from '../cardComponent';

function getGalleryListing(data, isLoading, display) {
    let displayGallery = [];

    if (data && data.data) {
        if (display) {
            data.data.edges.map(item => {

             if (item.details.isDisplay === true) {
                displayGallery.push(item);
            }
            displayGallery = displayGallery.slice(0, 5)
        });
        } else {
            displayGallery = data.data.edges;
        }
    }

    return (
        <>
            {displayGallery.map((image, index) => (
                display ?
                    (image.details.isDisplay ? (

                        <Link key={index} href={`/image/${image.id}`}>
                            <CardComponent details={image.details} />
                        </Link>
                    ) : null) : (
                        <Link href={`/image/${image.id}`}>
                            <CardComponent details={image.details} />
                        </Link>
                    )
            ))}
        </>
    );
}



export default getGalleryListing;