// next-auth kurulumu için npm install next-auth
// ancak kurulum yapmadan önce
// package.json üzerinden "name": "next-auth", "name": "next-authentication"
// olarak değiştirilmelidir

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// signIn ve signOut ile butonlar üzerinden işlem sağlıyor
// useSession ise giriş yapılıp yapılmadığının kontrolünü sağlıyoruz

const Navbar = () => {
  // useSession kullanabilmek için _app.js içerisinde import etmeliyiz
  const { data: session, status: status } = useSession();
  // console.log({ session, status });

  return (
    <>
      <nav className="header">
        <h1 className="logo">
          <a href="#">NextAuth</a>
        </h1>

        {/* signin ve signout durumuna göre classname verdik */}
        <ul
          className={`main-nav ${
            !session && status == "loading" ? "loading" : "loaded"
          }`}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          {/* session yoksa */}
          {!session && (
            <li>
              <Link href="/api/auth/signin">
                {/* signIn() olduğunda github button gelirken 
              signIn("github") olursa direk giriş yapmakta */}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  SignIn
                </a>
              </Link>
            </li>
          )}

          {/* session varsa */}
          {session && (
            <li>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  SignOut
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
