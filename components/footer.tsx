import Link from 'next/link'
import Container from '../components/container'

export default function Footer() {
  return (
    <footer className="py-2">
        <div className='flex justify-center static bottom-0 left-0 right-0 m-auto text-sm font-sans'>
        <Link 
            className='font-sans text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="https://www.payamd.com"
            >
            payamd.com 
            </Link> <span className='px-1'> © 2023 </span>  
        </div>    
    </footer>
  )
}