import style from './style';
import FadeEffect from '../fadeEffect';

function Container({ children, ...props }) {
  const { width, margin } = props;
  /**
   * Container width is set by the parent component.
   * If no width is set, the container will be full width.
   * Container margin if set to auto, will center the container.
   * @param {string} width - Width of the container.
  */
  return (
    <article class={style.container} style={`max-width: ${width}px; margin: ${margin}`}>
      <FadeEffect>
        {children}
      </FadeEffect>
    </article>
  );
}

export default Container;