import React from 'react';
import budgetBuddy from '../assets/portfolio/budgetBuddy.png';
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.png';
import weatherApp from '../assets/portfolio/weatherApp.png';
import { FaEye } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Portfolio = () => {
  const portfolio = [
    { 
      id: 1, 
      src: budgetBuddy, 
      text: 'A mobile web application where you can manage your budget',
      title: 'Budget Buddy',
      link1: 'https://buddy-4izw.onrender.com/',
      link2: 'https://github.com/Tafloninno/budget-app'
    },
    { id: 2, 
      src: project1,
      text: 'This is a website that allow users to add and remove books',
      title: 'Book Store',
      link1: 'https://tafloninno.github.io/Bookstore/',
      link2: 'https://github.com/Tafloninno/Bookstore'
     },
    { id: 3, 
      src: project2,
      text: 'A mobile web application where you can manage your budget',
      title: 'Budget Buddy',
      link1: 'https://buddy-4izw.onrender.com/',
      link2: 'https://github.com/Tafloninno/budget-app'
    },
    { id: 4, 
      src: weatherApp, 
      text: ' A weather App  using  API to display cities weather and give detail data for every city.',
      title: 'weather App',
      link1: 'https://tafloninno.github.io/Third-Capstone-project/',
      link2: 'https://github.com/Tafloninno/Third-Capstone-project'
    },
  ];

  const goToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 overflow-hidden'>
          {portfolio.map(({ id, src, title, text, link1, link2 }) => (
            <div key={id} className='relative shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='Project Screenshot' className='rounded-md h-full' />
              <div className=" flex flex-col justify-center absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90 text-white p-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                {/* Additional information */}
                <p className="text-xl font-semibold mb-2">{title}</p>
                <p className="text-sm">{text}</p>
                {/* Buttons */}
                <div className="flex justify-center font-bold mt-4 space-x-2">
                  <button className="px-4 py-2 text-white rounded hover:text-blue-600 transition duration-300" onClick={() => goToLink(link1)}>
                    <FaEye />
                  </button>
                  <button className="px-4 py-2 text-white rounded hover:text-blue-600 transition duration-300" onClick={() => goToLink(link2)}>
                    <BsGithub />
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
