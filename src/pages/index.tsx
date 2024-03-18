import Head from "next/head";
import Image from "next/image";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

import jumboPic from "../../public/jumbo.png";
import appStorePic from "../../public/app-store.png";
import googlePlayPic from "../../public/google-play.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>BPCO - Accueil</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <CallOut
          buttonProps={{
            children: "En savoir plus",
            onClick: () => {
              window.location.href = "/fin-de-service";
            },
          }}
          title="Fin de service"
          colorVariant="orange-terre-battue"
        >
          L&apos;application BPCO&apos;Mieux ne sera plus maintenue et plus
          accessible sur les stores à partir du 15 avril 2024.
        </CallOut>
        <section className="fr-container" style={{ position: "relative" }}>
          <h1>BPCO&apos;MIEUX</h1>
          <p className="text-lead">
            L&apos;application mobile pour les patients BPCO (BronchoPathie
            Chronique Obstructive) <br /> qui veulent suivre leurs signes
            cliniques respiratoires
          </p>
          <div className="hero">
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
          <Link href="/download" id="download-ios">
            <Image
              priority
              width={250}
              src={appStorePic}
              alt="Image du lien vers l'App Store"
            />
          </Link>
          <Link href="/download" id="download-android">
            <Image
              priority
              width={250}
              src={googlePlayPic}
              alt="Image du lien vers le Google Play Store"
            />
          </Link>
        </section>

        <section className="fr-container">
          <h2>La BPCO : un problème de santé publique</h2>
          <ul className="tiles">
            <li>
              <CallOut title="3,5 millions">
                de patients atteints de BPCO (soit 8% de la population
                française)
              </CallOut>
            </li>
            <li>
              <CallOut title="3ème">
                cause de mortalité dans le monde (env. 18 000 morts/an en
                France)
              </CallOut>
            </li>
            <li>
              <CallOut title="700 millions">
                Le coût annuel des dépenses de santé en hospitalisations
              </CallOut>
            </li>
          </ul>
        </section>

        <section className="fr-container">
          <h2>BPCO&apos;Mieux, pourquoi l&apos;utiliser ?</h2>
          <div
            style={{
              gap: "0.8rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              Les exacerbations (aggravations aigües) de BPCO sont responsables
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

        <section className="fr-container">
          <h2>BPCO&apos;Mieux, comment ça marche ?</h2>
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
        <section className="fr-container">
          <Card
            horizontal
            size="small"
            enlargeLink={false}
            title="Nous contacter"
            linkProps={{ href: "#nous-contacter", id: "nous-contacter" }}
            desc="Envoyez-nous un mail à bpcomieux@fabrique.social.gouv.fr"
            footer={
              <a
                href="mailto:bpcomieux@fabrique.social.gouv.fr"
                className="fr-btn fr-btn--primary"
              >
                Envoyer un mail
              </a>
            }
          />
        </section>
        <section className="fr-container">
          <Card
            horizontal
            size="small"
            enlargeLink={false}
            title="Statistiques"
            linkProps={{ href: "#statistiques", id: "statistiques" }}
            footer={
              <Link href="/stats" className="fr-btn fr-btn--primary">
                Consulter les statistiques
              </Link>
            }
          />
        </section>
      </>
    </>
  );
}
