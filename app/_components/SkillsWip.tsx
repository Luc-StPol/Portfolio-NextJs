/* eslint-disable react/no-unescaped-entities */
import Section from './Section';
import wipSkill from '../assets/jsonContent/skills.json';
import Image from 'next/image';

interface wipSkill {
  wip: string[];
  wipSkillIcon: string[];
}

export default function SkillsWip() {
  const skills = wipSkill.wip;
  return (
    <Section className="flex flex-col bg-gray-100 p-8 dark:bg-secondary dark:text-white">
      <div className="flex items-center ">
        <p className="w-14 h-5 mx-2 flex bg-gradient-to-l from-black to-gray-700 "></p>
        <h3 className="text-2xl text-black font-bold inline-block ">
          J'ai travailler avec
        </h3>
      </div>
      <ul className="flex justify-around flex-wrap">
        {skills.map((skill, i) => (
          <li
            key={i}
            className=" flex flex-col items-center md:m-5  mt-7 max-md:w-1/2"
          >
            <Image
              src={wipSkill.wipSkillIcon[i]}
              alt="icon"
              width={50}
              height={50}
              className="m-4 "
            />
            <p className="text-bold text-lg">{skill}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
