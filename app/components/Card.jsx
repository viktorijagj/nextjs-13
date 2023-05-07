import Link from 'next/link'
import React from 'react'
import {FaCodeBranch} from 'react-icons/fa'

export default function RepoCard({name, published,forks}) {
  return (
    <section className='p-9 shadow-xl shadow-slate-400 text-center bg-gray-200'>
        <span className='flex justify-center items-center'><h1 className='text-lg font-bold pr-2'>Repository name: </h1><Link className='text-green-700 font-bold uppercase text-lg' href={`/code/myrepos/${name}`}>{name}</Link></span>
        <span className='flex justify-center items-center'><h6 className='text-lg font-bold pr-2'>Published : </h6>{published}</span>
        <span  className='flex justify-center items-center'>
        <FaCodeBranch/>
        {forks}
        </span>
    </section>
  )
}
