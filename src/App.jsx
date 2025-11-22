import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock} from "#components";
import {TextFile, Finder, Resume, Safari, Terminal, Image} from "#windows/";

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
        </main>
    )
}
export default App
