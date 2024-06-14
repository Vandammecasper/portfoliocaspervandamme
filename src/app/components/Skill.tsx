'use client'
import { useState } from "react";

interface SkillProps {
  title: string;
  years: string;
}

const Skill: React.FC<SkillProps> = ({ title, years }) => {
  const [detail, setDetail] = useState(true);

  const handleDetail = () => {
    setDetail(!detail);
  };

  return (
    <div className="relative flex flex-wrap">
      {detail ? (
        <div
          onMouseEnter={handleDetail}
          onClick={handleDetail}
          className={`px-3.5 md:px-5 py-2 md:py-2.5 border-4 border-solid border-sky-500 rounded-3xl h-12 md:h-14 text-white items-center mx-2 md:text-2xl mt-4 transition-all duration-2500`}
        >
          {title}
        </div>
      ) : (
        <div
          onMouseLeave={handleDetail}
          onClick={handleDetail}
          className={`px-3.5 md:px-5 py-2 md:py-2.5 border-4 border-solid border-sky-500 rounded-3xl h-12 md:h-14 text-white items-center mx-2 md:text-2xl mt-4 transition-all duration-2500`}
        >
          {years}
        </div>
      )}
    </div>
  );
};

export default Skill;
