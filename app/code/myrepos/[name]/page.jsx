import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir"

export default function ReposName({params: {name}}) {
  return (
    <>
    <Suspense fallback={<div>Loading repos..</div>}>
    <Repo name={name} />
    </Suspense>
    <Suspense fallback={<div>Loading directories..</div>}>
    <RepoDir name={name}/>
    </Suspense>
    </>
    
  )
}
