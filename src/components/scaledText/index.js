import { useEffect, useRef } from 'preact/hooks';

function ScaledText({ children, maxFontSize, minFontSize, maxContainerWidth, minContainerWidth, tag }) {
    /**
    * @param {JSX} children
    * @param {number} maxFontSize
    * @param {number} minFontSize
    * @param {number} maxContainerWidth
    * @param {number} minContainerWidth
    * @returns {JSX}
    * @description Calculate the width of the element with the given font size
    * and return the element with the font size that fits the container
    * width while maintaining aspect ratio and not exceeding the max font size.
    * @example <ScaledText children={<h1>Ed Tattoo</h1>} maxFontSize={160} maxContainerWidth={800} />
    * Returns <h1 style={{fontSize: '160px'}}>Ed Tattoo</h1> if the container is 800px wide
    */
    const ref = useRef();

    if (maxFontSize === undefined) {
        maxFontSize = 16;
    }

    if (minFontSize === undefined) {
        minFontSize = 0;
    }

    if (minContainerWidth === undefined) {
        minContainerWidth = 300;
    }

    useEffect(() => {
        const scaleEl = ref.current;

        // Get the container width and font size in pixels for calculations
        let pixels = scaler(scaleEl.offsetWidth, minContainerWidth, maxContainerWidth, minFontSize, maxFontSize);
        scaleEl.style.fontSize = `${pixels}px`;


        window.addEventListener('resize', () => {
            let pixels = scaler(scaleEl.offsetWidth, minContainerWidth, maxContainerWidth, minFontSize, maxFontSize);
            scaleEl.style.fontSize = `${pixels}px`;
        });

        // Convert parent width to rem units and scale text to fit
        function scaler(number, in_min, in_max, out_min, out_max) {
            return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
    }, []);

    const tags = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p',
        span: 'span',
        div: 'div',
    };  

    if (tag === undefined) {
        tag = 'div';
    } 

    const Tag = tags[tag];

    const element = (
        <Tag style={`max-width: ${maxContainerWidth}px`} ref={ref}>
            {children}
        </Tag>
    );

    return element;

}

export default ScaledText;
