import { getSession, useSession } from "next-auth/react";

// serverSide üzerinden {data, session} olarakda session değerini alabiliriz
const Blog = ({ data }) => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <>
      <h1>Blog Page - {data}</h1>
    </>
  );
};

export default Blog;

// serverSide içerisinde authentication kullanımı
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // session değeri yok ise yani kullanıcı giriş yapmamış ise
  // redirect ile kullanıcıyı giriş yaptırıp blog sayfasına yönlendiriyoruz
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 perzonalized blogs" : "List of free blogs",
    },
  };
};
