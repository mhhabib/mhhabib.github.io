export const Loading = ()=> {
    return <>
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-green-500 animate-spin">
                </div>
            </div>
        </div>
    </>
}

export const Ping = ()=>{
    return <>
         <div class="flex items-center">
            <span class="relative inline-block align-middle">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 top-[6px]"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>    
            <span class="ml-2 align-middle">mhhabib</span>
        </div>
    </>
}