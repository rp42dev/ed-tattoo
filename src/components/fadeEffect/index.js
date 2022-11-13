
import { useEffect, useState, useRef } from "preact/hooks";

import style from './style';

const FadeEffect = ({children}) => {

    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div className={`${style.fadeInSection} ${isVisible ? style.visible : ''}`} ref={domRef} >
            {children}
        </div>
    );
};

export default FadeEffect;

