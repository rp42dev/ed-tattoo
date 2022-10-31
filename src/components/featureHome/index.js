import Icon from "../icon";

import style from "./style.css";

const FeatureHome = () => {
  const { featureHome, card, content } = style;
  return (
    <div className={featureHome}>
      <div className={card}>
        <div className={content}>
          <img src="../assets/icons/vector.svg" /> 
          <p>
            Tattoo
          </p>
        </div>
      </div>
      <div className={card}>

        <div className={content}>
          <img src="../assets/icons/vector-dragon.svg" />

         <p>
            Design
          </p>
        </div>
      </div>
      <div className={card}>

        <div className={content}>
          <img src="../assets/icons/vector-chair.svg" />
          <p>
            Studio
          </p>
        </div>
      </div>
    </div>
  );
};



export default FeatureHome;