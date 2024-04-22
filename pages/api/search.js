// pages/api/search.js

export default async function handler(req, res) {
  const { nick } = req.query;

  try {
    const response = await fetch('https://333leaks.netlify.app/wyciek.txt');
    const data = await response.text();

    const foundLine = data.split('\n').find(line => line.includes(nick));

    if (foundLine) {
      res.status(200).json({ data: foundLine });
    } else {
      res.status(404).json({ error: 'Nick not found' });
    }
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
