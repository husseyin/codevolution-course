import "../styles/globals.css";

//sass için npm install sass
//bootstrap tüm sayfalara eklendi, npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//styled-components için, npm install styled-components
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#355CD7",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
