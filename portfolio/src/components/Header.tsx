import { Link } from 'react-router-dom';
import About from '../routes/About';
import Skills from '../routes/Skills';
import Projects from '../routes/Projects';
import LandingPage from '../routes/LandingPage';

export default () => {
  return (
    <header className="flex items-center justify-between py-12">
        <Link  className="p-4 rounded-full bg-neutral-100" to={'/'}>
            <LandingPage/>
        </Link>
        <Link className="p-4 rounded-full bg-neutral-100" to={'/About'}>
            <About/>
        </Link>
        <Link className="p-4 rounded-full bg-neutral-100" to={'/Skills'}>
            <Skills/>
        </Link>
        <Link className="p-4 rounded-full bg-neutral-100" to={'/Projects'}>
            <Projects/>
        </Link>
      
    </header>
  );
};

