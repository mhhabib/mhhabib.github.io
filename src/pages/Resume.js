import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import latestResume from "../files/CV_Md_Habibur_Rahman.pdf"
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, {useEffect} from 'react';
import ReactGA from "react-ga4"

const Resume=()=>{
    useEffect(()=>{
        ReactGA.send({ hitType: "pageview", page: "/me/resume", title: "Resume page" });
    },[])
    
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
        renderToolbar: (Toolbar) => (
            <Toolbar>
                {
                    (toolbarSlot) => (
                        <div style={{ marginLeft: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '10px'}}>
                                {toolbarSlot.SwitchTheme({})}
                                {toolbarSlot.ZoomIn({})}
                                {toolbarSlot.Zoom({})}
                                {toolbarSlot.ZoomOut({})}
                                {toolbarSlot.Download({})}
                                {toolbarSlot.Print({})}
                                {toolbarSlot.EnterFullScreen({})}
                            </div>
                        </div>
                    )
                }
            </Toolbar>
        )
    });
    return <>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className="flex flex-col md:items-center md:justify-center p-8 text-center">
                <div className='w-full md:w-[60%]'
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '750px',

                    }}>   
                         <Viewer fileUrl={latestResume}  plugins={[defaultLayoutPluginInstance]} />
                </div>
            </div>
        </Worker>
    </>
}
export default Resume;