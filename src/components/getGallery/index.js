import { useState, useRef, useEffect, useCallback } from 'preact/hooks';
import { Link } from 'preact-router';
import CardComponent from '../cardComponent';


function getGalleryListing(data, display) {
    if (!data || !data.edges) return null;

    const [pageNum, setPageNum] = useState(1);
    const [gallery, setGallery] = useState([]);

    const [loading, setLoading] = useState(false);
    const observer = useRef();

    const lastItemRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNum(pageNum => pageNum + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading]);

    useEffect(() => {
        if (display) {
            setGallery(data.edges.filter(item => item.details.isDisplay === true).slice(0, 7));
        } else {
            if (gallery.length > 100) return;
            if (pageNum === 6) setPageNum(1);
            setGallery(prevGallery => {
                return [...prevGallery, ...data.edges.slice((pageNum - 1) * 7, pageNum * 7)]
            });
        }
    }, [pageNum, data, display]);

    return (
        <>
            {gallery.map((image, index) => {
                return (
                    <div ref={lastItemRef} key={index}>
                        <Link href={`/gallery/${image.slug}/`}>
                            <CardComponent details={image.details} />
                        </Link>
                    </div>
                );
            })}
        </>
    );
}

export default getGalleryListing;