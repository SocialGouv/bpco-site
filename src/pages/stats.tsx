import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>BPCO - Statistiques</title>
        <meta
          name="description"
          content="L'application mobile pour les patients BPCO qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <iframe
          src="https://matomo-metabase-bpco.fabrique.social.gouv.fr/public/dashboard/0b5d719a-47a4-4b5e-bbaa-436be1fa3f23"
          width="100%"
          height="600"
          style={{
            display: "block",
            margin: "0 auto",
            padding: "2rem 0",
            width: "80vw",
          }}
          allowTransparency
        />
      </>
    </>
  );
}
