import Head from "next/head";

export default function FinDeService() {
  return (
    <>
      <Head>
        <title>BPCO - Fin de service</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container">
          <h1 style={{ marginBottom: "4rem" }}>
            Fin de service de BPCO&apos;Mieux
          </h1>

          <h2>
            L&apos;application ne sera plus maintenue et plus accessible sur les
            stores à partir du 15 avril 2024
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p>
              BPCO&apos;Mieux est l&apos;une des 3 start up d&apos;Etat
              sélectionnée lors du dernier Appel à innovateur de l&apos;ARS Île
              de France 2022 et incubée à La Fabrique numérique des Ministères
              sociaux en février 2023. C&apos;est un dispositif expérimental en
              île de France dont la première version de l&apos;application a été
              lancée sur les stores IOS/Androïd depuis mi-mars 2023.
            </p>
            <p>
              BPCO&apos;Mieux est le compagnon numérique dédié aux patients
              atteints de BPCO après une 1ère exacerbation qui permet de
              prévenir leurs aggravations respiratoires et de limiter leur
              dégradation de la qualité de vie, en évaluant leur état de santé
              en moins de 30 secondes au travers un auto-questionnaire afin
              d&apos;être alerté sur le besoin ou non de consulter un
              professionnel en cas de décompensation détectée.
            </p>
            <p>
              Cette application numérique a été expérimentée principalement dans
              le département de la Seine et Marne et ce, grâce à la
              collaboration et au soutien fort des différents acteurs de santé
              de ce territoire. Une diffusion plus large a été également
              réalisée auprès des CPTS, des prestataires de santé et en direct
              auprès des patients via les associations.
            </p>

            <div>
              <p>
                Au travers cette expérience humaine et riche
                d&apos;apprentissages, nous retenons 3 données essentielles :
              </p>
              <ul style={{ listStyle: "inside" }}>
                <li>
                  une utilisation malgré tout dépendante de la saisonnalité
                </li>
                <li>
                  un sentiment de légitimité pour le patient de contacter un
                  professionnel de santé soit 2 patients sur 5
                </li>
                <li>
                  les problématiques de démographie médico soignantes
                  interrogent sur la temporalité de déploiement
                </li>
              </ul>
            </div>

            <p>
              A l&apos;issue de la période d&apos;incubation et
              d&apos;expérimentation du produit en 2023, BPCO&apos;Mieux va
              sortir du dispositif Start up d&apos;Etat et ce, dès le 15 avril.
              Le service ne sera plus maintenu et ne sera plus téléchargeable
              dans les stores IOS et Android.
            </p>

            <div>
              <p>
                Dans ce cadre et afin de donner la pleine autonomisation à un
                futur repreneur, la Fabrique Numérique des Ministères sociaux
                met à disposition les liens suivants :
              </p>
              <ul style={{ listStyle: "inside" }}>
                <li>
                  <a href="https://github.com/SocialGouv/bpco" target="_blank">
                    le code de l&apos;application mobile
                  </a>
                </li>
                <li>le figma</li>
              </ul>
            </div>
            <p>
              Pour obtenir le dossier d&apos;Architecture ainsi que le Readme
              partie produit, merci d&apos;écrire directement à l&apos;adresse
              mail suivante :{" "}
              <a href="mailto:contact@fabrique.social.gouv.fr">
                contact@fabrique.social.gouv.fr
              </a>
            </p>
          </div>
        </section>
      </>
    </>
  );
}
