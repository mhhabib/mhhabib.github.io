import React, {Fragment, useState, useEffect} from "react"
import { OnlinePresence } from "../components/OnlinePresence";
import { Ping } from "../components/Loading";
import { NextLink } from "../components/NextLink";

const Home=()=>{
    const [isUserOffline, setIsUserOffline] = useState(true)
    
    useEffect(()=>{
        window.addEventListener('online', function(e) {
            setIsUserOffline(true)
        }, false);
                    
        window.addEventListener('offline', function(e) {
            setIsUserOffline(false)
        }, false);
    },[])

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
                    {isUserOffline && <OnlinePresence/>}
                </div>
            </div>
            <div className="footer">
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="mx-auto max-w-screen-xl text-center">
                        <span className="hidden md:inline">
                            <Ping networkStatus={isUserOffline}/>
                        </span>
                        <span className="md:hidden">
                        {isUserOffline && <NextLink/>}
                        </span>
                        </div>
                        <div className="mx-auto max-w-screen-xl text-center">
                        <span className="hidden md:inline">
                        {isUserOffline && <NextLink/>}
                        </span>
                        <span className="md:hidden">
                        <Ping networkStatus={isUserOffline}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
export default Home;