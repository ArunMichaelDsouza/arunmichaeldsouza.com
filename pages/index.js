import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const Index = ({ blogs, title, description, ...props }) => {
  const metaTitle = 'Arun Michael Dsouza';
  const metaDescription = 'Ramblings on web development, JavaScript, open source and tech in general.';
  const metaKeywords = 'blog, personal website, technology blog, personal blog';
  const metaURL = 'https://arunmichaeldsouza.com';
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
      <Layout pageTitle={title}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}body,html{font-family:Source Sans Pro,sans-serif;font-size:16px}.text-center{text-align:center}.text-left{text-align:left}.separator{margin-top:40px}.lh{line-height:22px}.ul-reset{padding:0;margin:0;list-style:none}a{color:#4263eb;text-decoration:none}a:hover{cursor:pointer;text-decoration:underline}.icon-location{width:15px;height:15px}.img-resp{width:100%;height:auto}header{position:fixed;margin:0;width:100%;top:0;left:0;background-color:#fff;border-bottom:1px solid #4263eb;padding:15px 0;z-index:1000}header .page-primary-title{margin:0 0 10px}nav ul{margin:0;padding:0;list-style-type:none}nav ul li{display:inline-block;margin-right:5px}nav ul li:not(:last-child):after{content:"/";color:#4263eb}nav ul li a{padding-right:5px;font-size:1.2em}nav ul li a:hover{text-decoration:underline}footer{padding:15px 0;border-top:1px solid #4263eb}footer nav ul li a{font-size:1em}.content-wrapper{width:60%;margin:150px auto 40px}@media screen and (max-width:768px){.content-wrapper{width:100%;padding:0 15px;box-sizing:border-box}}.page-primary-title{font-size:2em;margin-bottom:15px}.page-primary-title>a{display:inline-block;color:#1e1e1e;padding-bottom:5px;border-bottom:4px solid #4263eb}.page-primary-title>a:hover{text-decoration:none}@media screen and (max-width:768px){.page-primary-title>a{font-size:1em}}.sub-text{margin-bottom:40px;color:#585858}.sub-text span{color:#4b4b4b;font-weight:700}.pre-text{margin-bottom:10px;color:#585858;font-weight:400}.page-secondary-title{margin:0 0 40px;color:#1e1e1e;padding-bottom:10px;border-bottom:1px solid #4263eb}.page-secondary-title>a{color:#1e1e1e}.page-secondary-title>a:hover{text-decoration:none}.grid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.grid .row{margin-left:-15px;margin-right:-15px}.grid .row:after,.grid .row:before{content:"";clear:both;display:table}.grid .row [class*=cm-col]{position:relative;padding-left:15px;padding-right:15px}@media (min-width:768px){.grid .row .col-30{float:left;width:30%}}@media (min-width:768px){.grid .row .col-70{float:left;width:70%}}@media (min-width:768px){.grid .row .col-80{float:left;width:80%}}@media (min-width:768px){.grid .row .col-20{float:left;width:20%}}.list-item{margin-bottom:40px}.list-item .info{padding:0 0 0 10px}@media (max-width:768px){.list-item .info{padding:0}}.list-item .info .page-secondary-title{margin:0 0 20px}@media (max-width:768px){.list-item .info .page-secondary-title{margin:10px 0}}@media (max-width:768px){.list-item .info .pre-text{margin:0}}.content-wrapper{width:70%;margin-top:130px}@media screen and (max-width:768px){.content-wrapper{width:100%}}.tags-container a{display:block;font-size:1.25em;margin-bottom:10px}.tags-container svg{width:18px;vertical-align:middle}.list-item .info .page-secondary-title{width:95%}
        .list-item img {
          width: 100%;
          height: auto;
        }
        .grid .row .col-80 {
          width: 100%;
        }
      `,
          }}
        />
        <p className="description">{description}</p>
        <main>
          <section className="content-wrapper">
            <div className="grid">
              <div className="row">
                <div className="col-80">
                  <h1 className="page-primary-title">
                    <Link href="/">
                      <a>All blog posts</a>
                    </Link>
                  </h1>
                  <div className="sub-text lh">
                    Ramblings on <span>programming</span>, <span>open source</span>, <span>game development</span>,{' '}
                    <span>construction toys </span>and <span>tech </span>in general.
                  </div>
                  <PostList blogs={blogs} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const blogs = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context('../blogs', true, /\.md$/));

  return {
    props: {
      blogs,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
