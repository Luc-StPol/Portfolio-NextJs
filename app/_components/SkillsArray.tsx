import Image from 'next/image';

interface MyComponentProps {
  skills: string[];
  icons: string[];
}

export default function SkillsArray(props: MyComponentProps) {
  const skills = props.skills;

  return (
    <ul className="flex max-md:flex-col">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center m-4 ">
          <Image
            src={props.icons[i]}
            alt="icon"
            width={50}
            height={50}
            className="m-2"
          />
          <p>{skill}</p>
        </li>
      ))}
    </ul>
  );
}
