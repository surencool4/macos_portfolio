import dayjs from "dayjs";
import {navDropdownLinks, navIcons, navLinks} from "#constants/";
import useWindowStore from "#store//window.js";
import {useEffect, useRef, useState} from "react";
const Navbar = () => {
    const {openWindow} = useWindowStore();

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Refs for click-outside detection
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            // If dropdown is open and click target is outside both dropdown & button
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
    }, [isDropdownOpen]);
    return (
        <nav>
            <div className="relative flex items-center gap-2">
                <img
                    ref={buttonRef}
                    src="images/logo.svg"
                    alt="logo"
                    className="w-4 mx-4"
                    onClick={toggleDropdown}
                />
                <p className="font-bold text-white">Surendra's Portfolio</p>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div ref={dropdownRef} className="absolute top-full left-0 mt-2  bg-black/30 rounded shadow-lg z-50">
                        <ul className="block text-white">
                            {navDropdownLinks.map(({id, name, type, icon}) => (
                                <li
                                    key={id}
                                    onClick={() => openWindow(type)}
                                    className="w-40 flex px-4 py-3 hover:bg-white/10 focus:outline-none focus:shadow-outline cursor-pointer"
                                >
                                    <img src={icon} className="w-4" alt={name} />
                                    <p className="pl-2">{name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <ul className="mx-4">
                    {navLinks.map(({id,name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id,img}) => (
                        <li key={id}>
                            <img src={img} className="icon-hover w-4" alt={`${id}`} />
                        </li>
                    ))}
                </ul>

                <time>
                    {dayjs().format("ddd, MMMM D, h:mm A")}
                </time>
            </div>
        </nav>
    )
}
export default Navbar
