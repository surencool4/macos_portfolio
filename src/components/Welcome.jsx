import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {dockApps} from "#constants/";
import {Tooltip} from "react-tooltip";
import useWindowStore from "#store//window.js";

const FONT_WEIGHTS = {
    subtitle: {min:100, max:400, default:100},
    title: {min:400, max:900, default:400},
}

const renderText = (text, className, baseweight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseweight}` }}>
            {char === " " ? "\u00A0" : char}
        </span>
    ));
}

const setupTextHover = (container, type) => {
    if(!container) return () => {};

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHTS[type];
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const {left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l- left + w/2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animateLetter(letter, min + (max-min) * intensity);
        });
    };
    const handleMouseLeave = () =>
        letters.forEach((letter) => animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
}
const Welcome = () => {
    const  titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const {openWindow, closeWindow, windows} = useWindowStore();

    const dockRef = useRef(null);



    const toggleApp = (app) => {
        if(!app.canOpen) return;
        const window = windows[app.id];
        if(!window){
            console.error(`Windows not found for app: ${app.id}`);
            return;
        }
        if(window.isOpen){
            closeWindow(app.id);
        }else{
            openWindow(app.id);
        }
        console.log(windows);
    };


    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, 'title');
        const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle');

        return () => {
            subtitleCleanup();
            titleCleanup();
        };
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>{renderText(
                " Hey, I'm Surendra! Welcome to my",
                'text-xl md:text-2xl font-georama text-white',
                100,
            )}</p>
            <h1 ref={titleRef} className='mt-7 text-white '>
                {renderText(
                    "portfolio",
                    "text-8xl md:text-9xl italic font-georama",
                )}
            </h1>

            <div className='small-screen'>
                <div ref={dockRef} className="flex">
                    {dockApps.slice(-3,-1).map(({id, name, icon, canOpen }) => (
                        <div key={id} className="  ">
                            <button
                                type="button"
                                className="small-dock-icon"
                                aria-label={name}
                                data-tooltip-id="dock-tooltip"
                                data-tooltip-content={name}
                                data-tooltip-delay-show={150}
                                disabled={!canOpen}
                                onClick={() => toggleApp({id, canOpen})}
                            >
                                <img
                                    src={`/images/${icon}`}
                                    alt={name}
                                    loading="lazy"
                                    className= {canOpen ? "" : "opacity-60"}
                                />
                            </button>
                        </div>
                    ))}
                    <Tooltip id="dock-tooltip" place="top" className="tooltip" />
                </div>
            </div>
        </section>
    )
}
export default Welcome
