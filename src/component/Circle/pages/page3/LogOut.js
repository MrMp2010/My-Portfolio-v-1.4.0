import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ onLogout }) => {
const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    if (onLogout) {
      onLogout();
    }
    navigate("/page3/");
  }, [navigate, onLogout]); 

    return ( <></> );
}

export default LogOut;  