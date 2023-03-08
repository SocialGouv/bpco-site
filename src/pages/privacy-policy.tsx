import Head from "next/head";

export default function LegalNotices() {
  return (
    <>
      <Head>
        <title>BPCO - Politique de confidentialité</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container">
          <h1 style={{ marginBottom: "4rem" }}>Politique de confidentialité</h1>

          <h2>Données et responsabilités</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p>
              BPCO&apos;Mieux est développé au sein de la Fabrique numérique des
              ministères sociaux, avec l&apos;appui de l&apos;Agence régionale
              de santé Île-de-France. BPCO&apos;Mieux permet aux patients
              atteints de Bronchopneumopathie Chronique Obstructive en stade
              avancé de prévenir les exacerbations et d&apos;éviter les
              hospitalisations en apprenant à observer l&apos;évolution de leurs
              symptômes cliniques quotidiennement.
            </p>

            <div>
              <p>
                BPCO&apos;Mieux manipule les données personnelles suivantes :
              </p>
              <ul style={{ listStyle: "inside" }}>
                <li>Sexe</li>
                <li>Date de naissance</li>
              </ul>
            </div>

            <p>
              Toutefois, aucune donnée n&apos;est remontée au Ministère de la
              santé et de la prévention, à l&apos;ARS ou à l&apos;équipe
              BPCO&apos;Mieux. Toutes les données sont maintenues dans
              l&apos;appareil en local de l&apos;utilisateur. Par ailleurs, nous
              ne sommes pas en mesure d&apos;identifier les personnes
              concernées.
            </p>
          </div>
        </section>

        <section className="fr-container">
          <h2>Cookies</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p>
              En application de l&apos;article 5(3) de la directive 2002/58/CE
              modifiée concernant le traitement des données à caractère
              personnel et la protection de la vie privée dans le secteur des
              communications électroniques, transposée à l&apos;article 82 de la
              loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux
              fichiers et aux libertés, les traceurs ou cookies suivent deux
              régimes distincts.
            </p>

            <p>
              Les cookies strictement nécessaires au service ou ayant pour
              finalité exclusive de faciliter la communication par voie
              électronique sont dispensés de consentement préalable au titre de
              l&apos;article 82 de la loi n°78-17 du 6 janvier 1978.
            </p>

            <p>
              Les cookies n&apos;étant pas strictement nécessaires au service ou
              n&apos;ayant pas pour finalité exclusive de faciliter la
              communication par voie électronique doivent être consenti par
              l&apos;utilisateur.
            </p>

            <p>
              Ce consentement de la personne concernée pour une ou plusieurs
              finalités spécifiques constitue une base légale au sens du RGPD et
              doit être entendu au sens de l&apos;article 6-a du Règlement (UE)
              2016/679 du Parlement européen et du Conseil du 27 avril 2016
              relatif à la protection des personnes physiques à l&apos;égard du
              traitement des données à caractère personnel et à la libre
              circulation de ces données.
            </p>

            <p>
              Un cookie est un fichier déposé sur votre terminal lors de la
              visite d&apos;un site. Il a pour but de collecter des informations
              relatives à votre navigation et de vous adresser des services
              adaptés à votre terminal (ordinateur, mobile ou tablette).
            </p>

            <p>
              Les cookies recensés ne sont que des cookies strictement
              nécessaires au service dispensés de consentement préalable.
            </p>

            <p style={{ fontWeight: 600 }}>
              Nous utilisons Matomo pour la mesure d&apos;audience, configuré
              dans le respect des recommandations de la CNIL.
            </p>
          </div>
        </section>
      </>
    </>
  );
}
