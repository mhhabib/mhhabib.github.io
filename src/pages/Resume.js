import React, {useState, useEffect} from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import latestResume from "../files/CV_Md_Habibur_Rahman.pdf"
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {detectDeviceAndOs} from "../Utils/Utils"

const Resume=()=>{
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [
            defaultTabs[0], // Bookmarks tab
            defaultTabs[1], // Thumbnails tab
        ],
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
    if (detectDeviceAndOs().device === 'Mobile' || detectDeviceAndOs().device === 'Tablet') {
        return <div className="text-center mt-8">CV viewer is available only on PC devices.</div>;
    }
    
    return <>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '750px',
                        width: '60%',
                    }}>   
                         <Viewer fileUrl={latestResume}  plugins={[defaultLayoutPluginInstance]} />
                </div>
            </div>
        </Worker>
    </>
}
export default Resume;