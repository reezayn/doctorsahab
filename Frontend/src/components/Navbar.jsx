import React, {useState} from 'react';
// import { Link, animateScroll as scroll, } from 'react-scroll'
import { Link} from 'react-router-dom'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link to='/'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Doctorsahab.</h1>
          </Link>
          <ul className='hidden md:flex'>
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          {/* <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li> */}
          <li><a href="/#allinoneid">About</a></li>
          {/* <li><Link to="patientpage" smooth={true} offset={-50} duration={500}>Services</Link></li> */}
          <li><a href="/#servicesid">Services</a></li>
          {/* <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Packages</Link></li> */}
          <li><a href="/#pricingid">Packages</a></li>
          <li><Link to="pharmacy" smooth={true} offset={-50} duration={500}>ePharmacy</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <Link to="patientpage">
            <button className='px-8 py-3'>Sign Up</button>
          </Link>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className=''>
            <button className=''>Sign In</button>
            <Link to='patientpage'>Sign Up</Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
