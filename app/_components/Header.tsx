export default function Header() {
  return (
    <header className="sticky top-0 py-4 flex justify-between pt-4 border-b-2 bg-background px-12 z-50">
      <a href="">
        <h1 className="text-lg font-bold text-primary-foreground max-md:hidden">
          {' '}
          LucSP.com
        </h1>
      </a>
      <div className="flex-1" />
      <ul className="flex items-center gap-2">
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
