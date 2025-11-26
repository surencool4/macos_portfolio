import { create } from "zustand";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && prefersDark)
) {
    document.documentElement.setAttribute("data-theme", "dark");
} else if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) && !prefersDark)
) {
    document.documentElement.setAttribute("data-theme", "light");
} else {
    document.documentElement.removeAttribute("data-theme");
}

const useThemeStore = create((set) => ({
    theme: localStorage.getItem("theme") || "system",

    setTheme: (theme) => {
        set({ theme });

        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            // system preference
            document.documentElement.setAttribute(
                "data-theme",
                prefersDark ? "dark" : "light"
            );
            localStorage.removeItem("theme");
        }
    },

    initTheme: () => {
        const saved = localStorage.getItem("theme") || "system";
        useThemeStore.getState().setTheme(saved);
    },
}));

export default useThemeStore;
