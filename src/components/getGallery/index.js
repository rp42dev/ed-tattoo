import { Link } from 'preact-router';
import CardComponent from '../cardComponent';

function getGalleryListing(data, isLoading, display) {

    if (data && data.data) {
        const { data: gallery } = data;

        return (
            <>
                {gallery.edges.map(image => (
                    display ? 
                    (image.details.isDisplay ? (
                    
                    <Link href={`/image/${image.id}`}>
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
}

export default getGalleryListing;