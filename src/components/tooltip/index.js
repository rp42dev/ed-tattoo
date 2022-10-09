import { useRef } from 'preact/hooks';
import style from './style';

const Tooltip = ({ children, ...props }) => {

    const tooltipRef = useRef(null);


    return (
        <div ref={tooltipRef} class={style.tooltip}>
            {children}
            <span class={style.tooltipText}>{props.text}</span>
        </div>
    );
};


export default Tooltip;