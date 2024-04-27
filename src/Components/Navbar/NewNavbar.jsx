import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    RocketLaunchIcon,
    CalendarDaysIcon,
    QuestionMarkCircleIcon,
    FilmIcon,
    Square3Stack3DIcon,
    RadioIcon,
    GifIcon,
    UserGroupIcon,
    BoltIcon,
    SparklesIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    TrophyIcon,
    GlobeAmericasIcon,
    NewspaperIcon,
    ScaleIcon,
    VideoCameraSlashIcon
} from "@heroicons/react/24/outline";
const navListMenuItems = [
    {
        title: "Action",
        description: "Exciting thrills and heart-pounding action.",
        icon: BoltIcon,
    },
    {
        title: "Adventure",
        description: "Explore new worlds and thrilling journeys.",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Fantasy",
        description: "Magical realms and mythical adventures.",
        icon: SparklesIcon,
    },
    {
        title: "Romence",
        description: "Heartfelt tales of love and connection.",
        icon: HeartIcon,
    },
    {
        title: "Thriller",
        description: "Suspenseful excitement and thrilling twists.",
        icon: MagnifyingGlassIcon,
    },
    {
        title: "Horror",
        description: "Spine-chilling scares and terrifying tales.",
        icon: VideoCameraSlashIcon,
    },
    {
        title: "Crime",
        description: "Mystery-solving and thrilling investigations.",
        icon: ScaleIcon,
    },
    {
        title: "Mystery",
        description: "Enigmatic puzzles and gripping suspense.",
        icon: QuestionMarkCircleIcon,
    },
    {
        title: "Drama",
        description: "Emotional depth and compelling narratives.",
        icon: FilmIcon,
    },
    {
        title: "Animation",
        description: "Vibrant characters and imaginative worlds.",
        icon: Square3Stack3DIcon,
    },
    {
        title: "Documentary",
        description: "Real-life stories and eye-opening insights.",
        icon: NewspaperIcon,
    },
    {
        title: "Sport",
        description: "Adrenaline-fueled action and athletic triumphs.",
        icon: TrophyIcon,
    },
    {
        title: "Sci-Fi",
        description: "Futuristic adventures and mind-bending concepts.",
        icon: RocketLaunchIcon,
    },
    {
        title: "Biography",
        description: "Inspirational tales of real-life figures.",
        icon: RadioIcon,
    },
    {
        title: "Comedy",
        description: "Side-splitting laughter and feel-good humor.",
        icon: GifIcon,
    },
    {
        title: "Family",
        description: " Heartwarming stories for all ages to enjoy.",
        icon: UserGroupIcon,
    },
    {
        title: "History",
        description: "Journey into the past and uncover its secrets.",
        icon: CalendarDaysIcon,
    },
];
const geners = [
    {
        title: "Action",
        description: "Exciting thrills and heart-pounding action.",
        icon: BoltIcon,
    },
    {
        title: "Adventure",
        description: "Explore new worlds and thrilling journeys.",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Fantasy",
        description: "Magical realms and mythical adventures.",
        icon: SparklesIcon,
    },
    {
        title: "Romence",
        description: "Heartfelt tales of love and connection.",
        icon: HeartIcon,
    },
    {
        title: "Thriller",
        description: "Suspenseful excitement and thrilling twists.",
        icon: MagnifyingGlassIcon,
    },
    {
        title: "Horror",
        description: "Spine-chilling scares and terrifying tales.",
        icon: VideoCameraSlashIcon,
    },
    {
        title: "Crime",
        description: "Mystery-solving and thrilling investigations.",
        icon: ScaleIcon,
    },
    {
        title: "Mystery",
        description: "Enigmatic puzzles and gripping suspense.",
        icon: QuestionMarkCircleIcon,
    },
    {
        title: "Drama",
        description: "Emotional depth and compelling narratives.",
        icon: FilmIcon,
    },
    {
        title: "Animation",
        description: "Vibrant characters and imaginative worlds.",
        icon: Square3Stack3DIcon,
    },
    {
        title: "Documentary",
        description: "Real-life stories and eye-opening insights.",
        icon: NewspaperIcon,
    },
    {
        title: "Sport",
        description: "Adrenaline-fueled action and athletic triumphs.",
        icon: TrophyIcon,
    },
    {
        title: "Sci-Fi",
        description: "Futuristic adventures and mind-bending concepts.",
        icon: RocketLaunchIcon,
    },
    {
        title: "Biography",
        description: "Inspirational tales of real-life figures.",
        icon: RadioIcon,
    },
    {
        title: "Comedy",
        description: "Side-splitting laughter and feel-good humor.",
        icon: GifIcon,
    },
    {
        title: "Family",
        description: " Heartwarming stories for all ages to enjoy.",
        icon: UserGroupIcon,
    },
    {
        title: "History",
        description: "Journey into the past and uncover its secrets.",
        icon: CalendarDaysIcon,
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    // All Genres
    const renderItems = geners.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/* Genres Dropdown */}
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Geners
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
function NavListMenu2() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    // All Geners
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/* Geners Dropdown */}
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Countrys
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
function NavListMenu3() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    // All Geners
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/* Geners Dropdown */}
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Langueges
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            {/* <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
            </Typography> */}

            <NavListMenu3 />
            <NavListMenu />
            <NavListMenu2 />

            {/* <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>
            </Typography> */}
        </List>
    );
}

export function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >

                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm">
                        Sign In
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}