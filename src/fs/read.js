import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files_to_read = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        console.log(await fs.readFile(files_to_read,'utf8'));
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await read();
