import React from 'react';
import HeroImage from '../assets/experience/heroImage.png';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div 
            name='home' 
            className='flex justify-center h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden'
        >
            <div className='max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <div>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        Hi, I'm Mugisha innocent
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I’m a software developer! I can help you build a product, feature, or website. Look through
                        some of my work and experience! If you like what you see and have a project you need
                        coded, don’t hesitate to contact me.
                    </p>
                    <div className='my-5'>
                            {/* <Link to='contact' smooth='500' className='text-white w-[35%] px-6 py-3 my-2 flex items-center rounded-md 
                            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold'>
                                Hire me
                                <span className='hover:rotate-90 duration-300'>
                                    <MdArrowRight size={25} className='ml-1'/>
                                </span>
                                
                            </Link> */}
                        <Link to='contact' smooth='500' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                        mx-auto px-6 py-3 my-8 flex-start
                        items-start rounded-md  
                        group-hover:scale-110 duration-300'
                        >
                            Let's talk
                        </Link>
                    </div>

                    </div>
                  
                </div>
                <div>
                    <img 
                        src={HeroImage} 
                        alt='my profile'
                        className='rounded-2xl mx-auto w-2/3'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
