import { useEffect, useState } from "preact/hooks";
import { Link } from 'preact-router';
import CardComponent from '../cardComponent';


function getGalleryListing(data, isLoading, display) {

    const [gallery, setGallery] = useState([]);
    let displayGallery = [];

    
    useEffect(() => {
        if (data && data.data) {
            let sortedGallery = data.data.edges.sort((a, b) => {
                return new Date(b.details.date) - new Date(a.details.date);
            });

            if (display) {
                sortedGallery.map(item => {

                    if (item.details.isDisplay === true) {
                        displayGallery.push(item);
                    }
                    displayGallery = displayGallery.slice(0, 7);
                });
            } else {
                displayGallery = data.data.edges;
            }

            setGallery(displayGallery);
            
        }

    }, [data, gallery]);


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