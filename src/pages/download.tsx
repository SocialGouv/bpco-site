import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import jumboPic from "../../public/jumbo.png";
import appStorePic from "../../public/app-store.png";
import googlePlayPic from "../../public/google-play.png";

export default function Home() {
  const STORE_LINKS: { [key: string]: string } = {
    android: "market://details?id=com.bpcosuiviquotidien",
    iphone: "itms-apps://itunes.apple.com/app/id1670657282",
    ipad: "itms-apps://itunes.apple.com/app/id1670657282",
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    for (var key in STORE_LINKS) {
      if (userAgent.search(key) != -1) {
        window.location.href = STORE_LINKS[key];
        return;
      }
    }
  }, [STORE_LINKS]);
  return (
    <>
      <Head>
        <title>BPCO - Téléchargement</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container" style={{ position: "relative" }}>
          <h1>Téléchargez BPCO&apos;MIEUX</h1>
          <p className="text-lead">
            L&apos;application mobile pour les patients BPCO (BronchoPathie
            Chronique Obstructive) <br /> qui veulent suivre leurs signes
            cliniques respiratoires
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
            }}
          >
            <ul className="jumbo-list">
              <li>
                <div>100% gratuit, 100% anonyme et sans création de compte</div>
                <p>
                  Si vous souhaitez supprimer toutes vos données d&apos;un coup,
                  il vous suffit de désinstaller l&apos;application
                </p>
              </li>
              <li>
                <div>Sécurité des données</div>
                <p>Je reste propriétaire des données saisies</p>
              </li>
              <li>
                <div>Simple, rapide et intuitive</div>
                <p>
                  En quelques secondes par jour, je remplis mon questionnaire de
                  suivi
                </p>
              </li>
            </ul>
            <div className="jumbo-image">
              <Image
                fill
                priority
                src={jumboPic}
                style={{ objectFit: "contain" }}
                alt="Illustration de la page d'accueil"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="fr-container store-links">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/bpcomieux/id1670657282"
            id="download"
          >
            <Image
              priority
              width={250}
              src={appStorePic}
              alt="Image du lien vers l'App Store"
            />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.bpcosuiviquotidien"
          >
            <Image
              priority
              width={250}
              src={googlePlayPic}
              alt="Image du lien vers le Google Play Store"
            />
          </a>
        </section>
      </>
    </>
  );
}
