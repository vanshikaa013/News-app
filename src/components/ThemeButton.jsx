import { useContext } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../providers/theme/ThemeContext";

const ThemeButton = () => {
  const { dark , dispatch} = useContext(ThemeContext);

  const handleThemeChange = () => {

    if(dark){
      localStorage.setItem("dark",JSON.stringify(false))
    }else{
      localStorage.setItem("dark",JSON.stringify(true))

    }

    dispatch({type : "Change-Theme"})
  };
  return (
    <button
      id="themeButton"
      onClick={ handleThemeChange}
      className={dark ? "btn btn-sm btn-light" : " btn btn-sm btn-dark"}
    >
      {dark ? <FaSun /> : <FaRegMoon />}
    </button>
  );
};

export default ThemeButton;
