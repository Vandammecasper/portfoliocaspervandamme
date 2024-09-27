'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Check if we are on the client side
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleRouting = (route: string) => () => {
    setMenuOpen(false);
    if (isClient) {
      window.location.href = `/${route}`;
    }
  };

  return (
    <header>
      <div className="w-screen bg-slate-800 h-24 flex justify-between items-center px-10 sm:px-14 lg:px-20 fixed z-20">
        <div className="row-span-2 flex items-center">
          <Link href="/">
            <h1 className="text-slate-200 text-xl lg:text-2xl font-bold">Casper Van Damme</h1>
          </Link>
          <Link className="hidden md:block" href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
            <img className="pl-4" src="/icons/linkedin.png" alt="linkedin icon" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 lg:gap-16">
          <Link className="row-span-3 text-slate-200 text-xl font-semibold" href="/about">About</Link>
          <Link className="row-span-3 text-slate-200 text-xl font-semibold" href="/projects">Projects</Link>
          <div className="border-sky-400 border-2 p-2 rounded-xl">
            <Link className="row-span-3 text-slate-200 text-xl font-semibold" href="/contactme">Contact Me</Link>
          </div>
        </div>
        <img src="/icons/menu.svg" alt="menu" onClick={toggleMenu} className="h-8 md:hidden" />
      </div>
      <div className={`overflow-hidden h-screen w-screen bg-black fixed z-20 flex flex-col gap-16 items-center justify-center bg-primary transition ease-in-out delay-100 duration-700 ${menuOpen ? '-translate-y-0' : '-translate-y-full'}`}>
        <img onClick={toggleMenu} src="/icons/close.svg" alt="close" className="absolute top-8 right-8 sm:right-14 h-12" />
        {isClient && (
          <>
            <button className={`text-4xl font-bold ${window.location.pathname === '/' ? "text-sky-500" : "text-slate-200"}`} onClick={handleRouting('')}>Home</button>
            <button className={`text-4xl font-bold ${window.location.pathname === '/about' ? "text-sky-500" : "text-slate-200"}`} onClick={handleRouting('about')}>About</button>
            <button className={`text-4xl font-bold ${window.location.pathname === '/projects' ? "text-sky-500" : "text-slate-200"}`} onClick={handleRouting('projects')}>Projects</button>
            <button className={`text-4xl font-bold ${window.location.pathname === '/contactme' ? "text-sky-500" : "text-slate-200"}`} onClick={handleRouting('contactme')}>Contact Me</button>
          </>
        )}
      </div>
    </header>
  );
};
