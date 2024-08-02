import fs from 'fs';
import path from 'path';

const filePath = './kangaroohub.txt'; // assuming the file is in the same directory as the script

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
