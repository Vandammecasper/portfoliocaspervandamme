import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home.png';
import about from '../assets/about.png';
import projects from '../assets/projects.png';
import contact from '../assets/contact.png';

function BottomNav() {
  return (
    <nav className="bg-gray-800 fixed bottom-0 left-0 right-0 z-50 xl:hidden pl-2 pr-2">
      <div className="mx-auto px-4 py-2 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 pt-4">
            <Link to={'/'}>
                <img src={home} alt="home icon" />
            </Link>
            <Link to={'/about'}>
                <img src={about} alt="about icon" />
            </Link>
            <Link to={'/projects'}>
                <img src={projects} alt="projects icon" />
            </Link>
            <Link to={'/contactme'}>
                <img src={contact} alt="contact icon" />
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
