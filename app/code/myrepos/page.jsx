import React from 'react'
import Card from '../../components/Card'

const fetchRepos =  async () => {
    const response = await fetch("https://api.github.com/users/viktorijagj/repos");
    
    // await new Promise((resolve)=>setTimeout(resolve,1000)); 
    // delay to show the loading page
    
    const repos = response.json()
    return repos;
}

export default async function ReposPage() {

    const repos = await fetchRepos();
    console.log(repos)
   
  return (
  
    <div className='p-6 pt-9 bg-gray-600 '>
        <h1 className='text-4xl text-center text-gray-200 uppercase font-bold pt-9 pb-9'>Repositories</h1>
        <div className='p-9 grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-9'>
        {repos.map((repo)=> {
       
        return (
           <Card key={repo.key} name={repo.name} published={repo.created_at} forks={repo.forks_count}/>
        )
    })}
    </div></div>
  )
}
