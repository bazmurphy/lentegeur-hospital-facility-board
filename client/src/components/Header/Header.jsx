import "./Header.css";
import RightNav from "./RightNav";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-name">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/1200px-Circle_Davys-Grey_Solid.svg.png"></img>
                    <div className="name">Lentegeur Hospital</div>
                </div>
                <RightNav />
            </nav>
        </header>
    );
};
export default Header;