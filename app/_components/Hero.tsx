import Image from 'next/image';
import profilPicture from '../assets/images/photo cv_rond.png';

export default function Hero() {
  return (
    <div className="flex max-lg:flex-col items-start max-w-5xl m-auto max-lg:mx-3">
      <div className="flex-[2] flex flex-col gap-1">
        <h2 className="font-caption text-4xl font-bold">Luc Saint Pol</h2>
        <h3 className="text-3xl font-caption">Developpeur Web</h3>
        <p className="mt-3">
          Salut ! Je m&apos;appelle Luc, et je suis un développeur web passionné
          par la création d&apos; applications dynamiques et de sites web sur
          mesure.
        </p>
        <p className="mt-2">
          Ayant finaliser un diplôme de Développeur Web , j&apos;ai déjà acquis
          une solide expérience en React, Node.js, et aussi PHP, que
          j&apos;utilise pour donner vie à mes idées. J&apos;ai réalisé quelques
          projets durant ma formation, que je vous invite à découvrir juste en
          dessous.
        </p>
      </div>
      <div className="flex-1 ml-12 ">
        <Image
          src={profilPicture}
          className="h-auto max-w-xs w-56 max-lg:hidden"
          alt="photo de profil"
        />
      </div>
    </div>
  );
}
