import Link from 'next/link';

export default function PostList({ blogs }) {
  if (blogs === 'undefined') return null;

  return (
    <div>
      {!blogs && <div>No blogs!</div>}
      {blogs &&
        blogs.map((blog, index) => {
          return (
            <div key={index}>
              <div className="grid list-item">
                <div className="row">
                  <div className="col-30">
                    <Link href={`/blog/${blog.slug}`}>
                      <a>
                        <img src={`/img/blogs/${blog.frontmatter.url}/1-small.png`} />
                      </a>
                    </Link>
                  </div>
                  <div className="col-70">
                    <div className="info">
                      <h2 className="page-secondary-title">
                        <Link href={`/blog/${blog.slug}`}>
                          <a>{blog.frontmatter.title}</a>
                        </Link>
                      </h2>
                      <div className="pre-text">
                        <span>{blog.frontmatter.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
