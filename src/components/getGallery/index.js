
import { useEffect, useState, useRef } from "preact/hooks";

import { Link } from 'preact-router';
import CardComponent from '../cardComponent';

function getGalleryListing(data, isLoading, display) {

    const [gallery, setGallery] = useState([]);
    let displayGallery = [];

    useEffect(() => {
        if (data && data.data) {

            if (display) {
                data.data.edges.map(item => {

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
                        <Link key={index} href={`/image/${image.id}`}>
                            <CardComponent details={image.details} />
                        </Link>
                    )
                })
                : null}

        </>
    );
}



export default getGalleryListing;