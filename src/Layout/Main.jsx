import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../Components/Navbar/NewNavbar";

const Main = () => {
    return (
        <div className="scroll-smooth">
            <NavbarWithMegaMenu />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;