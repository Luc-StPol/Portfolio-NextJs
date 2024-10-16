import Image from 'next/image';

import styles from '../style/cercleIcon.module.css';

interface Skill {
  svg: string;
  stackName: string;
}
interface propsSkill {
  skill: Skill[];
  stack: string;
}

export default function Skills(props: propsSkill) {
  console.log('skills');
  const icons = props.skill;
  console.log(icons);
  return (
    <div className="md:mx-24 m-10" id="skills">
      <div className={styles.circle}>
        {icons.map((icon, i) => (
          <div
            key={i}
            className={styles.icon}
            style={
              {
                '--i': i as unknown as string,
                '--total': icons.length as unknown as string,
              } as React.CSSProperties
            }
          >
            <Image src={icon.svg} alt="icon" width={60} height={60} />
            <div className={styles.tooltip}>{icon.stackName}</div>
          </div>
        ))}
      </div>
      <h3 className="text-center text-lg font-bold p-4 bg-gradient-to-r from-gray-50 to-gray-300 max-md:my-5">
        {props.stack}
      </h3>
    </div>
  );
}
