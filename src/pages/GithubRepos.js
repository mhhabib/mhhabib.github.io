import React, {useEffect, useState} from "react";
import Repository from "./Repository";
import { Loading } from "../components/Loading";
import ReactGA from "react-ga4"

const GithubRepository=()=>{
    const [repositories, setRepositories]=useState([])
    const [isLoading, setIsLoading]=useState(false)

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/me/projects", title: "Project page" });
        setIsLoading(true)
        fetch("https://api.github.com/users/mhhabib/repos?page=1&per_page=1000")
          .then(res => res.json())
          .then(data => {
            setRepositories(data.filter(repo => repo.stargazers_count > 0 || repo.forks_count > 0))
            setIsLoading(false)
          })
    },[]);

    repositories.sort(function (a, b) {
        return a.stargazers_count - b.stargazers_count || a.forks_count - b.forks_count;
      }
    );
    repositories.reverse();
    
    if(isLoading){
        return <Loading/>
    }
    return <>
        <div className="flex flex-col items-center justify-center p-8">
            <div className="w-screen md:max-w-screen-lg mb-4 px-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                {repositories.map((repository)=>(
                    <Repository key={repository.id} repository={repository}/>
                ))}
            </div>
        </div>
    </>
}
export default GithubRepository