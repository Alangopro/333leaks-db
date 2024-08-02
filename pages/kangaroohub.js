import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'kangaroohub.txt');

export default function Kangaroohub() {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return (
    <div>
      <pre>
        {fileContents}
      </pre>
    </div>
  );
}

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
