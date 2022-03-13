import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../components/Navbar.css";
import { SessionProvider } from "next-auth/react";

// useSession kullanımı yapabilmek için SessionProvider eklemesi yaptık
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
