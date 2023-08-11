import React from 'react';

const About = () => {
    return (
        <div 
            name='about'
            className='h-[75vh] w-full text-white'>
            <div className='max-w-screen-lg px-10 md:px-20 md:py-10  mx-auto flex flex-col justify-center itmes-center w-full h-full'>
                <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>

                <p className='text-xl mt-4'>
                    I’m a software developer! I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
                </p>
                
                {/* <p className='text-xl mt-4'>
                    I’m a software developer! I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
                </p> */}
                </div>
            </div>
        </div>
    );
}

export default About;
