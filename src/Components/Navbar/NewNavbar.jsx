import logo from "../../../public/logo.png"
import {
    Navbar,
    Typography,
} from "@material-tailwind/react";


export function NavbarWithMegaMenu() {
    return (
        <Navbar
            variant="gradient"
            color="blue-gray"
            className="mx-auto max-w-screen-2xl sticky top-0 z-10 from-blue-gray-50 to-blue-gray-100 px-4 py-3"
        >
            <div className="flex items-center justify-center text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 text-2xl flex justify-center items-center italic cursor-pointer py-1 lg:ml-2"
                >
                    <img src={logo} className="w-8 -mt-2 mr-2" alt="" />
                    <p className="">CineVerse</p>
                </Typography>
            </div>
        </Navbar>
    );
}