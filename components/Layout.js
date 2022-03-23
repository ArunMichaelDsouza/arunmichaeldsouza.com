import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <link rel="shortcut icon" href="/img/favicon.png" />
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <Footer />
    </>
  );
}
