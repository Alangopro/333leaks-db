import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { nick } = req.query;

  const filePath = path.join(process.cwd(), 'public', 'wyciek.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const foundLine = data.split('\n').find(line => line.includes(nick));

    if (foundLine) {
      res.status(200).json({ data: foundLine });
    } else {
      res.status(404).json({ error: 'Nick not found' });
    }
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
