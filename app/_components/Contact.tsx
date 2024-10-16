'use client';
import { Button } from '@/components/ui/button';
import Section from './Section';
import mailIcon from '../assets/icons/mail-icon.svg';
import Image from 'next/image';
import { useState } from 'react';

interface UserData {
  email: string;
  message: string;
}
type Status = string;

export default function Contact() {
  const [formData, setFormData] = useState<UserData>({
    email: '',
    message: '',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<Status>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('Email envoyé avec succès!');
      setFormData({
        email: '',
        message: '',
      });
    } else {
      setStatus("Échec de l'envoi de l'email.");
    }
  }

  return (
    <div className="bg-black pb-6" id="contact">
      <Section className=" text-white">
        <h2 className="text-3xl font-bold border-t-4 inline-block border-white mt-5 ">
          Me contacter
        </h2>
        <div className="flex justify-between mx-2 items-center max-md:flex-col">
          <div className="flex m-4 items-center">
            <Image
              className="bg-white rounded-lg"
              src={mailIcon}
              alt="icone d'e-mail"
              width={40}
              height={40}
            />
            <p className="text-xl m-3 mt-5">saintpol.luc@gmail.com</p>
          </div>
          <div className="flex m-3 gap-4">
            <a
              href="https://github.com/Luc-StPol"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="bg-white rounded-xl"
                src="https://cdn.svgporn.com/logos/github-icon.svg"
                alt="icone Github"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lucsaintpol/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="bg-white rounded-xl"
                src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
                alt="icone Github"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <form className="p-5" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            type="mail"
            id="email"
            className="w-full rounded-sm m-4 p-2 text-black"
            placeholder="john@doe.fr"
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }));
            }}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="m-4 w-full h-48 rounded-sm p-2 text-black"
            placeholder="Que souhaitez-vous écrire ?"
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                message: e.target.value,
              }));
            }}
          />
          <div className="flex justify-center">
            <Button className="bg-white text-black" type="submit">
              {' '}
              Envoyer
            </Button>
          </div>
        </form>
      </Section>
    </div>
  );
}
