import Image from 'next/image';

import styles from '../style/cercleIcon.module.css';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

interface Skill {
  svg: string;
  stackName: string;
}
interface propsSkill {
  skill: Skill[];
  stack: string;
}

export default function Skills(props: propsSkill) {
  const icons = props.skill;

  const { darkMode } = useContext(DarkModeContext);
  const circleBorderColor = darkMode ? 'white' : 'black';
  const boxShadowColor = darkMode ? 'black' : 'grey';

  return (
    <div className="md:mx-24 m-10 barStarter" id="skills">
      <div
        className={styles.circle}
        style={
          { '--circleBorderColor': circleBorderColor } as React.CSSProperties
        }
      >
        {icons.map((icon, i) => (
          <div
            key={i}
            className={styles.icon}
            style={
              {
                '--boxShadowColor': boxShadowColor,
                '--i': i as unknown as string,
                '--total': icons.length as unknown as string,
              } as React.CSSProperties
            }
          >
            <Image src={icon.svg} alt="icon" width={60} height={60} />
            <div className={`text-black dark:text-white ${styles.tooltip}`}>
              {icon.stackName}
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center text-lg font-bold p-4 bg-gradient-to-r from-gray-50 to-gray-300 dark:from-gray-500 dark:to-gray-800 dark:text-white max-md:my-5 ">
        {props.stack}
      </h3>
    </div>
  );
}
