"use client";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Swami Home Stay</title>
        <meta
          name="description"
          content="Swami Home Stay Panhala | Hotel in Panhala | Resort in Panhala | Best Hotel in Panhala"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
