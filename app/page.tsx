import { Poppins } from 'next/font/google'

const poppins = Poppins(
  { 
  weight:'400',
  subsets: ['latin'] }
  )

export default function Home() {
  return (
    <main className={poppins.className}>
      <h2 className='p-9'>My Next App</h2>
    </main>
  )
}
