import React, { useState } from "react";

const About=()=>{
   
    return <>
        <div className="bg-[#232425] w-full min-h-screen text-[#a9a9b3]">
            <p className="mb-8 pt-16  text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                #<span className="text-[#e06c75] font-bold">Experience </span> 
                #<span className="text-[#1AACAC]">Education </span> 
                #<span className="text-[#e4bb68]">Social Media </span>
                #<span className="text-[#789461]">CV </span>
            </p>

            <div className="flex flex-col items-center justify-center p-8">
                <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li class="mb-10 ms-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        
                        <h3 class="flex items-center px-3 text-xl font-semibold text-[#789461] selection:bg-gray-600">Senior Software Engineer <span class="px-3 text-sm font-normal leading-none text-gray-400">January 2022 - Present</span></h3>
                        <a href="#" className="inline-flex mb-4 px-3 text-sm font-normal leading-none text-blue-700 selection:bg-gray-600 selection:text-pink-400">Samsung R&D Institute Bangladesh
                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        
                        <ul class="max-w-screen-md mb-4 px-3 text-base font-normal text-gray-500 space-y-1 text-gray-500 list-disc list-inside selection:bg-gray-600 selection:text-gray-100">
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        
                        <h3 class="flex items-center px-3 text-xl font-semibold text-[#789461] selection:bg-gray-600">Senior Software Engineer <span class="px-3 text-sm font-normal leading-none text-gray-400">January 2022 - Present</span></h3>
                        <a href="#" className="inline-flex mb-4 px-3 text-sm font-normal leading-none text-blue-700 selection:bg-gray-600 selection:text-pink-400">Samsung R&D Institute Bangladesh
                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        
                        <ul class="max-w-screen-md mb-4 px-3 text-base font-normal text-gray-500 space-y-1 text-gray-500 list-disc list-inside selection:bg-gray-600 selection:text-gray-100">
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                        </ul>
                    </li>
                    <li class="ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        
                        <h3 class="flex items-center px-3 text-xl font-semibold text-[#789461] selection:bg-gray-600">Senior Software Engineer <span class="px-3 text-sm font-normal leading-none text-gray-400">January 2022 - Present</span></h3>
                        <a href="#" className="inline-flex mb-4 px-3 text-sm font-normal leading-none text-blue-700 selection:bg-gray-600 selection:text-pink-400">Samsung R&D Institute Bangladesh
                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        
                        <ul class="max-w-screen-md mb-4 px-3 text-base font-normal text-gray-500 space-y-1 text-gray-500 list-disc list-inside selection:bg-gray-600 selection:text-gray-100">
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                            <li>
                                 Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.
                            </li>
                        </ul>
                    </li>
                </ol>

            </div>
        </div>
    </>
}
export default About;