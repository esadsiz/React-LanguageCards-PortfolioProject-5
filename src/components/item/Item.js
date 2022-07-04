import { useState } from "react";
import "./Item.css";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);

  const { name, img, options } = card;
  // sözkonusu card'dan name img ve options'u degisken olarak cek.

  const handleClick = () => {
    setShowLogo(!showLogo);
  };

  return (
    <div className="card" onClick={handleClick}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
