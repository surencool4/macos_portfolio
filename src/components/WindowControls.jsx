import useWindowStore from "#store//window.js";

const WindowControls = ({target}) => {
    const {closeWindow, toggleMaximize} = useWindowStore();

    return <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}></div>
        <div className="minimize"></div>
        <div className="maximize" onClick={() => toggleMaximize(target)}></div>
    </div>
}
export default WindowControls

