import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of posts</h1>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            {/* passHref, zorunlu olarak id göndermesi yapmaya zorlar */}
            <Link href={`/posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    // data.slice(0,3) sadece ilk üç veriyi alır
    props: { posts: data },
  };
};
