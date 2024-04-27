import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../Components/Navbar/NewNavbar";

const Main = () => {
    return (
        <div>
            <NavbarWithMegaMenu />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;