import fs from 'node:fs/promises';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FOLDER_PATH = path.join(__dirname, 'files');
const FILE_PATH = path.join(FOLDER_PATH, 'fresh.txt');

const create = async () => {
    try {
        await fs.writeFile(FILE_PATH, 'I am fresh and young', { flag: 'w' });
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await create();
