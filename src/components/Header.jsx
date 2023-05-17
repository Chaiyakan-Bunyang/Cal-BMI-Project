import "./Header.css";
import { FcCalculator } from "react-icons/fc";
import { BsEmojiSunglassesFill,BsEmojiSunglasses} from "react-icons/bs";
export default function Header(props) {
  const {theme,setTheme,change_theme} = props
  return (
    <div className="Navbar">
      <div className="Nav-bar-item">
        <div> 
            <FcCalculator className="logo"/> 
        </div>
        <div>
          <ul className="Nav-menu">
           <span className="mode" onClick={change_theme}>{theme==="light"?<BsEmojiSunglassesFill/>:<BsEmojiSunglasses/>}</span> 
          </ul>
        </div>
      </div>
    </div>
  );
}
