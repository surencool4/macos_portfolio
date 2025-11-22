import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock} from "#components";
import {TextFile, Finder, Resume, Safari, Terminal, Image, Contact} from "#windows/";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <TextFile />
            <Image />
            <Contact />
        </main>
    )
}
export default App
