import style from './style';

const HeadingColor = ({ children }) => {
    /*
    This component is used to encapsulate first word 
    of a sentence in a span to change its color.
    */

    if (!children) return null;

    const heading = children.split(' ');
    const headingWordCount = heading.length;
    const headingFirstWord = heading[0];
    const headingRest = heading.slice(1).join(' ');


    if (headingWordCount > 1) {
        return (
            <>
                <span className={style.spanColor}>{headingFirstWord}</span> {headingRest}
            </>
        );
    } else {
        return <>{heading}</>;
    }
}	

export default HeadingColor;