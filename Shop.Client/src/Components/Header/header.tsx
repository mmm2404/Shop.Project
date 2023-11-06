import "./header.css";
import logo from "../../assets/logo.jpg";

export const Header = () =>{
    return(
<div>
    <img  className="logo" src={logo} alt="logo" ></img>
    <h1 className="header_name">Shop.Client Application</h1>
</div>
    )
}