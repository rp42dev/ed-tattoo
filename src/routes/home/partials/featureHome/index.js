import Icon from "../../../../components/icon";
import style from "./style.css";

const FeatureHome = () => {
  const { featureHome, container, row, col, card, content, icon } = style;
  return (
    <div className={featureHome}>
      <div className={container}>
        <div className={row}>
          <div className={col}>
            <div className={card}>
              <div className={icon}>
                <i class="fa-regular fa-star"></i>
              </div>
              
                <h3>Tattoo</h3>
              <div className={content}>
                <p>
                  Black&grey realism
          
                </p>
              </div>
            </div>
          </div>
          <div className={col}>
            <div className={card}>
              <div className={icon}>
                <i class="fa-regular fa-star"></i>
              </div>
             
                <h3>Design</h3>
              <div className={content}>
                <p>
                  Tattoo design
                </p>
              </div>
            </div>
          </div>
          <div className={col}>
            <div className={card}>
              <div className={icon}>
                <i class="fa-regular fa-star"></i>
              </div>
            
                <h3>Sterile</h3>
              <div className={content}>
                <p>
                  Sterile tattooing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FeatureHome;