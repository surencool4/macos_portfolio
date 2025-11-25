import useWindowStore from "#store//window.js";
import { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { windows, focusWindow } = useWindowStore();
        const win = windows[windowKey];
        const { zIndex, isOpen, isMaximized } = win;
        const ref = useRef(null);
        const [prev, setPrev] = useState(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;
            el.style.display = "block";
            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if(!el) return;
            const [instance] =  Draggable.create(el, { onPress: () => focusWindow(windowKey)} );
            return () => instance.kill();
        }, [])

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            if (isMaximized) {
                const rect = el.getBoundingClientRect();
                setPrev({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                });

                gsap.to(el, {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    duration: 0.25,
                    ease: "power3.out",
                });
            } else if (prev) {
                gsap.to(el, {
                    top: prev.top,
                    left: prev.left,
                    width: prev.width,
                    height: prev.height,
                    duration: 0.25,
                    ease: "power3.out",

                });
            }
        }, [isMaximized]);

        // Control display
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{
                    zIndex: zIndex,
                    position: "absolute",
                }}
            >
                <Component {...props} />
            </section>
        );
    };



    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};

export default WindowWrapper;
