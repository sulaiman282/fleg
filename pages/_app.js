import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "animate.css/animate.min.css";

function MyApp({ Component, pageProps, router }) {
  console.log = function () {};
  console.warn = function () {};
  console.error = function () {};

  const [loading, setLoading] = useState(true);

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0149AB",
      },
    },
    typography: {
      fontFamily: "Darumadrop One, sans-serif",
    },
  });
  
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        {!loading && (
          <>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              closeOnClick
              pauseOnHover
              draggable={true}
              position="top-right"
              toastClassName=""
              bodyClassName=""
              progressClassName=""
              pauseOnFocusLoss={true}
              newestOnTop={true}
              theme="colored"
            />
          </>
        )}
      </StyledEngineProvider>
    </>
  );
}
export default MyApp;
