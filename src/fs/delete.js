import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DELETED_FILE_PATH = path.join(__dirname, 'files','fileToRemove.txt');

const remove = async () => {
    try {
        await fs.rm(DELETED_FILE_PATH);
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await remove();

await remove();
