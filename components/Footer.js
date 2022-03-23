import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="text-center">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
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
    </footer>
  );
}
