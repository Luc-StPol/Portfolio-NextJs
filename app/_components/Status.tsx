'use client';

import { useState } from 'react';
import Section from './Section';
import projects from '../assets/jsonContent/projects.json';
import '../style/imageProject.css';

import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogHeader,
} from '@/components/ui/dialog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { DialogTitle } from '@radix-ui/react-dialog';
import SkillsArray from './SkillsArray';

interface Project {
  title: string;
  subtitle: string;
  concept: string;
  utilite: string;
  stacks: string[];
  stacksIcons: string[];
  picture: string[];
  gitHubLink: string;
  skills: string[];
}

export default function Status() {
  const [isActive, setActive] = useState(1);

  return (
    <Section className="max-lg:flex-col items-start">
      <h2
        className="text-3xl font-bold border-t-4 inline-block border-black mb-12"
        id="projects"
      >
        Mes Projets
      </h2>
      <div className="flex max-lg:flex-col max-lg:items-center flex-wrap gap-2 ">
        {projects.map((project: Project, i) => (
          <Dialog key={i}>
            <DialogTrigger>
              <Card className="hover:bg-slate-200 w-96 h-96">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="relative w-auto flex justify-center">
                  <div className="screenContainer3">
                    <Image
                      src={project.picture[0]}
                      alt="photo de présentation"
                      width={300}
                      height={300}
                    />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="  h-full md:max-w-screen-sm md:h-5/6 overflow-auto flex flex-col justify-between">
              <DialogHeader>
                <DialogTitle className="text-center">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-center">
                  {project.subtitle}
                </DialogDescription>
              </DialogHeader>

              {/* Tab's dialog content */}
              <div className={isActive === 1 ? 'active' : 'hidden'}>
                <div className="flex justify-center mb-20">
                  <div className="screenContainer">
                    <Image
                      src={project.picture[1]}
                      alt="image du projet"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="screenContainer">
                    <Image
                      src={project.picture[2]}
                      alt="image du projet"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <p>{project.concept}</p>
              </div>

              <div className={isActive === 2 ? 'active' : 'hidden'}>
                <div className="flex justify-center ">
                  <div className="screenContainer2 mb-20">
                    <Image
                      src={project.picture[3]}
                      alt="image du projet"
                      width={600}
                      height={300}
                    />
                  </div>
                </div>
                <p>{project.utilite} </p>
              </div>

              <div className={isActive === 3 ? 'active' : 'hidden'}>
                <h4 className="m-2 text-lg">Stack utilisées: </h4>
                <SkillsArray
                  skills={project.stacks}
                  icons={project.stacksIcons}
                />
                <h4 className="m-2 text-lg">Compétences acquises :</h4>
                <ul>
                  {project.skills.map((skill, i) => (
                    <li key={i} className="m-1">
                      {' '}
                      - {skill}
                    </li>
                  ))}
                </ul>

                {/* Github link */}
                <div className="mt-20">
                  <a
                    href={project.gitHubLink}
                    className="flex items-center justify-center mt-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://cdn.svgporn.com/logos/github-icon.svg"
                      alt="icon github"
                      width={50}
                      height={50}
                      className="mr-3"
                    />
                    <p className="text-blue-400">Github du projet</p>
                  </a>
                </div>
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink onClick={() => setActive(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink onClick={() => setActive(2)}>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink onClick={() => setActive(3)}>
                      3
                    </PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
}
