import Skills from './Skills';
import Section from './Section';
import skills from '../assets/jsonContent/skills.json';

export default function SkillSection() {
  return (
    <Section>
      <h2
        className="text-3xl font-bold border-t-4 inline-block border-black max-md:mb-8"
        id="skills"
      >
        Mes Compétences
      </h2>
      <div className="md:flex justify-center my-12">
        <Skills skill={skills.front} stack="Front-End" />
        <Skills skill={skills.back} stack="Back-End" />
      </div>
    </Section>
  );
}
