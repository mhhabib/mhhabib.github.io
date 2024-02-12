
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

export const Ping = (props)=>{
    console.log("Online status: ", props.networkStatus)
    const pingAnimationDesign = props.networkStatus? "animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 top-[6px]": "animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75 top-[6px]"
    const pingAnimationSolid = props.networkStatus? "relative inline-flex rounded-full h-3 w-3 bg-green-500": "relative inline-flex rounded-full h-3 w-3 bg-red-500"
    const connectionMessage = props.networkStatus? <span className="ml-2 align-middle">mhhabib</span> : <span className="ml-2 align-middle text-red-500">Seems your internet connection is down!</span>
    
    return <>
         <div className="flex items-center">
            <span className="relative inline-block align-middle">
                <span className={pingAnimationDesign}></span>
                <span className={pingAnimationSolid}></span>
            </span>    
            {connectionMessage}
        </div>
    </>
}