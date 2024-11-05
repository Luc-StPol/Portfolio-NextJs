import Skills from './Skills';
import Section from './Section';
import skills from '../assets/jsonContent/skills.json';
import AnimationBar from './Animations/AnimationBar';

export default function SkillSection() {
  return (
    <Section>
      <h2
        className="text-3xl font-bold border-t-4 inline-block border-black max-md:mb-8 dark:text-primary"
        id="skills"
      >
        Mes Compétences
      </h2>
      <div className="md:flex justify-center my-12 barContent">
        <Skills skill={skills.front} stack="Front-End" />
        <AnimationBar />
        <Skills skill={skills.back} stack="Back-End" />
      </div>
    </Section>
  );
}
