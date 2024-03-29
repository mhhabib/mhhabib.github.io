const Repository = (props)=>{
    
    return <>
        <div className="w-full max-w-sm p-4 bg-[#292a2b] shadow-lg">
            <h5 className="text-lg font-medium mb-2 text-[#789461]">
                <a href={props.repository.html_url} target='_blank' rel="noreferrer">{props.repository.full_name}</a>
            </h5>
            <div className="text-sm font-medium mb-4">
                {props.repository.description}
            </div>
            <div className="flex items-center text-sm font-medium bg-red-6 text-gray-500 dark:text-gray-300">
                <svg className="w-6 h-6 mr-1 text-yellow-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                </svg>
                <span>{props.repository.forks_count}</span>
                <svg className="w-6 h-6 mx-1 text-teal-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z"/>
                </svg>
                <span>{props.repository.stargazers_count}</span>
            </div>
        </div>
    </>
}
export default Repository;