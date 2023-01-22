import React from 'react'
import {
    // CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import { Link} from 'react-router-dom'
import bgImg from '../assets/docteam.png'

const Hero = () => {
  return (
    <div id='heroid' name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Medics at your footsteps</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Doctorsahab AI</h1>
                <p className='text-2xl'>Serving you with best doctor facility online</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'><Link to='patientpage'>Get medicated</Link></button>
            </div>
            <div>
                <img className='w-full hover:scale-105 transition-transform' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Our Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Book Appointment</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Online Consultation</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Health Packages</p>
                    {/* <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Find doctor near yous</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero