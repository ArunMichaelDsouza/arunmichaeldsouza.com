import Link from 'next/link';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

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
          <a href="https://facebook.com/sharer/sharer.php?u=undefined" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/intent/tweet/?url=undefined" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=undefined" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path>
            </svg>
          </a>
          <a href="mailto:?body=undefined" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"></path>
            </svg>
          </a>
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
            <a href="https://facebook.com/sharer/sharer.php?u=undefined" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/intent/tweet/?url=undefined" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=undefined" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path>
              </svg>
            </a>
            <a href="mailto:?body=undefined" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"></path>
              </svg>
            </a>
          </div>
          <div id="disqus_thread"></div>
        </article>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        var disqus_config = function () {
          this.page.url = window.location.href;
          this.page.identifier = "";
        };
        (function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://arunmichaeldsouza.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })();
      `,
          }}
        ></script>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
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
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
