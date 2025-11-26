import { useState } from "react";
import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc//WindowWrapper.jsx";
import { locations } from "#constants/";
import useLocationStore from "#store//location.js";
import clsx from "clsx";
import useWindowStore from "#store//window.js";

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume");
        if (item.kind === "folder") return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    const renderList = (name, items) => (
        <div>
            <h3 className="text-xs font-medium text-gray-400 dark:text-white mb-1">
                {name}
            </h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            "flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors",
                            item.id === activeLocation.id
                                ? "bg-blue-100 dark:bg-gray-500 text-blue-700 dark:text-white"
                                : "text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        )}
                    >
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id='window-header'>
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>
            <div className="h-full w-full flex flex-col md:flex-row">
                <div className="flex items-center justify-between p-2 md:hidden bg-white dark:bg-gray-900 shadow">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
                    >
                        {sidebarOpen ? "x" : "#Menu"}
                    </button>
                    <Search className="icon dark:text-white" />
                </div>

                <div
                    className={clsx(
                        "sidebar bg-gray-50 dark:bg-gray-800 p-5 space-y-3 md:block fixed md:relative top-0 left-0 h-full z-50 w-48 transition-transform duration-300",
                        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    )}
                >
                    {renderList("Favourites", Object.values(locations))}
                    {renderList("My Projects", locations.work.children)}
                </div>

                {/* Overlay when sidebar is open on mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Content */}
                <ul
                    className={clsx(
                        "content flex-1 p-4 bg-white dark:bg-gray-900 overflow-auto grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 transition-all",
                        sidebarOpen ? "ml-48 md:ml-0" : "ml-0"
                    )}
                >
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => openItem(item)}
                            className={item.position}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-12 h-12 object-contain"
                            />
                            <p className="text-xs md:text-sm font-medium truncate dark:text-white">
                                {item.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
