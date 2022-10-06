import { useEffect, useRef } from 'preact/hooks';

function ScaledText({ children, maxFontSize, minFontSize, maxContainerWidth, minContainerWidth }) {
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
        minContainerWidth = 100;
    }

    useEffect(() => {
        const scaleEl = ref.current;

        // Get the container width and font size in pixels for calculations
        let pixels = scaler(scaleEl.parentElement.offsetWidth, minContainerWidth, maxContainerWidth, minFontSize, maxFontSize);
        scaleEl.style.fontSize = `${pixels}px`;


        window.addEventListener('resize', () => {
            let pixels = scaler(scaleEl.parentElement.offsetWidth, minContainerWidth, maxContainerWidth, minFontSize, maxFontSize);
            scaleEl.style.fontSize = `${pixels}px`;
        });

        // Convert parent width to rem units and scale text to fit
        function scaler(number, in_min, in_max, out_min, out_max) {
            return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
    }, []);

    return (
        <>
            <div ref={ref}>{children}</div>
        </>
    );
}

export default ScaledText;
