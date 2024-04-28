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
    Input,
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
const languages = [
    {
        language: "Hindi",
    },
    {
        language: "Malayalam",
    },
    {
        language: "Kannada",
    },
    {
        language: "Tamil",
    },
    {
        language: "English",
    },
    {
        language: "Japanese",
    },
    {
        language: "Chinese",
    },
    {
        language: "Spanish",
    },
    {
        language: "Korean",
    },
    {
        language: "Telugu",
    },
    {
        language: "Bangali",
    },
    {
        language: "Sinhala",
    },
    {
        language: "Oriya",
    },
    {
        language: "Assamese",
    },
    {
        language: "Urdu",
    },
    {
        language: "Kashmiri",
    },
    {
        language: "Panjabi",
    },
    {
        language: "Bhojpuri",
    },
    {
        language: "Gujrati",
    },
    {
        language: "Marathi",
    },
    {
        language: "Portuguese",
    },
    {
        language: "Turkish",
    },
    {
        language: "Italian",
    },
    {
        language: "Russian",
    },
    {
        language: "Oriya",
    },
    {
        language: "Rajasthani",
    },
    {
        language: "Malayalam",
    },
    {
        language: "Haryanvi",
    },
    {
        language: "Swahili",
    },
];
const countrys = [
    {
        name: "India",
    },
    {
        name: "Bangladesh",
    },
    {
        name: "South Korea",
    },
    {
        name: "Japan",
    },
    {
        name: "Turkey",
    },
    {
        name: "United Kingdom",
    },
    {
        name: "Spain",
    },
    {
        name: "Canada",
    },
    {
        name: "United States",
    },
    {
        name: "France",
    },
    {
        name: "Thailend",
    },
    {
        name: "Singapore",
    },
    {
        name: "Australia",
    },
    {
        name: "Mexico",
    },
    {
        name: "Indonesia",
    },
    {
        name: "Sweden",
    },
    {
        name: "Thailand",
    },
    {
        name: "Portugal",
    },
    {
        name: "Italy",
    },
    {
        name: "Europe",
    },
    {
        name: "Latin American",
    },
    {
        name: "African",
    },
    {
        name: "Arabian",
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

// All Geners function
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

// All Countries function
function NavListMenu2() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    // All countrys
    const renderItems = countrys.map(
        ({ name }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {name}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/* Countrys Dropdown */}
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

// All Languages function
function NavListMenu3() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    // All languages
    const renderItems = languages.map(
        ({ language }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {language}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/* Languagess Dropdown */}
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
            <NavListMenu3 />
            <NavListMenu />
            <NavListMenu2 />
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
        <Navbar
            variant="gradient"
            color="blue-gray"
            className="mx-auto max-w-screen-xl from-blue-gray-50 to-blue-gray-100 px-4 py-3"
        >
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    CineVerse
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                {/* <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm">
                        Sign In
                    </Button>
                </div> */}
                <div className="hidden items-center gap-x-2 lg:flex">
                    <div className="relative flex w-full gap-2 md:w-max">
                        <Input
                            type="search"
                            placeholder="Search"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                            className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="!absolute left-3 top-[13px]">
                            <svg
                                width="13"
                                height="14"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                                    fill="#CFD8DC"
                                />
                                <path
                                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <Button size="md" className="rounded-lg ">
                        Search
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
                <div className="items-center gap-x-2 flex mb-4">
                    <div className="relative flex w-full gap-2 md:w-max">
                        <Input
                            type="search"
                            placeholder="Search"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                            className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-900 focus:!border-blue-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="!absolute left-3 top-[13px]">
                            <svg
                                width="13"
                                height="14"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                                    fill="#CFD8DC"
                                />
                                <path
                                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <Button size="md" className="rounded-lg ">
                        Search
                    </Button>
                </div>
                {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div> */}
            </Collapse>
        </Navbar>
    );
}