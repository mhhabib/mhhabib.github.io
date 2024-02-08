import React, {Fragment} from "react"
import { Link } from "react-router-dom";
import emailIcon from "../images/icons8-email-96.png"
import pxIcon from "../images/icons8-500px-50.png"
import {detectDeviceAndOs} from "../Utils/Utils"

const Home=()=>{
    return <Fragment>
        <div className="bg-[#232425] w-full h-screen text-[#a9a9b3]">
            <div className="flex flex-col h-screen items-center justify-center text-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white font-[Ubuntu]">Md Habibur Rahman</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                        #<span className="text-[#e06c75]">Programmer </span> 
                        #<span className="text-[#1AACAC]">Listener </span> 
                        #<span className="text-[#e4bb68]">Traveller </span>
                        #<span className="text-[#789461]">Photographer</span>
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <a href="mailto:mhrahman7096@gmail.com" className="text-blue-700 border border-[#2D9596] hover:bg-[#2D9596] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <img src={emailIcon} className="w-4 h-4" alt="email"/>
                        </a>
                        <a href="https://www.facebook.com/iammhhabib/" target="_blank" rel="noreferrer" className="text-blue-700 border border-[#2D9596] hover:bg-[#2D9596]  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg className="w-4 h-4 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clipRule="evenodd"/>
                        </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/mh-habib/" target="_blank" rel="noreferrer" className="text-blue-700 border border-[#2D9596] hover:bg-[#2D9596]  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg className="w-4 h-4 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd"/>
                            <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                        </svg>  
                        </a>
                        <a href="https://github.com/mhhabib/" target="_blank" rel="noreferrer" className="text-blue-700 border border-[#2D9596] hover:bg-[#2D9596]  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg className="w-4 h-4 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clipRule="evenodd"/>
                        </svg>
                        </a>
                        <a href="https://stackoverflow.com/users/5929910/mhhabib" target="_blank" rel="noreferrer" className="text-blue-700 border border-[#2D9596] hover:bg-[#2D9596] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg className="w-4 h-4 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 20v-5h2v7H3v-7h2v5h12Z"/>
                            <path d="m6.8 14.5 8.8 1.8.3-1.7-8.7-1.8-.4 1.7ZM8 10.2l8 3.8.8-1.7-8-3.7-.8 1.6Zm3.4-5.5-1.2 1.4 6.9 5.7 1.1-1.4-6.8-5.7ZM15.6 17h-9v2h9v-2ZM12.9 3.1 19 9.5l1.4-1.4L14 2l-1 1.1Z"/>
                        </svg>  
                        </a>
                        <a href="https://500px.com/p/mhhabib/" target="_blank" rel="noreferrer" className="text-blue-700 border border-[#2D9596] hover:bg-[#2D9596] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <img src={pxIcon} className="w-4 h-4" alt="500px"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer">
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="mx-auto max-w-screen-xl text-center">
                    <span className="hidden md:inline">@mhhabib</span>
                    <span className="md:hidden">
                    <Link to="/me" className="inline-flex mb-4 px-3 text-sm font-normal leading-none text-blue-700 selection:bg-gray-600 selection:text-pink-400">Next
                        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    </span>
                    </div>
                    <div className="mx-auto max-w-screen-xl text-center">
                    <span className="hidden md:inline">
                    <Link to="/me" className="inline-flex mb-4 px-3 text-sm font-normal leading-none text-blue-700 selection:bg-gray-600 selection:text-pink-400">Next
                        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    </span>
                    <span className="md:hidden">@mhhabib </span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
export default Home;