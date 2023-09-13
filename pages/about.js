import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const About = ({ title, description, ...props }) => {
  const metaTitle = 'About | Arun Michael Dsouza';
  const metaDescription =
    'Computer programmer from India currently building enterprise products for the web. Tech speaker, open source software author and contributor.';
  const metaKeywords = 'blog, personal website, technology blog, personal blog, portfolio';
  const metaURL = 'https://arunmichaeldsouza.com/about';
  const metaImage = 'https://arunmichaeldsouza.com/img/arun-michael-dsouza.png';

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta itemprop="name" content={metaTitle} />
        <meta itemprop="description" content={metaDescription} />
        <meta itemprop="image" content={metaImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@amdsouza92" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@amdsouza92" />
        <meta name="twitter:image:src" content={metaImage} />
      </Head>
      <Layout pageTitle={metaTitle} description={metaDescription}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}body,html{font-family:Source Sans Pro,sans-serif;font-size:16px}.text-center{text-align:center}.text-left{text-align:left}.separator{margin-top:40px}.lh{line-height:22px}.ul-reset{padding:0;margin:0;list-style:none}a{color:#4263eb;text-decoration:none}a:hover{cursor:pointer;text-decoration:underline}.icon-location{width:15px;height:15px}.img-resp{width:100%;height:auto}header{position:fixed;margin:0;width:100%;top:0;left:0;background-color:#fff;border-bottom:1px solid #4263eb;padding:15px 0;z-index:1000}header .page-primary-title{margin:0 0 10px}nav ul{margin:0;padding:0;list-style-type:none}nav ul li{display:inline-block;margin-right:5px}nav ul li:not(:last-child):after{content:"/";color:#4263eb}nav ul li a{padding-right:5px;font-size:1.2em}nav ul li a:hover{text-decoration:underline}footer{padding:15px 0;border-top:1px solid #4263eb}footer nav ul li a{font-size:1em}.content-wrapper{width:60%;margin:150px auto 40px}@media screen and (max-width:768px){.content-wrapper{width:100%;padding:0 15px;box-sizing:border-box}}.page-primary-title{font-size:2em;margin-bottom:15px}.page-primary-title>a{display:inline-block;color:#1e1e1e;padding-bottom:5px;border-bottom:4px solid #4263eb}.page-primary-title>a:hover{text-decoration:none}@media screen and (max-width:768px){.page-primary-title>a{font-size:1em}}.sub-text{margin-bottom:40px;color:#585858}.sub-text span{color:#4b4b4b;font-weight:700}.pre-text{margin-bottom:10px;color:#585858;font-weight:400}.page-secondary-title{margin:0 0 40px;color:#1e1e1e;padding-bottom:10px;border-bottom:1px solid #4263eb}.page-secondary-title>a{color:#1e1e1e}.page-secondary-title>a:hover{text-decoration:none}.talks-list li{margin-top:15px;margin-bottom:15px;padding-bottom:15px;line-height:24px;border-bottom:1px solid #e4e4e4}.location img{vertical-align:middle;margin-right:5px}.content-wrapper{width:45%}@media screen and (max-width:768px){.content-wrapper{width:100%}}.main-img>img,.main-img>source{width:180px;height:180px;border-radius:50%;box-shadow:4px 4px 0 #4263eb}.intro-text{margin:0 auto}.intro-text p{text-align:left}.intro-text p a{margin-right:0}@media screen and (max-width:768px){.intro-text{width:100%}}.page-secondary-title{margin:0}.page-secondary-title svg{color:#4263eb;width:12px;height:auto;margin-left:8px;vertical-align:middle}.intro-text a,.talks-links a{margin:0 8px 0 0}
              .content-wrapper {
                margin: 140px auto;
              }
            `,
          }}
        />
        <section className="content-wrapper">
          <div className="text-center">
            <picture className="main-img">
              <source type="image/webp" srcSet="img/arun-michael-dsouza.webp" />
              <img src="img/arun-michael-dsouza.png" alt="Arun Michael Dsouza's image" />
            </picture>
            <div className="sub-text intro-text lh">
              <p>
                Computer programmer from India currently building enterprise products for the web. Tech speaker, open
                source software author and contributor. Creator of{' '}
                <a href="https://hyperpush.io/" target="_blank">
                  hyperpush.io
                </a>
                .
              </p>
              {/* <p>
                Community leader for{' '}
                <a href="https://www.meetup.com/React-Delhi-NCR/" target="_blank">
                  React Delhi-NCR
                </a>{' '}
                and{' '}
                <a href="https://www.meetup.com/Open-Source-Delhi/" target="_blank">
                  Open Source Delhi
                </a>
                .{' '}
              </p> */}
              <p>Plays drums (occasionally), loves travelling, listening to rock music and playing video games.</p>
              <a target="_blank" href="https://github.com/ArunMichaelDsouza">
                GitHub
              </a>
              <a target="_blank" href="https://twitter.com/amdsouza92">
                Twitter
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/arunmichaeldsouza/">
                Linkedin
              </a>
              <a target="_blank" href="https://www.behance.net/arunmichaeldsouza">
                Behance
              </a>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </div>
          </div>
          <div className="separator"></div>
          <section>
            <h2 className="page-secondary-title text-left">Work</h2>
            <p className="sub-text text-left lh">
              Currently working as a Senior Software Engineer at{' '}
              <a href="https://www.bloomberg.com/company" target="_blank">
                Bloomberg{' '}
              </a>
              in London, UK.
            </p>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
