import Link from "next/link";

async function fetchRepo (name){
    const response = await fetch(`https://api.github.com/repos/viktorijagj/${name}`);
    const repo = response.json();
    return repo;
}

const Repo = async ({name}) => {
    const repo = await fetchRepo(name);
    console.log(repo)
  return (

    <div className='p-9 shadow-xl shadow-slate-400 text-center bg-gray-200'>
     <h1>My repo name: <span className="font-bold pl-3 uppercase text-3xl text-green-600"> {repo.name}</span></h1>
     <h6>You can visit my github: <Link href={repo.html_url} target="_blank" className="font-bold pl-3">{repo.html_url}</Link></h6>
    </div>
  )
}

export default Repo