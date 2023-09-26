import Link from "next/link";
import type { AppProps } from "next/app";
import { fr } from "@codegouvfr/react-dsfr";
import { init } from "@socialgouv/matomo-next";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import {
  Display,
  headerFooterDisplayItem,
} from "@codegouvfr/react-dsfr/Display";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next-pagesdir";

import "@/styles/globals.css";
import { useEffect } from "react";

declare module "@codegouvfr/react-dsfr/next-pagesdir" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
  defaultColorScheme: "system",
  Link,
  preloadFonts: [
    //"Marianne-Light",
    //"Marianne-Light_Italic",
    "Marianne-Regular",
    //"Marianne-Regular_Italic",
    "Marianne-Medium",
    //"Marianne-Medium_Italic",
    "Marianne-Bold",
    //"Marianne-Bold_Italic",
    //"Spectral-Regular",
    //"Spectral-ExtraBold"
  ],
});

export { dsfrDocumentApi };

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "";

function App({ Component, pageProps }: AppProps) {
  const brandTop = (
    <>
      MINISTÈRES
      <br />
      SOCIAUX
    </>
  );

  const homeLinkProps = { href: "/", title: "Accueil - BPCO" };

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        brandTop={brandTop}
        serviceTitle="BPCO'Mieux"
        operatorLogo={{
          alt: "logo BPCO",
          orientation: "horizontal",
          imgUrl: "logo-bpco-small.png",
        }}
        homeLinkProps={homeLinkProps}
        serviceTagline="La solution numérique de suivi quotidien des signes cliniques respiratoires des patients BPCO"
      />
      <main
        style={{
          flex: 1,
          gap: "4rem",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          ...fr.spacing("padding", { topBottom: "16v", rightLeft: "10v" }),
        }}
      >
        <Component {...pageProps} />
      </main>
      <Footer
        brandTop={brandTop}
        operatorLogo={{
          alt: "logo BPCO",
          imgUrl: "logo-bpco.png",
          orientation: "horizontal",
        }}
        homeLinkProps={homeLinkProps}
        accessibility="non compliant"
        bottomItems={[headerFooterDisplayItem]}
        contentDescription={`
          BPCO'Mieux est un dispositif expérimental créé par le Dr Jean-Baptiste PERETOUT,
          médecin réanimateur à l'hôpital Forcilles - Fondation Cognacq-Jay, financé par l'ARS Ile-de-France,
          en collaboration avec la Fabrique du numérique des ministères sociaux.
        `}
        termsLinkProps={{ href: "/terms" }}
        websiteMapLinkProps={{ href: "#" }}
        personalDataLinkProps={{ href: "/privacy-policy" }}
        partnersLogos={{
          main: {
            imgUrl: "/logo-ars.png",
            alt: "Logo de l'ARS Île de France",
            href: "https://www.iledefrance.ars.sante.fr/",
          },
          sub: [
            {
              imgUrl: "/logo-hf.png",
              alt: "Logo de l'hopital forcilles",
              href: "https://hopital-forcilles.cognacq-jay.fr/",
            },
          ],
        }}
      />
      <Display />
    </div>
  );
}

export default withDsfr(App);
