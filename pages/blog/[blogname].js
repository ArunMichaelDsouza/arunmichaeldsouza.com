import Link from 'next/link';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import SocialShare from '../../components/SocialShare';

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  const { title, url, metaDescription, metaKeywords, metaImage } = frontmatter;
  const pageTitle = `${title} | Arun Michael Dsouza`;
  const blogUrl = `https://arunmichaeldsouza.com/blog/${url}`;

  if (!frontmatter) return <></>;

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta itemprop="name" content={pageTitle} />
        <meta itemprop="description" content={metaDescription} />
        <meta itemprop="image" content={metaImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@amdsouza92" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@amdsouza92" />
        <meta name="twitter:image:src" content={metaImage} />
      </Head>
      <Layout pageTitle={pageTitle}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
             html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}body,html{font-family:Source Sans Pro,sans-serif;font-size:16px}.text-center{text-align:center}.text-left{text-align:left}.separator{margin-top:40px}.lh{line-height:22px}.ul-reset{padding:0;margin:0;list-style:none}a{color:#4263eb;text-decoration:none}a:hover{cursor:pointer;text-decoration:underline}.icon-location{width:15px;height:15px}.img-resp{width:100%;height:auto}.content-wrapper{width:60%;margin:150px auto 40px}@media screen and (max-width:768px){.content-wrapper{width:100%;padding:0 15px;box-sizing:border-box}}.page-primary-title{font-size:2em;margin-bottom:15px}.page-primary-title>a{display:inline-block;color:#1e1e1e;padding-bottom:5px;border-bottom:4px solid #4263eb}.page-primary-title>a:hover{text-decoration:none}@media screen and (max-width:768px){.page-primary-title>a{font-size:1em}}.sub-text{margin-bottom:40px;color:#585858}.sub-text span{color:#4b4b4b;font-weight:700}.pre-text{margin-bottom:10px;color:#585858;font-weight:400}.page-secondary-title{margin:0 0 40px;color:#1e1e1e;padding-bottom:10px;border-bottom:1px solid #4263eb}.page-secondary-title>a{color:#1e1e1e}.page-secondary-title>a:hover{text-decoration:none}.blog-content{margin-bottom:70px;font-weight:400;color:#222;font-size:1.2em;line-height:1.7em}.blog-content figure{margin:0;text-align:center}.blog-content figure img{width:90%;height:auto;margin:0 auto}@media screen and (max-width:768px){.blog-content figure img{width:100%}}.blog-content .medium-insert-images:first-child>figure>img{width:100%;height:auto}.blog-content blockquote{font-style:italic;border-left:3px solid #222;padding-left:20px;margin:0}.blog-content figcaption,.blog-content figcaption>p{margin:0;font-size:14px;text-align:center;color:#585858;line-height:22px}.social-share.fixed{position:fixed;top:40%;left:8%}.social-share.fixed>a{display:block;margin-bottom:15px}@media screen and (max-width:768px){.social-share.fixed{display:none!important}}.social-share.flat{display:none;margin-bottom:30px}.social-share.flat>a{margin-right:15px;display:inline-block}@media screen and (max-width:768px){.social-share.flat{display:block!important}}.social-share>a>svg{width:25px;height:25px;fill:#222}header{position:fixed;margin:0;width:100%;top:0;left:0;background-color:#fff;border-bottom:1px solid #4263eb;padding:15px 0;z-index:1000}header .page-primary-title{margin:0 0 10px}footer{padding:15px 0;border-top:1px solid #4263eb}footer nav ul li a{font-size:1em}nav ul{margin:0;padding:0;list-style-type:none}nav ul li{display:inline-block;margin-right:5px}nav ul li:not(:last-child):after{content:"/";color:#4263eb}nav ul li a{padding-right:5px;font-size:1.2em}nav ul li a:hover{text-decoration:underline}.grid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.grid .row{margin-left:-15px;margin-right:-15px}.grid .row:after,.grid .row:before{content:"";clear:both;display:table}.grid .row [class*=cm-col]{position:relative;padding-left:15px;padding-right:15px}@media (min-width:768px){.grid .row .col-30{float:left;width:30%}}@media (min-width:768px){.grid .row .col-70{float:left;width:70%}}@media (min-width:768px){.grid .row .col-80{float:left;width:80%}}@media (min-width:768px){.grid .row .col-20{float:left;width:20%}}.list-item{margin-bottom:40px}.list-item .info{padding:0 0 0 10px}@media (max-width:768px){.list-item .info{padding:0}}.list-item .info .page-secondary-title{margin:0 0 20px}@media (max-width:768px){.list-item .info .page-secondary-title{margin:10px 0}}@media (max-width:768px){.list-item .info .pre-text{margin:0}}.more-blogs>.sub-text{margin:0 0 20px -15px;border-bottom:1px solid #4263eb;display:inline-block;padding-bottom:10px;color:#1e1e1e;font-weight:700}.more-blogs .list-item{margin-bottom:20px}.more-blogs .list-item:last-child{margin-bottom:40px}.blog-content figure img.blog-gif{width:30%}@media screen and (max-width:768px){.blog-content figure img.blog-gif{width:50%}}.tags-container{margin:-25px auto 25px}.blog-tag{vertical-align:super;margin-right:8px}
             .blog-content img {
               width: 100%;
               height: auto;
             }
            `,
          }}
        />
        <div className="social-share fixed" id="social-share-fixed">
          <SocialShare url={blogUrl} />
        </div>
        <article className="content-wrapper">
          <h1 className="page-primary-title">
            <Link href="/blog/undefined">
              <a>{frontmatter.title}</a>
            </Link>
          </h1>
          <div className="sub-text">
            Published on <span>{frontmatter.date}</span>
          </div>
          <div className="blog-content">
            <ReactMarkdown children={markdownBody} />
          </div>
          <div className="social-share flat">
            <SocialShare url={blogUrl} />
          </div>
          <div id="disqus_thread"></div>
        </article>
        <script type="text/javascript" src="/js/disqus.js"></script>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { blogname } = ctx.params;

  const content = await import(`../../blogs/${blogname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../../blogs', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
