import style from './style';

function Container({ children, ...props }) {
    const { width, margin } = props;
    /**
     * Container width is set by the parent component.
     * If no width is set, the container will be full width.
     * Container margin if set to auto, will center the container.
     * @param {string} width - Width of the container.
    */
  return (
    <div class={style.container} style={`max-width: ${width}px; margin: ${margin}`}>

      {children}
    </div>
  );
}

export default Container;