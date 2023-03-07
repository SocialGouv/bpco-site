import Head from "next/head";
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

// const inter = Inter({ subsets: ['latin'] })

import jumboPic from "../../public/jumbo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil - BPCO</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container" style={{ backgroundColor: "xpink" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
            }}
          >
            <div style={{ flex: 2, backgroundColor: "azurex" }}>
              <h1>BPCO&apos;MIEUX</h1>
              <h2>
                L&apos;application mobile pour les patients BPCO qui veulent
                suivre leurs signes cliniques respiratoires
              </h2>
              <ul>
                <li>
                  <div>
                    100% gratuit, 100% anonyme et sans création de compte
                  </div>
                  <p>
                    Si vous souhaitez supprimer toutes vos données d&apos;un
                    coup, il vous suffit de désinstaller l&apos;application
                  </p>
                </li>
                <li>
                  <div>Sécurité des données</div>
                  <p>Je reste propriétaire des données saisies</p>
                </li>
                <li>
                  <div>Simple, rapide et intuitive</div>
                  <p>
                    En quelques secondes par jour, je remplis mon questionnaire
                    de suivi
                  </p>
                </li>
              </ul>
            </div>
            <div
              style={{
                flex: 1,
                minHeight: "100px",
                position: "relative",
                backgroundColor: "tomato",
              }}
            >
              <Image
                fill
                priority
                src={jumboPic}
                style={{ objectFit: "cover" }}
                alt="Illustration de la page d'accueil"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="fr-container" style={{ backgroundColor: "xlime" }}>
          <h2>La BPCO : un problème de santé publique</h2>
          <ul style={{ display: "flex", gap: "2rem" }}>
            <li style={{ flex: 1 }}>
              <CallOut title="3,5 millions">
                De patients atteints de BPCO en France
              </CallOut>
            </li>
            <li style={{ flex: 1 }}>
              <CallOut title="3eme">Cause de mortalité dans le monde</CallOut>
            </li>
            <li style={{ flex: 1 }}>
              <CallOut title="700 millions">
                Le coût annuel des dépenses de santé en hospitalisations
              </CallOut>
            </li>
          </ul>
        </section>

        <section
          className="fr-container"
          style={{ backgroundColor: "xskyblue" }}
        >
          <h3>BPCO&apos;Mieux, pourquoi l&apos;utiliser ?</h3>
          <div
            style={{
              gap: "0.8rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              Les exacerbations (aggravations aigues) de BPCO sont responsables
              de +150 000 hospitalisations par an en France. A chaque
              exacerbation, la fonction respiratoire se dégrade et ce,
              d&apos;autant plus vite que la maladie est déjà en stade avancée.
            </p>
            <p>
              Une partie de ces hospitalisations pourraient être évitées si une
              prise en charge plus précoce était initiée car les signes de
              dégradation respiratoire sont souvent ignorés ou négligés.
            </p>
            <p>
              Suivre quotidiennement ses signes cliniques respiratoires permet
              de limiter la dégradation de sa qualité de vie en devenant acteur
              de sa maladie.
            </p>
          </div>
        </section>

        <section
          className="fr-container"
          style={{ backgroundColor: "xsalmon" }}
        >
          <h3>BPCO&apos;Mieux, comment ça marche ?</h3>
          <div
            style={{
              gap: "0.8rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              Avec BPCO&apos;Mieux, l&apos;objectif est de limiter les
              exacerbations ainsi que les hospitalisations, en vous permettant
              de suivre quotidiennement vos signes cliniques respiratoires de
              manière très rapide par auto-questionnaire.
            </p>
            <p>
              L&apos;application vous sensibilise davantage sur les signes
              d&apos;aggravations et, selon vos réponses, elle vous préconise
              une orientation afin de vous accompagner dans votre décision.
            </p>
          </div>
        </section>
      </>
    </>
  );
}
