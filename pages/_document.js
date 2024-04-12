import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />

        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <script src="/fontawesome/js/all.min.js" defer></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="Project Fada" />
        <meta
          name="description"
          content="This is our Project Fada official site."
        />
        <meta name="keywords" content="Fada, Fadaform,Project fada" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
