import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files_coped = path.join(__dirname, 'files');

const list = async () => {
    try {
        console.log(await fs.readdir(files_coped));
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await list();
