import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const Talks = ({ title, description, ...props }) => {
  const metaTitle = 'Talks | Arun Michael Dsouza';
  const metaDescription =
    'Talks and presentations from JSConf Iceland, JSConf Belgium, other conferences and community meetups.';
  const metaKeywords = 'talks, presentations, personal website';
  const metaURL = 'https://arunmichaeldsouza.com/talks';
  const metaImage = 'https://arunmichaeldsouza.com/img/arun-michael-dsouza.png';
  const talks = [
    {
      eventDate: 'September 2023',
      videoUrl: 'https://portal.gitnation.org/contents/using-the-gamepad-api-for-a-better-gaming-experience-on-the-web',
      title: 'Using the Gamepad API for a Better Gaming Experience on the Web',
      slidesUrl:
        'https://speakerdeck.com/arunmichaeldsouza/using-the-gamepad-api-for-a-better-gaming-experience-on-the-web-b74f2775-6e5d-4d22-8983-124ad208305e',
      eventName: 'JS GameDev Summit 2023',
      location: 'Online',
      eventUrl: 'https://portal.gitnation.org/events/js-gamedev-summit-2023',
    },
    {
      eventDate: 'August 2020',
      videoUrl: 'https://youtu.be/zqFubo31HGY?t=22045',
      title: 'Using the Gamepad API for a better gaming experience on the web',
      slidesUrl:
        'https://speakerdeck.com/arunmichaeldsouza/using-the-gamepad-api-for-a-better-gaming-experience-on-the-web',
      eventName: 'JavaScript and Friends Conference 2020',
      location: 'Online',
      eventUrl: 'https://www.javascriptandfriends.com/',
    },
    {
      eventDate: 'June 2019',
      videoUrl: '',
      title: 'React JS Code Splitting - Why and How?',
      slidesUrl: 'https://speakerdeck.com/arunmichaeldsouza/react-js-code-splitting-why-and-how',
      eventName: 'React JS Code Splitting - Why and How? - Workshop (React Delhi NCR Meetup)',
      location: '91Springboard, Jhandewalan',
      eventUrl: 'https://www.meetup.com/React-Delhi-NCR/events/262421016/',
    },
    {
      eventDate: 'March 2019',
      videoUrl: '',
      title: 'Building your first web app with React JS, Webpack and Babel',
      slidesUrl:
        'https://speakerdeck.com/arunmichaeldsouza/building-your-first-web-app-with-react-js-webpack-and-babel',
      eventName: 'Building your first web app with React JS, Webpack and Babel - Workshop (React Delhi NCR Meetup)',
      location: 'Squareboat, Gurugram',
      eventUrl: 'https://www.meetup.com/React-Delhi-NCR/events/260002049/',
    },
    {
      eventDate: 'October 2018',
      videoUrl: '',
      title: 'React 16 & NPM, Create your own library',
      slidesUrl:
        'https://speakerdeck.com/arunmichaeldsouza/react-16-and-npm-create-your-own-library-react-delhi-ncr-07-oct-2018-meetup',
      eventName: 'React 16 & NPM, Create your own library - Workshop (React Delhi NCR Meetup)',
      location: 'AdPushup, Delhi',
      eventUrl: 'https://www.meetup.com/React-Delhi-NCR/events/254373998/',
    },
    {
      eventDate: 'September 2018',
      videoUrl: 'https://www.youtube.com/watch?v=w_X4gi-s2qc',
      title: 'Houdini, what lies ahead',
      slidesUrl: 'https://speakerdeck.com/arunmichaeldsouza/houdini-what-lies-ahead-web-weekend-kathmandu-2018',
      eventName: 'Web Weekend Kathmandu 2018',
      location: 'Kathmandu, Nepal',
      eventUrl: 'https://2018.wwktm.co/',
    },
    {
      eventDate: 'July 2018',
      videoUrl: '',
      title: 'Intro to React Components',
      slidesUrl:
        'https://speakerdeck.com/arunmichaeldsouza/intro-to-react-components-react-delhi-ncr-01-jul-2018-meetup',
      eventName: 'Intro to React Components (React Delhi NCR Meetup)',
      location: 'AdPushup, Delhi',
      eventUrl: 'https://www.meetup.com/React-Delhi-NCR/events/252088128/',
    },
    {
      eventDate: 'February 2018',
      videoUrl: 'https://www.youtube.com/watch?v=BalUlHBwwlM',
      title: 'Houdini, what lies ahead',
      slidesUrl: 'https://speakerdeck.com/arunmichaeldsouza/houdini-what-lies-ahead-jsconf-iceland-2018',
      eventName: 'JSConf Iceland 2018',
      location: 'Reykjavík, Iceland',
      eventUrl: 'https://2018.jsconf.is/',
    },
    {
      eventDate: 'October 2017',
      videoUrl: 'https://www.facebook.com/arunmichael.dsouza/posts/1720093901365502',
      title: 'The Era of Module Bundlers',
      slidesUrl: 'https://speakerdeck.com/arunmichaeldsouza/the-era-of-module-bundlers-gdg-dev-fest-delhi-2017',
      eventName: 'The Era of Module Bundlers - GDG Dev Fest Delhi 2017',
      location: 'Investopad, Gurugram',
      eventUrl: 'https://www.meetup.com/GDGNewDelhi/events/243302149/',
    },
    {
      eventDate: 'October 2017',
      videoUrl: '',
      title: 'Getting started with React 16',
      slidesUrl: 'https://speakerdeck.com/arunmichaeldsouza/getting-started-with-react-16',
      eventName: '',
      location: 'AdPushup, Delhi',
      eventUrl: '',
    },
    {
      eventDate: 'June 2017',
      videoUrl: 'https://www.youtube.com/watch?v=umqy8Fu3j0Q',
      title: 'The Era of Module Bundlers',
      slidesUrl: 'https://speakerdeck.com/arunmichaeldsouza/the-era-of-module-bundlers-jsconf-belgium-2017',
      eventName: 'JSConf Belgium 2017',
      location: 'Brugge, Belgium',
      eventUrl: 'https://www.jsconf.be/',
    },
  ];

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
                html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}body,html{font-family:Source Sans Pro,sans-serif;font-size:16px}.text-center{text-align:center}.text-left{text-align:left}.separator{margin-top:40px}.lh{line-height:22px}.ul-reset{padding:0;margin:0;list-style:none}a{color:#4263eb;text-decoration:none}a:hover{cursor:pointer;text-decoration:underline}.icon-location{width:15px;height:15px}.img-resp{width:100%;height:auto}header{position:fixed;margin:0;width:100%;top:0;left:0;background-color:#fff;border-bottom:1px solid #4263eb;padding:15px 0;z-index:1000}header .page-primary-title{margin:0 0 10px}nav ul{margin:0;padding:0;list-style-type:none}nav ul li{display:inline-block;margin-right:5px}nav ul li:not(:last-child):after{content:"/";color:#4263eb}nav ul li a{padding-right:5px;font-size:1.2em}nav ul li a:hover{text-decoration:underline}footer{padding:15px 0;border-top:1px solid #4263eb}footer nav ul li a{font-size:1em}.content-wrapper{width:60%;margin:150px auto 40px}@media screen and (max-width:768px){.content-wrapper{width:100%;padding:0 15px;box-sizing:border-box}}.page-primary-title{font-size:2em;margin-bottom:15px}.page-primary-title>a{display:inline-block;color:#1e1e1e;padding-bottom:5px;border-bottom:4px solid #4263eb}.page-primary-title>a:hover{text-decoration:none}@media screen and (max-width:768px){.page-primary-title>a{font-size:1em}}.sub-text{margin-bottom:40px;color:#585858}.sub-text span{color:#4b4b4b;font-weight:700}.pre-text{margin-bottom:10px;color:#585858;font-weight:400}.page-secondary-title{margin:0 0 40px;color:#1e1e1e;padding-bottom:10px;border-bottom:1px solid #4263eb}.page-secondary-title>a{color:#1e1e1e}.page-secondary-title>a:hover{text-decoration:none}.info-panel{margin-bottom:40px;border-bottom:1px solid #4263eb}.info-panel>h2{border-bottom:none;margin-bottom:0}.info-panel>p{margin:0;padding-bottom:10px}.info-panel img{vertical-align:middle;margin-right:5px}.info-panel.split{float:left;width:50%;padding:0 10px;border-bottom:none;box-sizing:border-box}.info-panel.split>p:last-child{border-bottom:1px solid #4263eb}.info-panel.split img{max-width:100%;height:200px}@media screen and (max-width:768px){.info-panel.split img{max-width:200px;height:auto}}.info-panel.split .desc{min-height:120px}@media screen and (max-width:768px){.info-panel.split .desc{min-height:auto}}@media screen and (max-width:768px){.info-panel.split{width:100%}}
            `,
          }}
        />
        <section className="content-wrapper">
          <h1 className="page-primary-title">
            <Link href="/talks">
              <a>Talks</a>
            </Link>
          </h1>
          <div className="sub-text lh">
            Talks and presentations from JSConf Iceland, JSConf Belgium, other conferences and community meetups.
          </div>
          {talks &&
            talks.map((talk, index) => {
              return (
                <div key={index}>
                  <div className="info-panel">
                    <div className="pre-text">
                      <span>{talk.eventDate}</span>
                    </div>
                    <h2 className="page-secondary-title">
                      {talk.videoUrl && (
                        <a href={talk.videoUrl} target="_blank">
                          {talk.title}
                        </a>
                      )}
                      {!talk.videoUrl && (
                        <a href={talk.slidesUrl} target="_blank">
                          {talk.title}
                        </a>
                      )}
                    </h2>
                    {talk.eventName && (
                      <p>
                        <a href={talk.eventUrl} target="_blank">
                          {talk.eventName}
                        </a>
                      </p>
                    )}
                    <p>
                      {talk.videoUrl && (
                        <a href={talk.videoUrl} target="_blank" style={{ marginRight: 8 }}>
                          Video
                        </a>
                      )}
                      <a href={talk.slidesUrl} target="_blank">
                        Slides
                      </a>
                    </p>
                    <p>
                      <img className="icon-location" src="/img/location.png" />
                      <span>{talk.location}</span>
                    </p>
                  </div>
                </div>
              );
            })}
        </section>
      </Layout>
    </>
  );
};

export default Talks;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
