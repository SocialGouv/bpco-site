import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>BPCO - Mentions Légales</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container">
          <h1 style={{ marginBottom: "4rem" }}>Mentions légales</h1>

          <h2>Éditeur du site</h2>
          <p>Le site « BPCO&apos;Mieux » est éditée par :</p>
          <br />
          <address>
            L&apos;Agence régionale de santé Île-de-France :<br />
            Immeuble « Le Curve » 13
            <br />
            rue du Landy 93200 Saint-Denis
            <br />
            France
            <br />
            Téléphone : <a href="tel:+33144020000">01 44 02 00 00</a>
          </address>
        </section>

        <section className="fr-container">
          <h2>Directrice de la publication</h2>
          <p>
            La directrice de publication est Madame Amélie Verdier, directrice
            générale de l&apos;Agence régionale de santé (ARS) Île-de-France.
          </p>
        </section>

        <section className="fr-container">
          <h2>Hébergement du site</h2>
          <p>Ce site est hébergé par :</p>
          <br />
          <address>
            OVH SAS<br />
            2 rue Kellermann - 59100 Roubaix<br />
            France.
          </address>
        </section>

        <section className="fr-container">
          <h2>Accessibilité</h2>
          <p>
            La conformité aux normes d&apos;accessibilité numérique est un
            objectif ultérieur mais nous tâchons de rendre ce site accessible à
            toutes et à tous.
          </p>
        </section>

        <section className="fr-container">
          <h2>Signaler un dysfonctionnement</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p>
              Si vous rencontrez un défaut d&apos;accessibilité vous empêchant
              d&apos;accéder à un contenu ou une fonctionnalité du site, merci
              de nous en faire part.
            </p>
            <p>
              Si vous n&apos;obtenez pas de réponse rapide de notre part, vous
              êtes en droit de faire parvenir vos doléances ou une demande de
              saisine au Défenseur des droits.
            </p>
            <div>
              <p>Pour le joindre, vous pouvez :</p>
              <ul style={{ listStyle: "inside" }}>
                <li>
                  Utiliser le formulaire de contact en ligne ici :
                  https://formulaire.defenseurdesdroits.fr/code/afficher.php?ETAPE=accueil_2016
                </li>
                <li>
                  Composer le 09 69 39 00 00 (du lundi au vendredi de 8h à 20h)
                </li>
                <li>
                  Envoyer un courrier (sans timbre) à l&apos;adresse suivante :
                  Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX
                  07.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fr-container">
          <h2>Sécurité</h2>
          <p>
            Le site est protégé par un certificat électronique, matérialisé pour
            la grande majorité des navigateurs par un cadenas. Cette protection
            participe à la confidentialité des échanges. En aucun cas les
            services associés à la plateforme ne seront à l&apos;origine
            d&apos;envoi de courriels pour demander la saisie
            d&apos;informations personnelles.
          </p>
        </section>
      </>
    </>
  );
}
