import Link from "next/link";

async function fetchDir(name) {
    const response = await fetch(`https://api.github.com/repos/viktorijagj/${name}/contents`);
        await new Promise((resolve)=>setTimeout(resolve,3000)); 
    // delay to show the loading page
    const contents = await response.json();
    return contents;

}

async function RepoDir({name}) {

    const contents = await fetchDir(name);
    

    const dirs = contents.filter((content)=>content.type === 'dir');
    console.log(dirs)
  return (
    <div className="text-center pt-9">
        {dirs.map((dir)=>{
            return(
                <li className="list-none" key={dir.path}>
                    <Link href={`/code/myrepos/${name}/${dir.path}`}>
                        {dir.path}
                    </Link>
                </li>
            )
        })}
    </div>
  )
}

export default RepoDir