import style from "./style.css";

const data = [
  {
    title: "Tattoo",
    img: "../assets/icons/vector.svg"
  },
  {
    title: "Design",
    img: "../assets/icons/vector-dragon.svg"
  },
  {
    title: "Studio",
    img: "../assets/icons/vector-chair.svg"
  },
];


const FeatureHome = () => {
  const { featureHome, card, content } = style;

  return (
    <div className={featureHome}>
      {data.map((item, index) => (
        <div key={index} className={card}>
          <div className={content}>
            <img src={item.img} alt="icon" />
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};



export default FeatureHome;