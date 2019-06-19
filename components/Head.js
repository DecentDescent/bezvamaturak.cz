import "../styles/styles.scss";
import Head from "next/head";

export default ({ title, description, ogImage }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>
      {title || "Bezva Maturák - Bez starostí a podle Vašich představ!"}
    </title>
    <meta
      name="description"
      content={
        description ||
        "Chcete, aby byl váš ples nezapomenutelný a originální? Nechte veškeré starosti na nás a my připravíme maturák na míru šitý vaší třídě, požadavkům i finančnímu rozpočtu!"
      }
    />
    <meta
      property="og:title"
      content={title || "Bezva Maturák - Bez starostí a podle Vašich představ!"}
    />
    <meta
      property="og:description"
      content={
        description ||
        "Chcete, aby byl váš ples nezapomenutelný a originální? Nechte veškeré starosti na nás a my připravíme maturák na míru šitý vaší třídě, požadavkům i finančnímu rozpočtu!"
      }
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="###" />
    <meta name="twitter:creator" content="###" />
    <meta name="og:url" content="https://www.bezvamaturak.cz" />
    <meta
      name="og:image"
      content={ogImage || "/static/img/og/og-main.jpg?v=1"}
    />
  </Head>
);
