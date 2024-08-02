import fs from 'fs';
import path from 'path';

const luaFilePath = path.join(__dirname, '/.next/server/pages/kangaroohub.lua');
const fileContents = fs.readFileSync(luaFilePath, 'utf8');

export default function Kangaroohub() {}

export const getServerSideProps = async () => {
  return {
    props: {},
    headers: {
      'Content-Type': 'text/plain',
    },
    body: fileContents,
  };
};
