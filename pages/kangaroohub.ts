import fetch from 'node-fetch';

export default async function Kangaroohub() {
  const response = await fetch('https://333leaks.netlify.app/kangaroohub.lua');
  const fileContents = await response.text();

  return {
    props: {},
    headers: {
      'Content-Type': 'text/plain',
    },
    body: fileContents,
  };
}
