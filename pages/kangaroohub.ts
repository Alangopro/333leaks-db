import { NextApiRequest, NextApiResponse } from 'next';

export default async function Kangaroohub(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://333leaks.netlify.app/kangaroohub.lua';
  try {
    const response = await fetch(url);
    const fileContents = await response.text();
    return res.status(200).setHeader('Content-Type', 'text/plain').send(fileContents);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error fetching file contents');
  }
}
