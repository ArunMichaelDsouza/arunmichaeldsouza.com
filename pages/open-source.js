import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const OpenSource = ({ title, description, ...props }) => {
  const metaTitle = 'Open Source | Arun Michael Dsouza';
  const metaDescription =
    'Utilities and modules written in ReactJS, AngularJS, NodeJS, Sass/CSS etc. that get 3M downloads every month!';
  const metaKeywords = 'projects, personal projects, personal website';
  const metaURL = 'https://arunmichaeldsouza.com/open-source';
  const metaImage = 'https://arunmichaeldsouza.com/img/arun-michael-dsouza.png';
  const projects = [
    {
      language: 'JavaScript',
      url: 'https://github.com/ArunMichaelDsouza/joypad.js',
      title: 'joypad.js',
      image: '/img/projects/icons/joypad.js.png',
      description:
        'JavaScript library that lets you connect and use various gaming controllers with browsers that support the Gamepad API. Less than 5KB in size with zero dependencies and support for button press, axis movement events and vibration play effect.',
    },
    {
      language: 'Python/Tensorflow',
      url: 'https://github.com/ArunMichaelDsouza/tensorflow-image-detection',
      title: 'tensorflow-image-detection',
      image: '/img/projects/icons/tensorflow-image-detection.png',
      description:
        "A generic image detection program that uses Google's Machine Learning library, Tensorflow and a pre-trained Deep Learning Convolutional Neural Network model called Inception.",
    },
    {
      language: 'JavaScript/React JS',
      url: 'https://github.com/ArunMichaelDsouza/react-image-appear',
      title: 'react-image-appear',
      image: '/img/projects/icons/react-image-appear.png',
      description: 'ReactJS component to make images appear with transition as they load.',
    },
    {
      language: 'CSS',
      url: 'https://github.com/ArunMichaelDsouza/CSS-Mint',
      title: 'CSS-Mint',
      image: '/img/projects/icons/css-mint.png',
      description: 'Lightweight and simple to use UI Kit. Fully responsive, just 3KB gzipped.',
    },
    {
      language: 'JavaScript/Angular JS',
      url: 'https://github.com/ArunMichaelDsouza/ng-youtube-embed',
      title: 'ng-youtube-embed',
      image: '/img/projects/icons/ng-youtube-embed.png',
      description:
        'AngularJS module to embed Youtube videos with support for Youtube player parameters and JavaScript API for iframe embeds. Superlight (less than 5KB) and easy to use! Supports Youtube video URLs and IDs. No 3rd party JS dependencies.',
    },
    {
      language: 'JavaScript/Angular JS',
      url: 'https://github.com/ArunMichaelDsouza/ng-image-appear',
      title: 'ng-image-appear',
      image: '/img/projects/icons/ng-image-appear.png',
      description: 'AngularJS Module to make images appear with transition as they load.',
    },
    {
      language: 'JavaScript/jQuery',
      url: 'https://github.com/ArunMichaelDsouza/picla',
      title: 'picla',
      image: '/img/projects/icons/picla.png',
      description: 'jQuery plugin that converts Alt-texts into simple image labels.',
    },
    {
      language: 'CSS/Sass',
      url: 'https://github.com/ArunMichaelDsouza/pineapple-sass',
      title: 'pineapple-sass',
      image: '/img/projects/icons/pineapple-sass.png',
      description: 'A must-have Sass mixin library for all your Sassy needs',
    },
    {
      language: 'JavaScript/Angular JS',
      url: 'https://github.com/ArunMichaelDsouza/ng-textarea-enter',
      title: 'ng-textarea-enter',
      image: '/img/projects/icons/ng-textarea-enter.png',
      description: 'Execute a function on pressing the enter key in a textarea.',
    },
    {
      language: 'HTML/CSS',
      url: 'https://github.com/ArunMichaelDsouza/bootstrap-football-homepage',
      title: 'bootstrap-football-homepage',
      image: '/img/projects/icons/bootstrap-football-homepage.png',
      description: 'A minimal Bootstrap 3 one page Theme for Football lovers.',
    },
    {
      language: 'Processing',
      url: 'https://github.com/ArunMichaelDsouza/D_Pad',
      title: 'D_Pad',
      image: '/img/projects/icons/d-pad.png',
      description: 'Drumming App built with Processing 2, for Desktop/Mobile Environments.',
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
                footer {
                    clear: both;
                }
            `,
          }}
        />
        <section className="content-wrapper">
          <h1 className="page-primary-title">
            <Link href="/open-source">
              <a>Open Source</a>
            </Link>
          </h1>
          <div className="sub-text lh">
            Utilities and modules written in ReactJS, AngularJS, NodeJS, Sass/CSS etc. that get <span>6M </span>
            downloads every month!
            <br />
            <br />
            For the long term sustenance and growth of my open source projects, I have launched a{' '}
            <a href="https://www.patreon.com/arunmichaeldsouza" target="_blank">
              Patreon page!{' '}
            </a>
            If you or your company use any of my projects or like what I'm doing, please consider backing me so I can
            continue maintaining and working on these projects and new ones. Your pledge could be as small as $1/month.
            I'd really appreciate your support! To become a patron kindly click this button -<br />
            <br />
            <a href="https://www.patreon.com/bePatron?u=8841116" target="_blank">
              <img src="/img/patreon.png" width="180px" height="auto" />
            </a>
          </div>
          <section style={{ margin: '0 -10px' }}>
            {projects &&
              projects.map((project, index) => {
                return (
                  <div key={index}>
                    <div className="info-panel split">
                      <div className="pre-text">
                        <span>{project.language}</span>
                      </div>
                      <h2 className="page-secondary-title">
                        <a href={project.url} target="_blank">
                          {project.title}
                        </a>
                      </h2>
                      <p>
                        <a href={project.url} target="_blank">
                          <img src={project.image} />
                        </a>
                      </p>
                      <div className="pre-text lh desc">{project.description}</div>
                      <p>
                        <span style={{ marginRight: 8 }}>
                          <a
                            className="github-button"
                            href={project.url}
                            data-icon="octicon-star"
                            data-size="large"
                            data-show-count="true"
                            aria-label={`Star ArunMichaelDsouza/${title} on GitHub`}
                          >
                            Star
                          </a>
                        </span>
                        <a
                          className="github-button"
                          href={`${project.url}/fork`}
                          data-icon="octicon-repo-forked"
                          data-size="large"
                          data-show-count="true"
                          aria-label={`Fork ArunMichaelDsouza/${title} on GitHub`}
                        >
                          Fork
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
          </section>
        </section>
        <script async="" defer="" src="https://buttons.github.io/buttons.js"></script>
      </Layout>
    </>
  );
};

export default OpenSource;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
