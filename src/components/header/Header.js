import reactLogo from "../../assets/react.svg";
// kullanacagimiz resmi ait oldugu adresten import ettik.
import "./Header.css";
// komponent icerisinde kullanacagimiz css dosyasini import ettik.

const Header = () => {
  return (
    <div className="logo-container">
      <img className="react-logo" src={reactLogo} alt="react-logo" />
      {/* bir component'e resim bu sekilde eklenir. */}
    </div>
  );
};

export default Header;
