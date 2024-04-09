import React from 'react';
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.png';
import weatherApp from '../assets/portfolio/weatherApp.png';
import math from '../assets/portfolio/math.png';
import concert from '../assets/portfolio/concert.png';
import { FaEye } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Portfolio = () => {
  const portfolio = [
    { id: 2, 
      src: project1,
      text: 'Application that allows users to add books,update the progess of the books and delete the books once completed',
      title: 'Book Store',
      link1: 'https://tafloninno.github.io/Bookstore/',
      link2: 'https://github.com/Tafloninno/Bookstore',
      stack: 'React, Redux, CSS, JavaScript'
     },
    { id: 3, 
      src: project2,
      text: 'Meals app is an app that consumes apis to show a list of meals. Users can also leave comments, their insights on the app and are able to like thier meals ',
      title: 'Meals app',
      link1: 'https://david-lanzz.github.io/Kanban/dist/',
      link2: 'https://github.com/Tafloninno/Second_capstone',
      stack: 'JavaScript, HTML, CSS'
    },
    { id: 4, 
      src: Skycast, 
      text: ' A weather App  using  API to display cities weather and give detail data for every city.',
      title: 'weather App',
      link1: 'https://66159969d9897b293763540f--silver-buttercream-ab2563.netlify.app/',
      link2: 'https://github.com/Tafloninno/Third-Capstone-project',
      stack: 'React, Redux, CSS, HTML'
    },
    { id: 5, 
        src: math, 
        text: ' A website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
        title: 'Math magician',
        link1: 'https://tafloninno.github.io/Math_magician/',
        link2: 'https://github.com/Tafloninno/Math_magician',
        stack: 'JavaScript, HTML, CSS, Webpack'
      },
      { id: 6, 
        src: concert, 
        text: ' Monsters of Rock is a program made with Html, CSS and JavaScript. It comprises of two pages of Desktop and two pages of mobile..',
        title: 'Monsters of Rock',
        link1: 'https://tafloninno.github.io/Monsters_of_Rock_concert/',
        link2: 'https://github.com/Tafloninno/Monsters_of_Rock_concert',
        stack: 'JavaScript, HTML, CSS'
      },
  ];

  const goToLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-gray-800 to-black  w-full text-white md:h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full'>
        <div className='pb-8 flex flex-col items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-10'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-0 overflow-hidden'>
          {portfolio.map(({ id, src, title, text, stack, link1, link2 }) => (
            <div key={id} className='relative shadow-md shadow-gray-600 rounded-lg animate-scale-up'>
              <LazyLoadImage src={src} alt='Project Screenshot' className='rounded-md w-full' />
              <div className=" flex flex-col justify-center absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90 text-white p-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                
                <p className="text-xl font-semibold mb-2">{title}</p>
                <p className="text-sm">{text}</p>
                <p>Stack: {stack}</p>
                <div className="flex justify-center font-bold mt-4 space-x-2">
                  <button className="flex items-center gap-2 px-4 py-2 text-white rounded hover:text-blue-600 transition duration-300" onClick={() => goToLink(link1)}>
                    Demo<FaEye />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-white rounded hover:text-blue-600 transition duration-300" onClick={() => goToLink(link2)}>
                    Source<BsGithub />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
