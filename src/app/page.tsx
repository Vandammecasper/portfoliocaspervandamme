'use client'
import React, { useEffect } from 'react'


export default async function Page () {
    useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const container = document.querySelector('main');
      if(container)
      container.scrollLeft += event.deltaY;
    };

    const main = document.querySelector('main');
    if (main)
    main.addEventListener('wheel', handleScroll);

    return () => {
      if (main)
      main.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <main className="h-screen w-screen bg-slate-900 overflow-x-scroll flex items-center">
      <div className="h-full bg-slate-900 flex items-center sm:pl-4 lg:pl-12 xl:pl-48 gap-0 sm:gap-8 lg:gap-12">
        <div className="w-72 sm:w-97 md:w-98 lg:w-100">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-jost font-black text-sky-500 pt-3 pl-10 lg:pl-20 3xl:pl-0">
            CASPER VAN DAMME
          </h1>
          <h4 className="sm:text-xl md:text-2xl lg:text-3xl 3xl:text-4xl font-inter font-light text-slate-200 pt-3 pl-10 lg:pl-20 3xl:pl-0">
            FULL-STACK DEVELOPER
          </h4>
        </div>
        <div className="-mt-6 md:-mt-7 lg:-mt-8 bg-sky-500 h-4 sm:h-6 md:h-8 lg:h-10 flex items-center pl-80 sm:pl-96 md:pl-100 gap-96 sm:gap-100 pr-96">
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>GRADUATION</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>SEP 2024</p>
          </button>
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>BACHELOR'S THESIS</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>JUN 2024</p>
          </button>
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>INTERNSHIP</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>JUN 2024</p>
          </button>
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>HAXX</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>JUN 2023</p>
          </button>
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>DOKEMACA</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>JAN 2023</p>
          </button>
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>CASH CAR</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>JUN 2022</p>
          </button>
          <button className="bg-slate-900 border-4 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center">
            <h3 className='text-sky-500 font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-28 whitespace-nowrap'>HOWEST</h3>
            <p className='text-slate-200 font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap'>SEP 2022</p>
          </button>
        </div>
      </div>
      <div className='absolute bottom-8 right-8 flex gap-2 md:gap-4 items-center'>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-inter font-light text-slate-200">
          SCROLL TO GO BACK IN TIME
        </p>
        <img src="/icons/arrowRight.svg" alt="" />
      </div>
      
    </main>
  );
}