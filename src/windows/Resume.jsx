import WindowWrapper from "#hoc//WindowWrapper.jsx";
import {WindowControls} from "#components";
import {Download} from "lucide-react";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import useThemeStore from "#store//theme.js";

//Local Machine
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

//Production
// pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@{pdfjs.version}/build/pdf.worker.min.js';

const Resume = () => {
const theme = useThemeStore((s) => s.theme);
const getCurrentMode = () => {
        if (theme === "light" || theme === "dark") return theme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2> Resume.pdf</h2>

                <a href="files/resume.pdf" download className="cursor-pointer" title="Download resume">
                    <Download className="icon" />
                </a>

            </div>
            <Document file="files/resume.pdf" className={getCurrentMode() === 'dark' ? "dark" : ""} >
                <Page
                    pageNumber={1}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;
