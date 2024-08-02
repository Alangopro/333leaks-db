import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), './kangaroohub.lua');

export default function Kangaroohub() {}

export const getServerSideProps = async () => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return {
    props: {},
    headers: {
      'Content-Type': 'text/plain',
    },
    body: fileContents,
  };
};
