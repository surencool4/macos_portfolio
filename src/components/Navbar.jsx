import dayjs from "dayjs";
import { navDropdownLinks, navIcons, navLinks } from "#constants/";
import useWindowStore from "#store//window.js";
import { useEffect, useRef, useState } from "react";
import useThemeStore from "#store//theme.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const theme = useThemeStore((s) => s.theme);
    const setTheme = useThemeStore((s) => s.setTheme);

    const [logoSrc, setLogoSrc] = useState("/images/logo-light.svg");

    const toggleTheme = () => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("system");
        else setTheme("light");
    };

    const getCurrentMode = () => {
        if (theme === "light" || theme === "dark") return theme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    useEffect(() => {
        const currentMode = getCurrentMode();

        setLogoSrc(currentMode === "dark" ? "/images/logo-light.svg" : "/images/logo-dark.svg");

        const handleClickOutside = (e) => {
            if (
                isDropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownOpen, theme]);

    return (
        <nav>
            <div className="relative flex items-center gap-2">
                <img
                    ref={buttonRef}
                    src={logoSrc}
                    alt="logo"
                    className="w-4 mx-4 cursor-pointer"
                    onClick={toggleDropdown}
                />
                <p className="font-bold text-black dark:text-white">Surendra's Portfolio</p>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        className="absolute top-full left-0 mt-2 bg-white/60 dark:bg-black/30 rounded shadow-lg z-50"
                    >
                        <ul className="block">
                            {navDropdownLinks.map(({ id, name, type, icon }) => (
                                <li
                                    key={id}
                                    onClick={() => openWindow(type)}
                                    className="w-40 flex px-4 py-3 hover:bg-white/10 focus:outline-none focus:shadow-outline cursor-pointer"
                                >
                                    <img src={icon} className="w-4" alt={name} />
                                    <p className="pl-2 text-black dark:text-white">{name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <ul className="mx-4">
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="flex gap-2">
                    {navIcons.map(({ id, img, darkimg }) => (
                        <li key={id} onClick={() => (id === 4 ? toggleTheme() : null)}>
                            <img
                                src={
                                    getCurrentMode() === "dark" ? img : darkimg
                                }
                                className="icon-hover w-4 cursor-pointer mx-2"
                                alt={`${id}`}
                            />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format("ddd, MMMM D, h:mm A")}</time>
            </div>
        </nav>
    );
};

export default Navbar;
