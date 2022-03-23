import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="text-center">
        <nav>
          <h1 className="page-primary-title">
            <Link href="/">
              <a>Arun Michael Dsouza</a>
            </Link>
          </h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/talks">
                <a>Talks</a>
              </Link>
            </li>
            <li>
              <Link href="/open-source">
                <a>Open Source</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
