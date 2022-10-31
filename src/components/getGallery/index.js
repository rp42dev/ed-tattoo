import { Link } from 'preact-router';
import CardComponent from '../cardComponent';

function getGalleryListing(data, isLoading, display) {

    if (data && data.data) {
        if (display) {
            var gallery = data.data.edges.slice(0, 5);
        } else{
            var gallery = data.data.edges;
        }

        return (
            <>
                {gallery.map(image => (
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