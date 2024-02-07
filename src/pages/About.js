import React from "react";
import {Link, Outlet} from "react-router-dom"

const About=()=>{
   
    return <>
        <div className="bg-[#232425] w-full min-h-screen text-[#a9a9b3]">
            <p className="mb-8 pt-16  text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                #<span className="text-[#e06c75]"><Link to="experience">Experience</Link> </span> 
                #<span className="text-[#1AACAC]"><Link to="education">Education</Link> </span> 
                #<span className="text-[#e4bb68]">Social Media </span>
                #<span className="text-[#789461]">CV </span>
            </p>
            <Outlet/>
        </div>
    </>
}
export default About;