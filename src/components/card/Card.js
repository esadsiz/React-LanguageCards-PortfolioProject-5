import { languages } from "../../helpers/data";
// languages'i data.js'den const olarak gönderdigimiz icin,
// burada import ederken de süslü parantez icerisinde import etmemiz lazim.
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {/* benim json verimi al, icinde dolas.
        item olarak girdim, artik verimin icerisindeki her sey item.
        her bir item icin su islemi döndür.*/}
        {languages.map((item, index) => {
          return <Item card={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
