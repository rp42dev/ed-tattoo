import { h } from 'preact';
import style from './style';

const Button = ({ children, ...props }) => {
    let type = props.type;

    return (
        <>
        { 
        type === 'link' && <a href={props.link} class={style.button}>{children}</a> || 
        type === 'submit' && <button type='submit' class={style.button}>{children}</button> 
        }
        </>
    );
};


export default Button;