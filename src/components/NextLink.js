import { Link } from "react-router-dom";
export const NextLink=()=>{
    return <Link to="/me" className="inline-flex mb-4 px-3 text-sm font-normal leading-none text-blue-700 selection:bg-gray-600 selection:text-pink-400">Next
                <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
}