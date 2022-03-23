import Link from 'next/link';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index}>
              <div className="grid list-item">
                <div className="row">
                  <div className="col-30">
                    <Link href={`/post/${post.slug}`}>
                      <a>
                        <img src={`/img/blogs/${post.frontmatter.url}/1-small.png`} />
                      </a>
                    </Link>
                  </div>
                  <div className="col-70">
                    <div className="info">
                      <h2 className="page-secondary-title">
                        <Link href={`/post/${post.slug}`}>
                          <a>{post.frontmatter.title}</a>
                        </Link>
                      </h2>
                      <div className="pre-text">
                        <span>{post.frontmatter.date}</span>
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
