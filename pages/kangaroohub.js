import fs from 'fs';
import path from 'path';

const pagesDir = require.context('../pages', true, /\.lua$/);
const filePath = pagesDir.keys().find(key => key.endsWith('kangaroohub.lua'));

if (!filePath) {
  throw new Error(`File not found: kangaroohub.lua`);
}

const fileContents = fs.readFileSync(path.join(pagesDir.resolve(filePath), filePath), 'utf8');
return {
  props: {},
  headers: {
    'Content-Type': 'text/plain',
  },
  body: fileContents,
};
