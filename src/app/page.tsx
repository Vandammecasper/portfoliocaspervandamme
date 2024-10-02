'use client'
import React, { useEffect, useState } from 'react'


export default function Page () {
  const [grad, setGrad] = useState(false);
  const [howest, setHowest] = useState(false);
  const [cashCar, setCashCar] = useState(false);
  const [dokemaca, setDokemaca] = useState(false);
  const [haxx, setHaxx] = useState(false);
  const [internship, setInternship] = useState(false);
  const [thesis, setThesis] = useState(false);

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
      <div className="h-full bg-slate-900 flex items-center -ml-4 sm:ml-0 sm:pl-4 lg:pl-12 xl:pl-48 gap-0 sm:gap-8 lg:gap-12">
        <div className="w-80 sm:w-97 md:w-98 lg:w-100 2xl:w-110">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-jost font-black text-sky-500 pt-3 pl-10 lg:pl-20 2xl:pl-0">
            CASPER VAN DAMME
          </h1>
          <h4 className="sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-inter font-light text-slate-200 pt-3 pl-10 lg:pl-20 2xl:pl-0">
            FULL-STACK DEVELOPER
          </h4>
        </div>
        <div className="-mt-6 md:-mt-7 lg:-mt-8 bg-sky-500 h-4 sm:h-6 md:h-8 lg:h-10 flex items-center pl-80 sm:pl-96 md:pl-100 2xl:pl-110 gap-96 sm:gap-100 pr-96">
          <div className='flex flex-col items-center'>
            <button onClick={() => setGrad(!grad)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${grad ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition ease-in-out delay-150 duration-300 -mt-1.5 sm:mt-0 mb-0.5 sm:mb-0 ${grad ? 'opacity-100 scale-15 sm:scale-25 md:scale-30' : 'opacity-0'}`}>GRADUATION</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-4 sm:-mt-3 md:-mt-2.5 lg:-mt-3 mb-1 sm:mb-0.5 lg:mb-0 ${grad ? 'opacity-100 scale-15 sm:scale-25 md:scale-30' : 'opacity-0'}`}>SEP 2024</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-44 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-14 sm:-mt-13 md:-mt-11 lg:-mt-12 ${grad ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>After three years of hard work, I am proud to have graduated from Howest. This achievement marks an important milestone, and I am excited to explore new opportunities. I am currently seeking my first job to apply my skills and knowledge while starting the next chapter of my career.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${grad ? 'opacity-0' : 'opacity-100'}`}>GRADUATION</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${grad ? 'opacity-0' : 'opacity-100'}`}>SEP 2024</p>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => setThesis(!thesis)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${thesis ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition ease-in-out whitespace-nowrap delay-150 duration-300 -mt-1 sm:mt-0 md:mt-1 ${thesis ? 'opacity-100 scale-12 sm:scale-20 md:scale-30' : 'opacity-0'}`}>BACHELOR'S THESIS</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-3.5 sm:-mt-3 mb-0.5 md:mb-0 ${thesis ? 'opacity-100 scale-15 sm:scale-25 md:scale-30' : 'opacity-0'}`}>JUN 2024</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-40 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-15 sm:-mt-13 md:-mt-12 lg:-mt-13 ${thesis ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>For my bachelor’s thesis, I studied how a website's interface can adapt to the emotions of the user using the Skybiometry API. I created four interfaces—happy, neutral, sad, and angry—based on detected emotions, with sections on research, development, reflections, and recommendations.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${thesis ? 'opacity-0' : 'opacity-100'}`}>BACHELOR'S THESIS</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${thesis ? 'opacity-0' : 'opacity-100'}`}>JUN 2024</p>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => setInternship(!internship)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${internship ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition ease-in-out delay-150 duration-300 -mt-1 sm:mt-0 mb-0.5 sm:mb-0 ${internship ? 'opacity-100 scale-20 sm:scale-25 md:scale-30' : 'opacity-0'}`}>INTERNSHIP</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-3.5 sm:-mt-3 md:-mt-2.5 lg:-mt-3 ${internship ? 'opacity-100 scale-20 sm:scale-25 md:scale-30' : 'opacity-0'}`}>JUN 2024</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-44 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-10 sm:-mt-9 md:-mt-8 ${internship ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>During my final semester, I completed a 14-week internship at Sweet Mustard as a front-end developer for Project Hello, a system that notifies hosts when visitors check in and collects feedback after meetings.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${internship ? 'opacity-0' : 'opacity-100'}`}>INTERNSHIP</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${internship ? 'opacity-0' : 'opacity-100'}`}>JUN 2024</p>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => setHaxx(!haxx)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${haxx ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition ease-in-out delay-150 duration-300 -mt-1.5 sm:mt-0 ${haxx ? 'opacity-100 scale-25 sm:scale-30' : 'opacity-0'}`}>HAXX</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-3.5 sm:-mt-3 mb-0.5 lg:mb-0 ${haxx ? 'opacity-100 scale-15 sm:scale-25 md:scale-30' : 'opacity-0'}`}>JUN 2023</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-44 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-13.5 sm:-mt-13 md:-mt-11 lg:-mt-14 ${haxx ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>Haxx, my industry project in the fourth semester, was developed with classmates for Axxes. We created a conference tool with a website and app, allowing employees to view the calendar, sign up for events, and, during the conference, use the app as a guide to track their schedule and events.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${haxx ? 'opacity-0' : 'opacity-100'}`}>HAXX</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${haxx ? 'opacity-0' : 'opacity-100'}`}>JUN 2023</p>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => setDokemaca(!dokemaca)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${dokemaca ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition ease-in-out delay-150 duration-300 -mt-1 sm:mt-0 ${dokemaca ? 'opacity-100 scale-20 sm:scale-25 md:scale-30' : 'opacity-0'}`}>DOKEMACA</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-3.5 sm:-mt-3 md:-mt-2.5 lg:-mt-3 mb-0.5 sm:mb-0 md:mb-0.5 lg:mb-0 ${dokemaca ? 'opacity-100 scale-20 sm:scale-25 md:scale-30' : 'opacity-0'}`}>JAN 2023</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-40 sm:w-44 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-13.5 sm:-mt-11 md:-mt-10 lg:-mt-12 ${dokemaca ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>Dokemaca, my first team project for Howest's Bruges campus, features six interactive poles with buttons and lights, encouraging physical activity through game modes like "time attack" and "Simon says," where participants tap the lit-up poles and compare scores.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${dokemaca ? 'opacity-0' : 'opacity-100'}`}>DOKEMACA</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${dokemaca ? 'opacity-0' : 'opacity-100'}`}>JAN 2023</p>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => setCashCar(!cashCar)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${cashCar ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition whitespace-nowrap ease-in-out delay-150 duration-300 -mt-1.5 sm:mt-0 ${cashCar ? 'opacity-100 scale-20 sm:scale-25 md:scale-30' : 'opacity-0'}`}>CASH CAR</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-3.5 sm:-mt-3 md:-mt-2.5 lg:-mt-3 mb-0.5 lg:mb-0 ${cashCar ? 'opacity-100 scale-15 sm:scale-25 md:scale-30' : 'opacity-0'}`}>JUN 2022</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-40 sm:w-44 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-13.5 sm:-mt-11 md:-mt-10 lg:-mt-12 ${cashCar ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>Cash Car, my first project at MCT, helps a group of students share travel costs by calculating each passenger's payment based on distance, fuel prices, and the number of passengers, using RFID tags for check-ins and offering real-time trip monitoring and history.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${cashCar ? 'opacity-0' : 'opacity-100'}`}>CASH CAR</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${cashCar ? 'opacity-0' : 'opacity-100'}`}>JUN 2022</p>
          </div>
          <div className='flex flex-col items-center'>
            <button onClick={() => setHowest(!howest)} className={`mt-18 sm:mt-22 md:mt-25 lg:mt-27 bg-slate-900 border-sky-500 rounded-full w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 flex flex-col items-center transition ease-in-out delay-100 duration-300 ${howest ? 'scale-1000 sm:scale-800 md:scale-500 border-1' : 'scale-100 border-4'}`}>
              <h4 className={`text-sky-500 text-center font-jost font-black text-sm lg:text-base transition ease-in-out delay-150 duration-300 -mt-1.5 sm:mt-0 ${howest ? 'opacity-100 scale-20 sm:scale-25 md:scale-30' : 'opacity-0'}`}>HOWEST</h4>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs transition ease-in-out delay-150 duration-300 whitespace-nowrap -mt-3.5 sm:-mt-3 md:-mt-2.5 lg:-mt-3 mb-0.5 md:mb-0 ${howest ? 'opacity-100 scale-15 sm:scale-25 md:scale-30' : 'opacity-0'}`}>SEP 2022</p>
              <p className={`text-slate-200 text-center font-inter text-xxs lg:text-xs w-40 sm:w-44 lg:w-56 transition ease-in-out delay-150 duration-300 -mt-12 sm:-mt-11 md:-mt-9 lg:-mt-10 ${howest ? 'opacity-100 scale-15 sm:scale-20 md:scale-30' : 'opacity-0'}`}>After high school, I wanted to pursue my passion for websites, and applications, so I searched for a development program. When I found the course and campus at Howest, I was immediately sold and started my next chapter in Kortrijk.</p>
            </button>
            <h3 className={`text-sky-500 text-center font-jost font-black sm:text-xl md:text-2xl lg:text-4xl mt-6 sm:mt-8 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${howest ? 'opacity-0' : 'opacity-100'}`}>HOWEST</h3>
            <p className={`text-slate-200 text-center font-inter text-xs sm:text-md md:text-lg lg:text-xl mt-2 whitespace-nowrap transition ease-in-out delay-100 duration-300 ${howest ? 'opacity-0' : 'opacity-100'}`}>SEP 2022</p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 lg:bottom-8 right-8 flex gap-2 md:gap-4 items-center'>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-inter font-light text-slate-200">
          SCROLL TO GO BACK IN TIME
        </p>
        <img src="/icons/arrowRight.svg" alt="" />
      </div>
      
    </main>
  );
}