import Head from 'next/head';

export default async function Kangaroohub() {
  const response = await fetch('https://333leaks.netlify.app/kangaroohub.lua');
  const fileContents = await response.text();

  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/plain; charset=UTF-8" />
      </Head>
      <pre>{fileContents}</pre>
    </div>
  );
}
