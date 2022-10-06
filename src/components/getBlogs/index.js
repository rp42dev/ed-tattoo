import { Link } from 'preact-router';
import CardComponent from '../../components/cardComponent';

function getBlogsListing(data, isLoading) {

    if (data && data.data) {
        const { data: blogs } = data;
        return (
            <>
                {blogs.edges.map(blog => (
                    <Link href={`/blog/${blog.id}`}>
                        <CardComponent details={blog.details} />
                    </Link>
                ))}
            </>
        );
    }
}

export default getBlogsListing;