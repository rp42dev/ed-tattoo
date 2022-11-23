import { useEffect, useState, useRef } from "preact/hooks";

const ObserveIntersections = ({ children }) => {

    const [isVisible, setVisible] = useState(false);

    const intRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <>
            {isVisible && <div ref={intRef} >
                {children}
            </div>}
        </>
    );
};

export default FadeEffect;